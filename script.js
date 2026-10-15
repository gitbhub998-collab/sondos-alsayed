const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
document.documentElement.classList.add('js');

const loader=$('#loader'), pct=$('#percent'), greetingText=$('#greetingText'), progressArc=$('.loading-spinner-arc');
const introCurtain=$('#introCurtain');

if(loader && pct && greetingText && progressArc){
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const phaseDuration=3500;
  const exitDuration=500;
  const content=document.querySelectorAll('.topbar, main');
  let animationFrame=0;
  let exitTimer=0;
  let curtainTimer=0;

  const releaseIntro=()=>{
    document.body.classList.remove('intro-active');
    content.forEach(element=>{element.inert=false});
  };

  const finishIntro=()=>{
    window.cancelAnimationFrame(animationFrame);
    loader.remove();
    if(introCurtain&&!reducedMotion){
      introCurtain.classList.remove('is-closed');
      introCurtain.classList.add('is-opening');
      curtainTimer=window.setTimeout(()=>{
        introCurtain.classList.remove('is-opening');
        releaseIntro();
      },exitDuration);
    }else releaseIntro();
  };

  if(reducedMotion){
    finishIntro();
  }else{
    document.body.classList.add('intro-active');
    content.forEach(element=>{element.inert=true});
    const loaderStartedAt=performance.now();
    let phase='loading';

    const setProgress=value=>{
      const progress=Math.max(0,Math.min(value,1));
      pct.textContent=`${Math.round(progress*100)}%`;
      progressArc.style.strokeDashoffset=String(157.08*(1-progress));
    };

    const updateIntro=now=>{
      const elapsed=now-loaderStartedAt;

      if(elapsed<phaseDuration){
        const progress=elapsed/phaseDuration;
        const easedProgress=progress*progress*(3-2*progress);
        setProgress(easedProgress);
      }else if(elapsed<phaseDuration*2){
        if(phase==='loading'){
          phase='hello';
          greetingText.textContent='hello sondos';
          loader.classList.add('is-greeting');
        }
        setProgress(1);
      }else{
        phase='revealing';
        setProgress(1);
        introCurtain?.classList.add('is-closed');
        exitTimer=window.setTimeout(finishIntro,exitDuration);
        return;
      }

      animationFrame=window.requestAnimationFrame(updateIntro);
    };

    animationFrame=window.requestAnimationFrame(updateIntro);
  }

  window.addEventListener('pagehide',event=>{
    if(!event.persisted){
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(curtainTimer);
    }
  });
}

const currentYear=$('#currentYear');
if(currentYear) currentYear.textContent=new Date().getFullYear();

