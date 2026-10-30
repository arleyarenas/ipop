// ============================================================
//  📝 TUS DATOS
//  Edita este archivo para cambiar el contenido de toda la web.
//  No hace falta tocar el diseño: las páginas leen de aquí.
//  Lo marcado con "✏️" son textos de ejemplo que debes revisar.
// ============================================================

export const perfil = {
  nom: 'Arley Arenas Saavedra',
  nomCurt: 'Arley',
  rol: 'Tècnic en Sistemes i Xarxes',
  cicle: 'CFGS ASIX',
  ubicacio: 'Catalunya',
  // ✏️ Frase corta que aparece bajo tu nombre en la portada
  lema: "Construeixo, configuro i documento infraestructura. De la cuina al servidor: mateixa organització, un altre tipus de servei.",
  // ✏️ Rellena tus enlaces reales (deja '' si aún no tienes alguno)
  email: 'el-teu-correu@exemple.com',
  linkedin: 'https://www.linkedin.com/in/TU_LINKEDIN',
  github: 'https://github.com/TU_USUARIO',
  telegram: '',
  // Pon tu CV en la carpeta /public con este nombre
  cvPdf: 'cv-arley-arenas.pdf',
  disponible: true, // muestra el indicador "Obert a pràctiques"
};

// ------------------------------------------------------------
//  1. INICI
// ------------------------------------------------------------
export const inici = {
  // ✏️ Texto introductorio: quién eres y objetivo del site
  presentacio: [
    "Sóc l'Arley, estudiant de segon curs del CFGS d'Administració de Sistemes Informàtics en Xarxa (ASIX). M'apassionen els servidors Linux, les xarxes i la virtualització, i aprenc muntant els meus propis projectes en un petit homelab.",
    "Aquest espai és el meu Informe Personal d'Orientació Professional (IPOP): recull les meves competències, el camí professional que vull seguir i el pla per arribar-hi.",
  ],
  xifres: [
    { valor: '2', etiqueta: 'Cicles formatius' },
    { valor: '1', etiqueta: 'Homelab propi' },
    { valor: '∞', etiqueta: "Ganes d'aprendre" },
  ],
};

// ✏️ Orbe de la portada: cada nodo del anillo muestra un dato en el centro.
//    Puedes poner de 3 a 6 nodos.
export const orbita = [
  { etiqueta: 'whoami', titol: 'Qui sóc', text: 'arley · estudiant ASIX' },
  { etiqueta: 'interessos', titol: 'Interessos', text: 'linux · xarxes · virtualització · monitorització' },
  { etiqueta: 'estat', titol: 'Estat', text: 'futur.service · active (running)' },
  { etiqueta: 'ubicació', titol: 'On sóc', text: 'Catalunya · obert a pràctiques' },
];

// ------------------------------------------------------------
//  2. CURRÍCULUM PER COMPETÈNCIES
// ------------------------------------------------------------
// ✏️ nivell: de 1 a 5. Sé honesto: te pueden preguntar en una entrevista.
export const competenciesTecniques = [
  {
    area: 'Sistemes operatius',
    icona: '🐧',
    items: [
      { nom: 'Linux (Ubuntu Server)', nivell: 4 },
      { nom: 'Windows Server', nivell: 3 },
      { nom: 'Bash scripting', nivell: 3 },
    ],
  },
  {
    area: 'Xarxes',
    icona: '🌐',
    items: [
      { nom: 'TCP/IP, DNS, DHCP', nivell: 4 },
      { nom: 'Configuració de routers i switches', nivell: 3 },
      { nom: 'SSH i accés remot', nivell: 4 },
    ],
  },
  {
    area: 'Serveis i virtualització',
    icona: '🖥️',
    items: [
      { nom: 'Servidors web (Apache / Nginx)', nivell: 3 },
      { nom: 'Virtualització (VirtualBox / Proxmox)', nivell: 3 },
      { nom: 'Monitorització amb Zabbix', nivell: 2 },
    ],
  },
  {
    area: 'Desenvolupament i dades',
    icona: '💾',
    items: [
      { nom: 'PHP', nivell: 3 },
      { nom: 'Python', nivell: 3 },
      { nom: 'SQL (MySQL)', nivell: 3 },
    ],
  },
];

