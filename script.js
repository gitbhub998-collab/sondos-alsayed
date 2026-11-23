const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

/* ---------------- i18n ---------------- */
const I18N={
en:{
 'loader.label':'LOADING',
 'brand.home':'Sondos Alsayed Mahmoud home','brand.word':'SONDOS<br>ALSAYED MAHMOUD','top.role':'RAILWAY ENGINEERING TECH',
 'lang.switch':'Switch to Arabic','menu.open':'Open navigation menu','menu.close':'CLOSE','menu.closeAria':'Close navigation menu','menu.tag':'SM / NAVIGATION',
 'menu.email':'EMAIL','menu.social':'SOCIAL','menu.linkedin':'LINKEDIN',
 'nav.home':'HOME','nav.services':'EXPERTISE','nav.about':'ABOUT','nav.experience':'EXPERIENCE','nav.skills':'SKILLS','nav.projects':'PROJECTS','nav.work':'TRAINING','nav.education':'EDUCATION','nav.contact':'CONTACT',
 'hero.eyebrow':'RAILWAY ENGINEERING TECHNOLOGY / 2026','hero.name1':'SONDOS','hero.name2':'ALSAYED MAHMOUD',
 'hero.sub':'Passionate about railway engineering, modern transportation technologies, and developing practical expertise in railway systems, maintenance, and signaling.','hero.tag':'PROFILE / ENGINEERING',
 'hero.watermark':'RAILWAY<br>ENGINEERING','hero.note':'CAIRO, EGYPT<br>OPEN TO WORK & TRAINING','hero.scroll':'SCROLL TO EXPLORE',
 'services.kicker':'AREAS OF INTEREST','services.title':'EXPERTISE',
 'services.marquee':'RAILWAY SYSTEMS — <i>Modern Signaling</i> — ROLLING STOCK — <i>High-Speed Trains</i> — TRACK MAINTENANCE — <i>ATS Basics</i> — RAILWAY SYSTEMS — <i>Modern Signaling</i> — ROLLING STOCK — <i>High-Speed Trains</i> — TRACK MAINTENANCE — <i>ATS Basics</i> — ',
 'services.intro1':'RAILWAY ENGINEERING,','services.intro2':'BUILDING PRACTICAL EXPERIENCE IN RAILWAY SYSTEMS AND THEIR ELECTRICAL AND MECHANICAL ENGINEERING.',
 'services.s1':'Railway Systems','services.s1b':'Interested in railway engineering, modern railway systems and gaining practical experience across rail operations.',
 'services.s2':'Electrical & Mechanical Engineering','services.s2b':'Interested in applying electrical and mechanical engineering principles to railway technology and maintenance.',
 'services.s3':'Track & Maintenance','services.s3b':'Interested in railway track fundamentals and maintenance, supported by a 50-hour theoretical and practical training program.',
 'services.s4':'Modern Rail & Signaling','services.s4b':'Exploring modern railway systems, signaling concepts, ATS fundamentals and driverless monorail technology.',
 'about.kicker':'PROFILE','about.title':'ABOUT','about.tag':'PROFILE / 2026',
 'about.lead':'I am Sondos Alsayed Mahmoud, a fourth-year Railway Engineering Technology student at 6th of October Technological University.',
 'about.p2':'I am seeking an internship to gain practical experience in railway systems, with a particular interest in electrical and mechanical engineering. My training includes railway track fundamentals, metro maintenance, rolling stock, high-speed rail and modern signaling.',
 'about.p3':'I also bring long-term Microsoft Excel support experience and a strong foundation in teamwork, problem solving and communication.',
 'about.f1k':'EDUCATION','about.f1v':'RAILWAY ENGINEERING TECHNOLOGY','about.f2k':'LANGUAGES','about.f2v':'ARABIC (NATIVE) / ENGLISH (INTERMEDIATE)','about.f3k':'LOCATION','about.f3v':'CAIRO, EGYPT',
 'matrix.title':'TECHNICAL SKILLS','matrix.m1':'Microsoft PowerPoint & Excel','matrix.m2':'Railway Systems','matrix.m3':'Track & Maintenance','matrix.m4':'Signaling & Modern Rail','matrix.m5':'Rolling Stock','matrix.m6':'Electrical Systems',
 'exp.kicker':'EXPERIENCE & COURSES','exp.title':'EXPERIENCE',
 'exp.e1d0':'APPROX. 3 YEARS','exp.e1t':'Microsoft Excel Support','exp.e1d':'Physics education content for Mr. Mahmoud Magdy · Organizing, formatting and managing educational content and data.',
 
 'exp.e3d0':'IN PROGRESS','exp.e3t':'English Language Course','exp.e3d':'Russian Cultural Center.',
 'skills.kicker':'SKILLS','skills.title':'SKILLS & LANGUAGES',
 'skills.r1t':'Teamwork','skills.r1d':'Collaborative and dependable',
 'skills.r2t':'Problem Solving','skills.r2d':'Analytical thinking',
 'skills.r3t':'Fast Learning','skills.r3d':'Adaptable and eager to learn',
 'skills.r4t':'Microsoft Office','skills.r4d':'Word · Excel · PowerPoint',
 'skills.r5t':'Engineering Systems Understanding','skills.r5d':'Railway engineering systems',
 'skills.r6t':'Electrical Systems','skills.r6d':'Basic electrical systems understanding',
 'skills.r7t':'Communication','skills.r7d':'Good communication skills',
 'skills.r8t':'Languages','skills.r8d':'Arabic · Native / English · Intermediate',
 'work.kicker':'SELECTED ENGINEERING WORK','work.title':'PROJECTS',
 'work.w1t':'Fire Alarm System','work.w1d':'ELECTRICAL SYSTEMS',
 'work.w2t':'Switcher Locomotive','work.w2d':'RAILWAY ENGINEERING',
 'work.w3t':'Smart Solar Car','work.w3d':'RENEWABLE ENERGY',
 'work.w4t':'Pneumatic Brake System','work.w4d':'RAILWAY SYSTEMS',
 'work.placeholder':'SELECT<br>PROJECT','work.open':'OPEN PROJECT',
 'train.kicker':'TRAINING & INTERNSHIPS','train.title':'TRAINING',
 'train.t1t':'Alstom & Egyptian National Institute of Transport','train.t1d':'Modern railway systems, signaling, ATS fundamentals and driverless monorail.',
 'train.t2d0':'50-HOUR PROGRAM','train.t2t':'RATP Dev Mobility Cairo','train.t2d':'Track fundamentals · Theoretical and practical training in track fundamentals and maintenance.',
 'train.t3t':'Egyptian Company for Metro','train.t3d':'Cairo Metro Line 2 field training in rolling stock overhauls, maintenance and simulation workflows.',
 'train.t4t':'National Institute for Transport & Siemens','train.t4d':'Railway rolling stock and high-speed rail technologies.',
 'train.t5t':'National Institute for Transport','train.t5d':'Appraisal guidelines and evaluation methods for railway projects.',
 'train.t6t':'Arab Contractors Company','train.t6d':'Construction and management, transportation systems, propulsion and engines.',
 'train.t7t':'Akhbar El Yom Canadian Academy','train.t7d':'Industrial workshop fundamentals and engineering tools.',
 'train.t8t':'ERMAS','train.t8d':'Locomotive inspection, maintenance and overhaul at locomotive maintenance workshops.',
 'edu.kicker':'EDUCATION','edu.title':'EDUCATION','edu.e1d0':'10/2023 — PRESENT',
 'edu.e1t':'Railway Engineering Technology','edu.e1d':'Fourth Year · Faculty of Industry and Energy, 6th of October Technological University, Egypt.',
 'edu.e2t':'Diploma of Above Intermediate Studies','edu.e2d':'Workers University (University of Labor), Egypt · Graduated with Excellent grade.',
 'contact.kicker1':"LET'S CONNECT",'contact.kicker2':'CONTACT','contact.title':'CONTACT','contact.name':'SONDOS ALSAYED MAHMOUD','contact.city':'CAIRO, EGYPT',
 'cv.download':'DOWNLOAD CV','cv.note':'PDF · EN & AR',
 'contact.email':'EMAIL','contact.phone':'PHONE','contact.linkedin':'VIEW PROFILE','contact.location':'LOCATION','contact.locationv':'CAIRO, EGYPT',
 'form.eyebrow':'HAVE A QUESTION OR INTERNSHIP OPPORTUNITY?','form.title':'SEND A MESSAGE','form.intro':'Share a few details and I will get back to you as soon as possible.',
 'form.name':'NAME','form.phone':'PHONE','form.phoneph':'+20 1...','form.email':'EMAIL','form.message':'YOUR MESSAGE','form.submit':'SEND MESSAGE',
 'form.sending':'SENDING YOUR MESSAGE...','form.connError':'Unable to connect. Please try again in a moment.','form.processError':'The message could not be processed. Please try again later.',
 'form.success':'Your message was sent successfully. Thank you!','form.sent':'SENT',
 'footer.name':'Sondos Alsayed Mahmoud','footer.role':'RAILWAY ENGINEERING TECHNOLOGY STUDENT',
 'quote.text':'I am seeking an internship to gain practical experience in railway systems, with a particular interest in electrical and mechanical engineering.','quote.accent':'electrical and mechanical engineering',
 'marquee2':'TEAMWORK ✦ PROBLEM SOLVING ✦ FAST LEARNING ✦ COMMUNICATION ✦ TEAMWORK ✦ PROBLEM SOLVING ✦ FAST LEARNING ✦ COMMUNICATION ✦ ',
 'rail.home':'HOME','rail.services':'EXPERTISE','rail.about':'ABOUT','rail.experience':'EXPERIENCE','rail.skills':'SKILLS','rail.projects':'PROJECTS','rail.work':'TRAINING','rail.journey':'EDUCATION','rail.contact':'CONTACT','rail.next':'NEXT STOP','rail.final':'FINAL STOP'
},
ar:{
 'loader.label':'جارٍ التحميل',
 'brand.home':'الصفحة الرئيسية لسندس السيد محمود','brand.word':'سندس<br>السيد محمود','top.role':'هندسة تكنولوجيا السكك الحديدية',
 'lang.switch':'التبديل إلى الإنجليزية','menu.open':'فتح قائمة التنقل','menu.close':'إغلاق','menu.closeAria':'إغلاق قائمة التنقل','menu.tag':'SM / التنقل',
 'menu.email':'البريد الإلكتروني','menu.social':'التواصل','menu.linkedin':'لينكدإن',
 'nav.home':'الرئيسية','nav.services':'مجالات الخبرة','nav.about':'نبذة','nav.experience':'الخبرة','nav.skills':'المهارات','nav.projects':'المشاريع','nav.work':'التدريب','nav.education':'التعليم','nav.contact':'التواصل',
 'hero.eyebrow':'هندسة تكنولوجيا السكك الحديدية / 2026','hero.name1':'سندس','hero.name2':'السيد محمود',
 'hero.sub':'شغوفة بهندسة السكك الحديدية وتقنيات النقل الحديث، وتطوير خبرة عملية في أنظمة السكك الحديدية وصيانتها والإشارات.','hero.tag':'الملف الشخصي / الهندسة',
 'hero.watermark':'هندسة<br>السكك الحديدية','hero.note':'القاهرة، مصر<br>متاحة للعمل والتدريب','hero.scroll':'مرري للاستكشاف',
 'services.kicker':'مجالات الاهتمام','services.title':'مجالات الخبرة',
 'services.marquee':'أنظمة السكك الحديدية — <i>الإشارات الحديثة</i> — الوحدات المتحركة — <i>القطارات فائقة السرعة</i> — صيانة القضبان — <i>أساسيات ATS</i> — أنظمة السكك الحديدية — <i>الإشارات الحديثة</i> — الوحدات المتحركة — <i>القطارات فائقة السرعة</i> — صيانة القضبان — <i>أساسيات ATS</i> — ',
 'services.intro1':'هندسة السكك الحديدية،','services.intro2':'بناء خبرة عملية في أنظمة السكك الحديدية وهندستها الكهربائية والميكانيكية.',
 'services.s1':'أنظمة السكك الحديدية','services.s1b':'مهتمة بهندسة السكك الحديدية وأنظمتها الحديثة واكتساب خبرة عملية عبر عمليات السكك الحديدية.',
 'services.s2':'الهندسة الكهربائية والميكانيكية','services.s2b':'مهتمة بتطبيق مبادئ الهندسة الكهربائية والميكانيكية في تكنولوجيا السكك الحديدية وصيانتها.',
 'services.s3':'القضبان والصيانة','services.s3b':'مهتمة بأساسيات قضبان السكك الحديدية وصيانتها، مدعومة ببرنامج تدريبي نظري وعملي لمدة 50 ساعة.',
 'services.s4':'السكك الحديثة والإشارات','services.s4b':'استكشاف أنظمة السكك الحديدية الحديثة ومفاهيم الإشارات وأساسيات ATS وتكنولوجيا المونوريل بدون سائق.',
 'about.kicker':'الملف الشخصي','about.title':'نبذة','about.tag':'الملف الشخصي / 2026',
 'about.lead':'أنا سندس السيد محمود، طالبة بالسنة الرابعة في هندسة تكنولوجيا السكك الحديدية بجامعة 6 أكتوبر التكنولوجية.',
 'about.p2':'أسعى للحصول على تدريب لاكتساب خبرة عملية في أنظمة السكك الحديدية، مع اهتمام خاص بالهندسة الكهربائية والميكانيكية. يشمل تدريبي أساسيات قضبان السكك الحديدية وصيانة المترو والوحدات المتحركة والقطارات فائقة السرعة والإشارات الحديثة.',
 'about.p3':'كما أمتلك خبرة ممتدة في دعم Microsoft Excel وأساسًا قويًا في العمل الجماعي وحل المشكلات والتواصل.',
 'about.f1k':'التعليم','about.f1v':'هندسة تكنولوجيا السكك الحديدية','about.f2k':'اللغات','about.f2v':'العربية (لغة أم) / الإنجليزية (متوسطة)','about.f3k':'الموقع','about.f3v':'القاهرة، مصر',
 'matrix.title':'المهارات التقنية','matrix.m1':'مايكروسوفت باوربوينت وإكسل','matrix.m2':'أنظمة السكك الحديدية','matrix.m3':'القضبان والصيانة','matrix.m4':'الإشارات والسكك الحديثة','matrix.m5':'الوحدات المتحركة','matrix.m6':'الأنظمة الكهربائية',
 'exp.kicker':'الخبرة والدورات','exp.title':'الخبرة',
 'exp.e1d0':'نحو 3 سنوات','exp.e1t':'دعم Microsoft Excel','exp.e1d':'محتوى تعليمي لمادة الفيزياء للأستاذ محمود مجدي · تنظيم وتنسيق وإدارة المحتوى التعليمي والبيانات.',
 
 'exp.e3d0':'جارٍ حاليًا','exp.e3t':'دورة اللغة الإنجليزية','exp.e3d':'المركز الثقافي الروسي.',
 'skills.kicker':'المهارات','skills.title':'المهارات واللغات',
 'skills.r1t':'العمل الجماعي','skills.r1d':'تعاونية ويمكن الاعتماد عليها',
 'skills.r2t':'حل المشكلات','skills.r2d':'تفكير تحليلي',
 'skills.r3t':'التعلم السريع','skills.r3d':'قادرة على التكيف ومتعطشة للتعلم',
 'skills.r4t':'مايكروسوفت أوفيس','skills.r4d':'Word · Excel · PowerPoint',
 'skills.r5t':'فهم الأنظمة الهندسية','skills.r5d':'أنظمة هندسة السكك الحديدية',
 'skills.r6t':'الأنظمة الكهربائية','skills.r6d':'فهم أساسي للأنظمة الكهربائية',
 'skills.r7t':'التواصل','skills.r7d':'مهارات تواصل جيدة',
 'skills.r8t':'اللغات','skills.r8d':'العربية لغة أم / الإنجليزية متوسطة',
 'work.kicker':'أعمال هندسية مختارة','work.title':'المشاريع',
 'work.w1t':'نظام إنذار الحريق','work.w1d':'أنظمة كهربائية',
 'work.w2t':'جرار مناورة','work.w2d':'هندسة السكك الحديدية',
 'work.w3t':'سيارة شمسية ذكية','work.w3d':'طاقة متجددة',
 'work.w4t':'نظام فرامل هوائية','work.w4d':'أنظمة سكك حديدية',
 'work.placeholder':'اختر<br>مشروعًا','work.open':'فتح المشروع',
 'train.kicker':'التدريب والخبرات العملية','train.title':'التدريب',
 'train.t1t':'ألستوم والمعهد القومي المصري للنقل','train.t1d':'أنظمة السكك الحديدية الحديثة والإشارات وأساسيات ATS والمونوريل بدون سائق.',
 'train.t2d0':'برنامج 50 ساعة','train.t2t':'آر إيه تي بي ديف موبيليتي القاهرة','train.t2d':'أساسيات القضبان · تدريب نظري وعملي في أساسيات القضبان وصيانتها.',
 'train.t3t':'الشركة المصرية لإدارة وتشغيل المترو','train.t3d':'تدريب ميداني بالخط الثاني لمترو القاهرة في عمرات الوحدات المتحركة والصيانة وسير عمل المحاكاة.',
 'train.t4t':'المعهد القومي للنقل وسيمنس','train.t4d':'الوحدات المتحركة للسكك الحديدية وتقنيات القطارات فائقة السرعة.',
 'train.t5t':'المعهد القومي للنقل','train.t5d':'إرشادات التقييم وأساليب تقييم مشروعات السكك الحديدية.',
 'train.t6t':'شركة المقاولون العرب','train.t6d':'الإنشاء والإدارة وأنظمة النقل والدفع والمحركات.',
 'train.t7t':'أكاديمية أخبار اليوم الكندية','train.t7d':'أساسيات الورش الصناعية والأدوات الهندسية.',
 'train.t8t':'إرماس','train.t8d':'فحص وصيانة وعمرة الجرارات في ورش صيانة الجرارات.',
 'edu.kicker':'التعليم','edu.title':'التعليم','edu.e1d0':'10/2023 — حتى الآن',
 'edu.e1t':'هندسة تكنولوجيا السكك الحديدية','edu.e1d':'السنة الرابعة · كلية الصناعة والطاقة، جامعة 6 أكتوبر التكنولوجية، مصر.',
 'edu.e2t':'دبلوم الدراسات فوق المتوسطة','edu.e2d':'جامعة العمال، مصر · التخرج بتقدير ممتاز.',
 'contact.kicker1':'لنتواصل','contact.kicker2':'التواصل','contact.title':'التواصل','contact.name':'سندس السيد محمود','contact.city':'القاهرة، مصر',
 'cv.download':'تحميل السيرة الذاتية','cv.note':'PDF · عربي وإنجليزي',
 'contact.email':'البريد الإلكتروني','contact.phone':'الهاتف','contact.linkedin':'عرض الملف الشخصي','contact.location':'الموقع','contact.locationv':'القاهرة، مصر',
 'form.eyebrow':'لديك سؤال أو فرصة تدريب؟','form.title':'أرسل رسالة','form.intro':'شارك بعض التفاصيل وسأعود إليك في أقرب وقت ممكن.',
 'form.name':'الاسم','form.phone':'رقم الهاتف','form.phoneph':'+20 1...','form.email':'البريد الإلكتروني','form.message':'رسالتك','form.submit':'إرسال الرسالة',
 'form.sending':'جارٍ إرسال رسالتك...','form.connError':'تعذر الاتصال. حاول مرة أخرى بعد قليل.','form.processError':'تعذرت معالجة الرسالة. حاول مرة أخرى لاحقًا.',
 'form.success':'تم إرسال رسالتك بنجاح. شكرًا لك!','form.sent':'تم الإرسال',
 'footer.name':'سندس السيد محمود','footer.role':'طالبة هندسة تكنولوجيا السكك الحديدية',
 'quote.text':'أسعى للحصول على تدريب لاكتساب خبرة عملية في أنظمة السكك الحديدية، مع اهتمام خاص بالهندسة الكهربائية والميكانيكية.','quote.accent':'الهندسة الكهربائية والميكانيكية',
 'marquee2':'العمل الجماعي ✦ حل المشكلات ✦ التعلم السريع ✦ التواصل ✦ العمل الجماعي ✦ حل المشكلات ✦ التعلم السريع ✦ التواصل ✦ ',
 'rail.home':'الرئيسية','rail.services':'الخبرات','rail.about':'نبذة','rail.experience':'الخبرة','rail.skills':'المهارات','rail.projects':'المشاريع','rail.work':'التدريب','rail.journey':'التعليم','rail.contact':'التواصل','rail.next':'المحطة التالية','rail.final':'المحطة الأخيرة'
}
};

