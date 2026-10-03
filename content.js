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
  hu: `Maya Lindqvist · Környezetmérnök`,
  en: `Maya Lindqvist · Environmental Engineer`
},
pageDesc: {
  hu: `Maya Lindqvist környezetmérnök önéletrajza, motivációs levele és további információi.`,
  en: `CV, motivation letter and extra information of Maya Lindqvist, environmental engineer.`
},
photoAlt: {
  hu: `Maya Lindqvist portréja`,
  en: `Portrait of Maya Lindqvist`
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
  hu: `Környezetmérnök, aki víz-, talaj- és energiaadatokból tisztább döntéseket formál.`,
  en: `Environmental engineer turning water, soil and energy data into cleaner decisions.`
},
status: {
  hu: `Januártól nyitott új projektekre`,
  en: `Open to new projects from January`
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
  hu: `<h3>Kapcsolat</h3>
<ul>
  <li><a href="mailto:maya.lindqvist@example.com">maya.lindqvist@example.com</a></li>
  <li>+46 70 123 45 67</li>
  <li>Göteborg, Svédország</li>
  <li><a href="#">linkedin.com/in/mayalindqvist</a></li>
</ul>`,
  en: `<h3>Contact</h3>
<ul>
  <li><a href="mailto:maya.lindqvist@example.com">maya.lindqvist@example.com</a></li>
  <li>+46 70 123 45 67</li>
  <li>Gothenburg, Sweden</li>
  <li><a href="#">linkedin.com/in/mayalindqvist</a></li>
</ul>`
},

/* Skills: change the percentage in BOTH the text and the width:NN% */
skills: {
  hu: `<h3>Fő készségek</h3>
<div class="skill"><span>Életciklus-elemzés</span><span>95%</span></div><div class="bar"><i style="width:95%"></i></div>
<div class="skill"><span>Hidrológiai modellezés</span><span>90%</span></div><div class="bar"><i style="width:90%"></i></div>
<div class="skill"><span>GIS és távérzékelés</span><span>85%</span></div><div class="bar"><i style="width:85%"></i></div>
<div class="skill"><span>Python és R</span><span>80%</span></div><div class="bar"><i style="width:80%"></i></div>`,
  en: `<h3>Core skills</h3>
<div class="skill"><span>Life-cycle assessment</span><span>95%</span></div><div class="bar"><i style="width:95%"></i></div>
<div class="skill"><span>Hydrological modelling</span><span>90%</span></div><div class="bar"><i style="width:90%"></i></div>
<div class="skill"><span>GIS &amp; remote sensing</span><span>85%</span></div><div class="bar"><i style="width:85%"></i></div>
<div class="skill"><span>Python &amp; R</span><span>80%</span></div><div class="bar"><i style="width:80%"></i></div>`
},

languages: {
  hu: `<h3>Nyelvek</h3>
<ul><li>Svéd — anyanyelv</li><li>Angol — folyékony</li><li>Német — társalgási szint</li></ul>`,
  en: `<h3>Languages</h3>
<ul><li>Swedish — native</li><li>English — fluent</li><li>German — conversational</li></ul>`
},

/* ---------- Tab 1: CV – main column ---------- */
profile: {
  hu: `<h2>Bemutatkozás</h2>
<p class="lead">Környezetmérnök nyolc év tapasztalattal a víztisztítás, a körforgásos gazdaság tervezése és a hatásvizsgálat területén. Gyorsan jutok el a terepi adatoktól a működő prototípusig, és szeretem azokat a projekteket, ahol a mérnöki munka, a szakpolitika és a közösségek találkoznak.</p>`,
  en: `<h2>Profile</h2>
<p class="lead">Environmental engineer with eight years of experience in water treatment, circular-economy design and impact assessment. I move quickly from field data to a working prototype, and I like projects where engineering, policy and communities meet.</p>`
},

