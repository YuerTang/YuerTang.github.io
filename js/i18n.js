/* ==========================================================================
   Internationalization (i18n) — yuertang.dev
   Supports: EN, ZH, ES, FR, DE
   ========================================================================== */

(function () {
  'use strict';

  var TRANSLATIONS = {
    en: {
      'nav.research': 'Research',
      'nav.publications': 'Publications',
      'nav.insights': 'Insights',
      'hero.tagline': '"Build robots that learn. Understand intelligence along the way."',
      'hero.bio': 'Fourth-year UCLA undergraduate studying Applied Mathematics and Linguistics & Computer Science. I\'m broadly interested in how robots can learn and reason \u2014 a fascination that grew out of a deeper curiosity about the nature of intelligence itself. Fortunate to receive mentorship from <a href="http://www.stat.ucla.edu/~ywu/">Prof. Yingnian Wu</a>, <a href="https://sites.google.com/view/justin-baker/home">Dr. Justin Baker</a>, and <a href="https://jiayuanm.com/">Dr. Jiayuan Mao</a>.',
      'section.news': 'News',
      'section.research': 'Research',
      'section.research.subtitle': 'Building robotic agents that learn and plan in ways that support people.',
      'filter.all': 'All',
      'filter.robotics': 'Robotics',
      'filter.planning': 'Planning & Inference',
      'filter.neural': 'Neural Dynamics',
      'filter.vision': 'Computer Vision',
      'news.1': 'Paper accepted to the <a href="https://openreview.net/group?id=AAAI.org/2026/Workshop/NeuroAI">AAAI 2026 NeuroAI Workshop</a>. See you in Singapore!',
      'news.2': 'Presented <a href="https://meetings.ams.org/math/jmm2026/meetingapp.cgi/Paper/59043">"When Linear Models Aren\'t Enough"</a> at the Joint Mathematics Meeting in Washington D.C.',
      'news.3': 'Submitted work on <a href="https://openreview.net/forum?id=RanDLuKUQT">coherent memory structures in neural fields</a> to ICLR 2026.',
      'news.4': 'Started working with <a href="https://jiayuanm.com/">Jiayuan Mao</a> at MIT CSAIL. My first time working on robotics!',
      'project.scale.desc': 'Compact, interpretable latent representations for fine-grained robotic manipulation with continuous scale control.',
      'project.malp.desc': 'Integrating MAML with Latent Plan Transformers for multi-task manipulation with rapid adaptation.',
      'project.goal.desc': 'Modeling and inferring agent goals in grid environments using Bayesian inference and reinforcement learning.',
      'project.memory.desc': 'Explainable AI architectures using biologically inspired neural field representations and coherent structures.',
      'project.mz.desc': 'Operator-theoretic separation of neural dynamics into resolved and unresolved states with major MSE reduction.',
      'project.camera.desc': 'Lightweight attention-enhanced backbone achieving 25% translation and 35% rotation error reduction.',
      'footer.rights': 'All rights reserved.'
    },
    zh: {
      'nav.research': '\u7814\u7a76',
      'nav.publications': '\u53d1\u8868',
      'nav.insights': '\u6d1e\u5bdf',
      'hero.tagline': '\u201c\u6784\u5efa\u4f1a\u5b66\u4e60\u7684\u673a\u5668\u4eba\uff0c\u5728\u8fc7\u7a0b\u4e2d\u7406\u89e3\u667a\u80fd\u3002\u201d',
      'hero.bio': 'UCLA\u56db\u5e74\u7ea7\u672c\u79d1\u751f\uff0c\u4e3b\u4fee\u5e94\u7528\u6570\u5b66\u4ee5\u53ca\u8bed\u8a00\u5b66\u4e0e\u8ba1\u7b97\u673a\u79d1\u5b66\u3002\u6211\u5bf9\u673a\u5668\u4eba\u5982\u4f55\u5b66\u4e60\u548c\u63a8\u7406\u6709\u7740\u5e7f\u6cdb\u7684\u5174\u8da3\u2014\u2014\u8fd9\u79cd\u7740\u8ff7\u6e90\u4e8e\u5bf9\u667a\u80fd\u672c\u8d28\u66f4\u6df1\u5c42\u7684\u597d\u5947\u3002\u5f88\u8363\u5e78\u83b7\u5f97 <a href="http://www.stat.ucla.edu/~ywu/">Prof. Yingnian Wu</a>\u3001<a href="https://sites.google.com/view/justin-baker/home">Dr. Justin Baker</a> \u548c <a href="https://jiayuanm.com/">Dr. Jiayuan Mao</a> \u7684\u6307\u5bfc\u3002',
      'section.news': '\u6700\u65b0\u52a8\u6001',
      'section.research': '\u7814\u7a76',
      'section.research.subtitle': '\u6784\u5efa\u80fd\u591f\u5b66\u4e60\u548c\u89c4\u5212\u4ee5\u652f\u6301\u4eba\u7c7b\u7684\u673a\u5668\u4eba\u667a\u80fd\u4f53\u3002',
      'filter.all': '\u5168\u90e8',
      'filter.robotics': '\u673a\u5668\u4eba\u5b66',
      'filter.planning': '\u89c4\u5212\u4e0e\u63a8\u7406',
      'filter.neural': '\u795e\u7ecf\u52a8\u529b\u5b66',
      'filter.vision': '\u8ba1\u7b97\u673a\u89c6\u89c9',
      'news.1': '\u8bba\u6587\u88ab <a href="https://openreview.net/group?id=AAAI.org/2026/Workshop/NeuroAI">AAAI 2026 NeuroAI Workshop</a> \u5f55\u7528\u3002\u65b0\u52a0\u5761\u89c1\uff01',
      'news.2': '\u5728\u534e\u76db\u987f\u7684\u8054\u5408\u6570\u5b66\u4f1a\u8bae\u4e0a\u62a5\u544a\u4e86 <a href="https://meetings.ams.org/math/jmm2026/meetingapp.cgi/Paper/59043">\u201c\u5f53\u7ebf\u6027\u6a21\u578b\u4e0d\u591f\u7528\u65f6\u201d</a>\u3002',
      'news.3': '\u5411 ICLR 2026 \u63d0\u4ea4\u4e86\u5173\u4e8e<a href="https://openreview.net/forum?id=RanDLuKUQT">\u795e\u7ecf\u573a\u4e2d\u76f8\u5e72\u8bb0\u5fc6\u7ed3\u6784</a>\u7684\u5de5\u4f5c\u3002',
      'news.4': '\u5f00\u59cb\u4e0e MIT CSAIL \u7684 <a href="https://jiayuanm.com/">Jiayuan Mao</a> \u5408\u4f5c\u3002\u6211\u7b2c\u4e00\u6b21\u63a5\u89e6\u673a\u5668\u4eba\u7814\u7a76\uff01',
      'project.scale.desc': '\u7d27\u51d1\u3001\u53ef\u89e3\u91ca\u7684\u6f5c\u5728\u8868\u5f81\uff0c\u7528\u4e8e\u7cbe\u7ec6\u673a\u5668\u4eba\u64cd\u4f5c\u7684\u8fde\u7eed\u5c3a\u5ea6\u63a7\u5236\u3002',
      'project.malp.desc': '\u5c06 MAML \u4e0e\u6f5c\u5728\u8ba1\u5212 Transformer \u7ed3\u5408\uff0c\u5b9e\u73b0\u591a\u4efb\u52a1\u64cd\u4f5c\u7684\u5feb\u901f\u9002\u5e94\u3002',
      'project.goal.desc': '\u4f7f\u7528\u8d1d\u53f6\u65af\u63a8\u7406\u548c\u5f3a\u5316\u5b66\u4e60\u5728\u7f51\u683c\u73af\u5883\u4e2d\u5efa\u6a21\u548c\u63a8\u65ad\u667a\u80fd\u4f53\u76ee\u6807\u3002',
      'project.memory.desc': '\u4f7f\u7528\u751f\u7269\u542f\u53d1\u7684\u795e\u7ecf\u573a\u8868\u5f81\u548c\u76f8\u5e72\u7ed3\u6784\u7684\u53ef\u89e3\u91ca AI \u67b6\u6784\u3002',
      'project.mz.desc': '\u7b97\u5b50\u7406\u8bba\u5c06\u795e\u7ecf\u52a8\u529b\u5b66\u5206\u89e3\u4e3a\u5df2\u89e3\u6790\u548c\u672a\u89e3\u6790\u72b6\u6001\uff0c\u663e\u8457\u964d\u4f4e MSE\u3002',
      'project.camera.desc': '\u8f7b\u91cf\u6ce8\u610f\u529b\u589e\u5f3a\u4e3b\u5e72\u7f51\u7edc\uff0c\u5e73\u79fb\u8bef\u5dee\u964d\u4f4e25%\uff0c\u65cb\u8f6c\u8bef\u5dee\u964d\u4f4e35%\u3002',
      'footer.rights': '\u4fdd\u7559\u6240\u6709\u6743\u5229\u3002'
    },
    es: {
      'nav.research': 'Investigaci\u00f3n',
      'nav.publications': 'Publicaciones',
      'nav.insights': 'Perspectivas',
      'hero.tagline': '\u201cConstruir robots que aprenden. Entender la inteligencia en el camino.\u201d',
      'hero.bio': 'Estudiante de cuarto a\u00f1o en UCLA, cursando Matem\u00e1ticas Aplicadas y Ling\u00fc\u00edstica & Ciencias de la Computaci\u00f3n. Me interesa c\u00f3mo los robots pueden aprender y razonar \u2014 una fascinaci\u00f3n que surgi\u00f3 de una curiosidad m\u00e1s profunda sobre la naturaleza de la inteligencia. Afortunado de recibir mentor\u00eda de <a href="http://www.stat.ucla.edu/~ywu/">Prof. Yingnian Wu</a>, <a href="https://sites.google.com/view/justin-baker/home">Dr. Justin Baker</a> y <a href="https://jiayuanm.com/">Dr. Jiayuan Mao</a>.',
      'section.news': 'Noticias',
      'section.research': 'Investigaci\u00f3n',
      'section.research.subtitle': 'Construyendo agentes rob\u00f3ticos que aprenden y planifican para apoyar a las personas.',
      'filter.all': 'Todo',
      'filter.robotics': 'Rob\u00f3tica',
      'filter.planning': 'Planificaci\u00f3n e Inferencia',
      'filter.neural': 'Din\u00e1mica Neuronal',
      'filter.vision': 'Visi\u00f3n por Computadora',
      'news.1': 'Art\u00edculo aceptado en el <a href="https://openreview.net/group?id=AAAI.org/2026/Workshop/NeuroAI">AAAI 2026 NeuroAI Workshop</a>. \u00a1Nos vemos en Singapur!',
      'news.2': 'Present\u00e9 <a href="https://meetings.ams.org/math/jmm2026/meetingapp.cgi/Paper/59043">\u201cCuando los modelos lineales no son suficientes\u201d</a> en la Reuni\u00f3n Conjunta de Matem\u00e1ticas en Washington D.C.',
      'news.3': 'Enviado trabajo sobre <a href="https://openreview.net/forum?id=RanDLuKUQT">estructuras de memoria coherentes en campos neuronales</a> a ICLR 2026.',
      'news.4': 'Comenc\u00e9 a trabajar con <a href="https://jiayuanm.com/">Jiayuan Mao</a> en MIT CSAIL. \u00a1Mi primera vez en rob\u00f3tica!',
      'project.scale.desc': 'Representaciones latentes compactas e interpretables para manipulaci\u00f3n rob\u00f3tica con control continuo de escala.',
      'project.malp.desc': 'Integrando MAML con Transformers de Plan Latente para manipulaci\u00f3n multitarea con adaptaci\u00f3n r\u00e1pida.',
      'project.goal.desc': 'Modelado e inferencia de objetivos de agentes en entornos de cuadr\u00edcula usando inferencia bayesiana.',
      'project.memory.desc': 'Arquitecturas de IA explicable usando representaciones de campo neuronal inspiradas biol\u00f3gicamente.',
      'project.mz.desc': 'Separaci\u00f3n te\u00f3rico-operacional de din\u00e1micas neuronales con reducci\u00f3n significativa de MSE.',
      'project.camera.desc': 'Red dorsal mejorada con atenci\u00f3n: 25% reducci\u00f3n en error de traslaci\u00f3n y 35% en rotaci\u00f3n.',
      'footer.rights': 'Todos los derechos reservados.'
    },
    fr: {
      'nav.research': 'Recherche',
      'nav.publications': 'Publications',
      'nav.insights': 'Perspectives',
      'hero.tagline': '\u00ab Construire des robots qui apprennent. Comprendre l\u2019intelligence en chemin. \u00bb',
      'hero.bio': '\u00c9tudiant en quatri\u00e8me ann\u00e9e \u00e0 UCLA en math\u00e9matiques appliqu\u00e9es et linguistique & informatique. Je m\u2019int\u00e9resse \u00e0 la fa\u00e7on dont les robots peuvent apprendre et raisonner \u2014 une fascination n\u00e9e d\u2019une curiosit\u00e9 plus profonde pour la nature de l\u2019intelligence. J\u2019ai la chance d\u2019\u00eatre encadr\u00e9 par <a href="http://www.stat.ucla.edu/~ywu/">Prof. Yingnian Wu</a>, <a href="https://sites.google.com/view/justin-baker/home">Dr. Justin Baker</a> et <a href="https://jiayuanm.com/">Dr. Jiayuan Mao</a>.',
      'section.news': 'Actualit\u00e9s',
      'section.research': 'Recherche',
      'section.research.subtitle': 'Construire des agents robotiques qui apprennent et planifient pour aider les gens.',
      'filter.all': 'Tout',
      'filter.robotics': 'Robotique',
      'filter.planning': 'Planification & Inf\u00e9rence',
      'filter.neural': 'Dynamique Neuronale',
      'filter.vision': 'Vision par Ordinateur',
      'news.1': 'Article accept\u00e9 au <a href="https://openreview.net/group?id=AAAI.org/2026/Workshop/NeuroAI">AAAI 2026 NeuroAI Workshop</a>. Rendez-vous \u00e0 Singapour !',
      'news.2': 'Pr\u00e9sentation de <a href="https://meetings.ams.org/math/jmm2026/meetingapp.cgi/Paper/59043">\u00ab Quand les mod\u00e8les lin\u00e9aires ne suffisent pas \u00bb</a> \u00e0 la R\u00e9union Conjointe de Math\u00e9matiques \u00e0 Washington D.C.',
      'news.3': 'Soumission de travaux sur les <a href="https://openreview.net/forum?id=RanDLuKUQT">structures de m\u00e9moire coh\u00e9rentes dans les champs neuronaux</a> \u00e0 ICLR 2026.',
      'news.4': 'D\u00e9but de collaboration avec <a href="https://jiayuanm.com/">Jiayuan Mao</a> au MIT CSAIL. Ma premi\u00e8re exp\u00e9rience en robotique !',
      'project.scale.desc': 'Repr\u00e9sentations latentes compactes et interpr\u00e9tables pour la manipulation robotique fine avec contr\u00f4le continu d\u2019\u00e9chelle.',
      'project.malp.desc': 'Int\u00e9gration de MAML avec les Transformers de Plan Latent pour la manipulation multi-t\u00e2ches avec adaptation rapide.',
      'project.goal.desc': 'Mod\u00e9lisation et inf\u00e9rence des objectifs d\u2019agents dans des environnements en grille par inf\u00e9rence bay\u00e9sienne.',
      'project.memory.desc': 'Architectures d\u2019IA explicable utilisant des repr\u00e9sentations de champs neuronaux bio-inspir\u00e9es.',
      'project.mz.desc': 'S\u00e9paration op\u00e9rateur-th\u00e9orique des dynamiques neuronales avec r\u00e9duction majeure du MSE.',
      'project.camera.desc': 'R\u00e9seau dorsal am\u00e9lior\u00e9 par attention : r\u00e9duction de 25% en translation et 35% en rotation.',
      'footer.rights': 'Tous droits r\u00e9serv\u00e9s.'
    },
    de: {
      'nav.research': 'Forschung',
      'nav.publications': 'Publikationen',
      'nav.insights': 'Einblicke',
      'hero.tagline': '\u201eRoboter bauen, die lernen. Intelligenz dabei verstehen.\u201c',
      'hero.bio': 'Student im vierten Jahr an der UCLA in Angewandter Mathematik und Linguistik & Informatik. Ich interessiere mich daf\u00fcr, wie Roboter lernen und schlussfolgern k\u00f6nnen \u2014 eine Faszination, die aus einer tieferen Neugier \u00fcber das Wesen der Intelligenz entstand. Ich bin dankbar f\u00fcr die Betreuung durch <a href="http://www.stat.ucla.edu/~ywu/">Prof. Yingnian Wu</a>, <a href="https://sites.google.com/view/justin-baker/home">Dr. Justin Baker</a> und <a href="https://jiayuanm.com/">Dr. Jiayuan Mao</a>.',
      'section.news': 'Neuigkeiten',
      'section.research': 'Forschung',
      'section.research.subtitle': 'Roboter-Agenten entwickeln, die lernen und planen, um Menschen zu unterst\u00fctzen.',
      'filter.all': 'Alle',
      'filter.robotics': 'Robotik',
      'filter.planning': 'Planung & Inferenz',
      'filter.neural': 'Neurale Dynamik',
      'filter.vision': 'Computer Vision',
      'news.1': 'Paper beim <a href="https://openreview.net/group?id=AAAI.org/2026/Workshop/NeuroAI">AAAI 2026 NeuroAI Workshop</a> angenommen. Wir sehen uns in Singapur!',
      'news.2': 'Pr\u00e4sentation von <a href="https://meetings.ams.org/math/jmm2026/meetingapp.cgi/Paper/59043">\u201eWenn lineare Modelle nicht ausreichen\u201c</a> beim Joint Mathematics Meeting in Washington D.C.',
      'news.3': 'Arbeit \u00fcber <a href="https://openreview.net/forum?id=RanDLuKUQT">koh\u00e4rente Ged\u00e4chtnisstrukturen in neuronalen Feldern</a> bei ICLR 2026 eingereicht.',
      'news.4': 'Beginn der Zusammenarbeit mit <a href="https://jiayuanm.com/">Jiayuan Mao</a> am MIT CSAIL. Mein erster Kontakt mit Robotik!',
      'project.scale.desc': 'Kompakte, interpretierbare latente Repr\u00e4sentationen f\u00fcr feinmotorische Robotermanipulation mit kontinuierlicher Skalenkontrolle.',
      'project.malp.desc': 'Integration von MAML mit Latent Plan Transformers f\u00fcr Multitask-Manipulation mit schneller Anpassung.',
      'project.goal.desc': 'Modellierung und Inferenz von Agentenzielen in Gitterumgebungen mittels Bayesscher Inferenz.',
      'project.memory.desc': 'Erkl\u00e4rbare KI-Architekturen mit biologisch inspirierten neuronalen Felddarstellungen.',
      'project.mz.desc': 'Operatortheoretische Trennung neuronaler Dynamik in aufgel\u00f6ste und unaufgel\u00f6ste Zust\u00e4nde mit deutlicher MSE-Reduktion.',
      'project.camera.desc': 'Aufmerksamkeitsverst\u00e4rktes leichtgewichtiges Backbone-Netzwerk: 25% weniger Translationsfehler, 35% weniger Rotationsfehler.',
      'footer.rights': 'Alle Rechte vorbehalten.'
    }
  };

  var LANG_LABELS = { en: 'EN', zh: '\u4e2d\u6587', es: 'ES', fr: 'FR', de: 'DE' };

  var currentLang = localStorage.getItem('site-lang') || 'en';

  function applyTranslations(lang) {
    var dict = TRANSLATIONS[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update button label
    var btn = document.querySelector('.lang-btn');
    if (btn) btn.textContent = LANG_LABELS[lang] || lang.toUpperCase();

    // Update active state in dropdown
    document.querySelectorAll('.lang-option').forEach(function (opt) {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });
  }

  // Apply saved language on load
  applyTranslations(currentLang);

  // Language switcher toggle
  var switcher = document.querySelector('.lang-switcher');
  var langBtn = document.querySelector('.lang-btn');

  if (switcher && langBtn) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      switcher.classList.toggle('open');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function () {
      switcher.classList.remove('open');
    });

    // Language option clicks
    document.querySelectorAll('.lang-option').forEach(function (opt) {
      opt.addEventListener('click', function (e) {
        e.stopPropagation();
        var lang = opt.getAttribute('data-lang');
        currentLang = lang;
        localStorage.setItem('site-lang', lang);
        applyTranslations(lang);
        switcher.classList.remove('open');
      });
    });
  }

  // Expose for other pages
  window.__i18n = { apply: applyTranslations, current: function () { return currentLang; } };
})();