let lang=localStorage.getItem('bm-lang')||'en';
const tr=k=>(I18N[lang]&&I18N[lang][k])||I18N.en[k]||k;

function applyLang(next){
  lang=next;
  localStorage.setItem('bm-lang',lang);
  const ar=lang==='ar';
  document.documentElement.lang=ar?'ar':'en';
  document.documentElement.dir=ar?'rtl':'ltr';
  document.title=ar?'سندس السيد محمود — هندسة تكنولوجيا السكك الحديدية':'Sondos Alsayed Mahmoud — Railway Engineering Technology';
  $$('[data-i18n]').forEach(el=>{el.textContent=tr(el.dataset.i18n)});
  $$('[data-i18n-html]').forEach(el=>{el.innerHTML=tr(el.dataset.i18nHtml)});
  $$('[data-i18n-aria]').forEach(el=>{el.setAttribute('aria-label',tr(el.dataset.i18nAria))});
  $$('[data-i18n-ph]').forEach(el=>{el.setAttribute('placeholder',tr(el.dataset.i18nPh))});
  const lt=$('#langToggle');
  if(lt){const lbl=lt.querySelector('.lt-label');if(lbl)lbl.textContent=ar?'EN':'عربي';}
  const cvBtn=$('#cvBtn');
  if(cvBtn) cvBtn.setAttribute('href',ar?'/assets/cv/sondos-alsayed-mahmoud-cv-ar-corrected-47d47d4c.pdf':'/assets/cv/sondos-alsayed-mahmoud-cv-en-corrected-79280c67.pdf');
  document.body.classList.toggle('ar',ar);
  splitTitles();
  if(window.__statement)window.__statement.rebuild();
}