export const competenciesTransversals = [
  { nom: 'Treball sota pressió', icona: '🔥', desc: "Acostumat a ritmes alts en hostaleria: prioritzar, mantenir la calma i complir terminis." },
  { nom: 'Treball en equip', icona: '🤝', desc: 'Coordinació constant amb companys en entorns on cada peça depèn de les altres.' },
  { nom: 'Organització', icona: '🗂️', desc: 'Planificació de tasques, ordre i procediments, igual a la cuina que en un servidor.' },
  { nom: 'Autoaprenentatge', icona: '📚', desc: 'Aprenc pel meu compte muntant projectes reals al meu homelab.' },
  { nom: 'Resolució de problemes', icona: '🧩', desc: "Analitzo l'error, busco la causa i documento la solució." },
  { nom: 'Adaptabilitat', icona: '🔄', desc: 'Compagino feina, estudis i projectes personals adaptant-me als canvis.' },
];

// ✏️ Lo que te hace diferente como profesional
export const singularitat = [
  { titol: 'Vinc del món real', text: "Treballar en cuina m'ha donat disciplina, resistència i sentit del servei: el client no espera." },
  { titol: 'Aprenc fent', text: "Tinc un servidor propi reaprofitat on provo, trenco i arreglo coses abans de fer-les en producció." },
  { titol: 'Documento tot', text: 'Crec que una infraestructura sense documentació és una infraestructura fràgil.' },
];

export const experiencia = [
  {
    periode: 'Set. 2024 – actualitat',
    titol: 'Ajudant de cuina',
    lloc: 'M.M.M Lloret SL',
    desc: "Treball en equip en un entorn d'alta exigència, organització de tasques i resposta ràpida davant d'imprevistos.",
  },
  // ✏️ Añade aquí prácticas FCT u otras experiencias
];

export const formacio = [
  { periode: '2022 – 2026', titol: "CFGS Administració de Sistemes Informàtics en Xarxa (ASIX)", lloc: '✏️ Nom del teu institut' },
  { periode: '✏️ Any – Any', titol: 'CFGM Sistemes Microinformàtics i Xarxes (SMX)', lloc: '✏️ Nom del teu institut' },
];

export const idiomes = [
  { nom: 'Castellà', nivell: 'Natiu' },
  { nom: 'Català', nivell: '✏️ Nivell' },
  { nom: 'Anglès', nivell: '✏️ Nivell' },
];

// Pla de comunicació: com dono a conèixer el meu perfil
export const plaComunicacio = [
  { canal: 'Web personal', icona: '🌍', accio: "Aquest site: el meu IPOP i portfoli, sempre actualitzat i publicat amb GitHub Pages." },
  { canal: 'GitHub', icona: '🐙', accio: 'Escaparate tècnic: README de perfil, el projecte ReBoot i la documentació del meu homelab.' },
  { canal: 'LinkedIn', icona: '💼', accio: "Perfil professional complet, connexió amb empreses del sector i publicació dels meus avenços." },
  { canal: 'Currículum PDF', icona: '📄', accio: 'Versió descarregable per enviar a ofertes i portals de feina.' },
];