/* Experience: copy one <div class="job">…</div> to add a position */
experience: {
  hu: `<h2>Szakmai tapasztalat</h2>
<div class="timeline">
  <div class="job">
    <div class="when">2022 – jelenleg</div>
    <h3>Vezető környezetmérnök, BlueLoop Consulting</h3>
    <ul>
      <li>Öt fős csapatot vezetek, amely három önkormányzat számára tervez szennyvíz-újrahasznosító rendszereket.</li>
      <li>Folyamatoptimalizálással 28%-kal csökkentettem a kísérleti üzem energiafogyasztását.</li>
      <li>Agilis sprinteket vezettem be a projektvégrehajtásba, így egyharmadával rövidültek a beszámolási ciklusok.</li>
    </ul>
  </div>
  <div class="job">
    <div class="when">2018 – 2022</div>
    <h3>Környezetmérnök, Nordic Water Institute</h3>
    <ul>
      <li>Vízgyűjtő-modelleket építettem, amelyeket a regionális árvízkockázat-tervezésben használtak.</li>
      <li>Életciklus-elemzéseket végeztem 12 ipari ügyfél számára.</li>
    </ul>
  </div>
  <div class="job">
    <div class="when">2016 – 2018</div>
    <h3>Junior tanácsadó, GreenPath Studio</h3>
    <ul>
      <li>Környezeti hatásvizsgálatokat készítettem infrastrukturális projektekhez.</li>
      <li>Támogattam a terepi mintavételt és a laboratóriumi elemzéseket.</li>
    </ul>
  </div>
</div>`,
  en: `<h2>Experience</h2>
<div class="timeline">
  <div class="job">
    <div class="when">2022 – present</div>
    <h3>Senior Environmental Engineer, BlueLoop Consulting</h3>
    <ul>
      <li>Lead a team of five designing wastewater reuse systems for three municipalities.</li>
      <li>Cut pilot plant energy use by 28% through process optimisation.</li>
      <li>Introduced agile sprints to project delivery, shortening reporting cycles by a third.</li>
    </ul>
  </div>
  <div class="job">
    <div class="when">2018 – 2022</div>
    <h3>Environmental Engineer, Nordic Water Institute</h3>
    <ul>
      <li>Built catchment models used in regional flood-risk planning.</li>
      <li>Ran life-cycle assessments for 12 industrial clients.</li>
    </ul>
  </div>
  <div class="job">
    <div class="when">2016 – 2018</div>
    <h3>Junior Consultant, GreenPath Studio</h3>
    <ul>
      <li>Prepared environmental impact assessments for infrastructure projects.</li>
      <li>Supported field sampling and laboratory analysis.</li>
    </ul>
  </div>
</div>`
},

education: {
  hu: `<h2>Tanulmányok</h2>
<div class="edu">
  <div><h3>MSc Környezetmérnöki</h3><span class="muted">Chalmers Egyetem, 2016</span></div>
  <div><h3>BSc Építő- és környezetmérnöki</h3><span class="muted">Lundi Egyetem, 2014</span></div>
</div>`,
  en: `<h2>Education</h2>
<div class="edu">
  <div><h3>MSc Environmental Engineering</h3><span class="muted">Chalmers University, 2016</span></div>
  <div><h3>BSc Civil &amp; Environmental Eng.</h3><span class="muted">Lund University, 2014</span></div>
</div>`
},

tools: {
  hu: `<h2>Eszközök</h2>
<div class="tags"><span>ArcGIS</span><span>QGIS</span><span>SWMM</span><span>SimaPro</span><span>MODFLOW</span><span>Python</span><span>R</span><span>AutoCAD</span><span>Power BI</span></div>`,
  en: `<h2>Tools</h2>
<div class="tags"><span>ArcGIS</span><span>QGIS</span><span>SWMM</span><span>SimaPro</span><span>MODFLOW</span><span>Python</span><span>R</span><span>AutoCAD</span><span>Power BI</span></div>`
},