/* ---------------- split-text display titles ---------------- */
function splitTitles(){
  $$('.display-title').forEach(title=>{
    const text=(title.dataset.i18n?tr(title.dataset.i18n):title.textContent).trim();
    title.classList.add('split');
    title.setAttribute('aria-label',text);
    title.innerHTML=text.split(/\s+/).map((w,i)=>
      `<span class="st-w" aria-hidden="true"><span class="st-i" style="--i:${i}">${w}</span></span>`
    ).join(' ');
  });
}

/* ---------------- real loader ---------------- */
document.body.classList.add('js-anim');
const loader=$('#loader'), pct=$('#percent'), greetingText=$('#greetingText'), progressArc=$('.loading-spinner-arc');
const introCurtain=$('#introCurtain');

if(loader && pct && greetingText && progressArc){
  const loaderReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const phaseDuration=3500;
  const exitDuration=500;
  const content=document.querySelectorAll('.topbar, main');
  let animationFrame=0;
  let exitTimer=0;
  let curtainTimer=0;

  const releaseIntro=()=>{
    document.body.classList.remove('intro-active');
    document.body.classList.add('ready');
    content.forEach(element=>{element.inert=false});
  };

  const finishIntro=()=>{
    window.cancelAnimationFrame(animationFrame);
    loader.remove();
    if(introCurtain&&!loaderReduced){
      introCurtain.classList.remove('is-closed');
      introCurtain.classList.add('is-opening');
      curtainTimer=window.setTimeout(()=>{
        introCurtain.classList.remove('is-opening');
        releaseIntro();
      },exitDuration);
    }else releaseIntro();
  };

  if(loaderReduced){
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
}else{
  document.body.classList.add('ready');
}

const currentYear=$('#currentYear');
if(currentYear) currentYear.textContent=new Date().getFullYear();

/* ---------------- Lenis smooth scroll ---------------- */
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis=null;
if(window.Lenis&&!reducedMotion){
  lenis=new Lenis({duration:1.15,smoothWheel:true});
  window.__lenis=lenis;
  document.documentElement.classList.add('lenis-on');
  const raf=time=>{lenis.raf(time);requestAnimationFrame(raf)};
  requestAnimationFrame(raf);
}
$$('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id.length<2) return;
    const target=document.querySelector(id);
    if(!target) return;
    e.preventDefault();
    if(window.__wipeNav) return;
    if(lenis) lenis.scrollTo(target,{offset:-70});
    else target.scrollIntoView({behavior:reducedMotion?'auto':'smooth'});
  });
});

