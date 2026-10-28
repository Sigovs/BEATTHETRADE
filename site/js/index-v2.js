/* Beat The Trade · index_v2
   1 form (same rules as index.html) · 2 next auction · 3 mobile bar · 4 the phone · 5 motion.
   Nothing is hidden by default: the finished state is the HTML. Motion only runs with GSAP and
   prefers-reduced-motion: no-preference. */
(function(){
  'use strict';
  var $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
  var fmt=function(n){return '$'+Math.round(n).toLocaleString('en-US')};

  /* ---------- 1 · the plate form ---------- */
  $$('[data-form]').forEach(function(f){
    var input=$('input[name=id]',f), state=$('select',f), msg=$('.pform__msg',f), plate=$('[data-plate]',f),
        lab=$('label[for="'+input.id+'"]',f), mode='plate';
    function clear(){msg.textContent='';msg.className='pform__msg';input.removeAttribute('aria-invalid');plate.classList.remove('is-err')}
    $$('[data-mode]',f).forEach(function(b){b.addEventListener('click',function(){
      mode=b.getAttribute('data-mode');
      $$('[data-mode]',f).forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});
      input.maxLength=mode==='vin'?17:8; input.placeholder=mode==='vin'?'17-character VIN':'License plate';
      lab.textContent=mode==='vin'?'VIN':'License plate'; plate.classList.toggle('is-vin',mode==='vin'); clear(); input.focus();
    })});
    input.addEventListener('input',clear);
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var v=input.value.replace(/\s+/g,'').toUpperCase();
      function err(t){msg.textContent=t;msg.className='pform__msg err';input.setAttribute('aria-invalid','true');plate.classList.add('is-err');input.focus()}
      if(!v) return err(mode==='vin'?'Enter your VIN to start.':'Enter your plate to start.');
      if(mode==='vin'&&!/^[A-HJ-NPR-Z0-9]{17}$/.test(v)) return err('A VIN has 17 letters and numbers (no I, O or Q). Check it and try again.');
      if(mode==='plate'&&!/^[A-Z0-9]{2,8}$/.test(v)) return err('Plates have 2–8 letters and numbers.');
      if(state.value==='other') return err('Right now we accept cars registered in MA and NH.');
      msg.className='pform__msg ok';
      msg.innerHTML='Prototype: on the live site this opens the listing form with '+(mode==='vin'?'VIN ':'plate ')+v+'. <a href="https://www.beatthetrade.com/listings/new" target="_blank" rel="noopener">Open the real form</a>';
    });
  });
  var reduce=matchMedia('(prefers-reduced-motion: reduce)');
  $$('[data-jump]').forEach(function(a){a.addEventListener('click',function(e){
    var t=document.getElementById('v2-id'); if(!t) return; e.preventDefault();
    t.scrollIntoView({behavior:reduce.matches?'auto':'smooth',block:'center'});
    setTimeout(function(){t.focus({preventScroll:true})},reduce.matches?0:500);
  })});

  /* ---------- 2 · next auction from the real schedule: weekdays 1:00–5:00 PM ET ---------- */
  var nx=$('[data-next]');
  if(nx){ try{
    var pt={}; new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date()).forEach(function(x){pt[x.type]=x.value});
    var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'], wd=days.indexOf(pt.weekday), mins=(parseInt(pt.hour,10)%24)*60+parseInt(pt.minute,10), wk=wd>=1&&wd<=5;
    if(wk&&mins>=780&&mins<1020){ nx.textContent='live now, until 5:00 PM ET' }
    else { var add=0,w=wd; if(!(wk&&mins<780)){ do{add++;w=(w+1)%7}while(w===0||w===6) }
      nx.textContent=(add===0?'today':add===1?'tomorrow':['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][w])+', 1:00 PM ET' }
  }catch(e){} }

  /* ---------- 3 · mobile bar: only while neither the plate nor the closing call to action is on screen ---------- */
  var mbar=$('[data-mbar]'), heroForm=$('.hero .pform'), closeSec=$('.close');
  if(mbar&&heroForm&&'IntersectionObserver' in window){
    var seen={h:true,c:false};
    var mio=new IntersectionObserver(function(es){es.forEach(function(e){seen[e.target===heroForm?'h':'c']=e.isIntersecting}); mbar.classList.toggle('on',!seen.h&&!seen.c); mbar.hidden=false},{threshold:0});
    mio.observe(heroForm); if(closeSec) mio.observe(closeSec);
  }

  /* ---------- 3b · header: stuck on scroll; on phones it hides going down and returns going up ---------- */
  var bar=$('.bar');
  if(bar){
    var lastY=window.scrollY, ticking=false, narrow=matchMedia('(max-width:760px)');
    var onScroll=function(){ var y=window.scrollY; bar.classList.toggle('is-stuck',y>8);
      if(narrow.matches&&y>160&&y>lastY+4) bar.classList.add('is-hidden'); else if(!narrow.matches||y<lastY-4||y<=160) bar.classList.remove('is-hidden');
      lastY=y; ticking=false };
    window.addEventListener('scroll',function(){ if(!ticking){ ticking=true; requestAnimationFrame(onScroll) } },{passive:true});
    bar.addEventListener('focusin',function(){ bar.classList.remove('is-hidden') });
    onScroll();
  }

  /* ---------- 4 · the phone: the example auction in four chapters, in step with the text ----------
     0 list the car and set the minimum · 1 the auction opens, two bids · 2 $22,600 meets the reserve · 3 $23,800 wins.
     Wide screens: each text chapter plays its step as it arrives (Ph.go). Phones: the steps play in a loop while on screen.
     Every step can also be drawn finished, for a jump, a scroll back, or reduced motion. */
  var Ph=null;
  (function(){
    var ph=$('[data-tilt]'); if(!ph) return;
    var q=function(s){return $(s,ph)};
    var scr=$$('.p-scr',ph), tEl=q('[data-time]'), typeEl=q('[data-type]'), look=q('.p-look'), found=q('.p-found'), trk=q('.p-trk'), minEl=q('[data-min]'),
        clock=q('[data-clock]'), list=q('[data-bids]'), wait=q('[data-wait]'), met=q('[data-met]'), top=q('[data-top]'), win=q('[data-win]'), gain=q('[data-gain]'), beam=q('[data-beam]'),
        wdg=$('[data-wdg]'), wt=$('[data-wt]'), ws=$('[data-ws]'), wg=$('[data-wg]'), wl=$('[data-wl]'), wbars=$$('.p-w-bars i');
    var BIDS=[ /* the site's example; times derived from its "2 hours ago … 2 min ago" labels */
      {who:'Dealer · Danvers, MA',v:21550,t:'2:54 PM'},{who:'Dealer · Lowell, MA',v:22400,t:'3:54 PM'},
      {who:'Dealer · Nashua, NH',v:22600,t:'4:28 PM'},{who:'Dealer · Boston, MA',v:23800,t:'4:52 PM'}];
    var TRADE=20700, MIN=22500;
    var timers=[], cur=-1;
    function later(ms,fn){timers.push(setTimeout(fn,ms))}
    function clear(){timers.forEach(clearTimeout);timers=[]}

    /* board digits: each digit is a reel 0–9; changing the value rolls only the reels that differ */
    function setRoll(el,str,instant){
      if(!el._built||el._len!==str.length){
        el.innerHTML=''; str.split('').forEach(function(ch){ var r=document.createElement('span'); r.className='p-r';
          if(/\d/.test(ch)){ var col=document.createElement('i'); for(var d=0;d<10;d++){var sp=document.createElement('span');sp.textContent=d;col.appendChild(sp)} r.appendChild(col) } else r.textContent=ch;
          el.appendChild(r) });
        el._built=true; el._len=str.length; void el.offsetWidth;
      }
      str.split('').forEach(function(ch,i){ var col=el.children[i].firstElementChild;
        if(col&&col.tagName==='I'){ if(instant) col.style.transition='none'; col.style.transform='translateY('+(-(+ch)*10)+'%)'; if(instant){ void col.offsetWidth; col.style.transition='' } }
        else if(!/\d/.test(ch)) el.children[i].textContent=ch });
      if(!instant){ el.classList.remove('p-flash'); void el.offsetWidth; el.classList.add('p-flash') }
    }
    function resetRoll(el,txt){ el._built=false; el.textContent=txt }
    function tick(el,txt,instant){ if(el.textContent===txt) return; el.textContent=txt; if(instant) return; el.classList.remove('p-tick'); void el.offsetWidth; el.classList.add('p-tick') }
    function glow(){ beam.classList.remove('p-go'); beam.classList.add('p-loop') }
    function beamGo(){ beam.classList.remove('p-go'); void beam.offsetWidth; beam.classList.add('p-go') }
    function screen(n){ scr.forEach(function(x,i){x.classList.toggle('p-on',i===n)}) }

    /* the widget: the callout beside the phone. It says what the screen means: the gain over the trade-in */
    function widget(title,sub,tone,instant){
      tick(wt,title,instant); tick(ws,sub,instant);
      wdg.classList.toggle('p-live',tone==='live'); wdg.classList.toggle('p-good',tone==='good'||tone==='sold'); wdg.classList.toggle('p-sold',tone==='sold');
      if(!wdg.classList.contains('p-on')){ void wdg.offsetWidth; wdg.classList.add('p-on') }
    }
    function bars(k){ wbars.forEach(function(b,i){ var v=BIDS[i].v; b.style.setProperty('--h',i<k?((v-TRADE)/3600).toFixed(3):'0'); b.classList.toggle('p-hi',i<k&&v>=MIN) }) }
    function addBid(i){
      var b=BIDS[i], li=document.createElement('li'); li.className='p-lead';
      li.innerHTML='<span class="p-who">'+b.who+'<small>Top bid · '+b.t+'</small></span><span class="p-amt num">'+fmt(b.v)+'</span>';
      [].forEach.call(list.children,function(c){c.classList.remove('p-lead');var sm=c.querySelector('small');sm.textContent=sm.textContent.replace('Top bid · ','')});
      list.insertBefore(li,list.firstChild); wait.hidden=true;
    }
    function setMet(on){met.textContent=on?'Reserve met':'Not met yet';met.classList.toggle('p-no',!on)}
    function auction(k){ /* the auction screen with the first k bids, drawn finished */
      screen(2); list.innerHTML=''; wait.hidden=k>0; for(var i=0;i<k;i++) addBid(i);
      var b=BIDS[k-1]; setMet(k>0&&b.v>=MIN); clock.textContent=k?b.t+' ET':'1:00 PM ET'; tEl.textContent=k?b.t.replace(' PM',''):'1:00';
      if(k) setRoll(top,fmt(b.v),true); else resetRoll(top,'—');
      wl.textContent='over trade-in'; bars(k);
      if(k) setRoll(wg,'+'+fmt(b.v-TRADE),true); else resetRoll(wg,'+$0');
    }
    function land(i){ /* one bid arrives, played */
      var b=BIDS[i]; addBid(i); clock.textContent=b.t+' ET'; tEl.textContent=b.t.replace(' PM','');
      setRoll(top,fmt(b.v)); bars(i+1); setRoll(wg,'+'+fmt(b.v-TRADE));
      if(b.v>=MIN&&BIDS[i-1].v<MIN){ setMet(true); widget('Reserve met',fmt(b.v)+' · '+b.who.replace('Dealer · ',''),'good'); beamGo() }
      else widget('New bid · '+fmt(b.v),b.who.replace('Dealer · ','Dealer in '),b.v>=MIN?'good':'live');
    }

    /* each step, drawn finished */
    function draw(n){
      clear(); cur=n; beam.classList.remove('p-go','p-loop');
      if(n<0){ screen(0); typeEl.textContent=''; look.classList.remove('p-on'); found.classList.remove('p-on'); tEl.textContent='12:52'; wdg.classList.remove('p-on','p-live','p-good','p-sold'); return }
      if(n===0){ screen(1); typeEl.textContent='BTT 2023'; found.classList.add('p-on'); trk.style.setProperty('--p','62.5%'); minEl.textContent='$22,500'; tEl.textContent='12:54';
        bars(0); wl.textContent='only you see it'; resetRoll(wg,'$22,500'); widget('Your minimum','Below it, your car doesn’t sell','',true) }
      if(n===1){ auction(2); widget('New bid · $22,400','Dealer in Lowell, MA','live',true) }
      if(n===2){ auction(3); widget('Reserve met','$22,600 · Nashua, NH','good',true) }
      if(n===3){ auction(4); screen(3); tEl.textContent='5:00'; setRoll(win,'$23,800',true); setRoll(gain,'+$3,100',true); widget('Sold','Winning bid $23,800','sold',true); if(!reduce.matches) glow() }
    }
    /* each step, played from the end of the one before */
    /* the callout leaves at the start of each step and slides back in with it, landing with a small bounce */
    function slideOut(){ wdg.classList.remove('p-on') }
    function play(n){
      draw(n-1); cur=n; slideOut();
      if(n===0){
        typeEl.textContent=''; found.classList.remove('p-on'); tEl.textContent='12:52';
        bars(0); wl.textContent='one dealer’s offer'; resetRoll(wg,'$20,700');
        later(450,function(){ widget('Trade-in offer','Looking up your car…') });
        'BTT 2023'.split('').forEach(function(c,i){ later(300+i*100,function(){typeEl.textContent+=c}) });
        later(1150,function(){look.classList.add('p-on')});
        later(2000,function(){look.classList.remove('p-on');found.classList.add('p-on');tick(ws,'2023 Toyota Camry SE · found')});
        later(3000,function(){
          screen(1); tEl.textContent='12:54'; trk.style.setProperty('--p','17.5%'); minEl.textContent='$20,700';
          slideOut(); later(420,function(){ tick(wl,'only you see it',true); resetRoll(wg,'$22,500'); widget('Your minimum','Below it, your car doesn’t sell') });
        });
        later(3400,function(){ var t0=null, from=20700, to=22500;
          (function step(ts){ if(t0===null)t0=ts; var k=Math.min(1,(ts-t0)/1300), e=1-Math.pow(1-k,3), v=Math.round((from+(to-from)*e)/100)*100;
            trk.style.setProperty('--p',((v-20000)/4000*100)+'%'); minEl.textContent=fmt(v); if(k<1&&cur===0) requestAnimationFrame(step) })(performance.now()) });
      }
      if(n===1){
        auction(0); later(450,function(){ widget('Auction live','Local dealers notified','live') });
        later(900,function(){land(0)}); later(2300,function(){land(1)});
      }
      if(n===2){ later(500,function(){land(2)}) }
      if(n===3){
        later(500,function(){land(3)});
        later(2200,function(){ screen(3); tEl.textContent='5:00'; setRoll(win,'$00,000',true); setRoll(gain,'+$0,000',true);
          later(200,function(){setRoll(win,'$23,800')}); later(700,function(){setRoll(gain,'+$3,100')});
          slideOut(); later(420,function(){ widget('Sold','Winning bid $23,800','sold'); beamGo(); later(1750,glow) }) });
      }
    }
    /* forward one step plays it; a jump draws the step before and plays the target; backwards draws */
    function go(n){ if(n===cur) return; if(n<cur||n<0) draw(n); else play(n) }
    var LEN=[5200,3600,2200,4600];
    function loop(n){ play(n); later(LEN[n]+1400,function(){ loop((n+1)%4) }) }
    Ph={go:go,draw:draw,loop:loop,clear:clear,cur:function(){return cur}};
    draw(3); /* without motion the phone shows the finished auction */
  })();

  /* ---------- 5 · motion ---------- */
  if(!(window.gsap&&window.ScrollTrigger)) return;
  gsap.registerPlugin(ScrollTrigger);
  var mm=gsap.matchMedia();
  mm.add({ok:'(prefers-reduced-motion: no-preference)',wide:'(min-width: 901px)'},function(ctx){
    if(!ctx.conditions.ok) return
    var wide=ctx.conditions.wide;

    /* words in masks, grouped into lines (inner markup such as <br> is kept) */
    function lines(el){
      if(!el) return [];
      if(!el._lines){
        (function walk(n){ [].slice.call(n.childNodes).forEach(function(c){
          if(c.nodeType===3){ if(!c.textContent.trim()) return; var fr=document.createDocumentFragment();
            c.textContent.split(/(\s+)/).forEach(function(t){ if(!t) return;
              if(/^\s+$/.test(t)){ fr.appendChild(document.createTextNode(t)); return }
              var o=document.createElement('span'), i=document.createElement('span'); o.className='w'; i.className='w__in'; i.textContent=t; o.appendChild(i); fr.appendChild(o) });
            n.replaceChild(fr,c) }
          else if(c.nodeType===1&&c.tagName!=='BR') walk(c) }) })(el);
        el._lines=[];
      }
      /* regroup every time: lines change with the width */
      var L2=[], top=null;
      $$('.w__in',el).forEach(function(w){ var t=Math.round(w.parentNode.offsetTop); if(t!==top){L2.push([]);top=t} L2[L2.length-1].push(w) });
      return L2;
    }
    function rise(tl,el,at,dur,gap){ lines(el).forEach(function(ln,i){ tl.from(ln,{yPercent:112,duration:dur||1.4,ease:'power3.out'},at+i*(gap||.13)) }) }
    /* supporting text slides in from the side, one line after another (a staircase), once per block */
    var lift={x:-64,opacity:0,duration:1.2,ease:'power3.out',clearProps:'transform,opacity'};
    /* plays once. Not once:true: a trigger that kills itself during a refresh (page restored mid-scroll) breaks the others */
    var once=function(trigger,start){return gsap.timeline({scrollTrigger:{trigger:trigger,start:start||'top 80%',toggleActions:'play none none none'}})};

    /* hero intro. The plate and its button never move: the form is usable on the first frame */
    var it=gsap.timeline({delay:.05});
    it.from($$('.bar>*'),{y:-12,opacity:0,duration:.8,stagger:.06,ease:'power2.out',clearProps:'transform,opacity'},0);
    it.from('.hero__kicker',{y:12,opacity:0,duration:.9,ease:'power2.out',clearProps:'transform,opacity'},.05);
    rise(it,$('.hero__title'),.12,1.5,.15);
    it.from($$('.hero__deck>*'),Object.assign({},lift,{x:64,stagger:.14}),.6)
      .from($$('.assure li'),Object.assign({},lift,{stagger:.12}),.8)
      .from('.hero__chev, .hero__window',{y:40,opacity:0,duration:1.6,ease:'expo.out',clearProps:'transform,opacity'},.2)
      .from('.hero__window img',{scale:1.12,duration:2.4,ease:'expo.out',clearProps:'transform'},.2)
      .from('.hero__car',{xPercent:14,opacity:0,duration:1.6,ease:'power3.out',clearProps:'transform,opacity'},.55);

    /* headings that are not part of a bigger sequence */
    $$('.say h2, .faq h2').forEach(function(h){ rise(once(h,'top 85%'),h,0) });

    /* the market: text and phone are one sequence. Each chapter floats up as it arrives (heading line by line,
       then its blocks), and on wide screens the phone plays the same step while the chapter being read is lit */
    var mk=$('.mk'), chs=$$('.mk .ch');
    if(wide&&Ph){ mk.classList.add('is-sync'); Ph.draw(-1) }
    chs.forEach(function(ch){
      var n=+ch.dataset.step, h=$('h2',ch), b=$$('.ch__p, .ch__k, .xlist li, .vlist li, .ch__win>*, .ch__foot, .link',ch);
      var t=gsap.timeline({paused:true}), shown=false;
      if(h) rise(t,h,0,1.3,.13);
      if(b.length) t.from(b,{x:-80,opacity:0,duration:1.2,ease:'power3.out',stagger:.13,clearProps:'transform,opacity'},h?.25:0);
      var reveal=function(){ if(!shown){ shown=true; t.play() } };
      ScrollTrigger.create({trigger:ch,start:'top 78%',onEnter:reveal});
      if(wide&&Ph) ScrollTrigger.create({trigger:ch,start:'top 55%',end:'bottom 55%',
        onToggle:function(s){ ch.classList.toggle('is-on',s.isActive||(n===chs.length-1&&s.progress===1)); if(s.isActive){ reveal(); Ph.go(n) } },
        onLeaveBack:function(){ if(n===0) Ph.go(-1) }});
    });

    /* how it works: the head rises; then, step after step, the number lifts, the photo opens from its slanted edge,
       the product moment pops on with a small bounce, the rule draws and the copy slides in */
    var how=once('.how','top 75%');
    how.from('.how .kicker',lift,0);
    rise(how,$('.how h2'),.05);
    how.from('.how__head .link',Object.assign({},lift,{x:40}),.3);
    $$('.step').forEach(function(st,i){
      var t=once(st,'top 85%'), d=wide?i*.14:0;
      t.from($('.step__n',st),{yPercent:40,opacity:0,duration:1.1,ease:'power3.out',clearProps:'transform,opacity'},d)
       .from($('.step__ph',st),{xPercent:-10,opacity:0,duration:1.2,ease:'power3.out',clearProps:'transform,opacity'},d+.08)
       .from($('.step__ph img',st),{scale:1.18,duration:1.8,ease:'expo.out',clearProps:'transform'},d+.08)
       .from($('.step__mark',st),{x:-12,opacity:0,duration:.7,ease:'power3.out',clearProps:'transform,opacity'},d+.5)
       .fromTo(st.querySelector('.step__rule'),{'--r':0},{'--r':1,duration:1,ease:'power2.inOut'},d+.5)
       .from($$('h3, p, .step__chip',st),Object.assign({},lift,{stagger:.1}),d+.6);
      var ui=$$('.ui, .ui-tag',st); if(ui.length) t.from(ui,{y:22,opacity:0,scale:.92,duration:.9,ease:'back.out(1.7)',stagger:.08,clearProps:'transform,opacity'},d+.55);
    });

    /* results: the featured photo wipes open from the side the bids come from; the tape lands row by row */
    var rs=once('.res','top 72%');
    rise(rs,$('.res h2'),0);
    rs.from('.res__head .link',lift,.3)
      .fromTo('.feat__ph',{clipPath:'inset(0 0 0 100% round 14px)'},{clipPath:'inset(0 0 0 0% round 14px)',duration:1.3,ease:'expo.out',clearProps:'clipPath'},.25)
      .from('.feat__ph img',{scale:1.12,duration:1.8,ease:'expo.out',clearProps:'transform'},.25);
    rise(rs,$('.feat__up b'),.55,1.2);
    rs.from($$('.feat__up>span, .feat h3, .feat__meta'),Object.assign({},lift,{stagger:.1}),.75);
    once('.tape','top 85%').from($$('.tape li'),{x:64,opacity:0,duration:1,stagger:.12,ease:'expo.out',clearProps:'transform,opacity'});

    /* the quote rises line by line out of its masks; the figures follow */
    var q=once('.pull','top 78%');
    rise(q,$('.pull blockquote p'),0,1.2,.09);
    q.from($$('.pull figcaption>*'),Object.assign({},lift,{stagger:.12}),.6);
    once('.minis','top 85%').from($$('.minis li'),Object.assign({},lift,{stagger:.14}));

    once('.faq__r','top 85%').from($$('.faq details'),Object.assign({},lift,{stagger:.08}));

    /* the chevron window rises open, the road settles inside it; the button is never held back */
    var cl=once('.close','top 70%');
    rise(cl,$('.close h2'),0,1.5,.15);
    cl.from('.close__sub',lift,.55)
      .fromTo('.chevwin',{clipPath:'inset(100% 0 0 0)'},{clipPath:'inset(0% 0 0 0)',duration:1.6,ease:'expo.out',clearProps:'clipPath'},.15)
      .from('.chevwin img',{scale:1.18,duration:2.2,ease:'expo.out'},.15);
    /* the road drifts inside the chevron as the section passes: a slow parallax, tied to scroll */
    gsap.fromTo('.chevwin img',{yPercent:-7},{yPercent:7,ease:'none',scrollTrigger:{trigger:'.close',start:'top bottom',end:'bottom top',scrub:true}});

    /* the last step holds: the market stops on "Sold", the next section slides up over it,
       and the text and the phone rise out to nothing as it covers them */
    if(wide&&Ph){
      /* held exactly as long as the sheet takes to slide in: How it works is shorter than the screen, so a longer hold would cover Results */
      var sheet=function(){ return '+='+$('.how').offsetHeight };
      ScrollTrigger.create({trigger:'.mk',start:'bottom bottom',end:sheet,pin:true,pinSpacing:false,invalidateOnRefresh:true});
      gsap.to('.mk__grid',{yPercent:-6,opacity:0,ease:'none',scrollTrigger:{trigger:'.mk',start:'bottom bottom',end:sheet,scrub:.6,invalidateOnRefresh:true}});
    }
    /* the phone rises into the stage once */
    once('.stage','top 85%').from('.p-stage',{y:56,opacity:0,duration:1.4,ease:'power3.out',clearProps:'transform,opacity'});
    /* phones: the phone sits after the first chapter, so it plays the four steps in a loop while it is on screen; a tap pauses it */
    var held=false, tap=null;
    if(!wide&&Ph){
      ScrollTrigger.create({trigger:'.stage',start:'top 80%',end:'bottom 20%',onToggle:function(s){ if(s.isActive&&!held) Ph.loop(0); else Ph.clear() }});
      tap=function(){ held=!held; if(held) Ph.clear(); else Ph.loop((Ph.cur()+1)%4) };
      $('[data-tilt]').addEventListener('click',tap);
    }
    return function(){ if(Ph){ Ph.clear(); Ph.draw(3) } if(tap) $('[data-tilt]').removeEventListener('click',tap); mk.classList.remove('is-sync'); chs.forEach(function(c){c.classList.remove('is-on')}) };
  });
})();
