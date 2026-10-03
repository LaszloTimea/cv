/* =====================================================================
   CONTENT FILE – all text of the website lives here.
   One entry = one block of the page. Each entry has the Hungarian (hu)
   and English (en) version next to each other. Edit the text between the
   backticks ` ` and keep the HTML tags (<p>, <h2>, <li> ...) around it.
   You never need to touch index.html to change wording.
   ===================================================================== */

const T = {

/* ---------- Page settings (plain text, no HTML) ---------- */
pageTitle: {
  hu: `László Tímea · Okleveles környezetmérnök`,
  en: `Tímea László · Environmental Engineer`
},
pageDesc: {
  hu: `László Tímea környezetmérnök önéletrajza, motivációs levele és további információi.`,
  en: `CV, motivation letter and extra information of Tímea László, environmental engineer.`
},
photoAlt: {
  hu: `László Tímea portréja`,
  en: `Portrait of Tímea László`
},
tabsLabel: {
  hu: `Szakaszok`,
  en: `Sections`
},
uploadError: {
  hu: `A böngésző nem tudta elmenteni a fotót. Próbálj kisebb képet.`,
  en: `The browser could not save this photo. Try a smaller image.`
},

/* ---------- Header ---------- */
role: {
  hu: `Okleveles örnyezetmérnök és geológus`,
  en: `Environmental engineer and geologist`
},
status: {
  hu: `Nyitott új munkalehetőségekre`,
  en: `Open to new job opportunities`
},
tabCv:     { hu: `Önéletrajz`,          en: `CV` },
tabLetter: { hu: `Motivációs levél`,    en: `Motivation letter` },
tabInfo:   { hu: `További információk`, en: `Additional info` },

/* ---------- Tab 1: CV – sidebar ---------- */
photoEmpty: {
  hu: ``,
  en: ``
},
upload: { hu: `Fotó feltöltése`, en: `Upload photo` },
remove: { hu: `Törlés`,          en: `Remove` },

contact: {
  hu: `<h3>Személyes adatok</h3>
<ul>
  <li><a href="mailto:timealaszlo97@gmail.com">timealaszlo97@gmail.com</a></li>
  <li>+36 20 384 6611</li>
  <li>Budapest, XI.kerület</li>
  <li>Jogosítvány: B kategória</li>
  <li><a href="#">linkedin.com/in/tímea-lászló-19a780258</a></li>
</ul>`,
  en: `<h3>Details</h3>
<ul>
  <li><a href="mailto:timealaszlo97@gmail.com">timealaszlo97@gmail.com</a></li>
  <li>+36 20 384 6611</li>
  <li>Budapest, XI. district</li>
  <li>Driving license: European B</li>
  <li><a href="#">linkedin.com/in/tímea-lászló-19a780258</a></li>
</ul>`
},

/* Skills: change the percentage in BOTH the text and the width:NN% */
skills: {
  hu: `<h3>Szoftveres ismeretek</h3>
<div class="skill"><span>AutoCAD</span></div>
<div class="skill"><span>QGIS</span></div>
<div class="skill"><span>Surfer</span></div>
<div class="skill"><span>Microsoft Office</span></div>`,
  en: `<h3>Software skills</h3>
<div class="skill"><span>AutoCAD</span></div>
<div class="skill"><span>QGIS</span></div>
<div class="skill"><span>Surfer</span></div>
<div class="skill"><span>Microsoft Office</span></div>`
},

languages: {
  hu: `<h3>Nyelvek</h3>
<ul><li>Magyar — anyanyelv</li><li>Angol — középfok</li></ul>`,
  en: `<h3>Languages</h3>
<ul><li>Hungarian — native</li><li>Angol — intermediate</li></ul>`
},

personal: {
  hu: `<h3>Jellemzők</h3>
<div class="skill"><span>Analitikus és rendszerszintű szemlélet</span></div>
<div class="skill"><span>Precíz és alapos munkavégzés</span></div>
<div class="skill"><span>Jó problémamegoldó képesség</span></div>
<div class="skill"><span>Önálló tanulási és fejlődési igény</span></div>
<div class="skill"><span>Nyitottság új szakmai területek és módszerek elsajátítására</span></div>
<div class="skill"><span>Lelkiismeretesség és kitartás</span></div>`,
  en: `<h3>Personal strengths</h3>
<div class="skill"><span>Analytical and systematic approach</span></div>
<div class="skill"><span>Precise and thorough working style</span></div>
<div class="skill"><span>Good problem-solving skills</span></div>
<div class="skill"><span>Willingness to learn and develop independently</span></div>
<div class="skill"><span>Openness to learning new professional fields and methods</span></div>
<div class="skill"><span>Conscientiousness and perseverance</span></div>`
},  

/* ---------- Tab 1: CV – main column ---------- */
profile: {
  hu: `<h2>Bemutatkozás</h2>
<p class="lead">Geológus és környezetmérnök MSc végzettséggel rendelkezem, környezetmérnöki tanulmányaimat EHS specializációval végeztem. Szakmai érdeklődésem középpontjában a környezetszennyezés, a szennyezett területek vizsgálata, a felszín alatti vizek védelme, valamint a környezeti kockázatok feltárása áll.
Diplomamunkámat az ELGOSCAR Környezettechnológiai Zrt. közreműködésével, a pétfürdői régi nitrogénművek területén található történelmileg szennyezett területének környezetföldtani és vízföldtani viszonyait vizsgáltam, potenciális szennyezőanyag útvonalak, hidraulikai kapcsolatok azonosítása érdekében. A kutatás során terepi vizsgálatokban is részt vettem.
Jelenleg geotechnikai előkészítő mérnökként dolgozom, ahol műszaki dokumentációk összeállításával, terepi és laboratóriumi adatok feldolgozásával, valamint tervezési feladatok előkészítésével támogatom a mérnöki munkát. 
Célom, hogy komplex környezetvédelmi projektekben alkalmazzam megszerzett tudásomat, és egy szakmailag elkötelezett, együttműködő csapat tagjaként járuljak hozzá közös céljaink megvalósításához.
</p>`,
  en: `<h2>Profile</h2>
<p class="lead">I hold MSc degrees in both Geology and Environmental Engineering, with a specialization in Environmental, Health and Safety (EHS). 
My professional interests focus on environmental contamination, contaminated site investigation, groundwater protection and environmental risk assessment. For my Environmental Engineering MSc thesis, carried out in cooperation with ELGOSCAR Környezettechnológiai Zrt., I investigated the environmental and hydrogeological conditions of a historically contaminated industrial site in Pétfürdő, with a particular focus on potential contaminant pathways and hydraulic connections. The work also involved field investigations. 
I currently work as an Engineering Coordinator, supporting engineering activities through the preparation of technical documentation, the processing of field and laboratory data, and the preparation of geotechnical design tasks. 
I am looking to apply my knowledge and experience in complex environmental projects and contribute to a professionally committed and collaborative team.
</p>`
},

/* Experience: copy one <div class="job">…</div> to add a position */
experience: {
  hu: `<h2>Szakmai tapasztalat</h2>
<div class="timeline">
  <div class="job">
    <div class="when">2026. feb. – Jelenleg</div>
    <h3>Előkészítő mérnök, Geo-Terra Kft.</h3>
    <p>Műszaki dokumentációk összeállítása, labor- és terepi adatok feldolgozása, fúrásszelvények és műszaki rajzok szerkesztése AutoCAD használatával.</p>
   
  </div>
  <div class="job">
    <div class="when">2022. aug. – 2026. feb.</div>
    <h3>Laboráns, Geo-Terra Kft.</h3>
    <p>Talajmechanikai laborvizsgálatok (szemeloszlás, plasztikus index, k-tényező)</p>
    
   </div>
  <div class="job">
    <div class="when">2019. aug. – 2019. nov.</div>
    <h3>Szakmai gyakorlat, V-Geotechnika Bt.</h3>
    <p>Terepi talaj és vízmintavétel, laboratóriumi talajmechanikai vizsgálatok</p> 
  </div>
</div>`,
  en: `<h2>Experience</h2>
<div class="timeline">
  <div class="job">
    <div class="when">2026. feb. – Present</div>
    <h3>Engineering coordinator, Geo-Terra Kft.</h3>
    <p>Preparation of technical documentation, processing of laboratory and field data, editing of borehole logs and technical drawings using AutoCAD. </p>

 </div>
  <div class="job">
    <div class="when">2022. aug. – 2026. feb.</div>
    <h3>Laboratory technicant, Geo-Terra Kft.</h3>
    <p>Soil laboratory testing (grain size distribution, plasticity index, k-factor etc.)</p>
    
   </div>
  <div class="job">
    <div class="when">2019. aug. – 2019. nov.</div>
    <h3>Professional internship, V-Geotechnika Bt.</h3>
    <p>Field soil and water sampling, laboratory soil mechanics testing.</p> 
  </div>
</div>`
},

education: {
  hu: `<h2>Tanulmányok</h2>
<div class="edu">
  <div><h3>Környezetmérnök Msc</h3><span class="muted">Óbudai Egyetem 2026. febr.</span></div>
  <div><h3>Geológia Msc</h3><span class="muted">ELTE, 2022. jún.</span></div>
  <div><h3>Földtudományi Bsc</h3><span class="muted">Debreceni Egyetem, 2020. jún.</span></div>
</div>`,

   
  en: `<h2>Education</h2>
<div class="edu">
   <div><h3>Environmental engineering Msc</h3><span class="muted">Óbudai Egyetem 2026. febr.</span></div>
  <div><h3>Geology Msc</h3><span class="muted">ELTE, 2022. jun.</span></div>
  <div><h3>Earth Science Bsc</h3><span class="muted">Debreceni Egyetem, 2020. jun.</span></div>
</div>`
},

/* ---------- Tab 2: Motivation letter (whole letter = one block) ---------- */
letter: {
  hu: `
<p>Tisztelt Hölgyem/Uram!</p>
<p>Engedje meg, hogy röviden bemutatkozzam. Idén februárban kiváló eredménnyel fejeztem be környezetmérnöki (MSc) tanulmányaimat az Óbudai Egyetemen, EHS specializációval. Azt megelőzően az ELTE Természettudományi Karán szereztem geológus (MSc) diplomát.</p>
<p>Tanulmányaim során e két szakterületek összekapcsolása egyre inkább meghatározó lett számomra, ezért a környezetszennyezések vizsgálata, a szennyezett területek állapotának feltárása, valamint a felszín alatti vizek védelme felé orientálódtam.</p>
<p>Diplomamunkámat az ELGOSCAR Környezettechnológiai Zrt. közreműködésével, a pétfürdői egykori Nitrogénművek történelmileg szennyezett területén készítettem. A kutatás során a terület környezetföldtani és vízföldtani viszonyait vizsgáltam, különös tekintettel a potenciális szennyezőanyag-terjedési útvonalakra és a hidraulikai kapcsolatokra. A munkához terepi vizsgálatok is kapcsolódtak, többek között kúttesztek és távolhatás-vizsgálatok, melyeket különböző szoftverek segítségével értékeltem ki. Ezáltal rendelkezem az AutoCAD, QGIS és Surfer használatában gyakorlati tapasztalattal is. Mindezek mellett ismeretet szereztem a környezeti kockázatértékelés alapjairól, a kármentesítési folyamatokról, valamint a vonatkozó környezetvédelmi jogszabályokról egyaránt.</p>
<p>Jelenleg a Geo-Terra Kft.-nél dolgozom geotechnikai előkészítő mérnökként. Munkám során műszaki dokumentációk összeállításában és terepi és laboratóriumi adatok feldolgozásában veszek részt. Emellett segítem a tervezőmérnökök munkáját különböző fúrásszelvények és műszaki rajzok szerkesztésével. Korábbi laboratóriumi munkám révén a talajvizsgálatok gyakorlati oldalát is megismertem. </p>
<p>Jövőbeli célom, hogy meglévő geológiai és környezetmérnöki ismereteimet a gyakorlatban is hasznosítsam, és tovább mélyítsem tudásomat a környezetvédelmi jogszabályok alkalmazása, valamint az engedélyezési eljárások és a környezetvédelmi tanácsadás területén. Szeretnék további tapasztalatot szerezni a különböző környezetvédelmi projektekben és hozzájárulni egy szakmailag elkötelezett csapat tagjaként a folyamatos fejlődéshez.</p>
<p>Köszönöm, hogy időt szánt levelem áttekintésére. Amennyiben szakmai hátterem felkeltette érdeklődésüket, és jelenleg vagy a közeljövőben lehetőség nyílik környezetmérnöki ismeretekkel rendelkező szakember csatlakozására, örömmel venném a lehetőséget egy személyes bemutatkozásra és szakmai egyeztetésre.</p>
<p>Üdvözlettel,</p>
<p class="sig">László Tímea</p>`,
  en: `
<p>Dear Sir or Madam,</p>
<p>Please allow me to briefly introduce myself. In February this year, I completed my MSc in Environmental Engineering at Óbuda University, specializing in Environmental, Health and Safety (EHS), with excellent results. Prior to this, I obtained an MSc degree in Geology from the Faculty of Science at Eötvös Loránd University (ELTE).</p>
<p>During my studies, I became increasingly interested in combining these two fields, which led me to focus on the investigation of environmental contamination, the assessment of contaminated sites, and the protection of groundwater resources.</p>
<p>I completed my MSc thesis in cooperation with ELGOSCAR Környezettechnológiai Zrt., focusing on a historically contaminated site at the former Nitrogen Works in Pétfürdő, Hungary. As part of my research, I investigated the environmental geological and hydrogeological conditions of the site, with particular emphasis on potential contaminant migration pathways and hydraulic connections. The project also involved field investigations, including well testing and interference tests, which I evaluated using various software tools. Through this work, I gained practical experience in using AutoCAD, QGIS and Surfer. In addition, my studies provided me with knowledge of the fundamentals of environmental risk assessment, remediation processes, and relevant environmental legislation.</p>
<p>I am currently working as a Geotechnical Preparation Engineer at Geo-Terra Kft. My responsibilities include preparing technical documentation and processing field and laboratory data. I also support design engineers by preparing borehole logs and technical drawings. Through my previous laboratory experience, I have also gained practical insight into soil testing and laboratory-based soil investigations.</p>
<p>My professional goal is to apply my existing geological and environmental engineering knowledge in practice while further developing my expertise in the application of environmental legislation, permitting procedures and environmental consulting. I would like to gain further experience in a wide range of environmental projects and contribute to the work and continuous development of a professionally committed team.</p>
<p>Thank you for taking the time to review my application and professional background. If my qualifications and experience have sparked your interest, and there is currently or in the near future an opportunity for a professional with an environmental engineering background to join your team, I would be pleased to have the opportunity to introduce myself in person and discuss potential opportunities for professional cooperation.</p>
<p>Yours sincerely,</p>

<p class="sig">Tímea László</p>`
},

/* ---------- Tab 3: Additional info (one block per card) ---------- */
stats: {
  hu: `<h2>Eredmények számokban</h2>
<div class="stats">
  <div><b>14</b><span class="muted">megvalósított projekt</span></div>
  <div><b>28%</b><span class="muted">energiamegtakarítás a pilotban</span></div>
  <div><b>3</b><span class="muted">kiszolgált önkormányzat</span></div>
  <div><b>9</b><span class="muted">publikáció</span></div>
</div>`,
  en: `<h2>Impact in numbers</h2>
<div class="stats">
  <div><b>14</b><span class="muted">projects delivered</span></div>
  <div><b>28%</b><span class="muted">energy saved in pilot</span></div>
  <div><b>3</b><span class="muted">municipalities served</span></div>
  <div><b>9</b><span class="muted">publications</span></div>
</div>`
},

certifications: {
  hu: `<h2>Tanúsítványok</h2>
<ul><li>Autodesk AutoCAD - Beginner to Avanced level - Udemy kurzus (2026. márc.)</li></ul>`,
  en: `<h2>Certifications</h2>
<ul><li>Autodesk AutoCAD - Beginner to Avanced level - Udemy Course (2026. march)</li></ul>`,
},

publications: {
  hu: `<h2>Publikációk</h2>
<ul><li>László T. et al. (2021): Micro-Pixe investigation of the trace elements in the minerals of the Rózsabánya hydrothermal ore deposit (Börzsöny Mts., North Hungary) – Acta Mineralogica- Petrographica, Abstract Series, Szeged, Vol. 11.</li></ul>`,
  en: `<h2>Publications</h2>
<ul><li>László T. et al. (2021): Micro-Pixe investigation of the trace elements in the minerals of the Rózsabánya hydrothermal ore deposit (Börzsöny Mts., North Hungary) – Acta Mineralogica- Petrographica, Abstract Series, Szeged, Vol. 11.</li></ul>`
},
   
accomplishments: {
  hu: `<h2>Egyéb eredmények</h2>
<ul>
<li>Környezetföldtani viszonyok tisztázása egy szennyezett területen - Msc diplomamunka (2026) </li>
<li>Ásványtani folyamatok uránérc meddőjének permeábilis reaktív gátjában - Msc diplomamunka (2022)</li>
<li>A Börzsöny-hegység hidrotermás érceinek ásványtani vizsgálata - Bsc szakdolgozat (2020)</li>
<li>8th Mineral Sciences in the Carpathians Conference - Konferencia (2021)</li>
</ul>`,
  en: `<h2>Accomplishments</h2>
<ul>
<li>Clarification of the Environmental Geological Conditions of a Contaminated Site - Msc Thesis (2026) </li>
<li>Mineralogical processes in the waste rock pile of a uranium ore permeable reactive barrier - Msc Thesis (2022)</li>
<li>The mineralogical analysis of hydrothermal ores in the Börzsöny Mountains - Bsc Thesis (2020)</li>
<li>8th Mineral Sciences in the Carpathians Conference (2021)</li>
</ul>`
},
   
interests: {
  hu: `<h2>Érdeklődési kör</h2>
<ul><li>Olvasás</li><li>Hobbi cukrászat</li><li>Fitnesz</li></ul>`,
  en: `<h2>Interests</h2>
<ul><li>Reading</li><li>Hobby baking</li><li>Fitness</li></ul>`
},

references: {
  hu: `<h2>Referenciák</h2>
<p class="muted" style="margin:0">Kérésre rendelkezésre állnak.</p>`,
  en: `<h2>References</h2>
<p class="muted" style="margin:0">Available on request.</p>`
},

/* ---------- Footer ---------- */
footer: {
  hu: `© 2026 László Tímea`,
  en: `© 2026 Tímea László`
}

};