/* ---------------- menu ---------------- */
const menu=$('#menuPanel'), open=$('#menuButton'), close=$('#closeMenu'), backdrop=$('.menu-backdrop');
const setMenuState=isOpen=>{
  menu.classList.toggle('open',isOpen);
  document.body.classList.toggle('menu-open',isOpen);
  menu.setAttribute('aria-hidden',String(!isOpen));
  open.setAttribute('aria-expanded',String(isOpen));
  open.setAttribute('aria-label',isOpen?tr('menu.closeAria'):tr('menu.open'));
  menu.toggleAttribute('inert',!isOpen);
  if(lenis){isOpen?lenis.stop():lenis.start()}
  if(isOpen) setTimeout(()=>close.focus(),350);
  else open.focus();
};
open.addEventListener('click',()=>setMenuState(!menu.classList.contains('open')));
close.addEventListener('click',()=>setMenuState(false));
backdrop.addEventListener('click',()=>setMenuState(false));
$$('[data-close]').forEach(a=>a.addEventListener('click',()=>setMenuState(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open'))setMenuState(false)});
$$('.menu-panel nav a').forEach((a,i)=>a.style.setProperty('--mi',i));

/* ---------------- language toggle ---------------- */
const langToggle=$('#langToggle');
if(langToggle) langToggle.addEventListener('click',()=>applyLang(lang==='ar'?'en':'ar'));

/* ---------------- services accordion ---------------- */
$$('.service-head').forEach(btn=>btn.addEventListener('click',()=>{
  const isExpanded=btn.closest('.service-item').classList.toggle('active');
  btn.setAttribute('aria-expanded',String(isExpanded));
  document.getElementById(btn.getAttribute('aria-controls')).setAttribute('aria-hidden',String(!isExpanded));
}));

/* ---------------- work preview (click/tap) ---------------- */
const preview=$('#previewImage');
const previewLink=$('#previewLink');
const previewPlaceholder=$('.preview-placeholder');
const selectProject=row=>{
  const {image,link,imageFallback}=row.dataset;
  if(!image) return;
  const previewCard=preview.closest('.work-preview');
  previewCard.classList.remove('has-image');
  preview.classList.remove('show');
  previewLink.hidden=!link;
  if(link) previewLink.href=link; else previewLink.removeAttribute('href');
  previewPlaceholder.hidden=false;
  preview.alt=`Preview of ${row.querySelector('h3').textContent}`;
  preview.onload=()=>{
    previewCard.classList.add('has-image');
    preview.classList.add('show');
    previewPlaceholder.hidden=true;
  };
  preview.onerror=()=>{
    if(imageFallback&&preview.src.indexOf(imageFallback)===-1){preview.src=imageFallback;return;}
    previewCard.classList.remove('has-image');
    preview.classList.remove('show');
    previewLink.hidden=!link;
    previewPlaceholder.hidden=false;
  };
  preview.src=image;
};
$$('.work-row').forEach(row=>{
  row.addEventListener('click',event=>{
    event.preventDefault();
    selectProject(row);
    if(window.innerWidth<=1000){
      document.querySelector('.work-preview')?.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'nearest'});
    }
  });
});

/* ---------------- cursor-follow preview (desktop) ---------------- */
const workFloat=$('#workFloat'), workFloatImg=$('#workFloatImg');
const fine=window.matchMedia('(pointer: fine)').matches;
if(workFloat&&fine&&!reducedMotion){
  let fx=0,fy=0,tx=0,ty=0,rafId=null;
  const follow=()=>{
    fx+=(tx-fx)*.16;fy+=(ty-fy)*.16;
    workFloat.style.transform=`translate3d(${fx+18}px,${fy-70}px,0) scale(${workFloat.classList.contains('on')?1:.94})`;
    if(Math.abs(tx-fx)>.3||Math.abs(ty-fy)>.3) rafId=requestAnimationFrame(follow);
    else rafId=null;
  };
  const kick=()=>{if(!rafId)rafId=requestAnimationFrame(follow)};
  $$('.work-row').forEach(row=>{
    row.addEventListener('mouseenter',()=>{
      const img=row.dataset.image;if(!img)return;
      workFloatImg.src=img;
      workFloat.classList.add('on');kick();
    });
  });
  $('.work-list').addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;kick()});
  $('.work-list').addEventListener('mouseleave',()=>workFloat.classList.remove('on'));
}

