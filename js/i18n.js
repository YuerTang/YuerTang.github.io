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
      'hero.tagline': '"It started with a simple question: what is the model inside our minds?"',
      'hero.bio': 'Hi, I\'m a senior at UCLA studying Data Theory with a minor in Data Science Engineering. I\'m fortunate to receive mentorship from <a href="http://www.stat.ucla.edu/~ywu/">Prof. Yingnian Wu</a>, <a href="https://sites.google.com/view/justin-baker/home">Prof. Justin Baker</a>, and <a href="https://jiayuanm.com/">Prof. Jiayuan Mao</a>.',
      'hero.seeking': '<strong>I\'m actively seeking research positions (June 2026 to August 2027), 2027 PhD programs, and startup opportunities.</strong>',
      'hero.research_heading': 'Research Highlights',
      'hero.research_bio': 'I believe that for a machine to perceive, reason, and act in the world, it needs an internal model, one built from multimodal experience, not language alone. Such a model should live in a latent space where different modalities meet: vision, touch, proprioception, language. The key question is abstraction. A robot pouring water and a robot planning a meal need the same world, represented at very different levels of detail. I study how to structure these latent spaces so that the right abstraction emerges for the right task. I draw on ideas from cognitive science, neuroscience, and mathematics. In my current work, I explore this through structured latent representations for robotic manipulation, meta-adaptive planning, and mathematically grounded neural architectures.',
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
      'hero.tagline': '\u201c\u4e00\u5207\u59cb\u4e8e\u4e00\u4e2a\u7b80\u5355\u7684\u95ee\u9898\uff1a\u6211\u4eec\u5fc3\u667a\u4e2d\u7684\u6a21\u578b\u662f\u4ec0\u4e48\uff1f\u201d',
      'hero.bio': '\u6211\u662fUCLA\u5927\u56db\u5b66\u751f\uff0c\u4e3b\u4fee\u6570\u636e\u7406\u8bba\uff0c\u8f85\u4fee\u6570\u636e\u79d1\u5b66\u5de5\u7a0b\u3002\u6709\u5e78\u5f97\u5230 <a href="http://www.stat.ucla.edu/~ywu/">Prof. Yingnian Wu</a>\u3001<a href="https://sites.google.com/view/justin-baker/home">Prof. Justin Baker</a> \u548c <a href="https://jiayuanm.com/">Prof. Jiayuan Mao</a> \u7684\u6307\u5bfc\u3002',
      'hero.seeking': '<strong>\u6211\u6b63\u5728\u79ef\u6781\u5bfb\u627e\u7814\u7a76\u5c97\u4f4d\uff082026\u5e746\u6708\u81f32027\u5e748\u6708\uff09\u30012027\u5e74\u535a\u58eb\u9879\u76ee\u548c\u521b\u4e1a\u673a\u4f1a\u3002</strong>',
      'hero.research_heading': '\u7814\u7a76\u4eae\u70b9',
      'hero.research_bio': '\u6211\u76f8\u4fe1\uff0c\u8981\u8ba9\u673a\u5668\u611f\u77e5\u3001\u63a8\u7406\u5e76\u5728\u4e16\u754c\u4e2d\u884c\u52a8\uff0c\u5b83\u9700\u8981\u4e00\u4e2a\u5185\u90e8\u6a21\u578b\u2014\u2014\u4e00\u4e2a\u57fa\u4e8e\u591a\u6a21\u6001\u7ecf\u9a8c\u800c\u975e\u4ec5\u4ec5\u8bed\u8a00\u6784\u5efa\u7684\u6a21\u578b\u3002\u8fd9\u6837\u7684\u6a21\u578b\u5e94\u8be5\u5b58\u5728\u4e8e\u4e00\u4e2a\u6f5c\u5728\u7a7a\u95f4\u4e2d\uff0c\u5728\u90a3\u91cc\u4e0d\u540c\u7684\u6a21\u6001\u4ea4\u6c47\uff1a\u89c6\u89c9\u3001\u89e6\u89c9\u3001\u672c\u4f53\u611f\u89c9\u3001\u8bed\u8a00\u3002\u5173\u952e\u95ee\u9898\u662f\u62bd\u8c61\u3002\u4e00\u4e2a\u5012\u6c34\u7684\u673a\u5668\u4eba\u548c\u4e00\u4e2a\u89c4\u5212\u996e\u98df\u7684\u673a\u5668\u4eba\u9700\u8981\u540c\u4e00\u4e2a\u4e16\u754c\uff0c\u4f46\u4ee5\u975e\u5e38\u4e0d\u540c\u7684\u7ec6\u8282\u7a0b\u5ea6\u6765\u8868\u793a\u3002\u6211\u7814\u7a76\u5982\u4f55\u7ed3\u6784\u5316\u8fd9\u4e9b\u6f5c\u5728\u7a7a\u95f4\uff0c\u4f7f\u5f97\u6b63\u786e\u7684\u62bd\u8c61\u80fd\u4e3a\u6b63\u786e\u7684\u4efb\u52a1\u6d8c\u73b0\u3002\u6211\u501f\u9274\u8ba4\u77e5\u79d1\u5b66\u3001\u795e\u7ecf\u79d1\u5b66\u548c\u6570\u5b66\u7684\u601d\u60f3\u3002\u5728\u5f53\u524d\u7684\u5de5\u4f5c\u4e2d\uff0c\u6211\u901a\u8fc7\u7ed3\u6784\u5316\u6f5c\u5728\u8868\u793a\u7528\u4e8e\u673a\u5668\u4eba\u64cd\u4f5c\u3001\u5143\u81ea\u9002\u5e94\u89c4\u5212\u548c\u6570\u5b66\u57fa\u7840\u7684\u795e\u7ecf\u67b6\u6784\u6765\u63a2\u7d22\u8fd9\u4e00\u95ee\u9898\u3002',
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
      'hero.tagline': '\u201cTodo empez\u00f3 con una pregunta simple: \u00bfcu\u00e1l es el modelo dentro de nuestras mentes?\u201d',
      'hero.bio': 'Soy estudiante de \u00faltimo a\u00f1o en UCLA, cursando Teor\u00eda de Datos con especializaci\u00f3n menor en Ingenier\u00eda de Ciencia de Datos. Tengo la fortuna de recibir mentor\u00eda de <a href="http://www.stat.ucla.edu/~ywu/">Prof. Yingnian Wu</a>, <a href="https://sites.google.com/view/justin-baker/home">Prof. Justin Baker</a> y <a href="https://jiayuanm.com/">Prof. Jiayuan Mao</a>.',
      'hero.seeking': '<strong>Busco activamente posiciones de investigaci\u00f3n (junio 2026 a agosto 2027), programas de doctorado 2027 y oportunidades de startups.</strong>',
      'hero.research_heading': 'Investigaci\u00f3n Destacada',
      'hero.research_bio': 'Creo que para que una m\u00e1quina perciba, razone y act\u00fae en el mundo, necesita un modelo interno, uno construido a partir de experiencia multimodal, no solo lenguaje. Tal modelo debe vivir en un espacio latente donde diferentes modalidades se encuentren: visi\u00f3n, tacto, propiocepci\u00f3n, lenguaje. La pregunta clave es la abstracci\u00f3n. Un robot que sirve agua y un robot que planifica una comida necesitan el mismo mundo, representado a niveles de detalle muy diferentes. Estudio c\u00f3mo estructurar estos espacios latentes para que la abstracci\u00f3n correcta surja para la tarea correcta. Me inspiro en ideas de la ciencia cognitiva, la neurociencia y las matem\u00e1ticas. En mi trabajo actual, exploro esto a trav\u00e9s de representaciones latentes estructuradas para manipulaci\u00f3n rob\u00f3tica, planificaci\u00f3n meta-adaptativa y arquitecturas neuronales con fundamentos matem\u00e1ticos.',
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
      'hero.tagline': '\u00ab Tout a commenc\u00e9 par une question simple : quel est le mod\u00e8le dans nos esprits ? \u00bb',
      'hero.bio': 'Je suis en derni\u00e8re ann\u00e9e \u00e0 UCLA en Th\u00e9orie des Donn\u00e9es avec une sp\u00e9cialisation mineure en Ing\u00e9nierie des Sciences des Donn\u00e9es. J\u2019ai la chance d\u2019\u00eatre encadr\u00e9 par <a href="http://www.stat.ucla.edu/~ywu/">Prof. Yingnian Wu</a>, <a href="https://sites.google.com/view/justin-baker/home">Prof. Justin Baker</a> et <a href="https://jiayuanm.com/">Prof. Jiayuan Mao</a>.',
      'hero.seeking': '<strong>Je recherche activement des postes de recherche (juin 2026 \u00e0 ao\u00fbt 2027), des programmes de doctorat 2027 et des opportunit\u00e9s de startups.</strong>',
      'hero.research_heading': 'Points forts de la recherche',
      'hero.research_bio': 'Je crois que pour qu\u2019une machine per\u00e7oive, raisonne et agisse dans le monde, elle a besoin d\u2019un mod\u00e8le interne, construit \u00e0 partir d\u2019exp\u00e9riences multimodales, pas seulement du langage. Un tel mod\u00e8le devrait vivre dans un espace latent o\u00f9 diff\u00e9rentes modalit\u00e9s se rencontrent : vision, toucher, proprioception, langage. La question cl\u00e9 est l\u2019abstraction. Un robot qui verse de l\u2019eau et un robot qui planifie un repas ont besoin du m\u00eame monde, repr\u00e9sent\u00e9 \u00e0 des niveaux de d\u00e9tail tr\u00e8s diff\u00e9rents. J\u2019\u00e9tudie comment structurer ces espaces latents pour que la bonne abstraction \u00e9merge pour la bonne t\u00e2che. Je m\u2019inspire des sciences cognitives, des neurosciences et des math\u00e9matiques. Dans mes travaux actuels, j\u2019explore cela \u00e0 travers des repr\u00e9sentations latentes structur\u00e9es pour la manipulation robotique, la planification m\u00e9ta-adaptative et des architectures neuronales math\u00e9matiquement fond\u00e9es.',
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
      'hero.tagline': '\u201eAlles begann mit einer einfachen Frage: Was ist das Modell in unseren K\u00f6pfen?\u201c',
      'hero.bio': 'Ich bin im letzten Jahr an der UCLA und studiere Datentheorie mit Nebenfach Datenwissenschaft und Ingenieurwesen. Ich habe das Gl\u00fcck, von <a href="http://www.stat.ucla.edu/~ywu/">Prof. Yingnian Wu</a>, <a href="https://sites.google.com/view/justin-baker/home">Prof. Justin Baker</a> und <a href="https://jiayuanm.com/">Prof. Jiayuan Mao</a> betreut zu werden.',
      'hero.seeking': '<strong>Ich suche aktiv nach Forschungspositionen (Juni 2026 bis August 2027), Promotionsprogrammen 2027 und Startup-M\u00f6glichkeiten.</strong>',
      'hero.research_heading': 'Forschungsschwerpunkte',
      'hero.research_bio': 'Ich glaube, dass eine Maschine, um die Welt wahrzunehmen, zu schlussfolgern und in ihr zu handeln, ein internes Modell braucht \u2014 eines, das aus multimodaler Erfahrung aufgebaut ist, nicht nur aus Sprache. Ein solches Modell sollte in einem latenten Raum leben, in dem verschiedene Modalit\u00e4ten zusammentreffen: Sehen, Tasten, Propriozeption, Sprache. Die Schl\u00fcsselfrage ist Abstraktion. Ein Roboter, der Wasser eingie\u00dft, und ein Roboter, der eine Mahlzeit plant, brauchen dieselbe Welt, auf sehr unterschiedlichen Detailebenen dargestellt. Ich untersuche, wie man diese latenten R\u00e4ume so strukturiert, dass die richtige Abstraktion f\u00fcr die richtige Aufgabe entsteht. Ich lasse mich von Kognitionswissenschaft, Neurowissenschaft und Mathematik inspirieren. In meiner aktuellen Arbeit erforsche ich dies durch strukturierte latente Repr\u00e4sentationen f\u00fcr robotische Manipulation, meta-adaptive Planung und mathematisch fundierte neuronale Architekturen.',
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
