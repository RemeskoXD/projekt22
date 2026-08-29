export function getImageUrl(url: string): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return encodeURI(decodeURI(url));
}

import { TeamMember, Review, BlogPost } from './types';

export const teamMembers: TeamMember[] = [
  {
    id: 'jaroslav-jagos',
    name: 'Bc. Jaroslav Jagoš, EFA',
    role: 'Ředitel obchodního týmu, zakladatel',
    bio: 'Dlouholetý odborník na komplexní finanční plánování. Pomáhám klientům dosáhnout jejich životních cílů pomocí strategického přístupu k financím. Zakladatel ZFP Jagoš & Cábovi.',
    quote: '"Kdo je připraven, není překvapen. Plánování je základem klidného života."',
    email: 'jaroslav.jagos@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '/HRK 1/Jaroslav Jagoš/WEB/DSC_4937.webp',
  },
  {
    id: 'david-jagos',
    name: 'David Jagoš, PFP',
    role: 'Manažer obchodního týmu, majetkový specialista',
    bio: 'Postarám se o to, aby váš majetek nejen bezpečně rostl, ale byl také chráněn před inflací a neočekávanými událostmi.',
    quote: '"Správné investiční rozhodnutí dnes znamená klidnější zítřek."',
    email: 'david.jagos@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '/HRK 1/David Jagos/WEB/DSC_8524-Edit.webp',
  },
  {
    id: 'dusan-ceresnak',
    name: 'Dušan Čerešňák, PFP',
    role: 'Odborný poradce a majetkový specialista',
    bio: 'Specialista na komplexní finanční poradenství, investice a ochranu rodinných rozpočtů.',
    quote: '"Individuální přístup a spokojenost klienta je u mě na prvním místě."',
    email: 'dusan.ceresnak@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '/HRK 1/Dušan Čerešňák/WEB/DSC_5174.webp',
  },
  {
    id: 'rene-kohoutek',
    name: 'René Kohoutek, PFP',
    role: 'Vedoucí obchodního týmu a majetkový specialista',
    bio: 'Komplexní správa majetku vyžaduje nadhled a pečlivou analýzu trhu. Mým cílem je váš dlouhodobý profit a stabilita.',
    quote: '"Bohatství se netvoří přes noc, ale systematickou a smysluplnou prací."',
    email: 'rene.kohoutek@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '/HRK 1/Rene Kohoutek/WEB/DSC_8555.webp',
  },
  {
    id: 'sarka-navalana',
    name: 'Šárka Navalaná, PFP',
    role: 'Odborná poradkyně a finanční specialistka',
    bio: 'Pomáhám klientům správně nastavit rodinné finance a bezpečně zhodnocovat jejich úspory.',
    quote: '"Důvěra a otevřená komunikace jsou základem úspěšné finanční cesty."',
    email: 'sarka.navalana@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '/HRK 1/Sarka Navalana/WEB/DSC_7124-Edit.webp',
  },
  {
    id: 'michaela-ivanova',
    name: 'Bc. Michaela Ivanová',
    role: 'Finanční poradkyně a specialistka',
    bio: 'Odbornice na osobní a rodinné finance, ochranu příjmů a finanční plánování na míru.',
    quote: '"Správně nastavený plán přináší finanční klid a jistotu do každého dne."',
    email: 'michaela.ivanova@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '',
  },
  {
    id: 'miroslava-jagosova',
    name: 'Bc. Miroslava Jagošová, DiS.',
    role: 'Specialistka na úvěry a hypotéky',
    bio: 'Pomáhám lidem plnit si sny o vlastním bydlení. Provedu vás celým procesem od výběru nejlepší hypotéky až po čerpání prostředků.',
    quote: '"Cesta k vlastnímu bydlení nemusí být stresující, když máte po boku odborníka."',
    email: 'miroslava.jagosova@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '/HRK 1/Mirka Jagosova/WEB/DSC_8014-Edit.webp',
  },
  {
    id: 'lenka-studenkova',
    name: 'Bc. Lenka Studénková',
    role: 'Finanční poradkyně a specialistka',
    bio: 'Komplexní péče o finance klientů s důrazem na dlouhodobou stabilitu a efektivní spoření.',
    quote: '"Každý finanční cíl má své řešení, stačí udělat první krok."',
    email: 'lenka.studenkova@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '',
  },
  {
    id: 'patrik-knotek',
    name: 'Patrik Knotek',
    role: 'Obchodní zástupce & Spolutvůrce podcastu',
    bio: 'Zaměřuji se na tvorbu a ochranu majetku. Společně s kolegy tvořím podcast Finanční kompas, kde se snažíme složitý svět financí přiblížit lidem.',
    quote: '"Investování není o štěstí, ale o disciplíně a správných informacích."',
    email: 'patrik.knotek@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '/HRK 1/Patrik Knotek/WEB/DSC_8374.webp',
  },
  {
    id: 'dominik-konecny',
    name: 'Dominik Konečný',
    role: 'Odborný finanční poradce',
    bio: 'Pomáhám klientům efektivně spravovat jejich výdaje, úspory a investice s jasným plánem.',
    quote: '"Finanční svoboda začíná porozuměním vlastním penězům."',
    email: 'dominik.konecny@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '/HRK 1/Dominik Konečný/WEB/DSC_7256-Edit.webp',
  },
  {
    id: 'david-hajek',
    name: 'David Hájek',
    role: 'Odborný finanční poradce',
    bio: 'Konzultace a zprostředkování v oblasti úvěrů, pojištění a spoření pro jednotlivce i rodiny.',
    quote: '"Mým cílem je, aby klienti přesně věděli, za co platí a co jim to přináší."',
    email: 'david.hajek@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '/HRK 1/David Hájek/WEB/DSC_7332.webp',
  },
  {
    id: 'katerina-lenghartova',
    name: 'Kateřina Lenghartová',
    role: 'Odborná poradkyně',
    bio: 'Osobní finanční poradenství se zaměřením na srozumitelnost, lidskost a férovost.',
    quote: '"Kvalitní poradenství je o naslouchání a hledání nejlepší cesty pro klienta."',
    email: 'katerina.lenghartova@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '/HRK 1/Kateřina Lenghartová/WEB/DSC_7130-Edit.webp',
  },
  {
    id: 'kristyna-rancikova',
    name: 'Kristýna Rančíková',
    role: 'Finanční poradkyně',
    bio: 'Pomáhám klientům orientovat se v možnostech spoření, investic a zabezpečení rodiny.',
    quote: '"S poctivým přístupem a jasným plánem lze dosáhnout každého finančního snu."',
    email: 'kristyna.rancikova@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '',
  },
  {
    id: 'tomas-herka',
    name: 'Tomáš Herka',
    role: 'Odborný poradce a majetkový konzultant',
    bio: 'Specializace na správu majetku, investiční strategie a ochranu rodinných financí.',
    quote: '"Investice do vlastní budoucnosti je to nejlepší rozhodnutí."',
    email: 'tomas.herka@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '',
  },
  {
    id: 'karel-cab',
    name: 'Karel Cáb',
    role: 'Spoluzakladatel týmu & Finanční specialista',
    bio: 'Dlouholetý odborník a spoluzakladatel týmu ZFP Jagoš & Cábovi. Komplexní správa rodinného a firemního majetku.',
    quote: '"Dlouhodobé partnerství a důvěra jsou nejcennější hodnoty v našem oboru."',
    email: 'karel.cab@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '',
  },
  {
    id: 'klara-kovarova',
    name: 'Klára Kovářová',
    role: 'Finanční poradkyně',
    bio: 'Osobní přístup k řešení rodinných rozpočtů, pojištění a dlouhodobého spoření pro děti.',
    quote: '"Správná finanční rozhodnutí dělají život klidnějším a bezstarostnějším."',
    email: 'klara.kovarova@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '',
  },
  {
    id: 'tereza-pribylova',
    name: 'Tereza Přibylová',
    role: 'Finanční poradkyně',
    bio: 'Péče o klientská portfolia, finanční analýzy a hledání optimálních řešení na trhu.',
    quote: '"Vaše spokojenost a finanční bezpečí jsou pro mě na prvním místě."',
    email: 'tereza.pribylova@zfp.cz',
    phone: '+420 606 084 044',
    imageUrl: '',
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    clientName: 'Jan Novák',
    text: 'S týmem ZFP spolupracuji už několik let. Jejich přístup je vždy profesionální a díky jejich finančnímu plánu jsme s rodinou zabezpečeni na budoucnost.',
    rating: 5
  },
  {
    id: '2',
    clientName: 'Petr a Jana Svobodovi',
    text: 'Chtěli bychom poděkovat za pomoc při vyřizování hypotéky. Vše proběhlo hladce a ušetřili nám spoustu času a nervů.',
    rating: 5,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Placeholder
  },
  {
    id: '3',
    clientName: 'Martin Dvořák',
    text: 'Podcast Finanční kompas je super. Díky němu jsem se začal víc zajímat o své peníze a následná osobní schůzka mi otevřela oči. Doporučuji!',
    rating: 5
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Jak se připravit na hypotéku v roce 2026',
    excerpt: 'Úrokové sazby se mění, pravidla bank také. Na co si dát letos pozor, pokud plánujete vlastní bydlení?',
    content: 'Zde bude kompletní text článku...',
    date: '20. června 2026',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Proč je důležité mít finanční plán',
    excerpt: 'Většina lidí plánuje dovolenou déle než své finance. Proč je to chyba a jak s plánováním začít?',
    content: 'Zde bude kompletní text článku...',
    date: '10. června 2026',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Investování pro začátečníky',
    excerpt: 'Bojíte se investovat? Ukážeme vám, že to není tak složité, jak se na první pohled zdá.',
    content: 'Zde bude kompletní text článku...',
    date: '1. června 2026',
    imageUrl: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800'
  }
];