/* ---------------- reveals ---------------- */
const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('revealed');
      io.unobserve(entry.target);
    }
  });
},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
$$('.reveal').forEach((el,i)=>{el.style.transitionDelay=Math.min((i%5)*55,220)+'ms';io.observe(el)});

/* ---------------- hero entrance delays ---------------- */
$$('.hero .anim').forEach(el=>{/* delays set via nth CSS */});


/* ---------------- statement quote: scroll-scrubbed words ---------------- */
const statementQuote=$('#statementQuote'), statementSec=$('#statement');
function buildStatement(){
  if(!statementQuote) return;
  const norm=s=>s.replace(/[.,،;:!?؟]/g,'');
  const words=tr('quote.text').split(/\s+/), aw=tr('quote.accent').split(/\s+/);
  let ai=-1;
  for(let i=0;i<=words.length-aw.length&&ai<0;i++){
    let ok=true;
    for(let j=0;j<aw.length;j++) if(norm(words[i+j])!==norm(aw[j])){ok=false;break;}
    if(ok) ai=i;
  }
  statementQuote.innerHTML=words.map((w,i)=>`<span class="w${ai>=0&&i>=ai&&i<ai+aw.length?' acc':''}">${w}</span>`).join(' ');
}
function scrubStatement(){
  if(!statementQuote||!statementSec) return;
  const r=statementSec.getBoundingClientRect(), vh=window.innerHeight;
  const p=Math.min(Math.max((vh*0.85-r.top)/(r.height*0.95),0),1);
  const ws=statementQuote.children, n=ws.length, lit=p*n;
  for(let i=0;i<n;i++) ws[i].classList.toggle('on',i<lit);
}
window.__statement={rebuild:()=>{buildStatement();scrubStatement();}};
buildStatement();

