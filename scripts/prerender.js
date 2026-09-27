/**
 * Static Pre-rendering Generator for ZFP Jagoš & partneři
 * Generates static HTML files for all routes into dist/<route>/index.html
 * Solves SeznamBot and AI Crawler indexing of SPA subpages.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

if (!fs.existsSync(DIST_DIR)) {
  console.error('Error: dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

const templatePath = path.join(DIST_DIR, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(templatePath, 'utf8');

// Team Members Data
const teamMembers = [
  {
    id: 'jaroslav-jagos',
    name: 'Bc. Jaroslav Jagoš, EFA',
    role: 'Ředitel obchodního týmu, zakladatel',
    bio: 'Dlouholetý odborník na komplexní finanční plánování. Pomáhám klientům dosáhnout jejich životních cílů pomocí strategického přístupu k financím. Zakladatel ZFP Jagoš & partneři.',
    email: 'jaroslav.jagos@zfpa.cz',
    phone: '+420 720 114 080',
    image: '/team/jaroslav-jagos.webp'
  },
  {
    id: 'miroslava-jagosova',
    name: 'Bc. Miroslava Jagošová, DiS.',
    role: 'Finanční poradce, senior',
    bio: 'Pomáhám lidem plnit si sny o vlastním bydlení a stabilní budoucnosti. Provedu vás celým procesem financování, úvěrů a finančního zabezpečení.',
    email: 'miroslava.jagosova@zfpa.cz',
    phone: '+420 721 054 076',
    image: '/team/miroslava-jagosova.webp'
  },
  {
    id: 'david-jagos',
    name: 'David Jagoš, PFP',
    role: 'Expertní finanční poradce',
    bio: 'Postarám se o to, aby váš majetek nejen bezpečně rostl, ale byl také chráněn před inflací a neočekávanými událostmi.',
    email: 'david.jagos@zfpa.cz',
    phone: '+420 720 114 125',
    image: '/team/david-jagos.webp'
  },
  {
    id: 'dusan-ceresnak',
    name: 'Dušan Čerešňák, PFP',
    role: 'Expertní finanční poradce',
    bio: 'Specialista na komplexní finanční poradenství, investice a ochranu rodinných rozpočtů.',
    email: 'dusan.ceresnak@zfpa.cz',
    phone: '+420 735 965 409',
    image: '/team/dusan-ceresnak.webp'
  },
  {
    id: 'rene-kohoutek',
    name: 'René Kohoutek, PFP',
    role: 'Expertní finanční poradce',
    bio: 'Komplexní správa majetku vyžaduje nadhled a pečlivou analýzu trhu. Mým cílem je váš dlouhodobý profit a stabilita.',
    email: 'rene.kohoutek@zfpa.cz',
    phone: '+420 732 421 745',
    image: '/team/rene-kohoutek.webp'
  },
  {
    id: 'sarka-navalana',
    name: 'Šárka Navalaná, PFP',
    role: 'Expertní finanční poradce',
    bio: 'Pomáhám klientům správně nastavit rodinné finance a bezpečně zhodnocovat jejich úspory.',
    email: 'sarka.navalana@zfpa.cz',
    phone: '+420 731 554 487',
    image: '/team/sarka-navalana.webp'
  },
  {
    id: 'patrik-knotek',
    name: 'Patrik Knotek',
    role: 'Expertní finanční poradce',
    bio: 'Zaměřuji se na tvorbu a ochranu majetku. Společně s kolegy tvořím podcast Finanční kompas, kde se snažíme složitý svět financí přiblížit lidem.',
    email: 'patrik.knotek@zfpa.cz',
    phone: '+420 739 150 361',
    image: '/team/patrik-knotek.png'
  },
  {
    id: 'dominik-konecny',
    name: 'Dominik Konečný',
    role: 'Senior finanční poradce',
    bio: 'Pomáhám klientům efektivně spravovat jejich výdaje, úspory a investice s jasným plánem.',
    email: 'dominik.konecny@zfpa.cz',
    phone: '+420 704 076 937',
    image: '/team/dominik-konecny.webp'
  },
  {
    id: 'katerina-lenghartova',
    name: 'Kateřina Lenghartová',
    role: 'Senior finanční poradce',
    bio: 'Osobní finanční poradenství se zaměřením na srozumitelnost, lidskost a férovost.',
    email: 'katerina.lenghartova@zfpa.cz',
    phone: '+420 774 959 062',
    image: '/team/katerina-lenghartova.webp'
  },
  {
    id: 'jaromir-manak',
    name: 'Bc. Jaromír Maňák',
    role: 'Expertní finanční poradce',
    bio: 'Dlouholeté zkušenosti v oblasti osobních i firemních financí, investičního poradenství a komplexní správy majetku.',
    email: 'jaromir.manak@zfpa.cz',
    phone: '+420 606 572 899',
    image: '/team/jaromir-manak.webp'
  },
  {
    id: 'kristyna-rancikova',
    name: 'Kristýna Rančíková',
    role: 'Finanční poradce',
    bio: 'Pomáhám klientům orientovat se v možnostech spoření, investic a zabezpečení rodiny.',
    email: 'kristyna.rancikova@zfpa.cz',
    phone: '+420 607 396 112',
    image: '/team/kristyna-rancikova.png'
  },
  {
    id: 'klara-kovarova',
    name: 'Klára Kovářová',
    role: 'Finanční poradce',
    bio: 'Osobní přístup k řešení rodinných rozpočtů, pojištění a dlouhodobého spoření pro děti.',
    email: 'klara.kovarova@zfpa.cz',
    phone: '+420 603 542 055',
    image: '/spolecna-2-scaled.webp'
  },
  {
    id: 'michaela-ivanova',
    name: 'Bc. Michaela Ivanová',
    role: 'Vedoucí kanceláře',
    bio: 'Zajišťuji bezproblémový chod kanceláře, organizaci schůzek a kompletní klientskou a administrativní podporu pro celý tým.',
    email: 'kancelar.jagos@zfpa.cz',
    phone: '+420 606 084 044',
    image: '/spolecna-2-scaled.webp'
  },
  {
    id: 'lenka-studenkova',
    name: 'Bc. Lenka Studénková',
    role: 'Obchodní asistentka',
    bio: 'Péče o klientskou agendu, příprava podkladů pro jednání a podpora poradců při realizaci finančních plánů.',
    email: 'srk171@zfpakademie.cz',
    phone: '+420 776 507 991',
    image: '/spolecna-2-scaled.webp'
  },
  {
    id: 'karel-cab',
    name: 'Karel Cáb',
    role: 'Spoluzakladatel týmu & Finanční specialista',
    bio: 'Dlouholetý odborník a spoluzakladatel týmu ZFP Jagoš & partneři. Komplexní správa rodinného a firemního majetku.',
    email: 'karel.cab@zfpa.cz',
    phone: '+420 606 084 044',
    image: '/spolecna-2-scaled.webp'
  }
];

// Blog Posts Data
const blogPosts = [
  {
    id: 'jak-se-pripravit-na-hypoteku-2026',
    title: 'Jak se připravit na hypotéku v roce 2026: Kompletní průvodce financováním bydlení',
    excerpt: 'Úrokové sazby se vyvíjejí a banky upravují pravidla posuzování bonity. Na co si dát pozor a jak ušetřit statisíce korun při sjednání vlastního bydlení?',
    date: '15. září 2026',
    image: '/DSC_4749-Enhanced-NR.webp'
  },
  {
    id: 'proc-je-dulezite-mit-financni-plan',
    title: 'Proč je finanční plán základem rodinného klidu a jak jej sestavit',
    excerpt: 'Většina lidí plánuje dovolenou déle než své celoživotní zabezpečení. Proč je to zásadní chyba a jak vytvořit strategii, která obstojí v každé krizi?',
    date: '2. září 2026',
    image: '/spolecna-2-scaled.webp'
  },
  {
    id: 'investovani-pro-zacatecniky-jak-ochranit-uspory',
    title: 'Investování pro začátečníky: Jak bezpečně chránit úspory před inflací',
    excerpt: 'Bojíte se investovat a necháváte peníze na běžném účtu? Ukážeme vám, proč je nečinnost největším rizikem a jak krok za krokem začít.',
    date: '18. srpna 2026',
    image: '/DSC_4699_o.webp'
  }
];

// Definition of all static routes to prerender
const routes = [
  {
    path: 'sluzby',
    title: 'Naše služby | ZFP Jagoš & partneři – Hypotéky, Investice, Reality a Pojištění',
    description: 'Komplexní finanční služby od licencovaných specialistů ZFP: hypotéky a úvěry HypoSpace, správa investic ZFP Investments, reality, pojištění a zlato ZFP Gold.',
    heading: 'Komplexní finanční služby pro váš celoživotní klid',
    lead: 'Propojujeme všechny oblasti rodinných a firemních financí. Od výhodného financování bydlení přes investice až po zajištění rizik.',
    breadcrumbs: [
      { name: 'Domů', item: 'https://zfpjagos.cz/' },
      { name: 'Služby', item: 'https://zfpjagos.cz/sluzby' }
    ],
    content: `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900 mb-2">Bydlení & Hypotéky</h2>
            <p class="text-slate-600 text-sm mb-4">Nezávislé srovnání všech bankovních domů na českém trhu. Vyjednání nejnižší možné sazby a hypoteční kalkulačka s HypoSpace.cz.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900 mb-2">Investice & Správa majetku</h2>
            <p class="text-slate-600 text-sm mb-4">Ochrana úspor před inflací a zhodnocování kapitálu. Realitní fondy ZFP Investments, ETF a fyzické zlato ZFP Gold.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900 mb-2">Zabezpečení rodiny & Příjmů</h2>
            <p class="text-slate-600 text-sm mb-4">Pojistný audit bez zbytečných poplatků. Zajištění klíčových životních rizik (invalidita, vážná onemocnění) a majetku.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900 mb-2">Reality & Odhad nemovitosti</h2>
            <p class="text-slate-600 text-sm mb-4">Bezpečný nákup, prodej a pronájem nemovitostí pod hlavičkou ZFP Reality s bezplatným online odhadem tržní ceny.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900 mb-2">Drahé kovy (ZFP Gold)</h2>
            <p class="text-slate-600 text-sm mb-4">Fyzické investiční zlato a stříbro nejvyšší ryzosti od certifikovaných sléváren s garancí zpětného odkupu.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900 mb-2">Vzdělávání (ZFP Akademie)</h2>
            <p class="text-slate-600 text-sm mb-4">Zvyšování finanční gramotnosti pro veřejnost i rodiny. Semináře s více než 30letou tradicí pod křídly ZFP Akademie.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    path: 'tym',
    title: 'Náš tým specialistů | ZFP Jagoš & partneři – Veselí nad Moravou',
    description: 'Seznamte se s týmem 15 certifikovaných finančních poradců a specialistů ZFP Jagoš & partneři pod vedením Bc. Jaroslava Jagoše, EFA.',
    heading: 'Náš tým zkušených finančních specialistů',
    lead: 'Jsme tým 15 certifikovaných odborníků a asistentů s kanceláří ve Veselí nad Moravou. Pomáháme klientům po celé jižní Moravě a ČR.',
    breadcrumbs: [
      { name: 'Domů', item: 'https://zfpjagos.cz/' },
      { name: 'Tým', item: 'https://zfpjagos.cz/tym' }
    ],
    content: `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${teamMembers.map(m => `
            <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h2 class="text-lg font-bold text-slate-900"><a href="/tym/${m.id}" class="hover:text-brand-600">${m.name}</a></h2>
              <p class="text-brand-600 text-xs font-semibold uppercase tracking-wider mt-1">${m.role}</p>
              <p class="text-slate-600 text-sm mt-3 leading-relaxed">${m.bio}</p>
              <div class="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                <p>📞 <a href="tel:${m.phone.replace(/\s+/g, '')}">${m.phone}</a> | ✉️ <a href="mailto:${m.email}">${m.email}</a></p>
                <div class="mt-2"><a href="/tym/${m.id}" class="text-brand-600 font-semibold hover:underline">Zobrazit detail profilu &rarr;</a></div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `
  },
  {
    path: 'podcast',
    title: 'Podcast Finanční kompas | ZFP Jagoš & partneři',
    description: 'Poslouchejte autorský podcast Finanční kompas od poradců ZFP Jagoš & partneři. Srozumitelně o hypotékách, investicích, realitách a rodinném rozpočtu.',
    heading: 'Podcast Finanční kompas',
    lead: 'Srozumitelně, otevřeně a bez bankovního žargonu. Praktické rady ze světa financí, hypoték a investic pro váš každodenní život.',
    breadcrumbs: [
      { name: 'Domů', item: 'https://zfpjagos.cz/' },
      { name: 'Podcast', item: 'https://zfpjagos.cz/podcast' }
    ],
    content: `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="p-8 bg-slate-900 text-white rounded-3xl mb-8">
          <h2 class="text-2xl font-bold mb-3">Epizody na dosah ruky</h2>
          <p class="text-slate-300 mb-6">Podcast Finanční kompas moderují Patrik Knotek a hosté z týmu ZFP Jagoš & partneři. Najdete nás na Spotify, Apple Podcasts a YouTube.</p>
          <div class="flex flex-wrap gap-4">
            <a href="https://open.spotify.com/show/7i18QORJT0w3adVnydRWA8" target="_blank" rel="noreferrer noopener" class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold">Poslouchat na Spotify</a>
            <a href="https://www.youtube.com/@Financnikompas" target="_blank" rel="noreferrer noopener" class="px-6 py-3 rounded-xl bg-red-600 text-white font-semibold">Sledovat na YouTube</a>
          </div>
        </div>
      </section>
    `
  },
  {
    path: 'blog',
    title: 'Blog a odborné články o financích | ZFP Jagoš & partneři',
    description: 'Aktuální analýzy, tipy pro schválení hypotéky v roce 2026, sestavení rodinného finančního plánu a bezpečné investování s experty ZFP.',
    heading: 'Odborný blog o financích, hypotékách a investicích',
    lead: 'Přinášíme vám ověřené informace ze světa českého finančního trhu, legislativních změn a investičních strategií.',
    breadcrumbs: [
      { name: 'Domů', item: 'https://zfpjagos.cz/' },
      { name: 'Blog', item: 'https://zfpjagos.cz/blog' }
    ],
    content: `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${blogPosts.map(p => `
            <article class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <time class="text-xs font-semibold text-brand-600">${p.date}</time>
                <h2 class="text-xl font-bold text-slate-900 mt-2 mb-3">
                  <a href="/blog/${p.id}" class="hover:text-brand-600">${p.title}</a>
                </h2>
                <p class="text-slate-600 text-sm leading-relaxed">${p.excerpt}</p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100">
                <a href="/blog/${p.id}" class="text-brand-600 font-semibold text-sm hover:underline">Číst celý článek &rarr;</a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `
  },
  {
    path: 'kontakt',
    title: 'Kontaktujte nás | ZFP Jagoš & partneři – Strukturní kancelář Veselí nad Moravou',
    description: 'Domluvte si bezplatnou konzultaci s týmem Bc. Jaroslava Jagoše, EFA. Telefon: +420 606 084 044, E-mail: info@zfpjagos.cz. Kancelář Hutník 1503, Veselí nad Moravou.',
    heading: 'Kontaktujte nás – jsme tu pro vás',
    lead: 'Rádi vás uvítáme v naší moderní strukturní kanceláři ve Veselí nad Moravou, nebo se spojíme online kdekoli v České republice.',
    breadcrumbs: [
      { name: 'Domů', item: 'https://zfpjagos.cz/' },
      { name: 'Kontakt', item: 'https://zfpjagos.cz/kontakt' }
    ],
    content: `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Kontaktní informace</h2>
            <p class="text-slate-600 mb-6">Strukturní kancelář Hutník 1503, 698 01 Veselí nad Moravou</p>
            <div class="space-y-4 text-sm text-slate-700">
              <p>📞 <strong>Telefon:</strong> <a href="tel:+420606084044" class="text-brand-600 font-bold">+420 606 084 044</a></p>
              <p>✉️ <strong>E-mail:</strong> <a href="mailto:info@zfpjagos.cz" class="text-brand-600 font-bold">info@zfpjagos.cz</a></p>
              <p>⏰ <strong>Otevírací doba:</strong> Pondělí – Pátek 8:00 – 17:00 (nebo dle dohody)</p>
            </div>
            <div class="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500">
              <p>Člen skupiny ZFP Group. ZFP akademie, a.s., IČO: 26307961. Vázaný zástupce zapsaný v registru ČNB.</p>
            </div>
          </div>
          <div class="p-8 bg-slate-50 rounded-3xl border border-slate-200">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Sjednat nezávaznou konzultaci</h2>
            <p class="text-slate-600 text-sm mb-6">Napište nám svůj dotaz nebo poptávku. Odpovíme vám do 24 hodin.</p>
            <p class="text-sm font-semibold text-brand-600">Rychlé spojení: Zavolejte nám přímo na <a href="tel:+420606084044">+420 606 084 044</a> nebo napište na <a href="mailto:info@zfpjagos.cz">info@zfpjagos.cz</a>.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    path: 'kariera',
    title: 'Kariéra ve financích | ZFP Jagoš & partneři – Staňte se součástí našeho týmu',
    description: 'Hledáte stabilní kariéru v dynamickém oboru? ZFP Jagoš & partneři nabízí certifikované zaškolení ZFP Akademie, silné zázemí a férové ohodnocení.',
    heading: 'Vybudujte si úspěšnou kariéru ve světě financí',
    lead: 'Dáváme šanci lidem s chutí učit se a pomáhat ostatním. Nabízíme kompletní know-how, špičkové zázemí a neomezený potenciál růstu.',
    breadcrumbs: [
      { name: 'Domů', item: 'https://zfpjagos.cz/' },
      { name: 'Kariéra', item: 'https://zfpjagos.cz/kariera' }
    ],
    content: `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Co nabízíme našim poradcům</h2>
          <ul class="space-y-3 text-slate-600 text-sm mb-8">
            <li>✔️ Certifikované vzdělání s licencemi ČNB pod hlavičkou ZFP Akademie</li>
            <li>✔️ Mentoring přímo od Bc. Jaroslava Jagoše, EFA a zkušených poradců</li>
            <li>✔️ Zázemí reprezentativní kanceláře ve Veselí nad Moravou</li>
            <li>✔️ Moderní digitální nástroje a analytický software (např. HypoSpace.cz)</li>
            <li>✔️ Spravedlivý provizní systém a možnost kariérního postupu na manažerské pozice</li>
          </ul>
          <p class="text-sm text-slate-700">Máte zájem o spolupráci? Napište nám na <a href="mailto:info@zfpjagos.cz" class="text-brand-600 font-bold">info@zfpjagos.cz</a> nebo zavolejte na <a href="tel:+420606084044" class="text-brand-600 font-bold">+420 606 084 044</a>.</p>
        </div>
      </section>
    `
  },
  {
    path: 'pro-klienty',
    title: 'Klientská zóna a servis | ZFP Jagoš & partneři',
    description: 'Komplexní klientský servis pro klienty ZFP Jagoš & partneři. Návody, hlášení pojistných událostí, kontakty na asistenční služby a formuláře.',
    heading: 'Klientský servis a důležité informace pro naše klienty',
    lead: 'Jsme vám k dispozici nejen při sjednání smlouvy, ale po celou dobu její platnosti. Pomůžeme s hlášením škod, změnami údajů i novými potřebami.',
    breadcrumbs: [
      { name: 'Domů', item: 'https://zfpjagos.cz/' },
      { name: 'Pro klienty', item: 'https://zfpjagos.cz/pro-klienty' }
    ],
    content: `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900 mb-3">Hlášení škodní události</h2>
            <p class="text-slate-600 text-sm mb-4">Stala se vám nehoda, úraz nebo škoda na majetku? Kontaktujte přímo svého osobního poradce nebo naši asistenční linku.</p>
            <a href="/kontakt" class="text-brand-600 font-bold text-sm hover:underline">Kontaktovat kancelář &rarr;</a>
          </div>
          <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900 mb-3">Změna údajů ve smlouvách</h2>
            <p class="text-slate-600 text-sm mb-4">Změnili jste adresu, příjmení, číslo účtu nebo občanský průkaz? Naše kancelář za vás vyřídí aktualizaci u všech institucí.</p>
            <a href="mailto:kancelar.jagos@zfpa.cz" class="text-brand-600 font-bold text-sm hover:underline">Napsat do kanceláře &rarr;</a>
          </div>
        </div>
      </section>
    `
  },
  {
    path: 'ochrana-osobnich-udaju',
    title: 'Ochrana osobních údajů a právní doložka (GDPR) | ZFP Jagoš & partneři',
    description: 'Zásady zpracování osobních údajů, cookies a regulatorní doložka ČNB pro návštěvníky a klienty webu zfpjagos.cz.',
    heading: 'Zásady ochrany osobních údajů a regulatorní informace (GDPR & ČNB)',
    lead: 'Bezpečnost vašich dat a transparentnost podle GDPR a zákonů o finančním trhu ČR je naší nejvyšší prioritou.',
    breadcrumbs: [
      { name: 'Domů', item: 'https://zfpjagos.cz/' },
      { name: 'Ochrana osobních údajů', item: 'https://zfpjagos.cz/ochrana-osobnich-udaju' }
    ],
    content: `
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose text-slate-700">
        <h2>1. Kdo spravuje vaše údaje</h2>
        <p>Bc. Jaroslav Jagoš, EFA se sídlem Hutník 1503, 698 01 Veselí nad Moravou, ve spolupráci se ZFP akademie, a.s. (IČO: 26307961, zapsaná v obchodním rejstříku vedeném Krajským soudem v Brně, oddíl B, vložka 3895).</p>
        <h2>2. Regulatorní status ČNB</h2>
        <p>Členové týmu ZFP Jagoš & partneři vykonávají činnost jako vázaní zástupci podle zákona č. 257/2016 Sb., o spotřebitelském úvěru, zákona č. 256/2004 Sb., o podnikání na kapitálovém trhu, zákona č. 170/2018 Sb., o distribuci pojištění a zajištění a zákona č. 427/2011 Sb., o doplňkovém penzijním spoření pro společnost ZFP akademie, a.s., která je registrována Českou národní bankou (ČNB).</p>
        <h2>3. Používání souborů Cookies</h2>
        <p>Používáme nezbytné technické cookies pro zajištění funkčnosti webu a analytické cookies pro měření návštěvnosti pouze se souhlasem návštěvníka.</p>
      </section>
    `
  }
];

// Add Team Member detail routes
teamMembers.forEach(member => {
  routes.push({
    path: `tym/${member.id}`,
    title: `${member.name} – ${member.role} | ZFP Jagoš & partneři`,
    description: `Profil finančního specialisty ${member.name} (${member.role}) v týmu ZFP Jagoš & partneři. Telefon: ${member.phone}, E-mail: ${member.email}.`,
    heading: member.name,
    lead: member.role,
    breadcrumbs: [
      { name: 'Domů', item: 'https://zfpjagos.cz/' },
      { name: 'Tým', item: 'https://zfpjagos.cz/tym' },
      { name: member.name, item: `https://zfpjagos.cz/tym/${member.id}` }
    ],
    content: `
      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start">
          <div class="w-full md:w-1/3">
            <img src="${member.image}" alt="${member.name}" class="w-full h-auto rounded-2xl object-cover shadow" width="400" height="500" loading="eager" />
          </div>
          <div class="w-full md:w-2/3">
            <span class="text-brand-600 font-semibold text-xs uppercase tracking-wider">${member.role}</span>
            <h1 class="text-3xl font-extrabold text-slate-900 mt-1 mb-4">${member.name}</h1>
            <p class="text-slate-600 leading-relaxed mb-6">${member.bio}</p>
            <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3 text-sm">
              <p>📞 <strong>Telefon:</strong> <a href="tel:${member.phone.replace(/\s+/g, '')}" class="text-brand-600 font-bold">${member.phone}</a></p>
              <p>✉️ <strong>E-mail:</strong> <a href="mailto:${member.email}" class="text-brand-600 font-bold">${member.email}</a></p>
              <p>📍 <strong>Kancelář:</strong> Strukturní kancelář Hutník 1503, Veselí nad Moravou</p>
            </div>
            <div class="mt-8 flex gap-4">
              <a href="/kontakt" class="px-6 py-3 bg-brand-600 text-white rounded-xl font-semibold shadow hover:bg-brand-700">Sjednat schůzku</a>
              <a href="/tym" class="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200">Zpět na celý tým</a>
            </div>
          </div>
        </div>
      </section>
    `
  });
});

// Add Blog Post detail routes
blogPosts.forEach(post => {
  routes.push({
    path: `blog/${post.id}`,
    title: `${post.title} | Blog ZFP Jagoš & partneři`,
    description: post.excerpt,
    heading: post.title,
    lead: `Publikováno: ${post.date} | Autor: Tým ZFP Jagoš & partneři`,
    breadcrumbs: [
      { name: 'Domů', item: 'https://zfpjagos.cz/' },
      { name: 'Blog', item: 'https://zfpjagos.cz/blog' },
      { name: post.title, item: `https://zfpjagos.cz/blog/${post.id}` }
    ],
    content: `
      <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <time class="text-sm font-semibold text-brand-600">${post.date}</time>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 mb-6 leading-tight">${post.title}</h1>
        <p class="text-lg text-slate-600 leading-relaxed font-medium mb-8 pb-6 border-b border-slate-100">${post.excerpt}</p>
        <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
          <p>Podrobný průvodce a analýza od specialistů ZFP Jagoš & partneři. Pro individuální konzultaci využijte náš kontaktní formulář nebo nám zavolejte přímo na +420 606 084 044.</p>
        </div>
        <div class="mt-12 pt-8 border-t border-slate-200 flex justify-between items-center">
          <a href="/blog" class="text-brand-600 font-semibold hover:underline">&larr; Zpět na všechny články</a>
          <a href="/kontakt" class="px-5 py-2.5 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700">Konzultovat článek s expertem</a>
        </div>
      </article>
    `
  });
});

console.log(`Starting static snapshot generation for ${routes.length} routes...`);

let generatedCount = 0;

for (const route of routes) {
  const targetDir = path.join(DIST_DIR, route.path);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFile = path.join(targetDir, 'index.html');
  const canonicalUrl = `https://zfpjagos.cz/${route.path}`;

  // Build breadcrumb items JSON-LD
  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': route.breadcrumbs.map((b, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': b.name,
      'item': b.item
    }))
  };

  // Modify HTML template for this route
  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  // Replace Meta Description
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`);

  // Replace Canonical Link
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Replace OG Tags
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);

  // Replace Twitter Tags
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />`);

  // Inject Breadcrumb Schema before </head>
  const schemaTag = `\n    <script type="application/ld+json">\n    ${JSON.stringify(breadcrumbListSchema, null, 2)}\n    </script>\n  </head>`;
  html = html.replace('</head>', schemaTag);

  // Replace <div id="root">...</div> with route-specific pre-rendered content for instant crawlability
  const routeContent = `
    <div id="root">
      <header class="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20 sm:h-24">
            <a href="/" aria-label="ZFP GROUP Jagoš & partneři – domovská stránka" class="flex-shrink-0 flex items-center">
              <img src="/logo-zfp-jagos-partneri.png" alt="ZFP GROUP Jagoš & partneři" class="h-13 sm:h-15 lg:h-16 w-auto object-contain" width="221" height="72" />
            </a>
            <nav class="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-700">
              <a href="/" class="hover:text-slate-900">O nás</a>
              <a href="/sluzby" class="${route.path.startsWith('sluzby') ? 'text-brand-600 font-semibold' : 'hover:text-slate-900'}">Služby</a>
              <a href="/tym" class="${route.path.startsWith('tym') ? 'text-brand-600 font-semibold' : 'hover:text-slate-900'}">Náš tým</a>
              <a href="/podcast" class="${route.path.startsWith('podcast') ? 'text-brand-600 font-semibold' : 'hover:text-slate-900'}">Podcast</a>
              <a href="/blog" class="${route.path.startsWith('blog') ? 'text-brand-600 font-semibold' : 'hover:text-slate-900'}">Blog</a>
              <a href="/kariera" class="${route.path.startsWith('kariera') ? 'text-brand-600 font-semibold' : 'hover:text-slate-900'}">Kariéra</a>
              <a href="/pro-klienty" class="${route.path.startsWith('pro-klienty') ? 'text-brand-600 font-semibold' : 'hover:text-slate-900'}">Pro klienty</a>
              <a href="/kontakt" class="inline-flex items-center px-4 py-2 rounded-lg text-white bg-brand-600 hover:bg-brand-700">Sjednat schůzku</a>
            </nav>
          </div>
        </div>
      </header>

      <main class="min-h-screen bg-slate-50">
        <!-- Visual Breadcrumb Bar -->
        <nav aria-label="Drobečková navigace" class="bg-white border-b border-slate-100 py-3">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol class="flex items-center space-x-2 text-xs text-slate-500">
              ${route.breadcrumbs.map((b, i) => `
                <li class="flex items-center">
                  ${i > 0 ? '<span class="mx-2 text-slate-400">/</span>' : ''}
                  <a href="${b.item.replace('https://zfpjagos.cz', '') || '/'}" class="${i === route.breadcrumbs.length - 1 ? 'font-semibold text-slate-900' : 'hover:text-slate-700'}">${b.name}</a>
                </li>
              `).join('')}
            </ol>
          </div>
        </nav>

        <!-- Route Header -->
        <section class="py-12 bg-white border-b border-slate-100">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">${route.heading}</h1>
            <p class="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">${route.lead}</p>
          </div>
        </section>

        <!-- Main Content Section -->
        ${route.content}
      </main>

      <footer class="bg-slate-950 text-slate-300 py-12 border-t border-slate-800 text-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p>&copy; 2026 ZFP Jagoš & partneři. Všechna práva vyhrazena.</p>
            <p class="text-xs text-slate-500 mt-1">ZFP akademie, a.s. | IČO: 26307961 | Vázaný zástupce ČNB</p>
          </div>
          <div class="flex space-x-6 text-xs text-slate-400">
            <a href="/" class="hover:text-white">O nás</a>
            <a href="/sluzby" class="hover:text-white">Služby</a>
            <a href="/tym" class="hover:text-white">Tým</a>
            <a href="/kontakt" class="hover:text-white">Kontakt</a>
            <a href="/ochrana-osobnich-udaju" class="hover:text-white">Ochrana údajů</a>
          </div>
        </div>
      </footer>
    </div>
  `;

  html = html.replace(/<div id="root">[\s\S]*?<\/div>\s*<!-- Noscript/m, `${routeContent}\n    <!-- Noscript`);

  fs.writeFileSync(targetFile, html, 'utf8');
  generatedCount++;
}

console.log(`[SUCCESS] Pre-rendered ${generatedCount} static HTML routes into dist/`);