const menu=$('#menuPanel'), open=$('#menuButton'), close=$('#closeMenu'), backdrop=$('.menu-backdrop');
const setMenuState=isOpen=>{
  menu.classList.toggle('open',isOpen);
  document.body.classList.toggle('menu-open',isOpen);
  menu.setAttribute('aria-hidden',String(!isOpen));
  open.setAttribute('aria-expanded',String(isOpen));
  open.setAttribute('aria-label',isOpen?'Close navigation menu':'Open navigation menu');
  menu.toggleAttribute('inert',!isOpen);
  if(isOpen) setTimeout(()=>close.focus(),350);
  else open.focus();
};
open.addEventListener('click',()=>setMenuState(!menu.classList.contains('open')));
close.addEventListener('click',()=>setMenuState(false));
backdrop.addEventListener('click',()=>setMenuState(false));
$$('[data-close]').forEach(a=>a.addEventListener('click',()=>setMenuState(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open'))setMenuState(false)});

$$('.service-head').forEach(btn=>btn.addEventListener('click',()=>{
  const isExpanded=btn.closest('.service-item').classList.toggle('active');
  btn.setAttribute('aria-expanded',String(isExpanded));
  document.getElementById(btn.getAttribute('aria-controls')).setAttribute('aria-hidden',String(!isExpanded));
}));

const projectPreview=$('#projectPreviewImage');
const projectPlaceholder=$('#projectPreviewPlaceholder');
let activeProject=null;
let hoveredProject=null;
let focusedProject=null;
let preferredProject=null;
let projectPreviewRequest=0;
const projectItems=$$('.project-item');

const setSelectedProject=row=>{
  projectItems.forEach(item=>{
    const isSelected=item===row;
    item.classList.toggle('is-selected',isSelected);
    if(isSelected) item.setAttribute('aria-current','true');
    else item.removeAttribute('aria-current');
  });
};

const showProjectPreview=row=>{
  const request=++projectPreviewRequest;
  const src=row.dataset.image;
  if(!src||!projectPreview){
    if(projectPreview){
      projectPreview.classList.remove('show');
      projectPreview.setAttribute('aria-hidden','true');
    }
    if(projectPlaceholder) projectPlaceholder.hidden=false;
    activeProject=null;
    setSelectedProject(null);
    return;
  }

  activeProject=row;
  setSelectedProject(row);
  const title=row.querySelector('strong')?.textContent.trim();
  projectPreview.classList.remove('show');
  projectPreview.setAttribute('aria-hidden','true');
  if(projectPlaceholder) projectPlaceholder.hidden=false;
  projectPreview.alt=title?`${title} project preview`:'Project preview';

  const requestedImage=new Image();
  const showLoadedPreview=()=>{
    if(request!==projectPreviewRequest||activeProject!==row) return;
    projectPreview.src=src;
    projectPreview.classList.add('show');
    projectPreview.setAttribute('aria-hidden','false');
    if(projectPlaceholder) projectPlaceholder.hidden=true;
  };
  requestedImage.onload=showLoadedPreview;
  requestedImage.onerror=()=>{
    if(request===projectPreviewRequest&&activeProject===row){
      projectPreview.classList.remove('show');
      projectPreview.setAttribute('aria-hidden','true');
      if(projectPlaceholder) projectPlaceholder.hidden=false;
    }
  };
  requestedImage.src=src;
  if(requestedImage.complete&&requestedImage.naturalWidth>0) showLoadedPreview();
};

const hideProjectPreview=()=>{
  if(!activeProject||!projectPreview) return;
  projectPreviewRequest++;
  activeProject=null;
  setSelectedProject(null);
  projectPreview.classList.remove('show');
  projectPreview.setAttribute('aria-hidden','true');
  if(projectPlaceholder) projectPlaceholder.hidden=false;
};

const updateProjectPreview=()=>{
  const row=preferredProject||focusedProject||hoveredProject;
  if(row) showProjectPreview(row);
  else hideProjectPreview();
};

projectItems.forEach(row=>{
  row.addEventListener('mouseenter',()=>{
    hoveredProject=row;
    preferredProject=row;
    updateProjectPreview();
  });
  row.addEventListener('mouseleave',()=>{
    hoveredProject=null;
    if(preferredProject===row) preferredProject=focusedProject;
    updateProjectPreview();
  });
  row.addEventListener('focus',()=>{
    focusedProject=row;
    preferredProject=row;
    updateProjectPreview();
  });
  row.addEventListener('blur',()=>{
    focusedProject=null;
    if(preferredProject===row) preferredProject=hoveredProject;
    updateProjectPreview();
  });
  row.addEventListener('click',event=>{
    event.preventDefault();
    focusedProject=row;
    preferredProject=row;
    updateProjectPreview();
    $('#projectPreview')?.scrollIntoView({
      behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',
      block:'nearest'
    });
  });
});

if(projectItems.length) showProjectPreview(projectItems[0]);

const requestForm=$('#requestForm');
if(requestForm){
  const requestSubmit=requestForm.querySelector('.request-submit');
  const requestStatus=$('#requestStatus');
  const openEmailDraft=()=>{
    const emailLink=document.querySelector('.contact-item[href^="mailto:"]');
    const recipient=emailLink?.getAttribute('href').slice('mailto:'.length);
    if(!recipient){
      requestStatus.dataset.state='error';
      requestStatus.textContent='Unable to open an email draft. Please use the email address in the contact section.';
      requestSubmit.disabled=false;
      return;
    }

    const formData=new FormData(requestForm);
    const subject=`Portfolio inquiry from ${formData.get('name')}`;
    const body=[
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Email: ${formData.get('email')}`,
      '',
      'Message:',
      formData.get('message')
    ].join('\n');

    requestStatus.dataset.state='fallback';
    requestStatus.textContent='Your email app should open with your message ready. Please send it there.';
    requestSubmit.disabled=false;
    window.location.href=`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  requestForm.addEventListener('submit',async event=>{
    event.preventDefault();
    requestSubmit.disabled=true;
    requestStatus.dataset.state='';
    requestStatus.textContent='SENDING YOUR REQUEST...';

    let response;
    try{
      response=await fetch('/api/request',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(Object.fromEntries(new FormData(requestForm)))
      });
    }catch{
      openEmailDraft();
      return;
    }

    if(response.status===405){
      openEmailDraft();
      return;
    }

    let result;
    try{
      result=await response.json();
    }catch{
      openEmailDraft();
      return;
    }

    if(!response.ok){
      requestStatus.dataset.state='error';
      requestStatus.textContent=result.error||'The request could not be sent. Please try again.';
      requestSubmit.disabled=false;
      return;
    }

    requestForm.reset();
    requestStatus.dataset.state='success';
    requestStatus.textContent='Your request was sent successfully. Thank you!';
    requestSubmit.disabled=false;
  });
}

const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('revealed');
      io.unobserve(entry.target);
    }
  });
},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
$$('.reveal').forEach((el,i)=>{el.style.transitionDelay=Math.min((i%5)*55,220)+'ms';io.observe(el)});

const sections=$$('main > section[id]');
const sectionLinks=$$('.menu-panel nav a[href^="#"], .desktop-nav a[href^="#"]');
const topbar=$('.topbar');
const updateActiveSection=()=>{
  const activationLine=window.innerHeight*.35;
  let activeSection=sections[0];
  sections.forEach(section=>{
    if(section.getBoundingClientRect().top<=activationLine) activeSection=section;
  });
  sectionLinks.forEach(link=>{
    const isCurrent=link.hash===`#${activeSection?.id}`;
    link.classList.toggle('is-current',isCurrent);
    if(isCurrent) link.setAttribute('aria-current','location');
    else link.removeAttribute('aria-current');
  });
};

let activeSectionQueued=false;
let previousScrollY=window.scrollY;
window.addEventListener('scroll',()=>{
  if(activeSectionQueued) return;
  activeSectionQueued=true;
  window.requestAnimationFrame(()=>{
    const currentScrollY=window.scrollY;
    const scrollDelta=currentScrollY-previousScrollY;
    if(topbar){
      if(currentScrollY<=80||scrollDelta< -4) topbar.classList.remove('is-hidden');
      else if(scrollDelta>4) topbar.classList.add('is-hidden');
    }
    previousScrollY=currentScrollY;
    updateActiveSection();
    activeSectionQueued=false;
  });
},{passive:true});
window.addEventListener('hashchange',updateActiveSection);
updateActiveSection();