/* ---------------- page wipe transitions (menu navigation) ---------------- */
const pageWipe=$('#pageWipe');
document.addEventListener('click',e=>{
  const a=e.target&&e.target.closest?e.target.closest('.menu-panel nav a'):null;
  if(!a) return;
  const id=a.getAttribute('href');
  const target=id&&id.length>1?document.querySelector(id):null;
  if(!target) return;
  e.preventDefault();
  if(reducedMotion||!pageWipe) return;
  window.__wipeNav=true;
  setMenuState(false);
  pageWipe.classList.add('active','in');
  setTimeout(()=>{
    if(lenis) lenis.scrollTo(target,{offset:-70,immediate:true});
    else{
      const de=document.documentElement, prevB=de.style.scrollBehavior;
      de.style.scrollBehavior='auto';
      window.scrollTo(0,target.getBoundingClientRect().top+window.scrollY-70);
      de.style.scrollBehavior=prevB;
    }
    pageWipe.classList.remove('in');
    pageWipe.classList.add('out');
    setTimeout(()=>{pageWipe.classList.remove('active','out');window.__wipeNav=false;},640);
  },520);
},true);

/* ---------------- skills matrix fill ---------------- */
const skillsEl=$('.skills');
if(skillsEl){
  const so=new IntersectionObserver(es=>{
    es.forEach(en=>{if(en.isIntersecting){skillsEl.classList.add('in');so.disconnect();}});
  },{threshold:.3});
  so.observe(skillsEl);
}

