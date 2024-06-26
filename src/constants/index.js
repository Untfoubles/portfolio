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
  norma,
  martijn,
  demi,
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
    title: "Web Developer",
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
    title: "UI/UX Developer",
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
    iconBg: "#D1BDC4  ",
    date: "Oktober 2020 - Februari 2021",
    points: [
      "Verantwoordelijk voor het schoonmaken en onderhouden van kantoorruimtes volgens de gestelde normen en richtlijnen.",
      "Voerde administratieve taken uit, zoals gegevensinvoer, documentbeheer en agendabeheer.",
      "Assisteerde bij het opstellen en bewerken van zakelijke documenten, zoals brieven, rapporten en presentaties",
      "Ik heb geleerd om gedisciplineerd, netjes en zorgvuldig te werk te gaan en mijn afspraken na te komen."],
  },
  {
    title: "Piano/Engels lerares",
    company_name: "Veldhuizen, Utrecht",
    icon: tesla,
    iconBg: "#D1BDC4 ",
    date: "Mei 2022, Heden",
    points: [
      "Verzorgde individuele en groepslessen piano aan leerlingen van verschillende leeftijden en niveaus.",
      "Onderwees Engelse taalvaardigheden aan studenten, inclusief grammatica, vocabulaire en conversatie.",
      "Ontwikkelde lesplannen en aangepaste lesmaterialen om aan de behoeften van de kinderen te voldoen.",
      "Communicatief, geduldig en structureel bezig geweest.",
    ],
  },
  {
    title: "Webshop Developer",
    company_name: "Shopify,  Wordpress",
    icon: shopify,
    iconBg: "#D1BDC4 ",
    date: "2023",
    points: [
      "Ecommerce webshop ontwikkelen in Wordpress met nuttige plugins als Woocommerce. ",
      "Het toepassen van responsief ontwerp en het verzekeren van werking in diverse webbrowsers.",
      "Module gevolgd voor het verkopen van hoge kwaliteits producten op shopify platform",
    ],
  },
  {
    title: "System Development",
    company_name: "GLU,  Bureau",
    icon: system,
    iconBg: "#D1BDC4 ",
    date: "2024 Heden",
    points: [
      "Het ontwikkelen van een geavanceerd inchecksysteem voor leraren om de afwezigheid van leerlingen bij te houden. Studenten kunnen eenvoudig inloggen via een incheckpaal met behulp van ons systeem. ",
      "Project gerealizeerd voor het Bureau afdeling op het GLU, met behulp van een productieve samenwerking met andere developers. ",
      "Gebruik gemaakt van diverse web-techniken voor uiterste werking.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ahsen is ondernemend en sociaal. Ze valt op door haar opgewekte en positieve persoonlijkheid.",
    name: "Martijn Kunstman",
    designation: "Developing teacher",
    company: "GLU",
    image: martijn,
  },
  {
    testimonial:
      "Ik ben vaak vastgelopen tijdens de programmeeropdrachten, maar gelukkig heeft Ahsen mij talloos kunnen helpen tijdens onze studie.",
    name: "Norma Hlehel",
    designation: "Developing student",
    company: "GLU", 
    image: norma,
  },
  {
    testimonial:
      "Ahsen is zeker een waardevolle toevoeging aan elk team. Professioneel en haar passie voor coderen en oog voor detail maakt haar uniek.",
    name: "Demi Fahmi",
    designation: "Developing student",
    company: "GLU",
    image: demi,
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
    "In samenwerking met een andere developer hebben we een Netflix-kloon ontworpen en gebouwd. Dit streamingplatform is ontwikkeld om dezelfde ervaring te bieden als Netflix, waarbij je door films kunt scrollen en je favorieten kunt opslaan en meer !",
        tags: [
      {
        name: "react",
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
    image: jobit,
    source_code_link: "https://github.com/Jabir220501/module-15",
  },
  {
    name: "MERN Chat App",
    description: "Dit is een realtime chat app gemaakt met react, node.js, socket.io, mongodb en express. De chat app is  responsive en gestyled met de styled componenten. Hier kun je registreren, in en uit loggen, ook avatars uitzoeken en berichten verzenden door middel van sockets. //Under construction ! //",

          tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "socket.IO",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
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