/* ---------- Tab 2: Motivation letter (whole letter = one block) ---------- */
letter: {
  hu: `<p class="meta">Göteborg, 2026. március 15.<br>Example Environmental AB, HR csapat</p>
<p>Tisztelt Toborzó Csapat!</p>
<p>A tiszta víz az első dolog, amit az emberek természetesnek vesznek, és az utolsó, amely nélkül élni tudnának. Ez a gondolat formálta a pályámat, és ezért keltette fel a figyelmemet az Önök ellenálló vízinfrastruktúrával kapcsolatos munkája.</p>
<p>Nyolc év alatt tisztítórendszereket terveztem, vízgyűjtőket modelleztem és környezeti hatást vizsgáltam állami és magánügyfelek számára. A BlueLoop Consultingnál egy kis csapatot vezetek, amely gyorsan szállít pilotokat, tanul az adatokból és alkalmazkodik. A műszaki mélység és a gyors iteráció ezen ötvözetét hoznám az Önök projektjeibe.</p>
<p>Azok a feladatok motiválnak, amelyeknek látható eredménye van: egy tisztább folyó, egy kevesebb energiát használó üzem, egy közösség, amely bízik a vizében. Örömmel beszélnék arról, hogyan támogathatná tapasztalatom az Önök következő növekedési szakaszát.</p>
<p>Üdvözlettel,</p>
<p class="sig">Maya Lindqvist</p>`,
  en: `<p class="meta">Gothenburg, 15 March 2026<br>Hiring Team, Example Environmental AB</p>
<p>Dear hiring team,</p>
<p>Clean water is the first thing most people stop noticing and the last thing they can live without. That idea has shaped my career, and it is why your work on resilient water infrastructure caught my attention.</p>
<p>Over eight years I have designed treatment systems, modelled catchments and assessed environmental impact for public and private clients. At BlueLoop Consulting I lead a small team that delivers pilots quickly, learns from the data, and adjusts. That mix of technical depth and fast iteration is what I would bring to your projects.</p>
<p>I am motivated by work that has a visible result: a river that runs cleaner, a plant that uses less energy, a community that trusts its water. I would welcome the chance to discuss how my experience could support your next phase of growth.</p>
<p>Kind regards,</p>
<p class="sig">Maya Lindqvist</p>`
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
<ul><li>Okleveles életciklus-elemző szakértő (2021)</li><li>Prince2 Foundation (2020)</li><li>Scrum Master PSM I (2023)</li></ul>`,
  en: `<h2>Certifications</h2>
<ul><li>Certified Life Cycle Assessment Practitioner (2021)</li><li>Prince2 Foundation (2020)</li><li>Scrum Master PSM I (2023)</li></ul>`
},

publications: {
  hu: `<h2>Publikációk</h2>
<ul><li>„Kis energiaigényű tápanyag-visszanyerés kommunális szennyvízből”, Water Research Letters, 2023</li><li>„Vízgyűjtő léptékű árvízelőrejelzés nyílt adatokkal”, Journal of Hydrology Applications, 2021</li></ul>`,
  en: `<h2>Publications</h2>
<ul><li>“Low-energy nutrient recovery from municipal wastewater”, Water Research Letters, 2023</li><li>“Catchment-scale flood forecasting with open data”, Journal of Hydrology Applications, 2021</li></ul>`
},

volunteering: {
  hu: `<h2>Önkéntes munka</h2>
<ul><li>Folyótisztítási koordinátor, Göta Älv Egyesület</li><li>Mentor elsőéves mérnökhallgatók számára</li></ul>`,
  en: `<h2>Volunteering</h2>
<ul><li>River clean-up coordinator, Göta Älv Association</li><li>Mentor for first-year engineering students</li></ul>`
},

interests: {
  hu: `<h2>Érdeklődési kör</h2>
<ul><li>Terepfutás és kajakozás</li><li>Városi méhészkedés</li><li>Tájrajzolás</li></ul>`,
  en: `<h2>Interests</h2>
<ul><li>Trail running and kayaking</li><li>Urban beekeeping</li><li>Sketching landscapes</li></ul>`
},

references: {
  hu: `<h2>Referenciák</h2>
<p class="muted" style="margin:0">Kérésre rendelkezésre állnak. Két korábbi vezetőm és egy egyetemi témavezetőm szívesen nyilatkozik.</p>`,
  en: `<h2>References</h2>
<p class="muted" style="margin:0">Available on request. Two former managers and one academic supervisor are happy to speak.</p>`
},

/* ---------- Footer ---------- */
footer: {
  hu: `© 2026 Maya Lindqvist · Minta tartalom, cserélendő a végleges szövegre.`,
  en: `© 2026 Maya Lindqvist · Dummy content, replace with final text.`
}

};