/* ---------------- scroll effects: topbar, progress, parallax, timeline ---------------- */
const heroVideo=$('.hero-video'), heroPortraitWrap=$('.hero-portrait-wrap');
const timelineList=$('.experience-list'), timelineProgress=$('#timelineProgress');
let ticking=false;
const onScroll=()=>{
  if(ticking) return;
  ticking=true;
  requestAnimationFrame(()=>{
    ticking=false;
    const now=window.scrollY;
    document.body.classList.toggle('scrolled',now>30);
    const scrollableHeight=document.documentElement.scrollHeight-window.innerHeight;
    document.documentElement.style.setProperty('--scroll-progress',`${scrollableHeight>0?now/scrollableHeight*100:0}%`);
    const pNow=scrollableHeight>0?now/scrollableHeight:0;
    scrubStatement();
    if(!reducedMotion){
      const heroH=innerHeight;
      if(now<heroH*1.2){
        if(heroVideo) heroVideo.style.transform=`translate3d(0,${now*.22}px,0)`;
        if(heroPortraitWrap) heroPortraitWrap.style.transform=`translate3d(0,${now*-.07}px,0)`;
      }
      if(timelineList&&timelineProgress){
        const r=timelineList.getBoundingClientRect();
        const passed=Math.min(Math.max((innerHeight*.65-r.top)/r.height,0),1);
        timelineProgress.style.height=`${passed*100}%`;
      }
    }
  });
};
window.addEventListener('scroll',onScroll,{passive:true});
onScroll();

