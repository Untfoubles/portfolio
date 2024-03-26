import {
   mobile,
   backend,
   creator,
   web,
   javascript,
   typescript,
   html,
   css,
   reactjs,
   php,
   tailwind,
   nodejs,
   django,
   git,
   figma,
   docker,
   meta,
   starbucks,
   tesla,
   shopify,
   system,
   carrent,
   jobit,
   app,
   threejs,
 } from "../assets";
 
 export const navLinks = [
   {
     id: "about",
     title: "Over",
   },
   {
     id: "work",
     title: "Werk",
   },
   {
     id: "contact",
     title: "Contact",
   },
 ];
 
 const services = [
   {
     title: "Web(App) Developer",
     icon: web,
   },
   {
     title: "Frontend Developer",
     icon: mobile,
   },
   {
     title: "Backend Developer",
     icon: backend,
   },
   {
     title: " ???",
     icon: creator,
   },
 ];
 
 const technologies = [
   {
     name: "HTML 5",
     icon: html,
   },
   {
     name: "CSS 3",
     icon: css,
   },
   {
     name: "JavaScript",
     icon: javascript,
   },
   {
     name: "TypeScript",
     icon: typescript,
   },
   {
     name: "React JS",
     icon: reactjs,
   },
   {
     name: "PHP",
     icon: php,
   },
   {
     name: "Tailwind CSS",
     icon: tailwind,
   },
   {
     name: "Node JS",
     icon: nodejs,
   },
   {
     name: "Django",
     icon: django,
   },
   {
     name: "Three JS",
     icon: threejs,
   },
   {
     name: "git",
     icon: git,
   },
   {
     name: "figma",
     icon: figma,
   },
   {
     name: "docker",
     icon: docker,
   },
 ];
 
 const experiences = [
   {
     title: "Kantoor Medewerker",
     company_name: "Landzigt, Utrecht",
     icon: starbucks,
     iconBg: "#ff73a9  ",
     date: "Oktober 2020 - Februari 2021",
     points: [
       "Verantwoordelijk voor het schoonmaken en onderhouden van    kantoorruimtes volgens de gestelde normen en richtlijnen.",
       "Voerde administratieve taken uit, zoals gegevensinvoer, documentbeheer en agendabeheer.",
       "Assisteerde bij het opstellen en bewerken van zakelijke documenten, zoals brieven, rapporten en presentaties",
       "Daar heb ik geleerd om gedisciplineerd, netjes en zorgvuldig te werken, en mijn afspraken na te komen.",
     ],
   },
   {
     title: "Piano/Engels lerares",
     company_name: "Veldhuizen, Utrecht",
     icon: tesla,
     iconBg: "#ff73a9 ",
     date: "Mei 2022, Heden",
     points: [
       "Verzorgde individuele en groepslessen piano aan leerlingen van verschillende leeftijden en niveaus.",
       "Onderwees Engelse taalvaardigheden aan studenten, inclusief grammatica, vocabulaire en conversatie.",
       "Ontwikkelde lesplannen en aangepaste lesmaterialen om aan de behoeften van de kinderen te voldoen.",
       "Hier ben ik als lerares communicatief, geduldig en structureel bezig.",
     ],
   },
   {
     title: "Webshop Developer",
     company_name: "Shopify,  Wordpress",
     icon: shopify,
     iconBg: "#ff73a9 ",
     date: "2023",
     points: [
       "Module gevolgd voor verkopen van hoge kwaliteits producten op shopify platform",
       "Ecommerce webshop ontwikkelen in Wordpress met nuttige plugins als Woocommerce. ",
       "Het toepassen van responsief ontwerp en het verzekeren van werking in diverse webbrowsers.",
     ],
   },
   {
    title: "System Development",
    company_name: "GLU,  Bureau",
    icon: system,
    iconBg: "#ff73a9 ",
    date: "2024 Heden",
    points: [
      "Ontwikkelen van complexe in-check systeem voor leraren om absentie van leerlingen te kunnen bijhouden. Studenten kunne  zelf via een in-ckeck paal inloggen met ons gebouwde systeem ",
      "Project gerealizeerd door middel van productieve samenwerking van andere developers. ",
      "....",
    ],
  },
 ];
 
 const testimonials = [
   {
     testimonial:
       "...",
     name: "Ariana",
     designation: "...",
     company: "...",
     image: "https://randomuser.me/api/portraits/women/4.jpg",
   },
   {
     testimonial:
     "Ik ben vaak vastgelopen tijdens de programmeeropdrachten tijdens onze studie, maar gelukkig heeft Ahsen mij talloos kunnen helpen.",
     name: "Norma Hlehel",
     designation: "Klasgenoot",
     company: "GLU",
     image: "https://randomuser.me/api/portraits/men/5.jpg",
   },
   {
     testimonial:
       "...",
     name: "...",
     designation: "...",
     company: "...",
     image: "https://randomuser.me/api/portraits/women/6.jpg",
   },
 ];
 
 const projects = [
   {
     name: "...",
     description:
       "....",
     tags: [
       {
         name: "...",
         color: "blue-text-gradient",
       },
       {
         name: "...",
         color: "green-text-gradient",
       },
       {
         name: "...",
         color: "pink-text-gradient",
       },
     ],
     image: carrent,
     source_code_link: "https://github.com/",
   },
   {
     name: "...",
     description:
       "....",
     tags: [
       {
         name: "...",
         color: "blue-text-gradient",
       },
       {
         name: "...",
         color: "green-text-gradient",
       },
       {
         name: "...",
         color: "pink-text-gradient",
       },
     ],
     image: jobit,
     source_code_link: "https://github.com/",
   },
   {
     name: "Self Help App",
     description:
       "Een gebruiksvriendelijke applicatie dat is ontworpen om te ondersteunen bij het ontwikkelen van positieve gewoontes. Of je nu aan je gezondheid wilt werken, regelmatiger wilt lezen of productiever wilt worden, deze webapp is jouw persoonlijke coach. Met functies zoals nieuwe gewoontes instellen, en dagelijks in je persoonlijke dagboek schrijven. ",
     tags: [
       {
         name: "html",
         color: "blue-text-gradient",
       },
       {
         name: "css",
         color: "green-text-gradient",
       },
       {
         name: "javascript",
         color: "pink-text-gradient",
       },
     ],
     image: app,
     source_code_link: "https://github.com/Untfoubles/app",
   },
 ];
 
 export { services, technologies, experiences, testimonials, projects };