// ------------------------------------------------------------
//  3. ÀMBIT D'ESPECIALITZACIÓ
// ------------------------------------------------------------
// ✏️ Revisa y ajusta: es la parte más personal del IPOP
export const especialitzacio = {
  rol: 'Administrador de sistemes Linux',
  subtitol: 'Infraestructura, serveis i monitorització',
  intro: "Vull desenvolupar-me professionalment en l'administració de sistemes Linux i la infraestructura de servidors, especialment en la posada en marxa, el manteniment i la monitorització de serveis.",
  tasques: [
    'Instal·lar, configurar i mantenir servidors Linux',
    'Gestionar usuaris, permisos i còpies de seguretat',
    'Desplegar i mantenir serveis (web, bases de dades, DNS…)',
    'Monitoritzar sistemes i respondre a incidències',
    'Automatitzar tasques amb scripts',
    'Documentar la infraestructura i els procediments',
  ],
  ocupacions: [
    'Administrador/a de sistemes Linux',
    'Tècnic/a de sistemes i infraestructura',
    'Tècnic/a de monitorització (NOC)',
    'Tècnic/a de suport N2',
  ],
  empreses: [
    { tipus: 'Consultores i integradores IT', desc: 'Donen serveis de sistemes a altres empreses: molta varietat de projectes.', icona: '🏢' },
    { tipus: "Proveïdors d'allotjament i cloud", desc: 'Centres de dades i hosting: el nucli de la feina és Linux.', icona: '☁️' },
    { tipus: "Departaments IT d'empreses mitjanes", desc: 'Gestió de la infraestructura interna: servidors, xarxa i usuaris.', icona: '🏭' },
    { tipus: 'Administració pública', desc: 'Ajuntaments, consells comarcals i Generalitat (via oposicions o borses).', icona: '🏛️' },
  ],
};

// ------------------------------------------------------------
//  4. PLA DE FORMACIÓ / PROJECTE PROFESSIONAL
// ------------------------------------------------------------
// ✏️ Ajusta fechas y formaciones a lo que de verdad quieras hacer
export const fullDeRuta = [
  { quan: 'Curs 2026-27', titol: 'Finalitzar ASIX', desc: 'Completar el cicle i les pràctiques FCT en una empresa del sector.', estat: 'en-curs' },
  { quan: 'Gen. 2027', titol: 'Projecte final: ReBoot', desc: 'Desenvolupar i desplegar ReBoot al meu propi servidor amb monitorització Zabbix.', estat: 'en-curs' },
  { quan: '2027', titol: 'Certificació Linux', desc: 'LPI Linux Essentials com a primer pas i, després, LPIC-1.', estat: 'pendent' },
  { quan: '2027-28', titol: 'Xarxes i cloud', desc: "Formació en xarxes (CCNA) i una certificació cloud d'entrada.", estat: 'pendent' },
  { quan: 'Continu', titol: 'Anglès tècnic', desc: 'Millorar el nivell per llegir documentació i treballar en entorns internacionals.', estat: 'pendent' },
];

export const certificacions = [
  { nom: 'LPI Linux Essentials', entitat: 'Linux Professional Institute', prioritat: 'Alta' },
  { nom: 'LPIC-1', entitat: 'Linux Professional Institute', prioritat: 'Alta' },
  { nom: 'CCNA', entitat: 'Cisco', prioritat: 'Mitjana' },
  { nom: 'Zabbix Certified User', entitat: 'Zabbix', prioritat: 'Mitjana' },
];

export const projecte = {
  nom: 'ReBoot',
  lema: 'Una segona vida per als ordinadors donats',
  desc: "Sistema web per registrar els equips donats, les seves avaries i reparacions, i a qui s'entreguen finalment. És el meu projecte final d'ASIX i la base d'una possible iniciativa professional pròpia de reacondicionament d'equips.",
  funcions: [
    { icona: '📦', text: 'Inventari dels equips donats' },
    { icona: '🔧', text: "Seguiment d'avaries i reparacions" },
    { icona: '🤝', text: 'Registre de destinataris' },
    { icona: '📈', text: 'Monitorització del servidor amb Zabbix' },
  ],
  stack: ['PHP', 'Python', 'MySQL', 'Ubuntu Server', 'Zabbix'],
  repo: '', // ✏️ Enlace al repositorio cuando lo crees
};