/* ---------------- active section in menu ---------------- */
const sectionLinks=new Map(Array.from($$('.menu-panel nav a'),link=>[link.hash,link]));
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    sectionLinks.forEach(link=>{
      const isCurrent=link.hash===`#${entry.target.id}`;
      link.classList.toggle('is-current',isCurrent);
      if(isCurrent) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  });
},{rootMargin:'-25% 0px -60% 0px'});
$$('main > section[id]').forEach(section=>sectionObserver.observe(section));

/* ---------------- request form ---------------- */
const requestForm=$('#requestForm');
if(requestForm){
  const requestSubmit=requestForm.querySelector('.request-submit');
  const requestStatus=$('#requestStatus');
  const submitLabel=requestSubmit.querySelector('span');
  requestForm.addEventListener('submit',async event=>{
    event.preventDefault();
    requestSubmit.disabled=true;
    requestStatus.dataset.state='';
    requestStatus.textContent=tr('form.sending');
    let response;
    try{
      response=await fetch('/api/request',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(Object.fromEntries(new FormData(requestForm)))
      });
    }catch{
      requestStatus.dataset.state='error';
      requestStatus.textContent=tr('form.connError');
      requestSubmit.disabled=false;
      return;
    }
    let result;
    try{result=await response.json()}catch{
      requestStatus.dataset.state='error';
      requestStatus.textContent=tr('form.processError');
      requestSubmit.disabled=false;
      return;
    }
    if(!response.ok){
      requestStatus.dataset.state='error';
      requestStatus.textContent=result.error||tr('form.processError');
      requestSubmit.disabled=false;
      return;
    }
    requestForm.reset();
    requestStatus.dataset.state='success';
    requestStatus.textContent=tr('form.success');
    requestSubmit.classList.add('sent');
    submitLabel.textContent='✓ '+tr('form.sent');
    setTimeout(()=>{
      requestSubmit.classList.remove('sent');
      submitLabel.textContent=tr('form.submit');
      requestSubmit.disabled=false;
    },3500);
  });
}

/* ---------------- init language ---------------- */
applyLang(lang);
