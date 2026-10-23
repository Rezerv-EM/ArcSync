'use strict';
(() => {
 const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
 const menu = document.querySelector('.menu-toggle');
 const mobile = document.querySelector('#mobile-nav');
 function closeMenu(){ mobile.hidden=true; menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Открыть меню'); }
 menu.addEventListener('click',()=>{ const opening=menu.getAttribute('aria-expanded')!=='true';mobile.hidden=!opening;menu.setAttribute('aria-expanded',String(opening));menu.setAttribute('aria-label',opening?'Закрыть меню':'Открыть меню'); });
 mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
 window.addEventListener('resize',()=>{if(window.innerWidth>800)closeMenu();},{passive:true});
 const art=document.querySelector('.hero-art'),rig=document.querySelector('#hero-rig');
 if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  art.addEventListener('pointermove',e=>{if(reduce.matches)return;const r=art.getBoundingClientRect();rig.style.setProperty('--ry',`${((e.clientX-r.left)/r.width-.5)*9}deg`);rig.style.setProperty('--rx',`${(.5-(e.clientY-r.top)/r.height)*6}deg`);});
  art.addEventListener('pointerleave',()=>{rig.style.setProperty('--ry','0deg');rig.style.setProperty('--rx','0deg');});
 }
 const screens={
  home:{title:'Главная',caption:'Вся библиотека. Обложки, запуск и статус сейвов.',alt:'Главная: обложки игр, быстрый запуск и статусы сейвов'},
  library:{title:'Библиотека',caption:'Установленные игры. Лицензии — отдельно.',alt:'Библиотека ArcSync: игры и статусы синхронизации'},
  backups:{title:'Бэкапы',caption:'Резервные копии. Восстановление. История синхронизаций.',alt:'Бэкапы ArcSync: резервные копии и журнал событий'},
  game:{title:'Карточка игры',caption:'Запуск, синхронизация и сохранения — рядом с игрой.',alt:'Карточка игры: кнопки запуска и синхронизации'},
  analytics:{title:'Аналитика',caption:'Статистика синхронизаций и время в играх.',alt:'Аналитика ArcSync: здоровье синхронизации и плейтайм'}
 };
 let current='home';
 const tabs=[...document.querySelectorAll('[data-screen]')],img=document.querySelector('#gallery-image'),caption=document.querySelector('#gallery-caption'),panel=document.querySelector('#screen-panel');
 const dialog=document.querySelector('#gallery-dialog');
 function setScreen(key,focus=false){
  if(!screens[key])return;
  current=key;const s=screens[key];
  img.src=`assets/${key}.webp`;img.alt=s.alt;caption.textContent=s.caption;
  panel.setAttribute('aria-labelledby',`tab-${key}`);
  document.querySelector('#gallery-current').textContent=String(Object.keys(screens).indexOf(key)+1).padStart(2,'0');
  tabs.forEach(t=>{const active=t.dataset.screen===key;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;if(active&&focus){t.focus();t.scrollIntoView({block:'nearest',inline:'nearest',behavior:reduce.matches?'instant':'smooth'});}});
 }
 tabs.forEach((t,i)=>{t.addEventListener('click',()=>setScreen(t.dataset.screen));t.addEventListener('keydown',e=>{let n=i;if(e.key==='ArrowRight')n=(i+1)%tabs.length;else if(e.key==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=tabs.length-1;else return;e.preventDefault();setScreen(tabs[n].dataset.screen,true);});});
 document.querySelector('[data-open-gallery]').addEventListener('click',()=>{const s=screens[current];document.querySelector('#dialog-image').src=`assets/${current}.webp`;document.querySelector('#dialog-image').alt=s.alt;document.querySelector('#dialog-title').textContent=`ArcSync — ${s.title}`;document.querySelector('#dialog-caption').textContent=s.caption;dialog.showModal();document.body.classList.add('modal-open');});
 document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
 // Reveal sections only when motion is allowed. Content stays visible without JS.
 if(!reduce.matches && 'IntersectionObserver' in window){
  const reveals=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('reveal-pending');reveals.unobserve(e.target);}}),{threshold:.06});
  document.querySelectorAll('.heading-row,.gallery-shell,.cloud-layout,.benefit-row,.restore-copy,.restore-art,.steps,.privacy-lead,.privacy-list,.faq-list').forEach(el=>{el.classList.add('reveal-section','reveal-pending');reveals.observe(el);});
  reduce.addEventListener('change',()=>{if(reduce.matches)document.querySelectorAll('.reveal-pending').forEach(el=>el.classList.remove('reveal-pending'));});
 }
 // Pause decorative motion outside the viewport and in background tabs.
 const animated=[...document.querySelectorAll('.hero-art,.sync-visual,.final-cta')];
 const inView=new WeakMap();
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{inView.set(entry.target,entry.isIntersecting);entry.target.querySelectorAll('.main-screen,.game-card,.cloud-node,.sync-connector i,.final-mascot').forEach(el=>{el.style.animationPlayState=entry.isIntersecting&&!document.hidden?'running':'paused';});}));animated.forEach(el=>observer.observe(el));}
 document.addEventListener('visibilitychange',()=>{animated.forEach(el=>el.querySelectorAll('.main-screen,.game-card,.cloud-node,.sync-connector i,.final-mascot').forEach(node=>{node.style.animationPlayState=!document.hidden&&inView.get(el)!==false?'running':'paused';}));});
})();
