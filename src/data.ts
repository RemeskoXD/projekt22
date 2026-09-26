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
    bio: 'Dlouholetý odborník na komplexní finanční plánování. Pomáhám klientům dosáhnout jejich životních cílů pomocí strategického přístupu k financím. Zakladatel ZFP Jagoš & partneři.',
    quote: '"Kdo je připraven, není překvapen. Plánování je základem klidného života."',
    email: 'jaroslav.jagos@zfpa.cz',
    phone: '+420 720 114 080',
    imageUrl: '/HRK 1/Jaroslav Jagoš/WEB/DSC_4937.webp',
    socials: {
      facebook: 'https://www.facebook.com/jaroslav.jagos',
      instagram: 'https://www.instagram.com/jara_jagos_efa/'
    }
  },
  {
    id: 'miroslava-jagosova',
    name: 'Bc. Miroslava Jagošová, DiS.',
    role: 'Finanční poradce, senior',
    bio: 'Pomáhám lidem plnit si sny o vlastním bydlení a stabilní budoucnosti. Provedu vás celým procesem financování, úvěrů a finančního zabezpečení.',
    quote: '"Cesta k vlastnímu bydlení a finančnímu klidu nemusí být stresující, když máte po boku spolehlivého odborníka."',
    email: 'miroslava.jagosova@zfpa.cz',
    phone: '+420 721 054 076',
    imageUrl: '/HRK 1/Mirka Jagosova/WEB/DSC_8014-Edit.webp'
  },
  {
    id: 'david-jagos',
    name: 'David Jagoš, PFP',
    role: 'Expertní finanční poradce',
    bio: 'Postarám se o to, aby váš majetek nejen bezpečně rostl, ale byl také chráněn před inflací a neočekávanými událostmi.',
    quote: '"Správné investiční rozhodnutí dnes znamená klidnější zítřek."',
    email: 'david.jagos@zfpa.cz',
    phone: '+420 720 114 125',
    imageUrl: '/HRK 1/David Jagos/WEB/DSC_8524-Edit.webp',
    socials: {
      facebook: 'https://www.facebook.com/david.jagos',
      instagram: 'https://www.instagram.com/david.jagos/'
    }
  },
  {
    id: 'dusan-ceresnak',
    name: 'Dušan Čerešňák, PFP',
    role: 'Expertní finanční poradce',
    bio: 'Specialista na komplexní finanční poradenství, investice a ochranu rodinných rozpočtů.',
    quote: '"Individuální přístup a spokojenost klienta je u mě na prvním místě."',
    email: 'dusan.ceresnak@zfpa.cz',
    phone: '+420 735 965 409',
    imageUrl: '/HRK 1/Dušan Čerešňák/WEB/DSC_5174.webp',
  },
  {
    id: 'rene-kohoutek',
    name: 'René Kohoutek, PFP',
    role: 'Expertní finanční poradce',
    bio: 'Komplexní správa majetku vyžaduje nadhled a pečlivou analýzu trhu. Mým cílem je váš dlouhodobý profit a stabilita.',
    quote: '"Bohatství se netvoří přes noc, ale systematickou a smysluplnou prací."',
    email: 'rene.kohoutek@zfpa.cz',
    phone: '+420 732 421 745',
    imageUrl: '/HRK 1/Rene Kohoutek/WEB/DSC_8555.webp',
  },
  {
    id: 'sarka-navalana',
    name: 'Šárka Navalaná, PFP',
    role: 'Expertní finanční poradce',
    bio: 'Pomáhám klientům správně nastavit rodinné finance a bezpečně zhodnocovat jejich úspory.',
    quote: '"Důvěra a otevřená komunikace jsou základem úspěšné finanční cesty."',
    email: 'sarka.navalana@zfpa.cz',
    phone: '+420 731 554 487',
    imageUrl: '/HRK 1/Sarka Navalana/WEB/DSC_7124-Edit.webp',
    socials: {
      website: 'https://www.sarkanavalana.cz',
      instagram: 'https://www.instagram.com/zfppreloucsi/'
    }
  },
  {
    id: 'patrik-knotek',
    name: 'Patrik Knotek',
    role: 'Expertní finanční poradce',
    bio: 'Zaměřuji se na tvorbu a ochranu majetku. Společně s kolegy tvořím podcast Finanční kompas, kde se snažíme složitý svět financí přiblížit lidem.',
    quote: '"Investování není o štěstí, ale o disciplíně a správných informacích."',
    email: 'patrik.knotek@zfpa.cz',
    phone: '+420 739 150 361',
    imageUrl: '/patrik-knotek.png',
    socials: {
      website: 'https://www.patrikknotek.cz',
      facebook: 'https://www.facebook.com/patrik.knotek.3/',
      instagram: 'https://www.instagram.com/knotek.patrik/'
    }
  },
  {
    id: 'dominik-konecny',
    name: 'Dominik Konečný',
    role: 'Senior finanční poradce',
    bio: 'Pomáhám klientům efektivně spravovat jejich výdaje, úspory a investice s jasným plánem.',
    quote: '"Finanční svoboda začíná porozuměním vlastním penězům."',
    email: 'dominik.konecny@zfpa.cz',
    phone: '+420 704 076 937',
    imageUrl: '/HRK 1/Dominik Konečný/WEB/DSC_7256-Edit.webp',
  },
  {
    id: 'katerina-lenghartova',
    name: 'Kateřina Lenghartová',
    role: 'Senior finanční poradce',
    bio: 'Osobní finanční poradenství se zaměřením na srozumitelnost, lidskost a férovost.',
    quote: '"Kvalitní poradenství je o naslouchání a hledání nejlepší cesty pro klienta."',
    email: 'katerina.lenghartova@zfpa.cz',
    phone: '+420 774 959 062',
    imageUrl: '/HRK 1/Kateřina Lenghartová/WEB/DSC_7130-Edit.webp',
  },
  {
    id: 'jaromir-manak',
    name: 'Bc. Jaromír Maňák',
    role: 'Expertní finanční poradce',
    bio: 'Dlouholeté zkušenosti v oblasti osobních i firemních financí, investičního poradenství a komplexní správy majetku.',
    quote: '"Úspěch ve financích je výsledkem promyšlené strategie a dlouhodobé disciplíny."',
    email: 'jaromir.manak@zfpa.cz',
    phone: '+420 606 572 899',
    imageUrl: '/HRK 1/Jaromir Manak/WEB/DSC_7991.webp',
  },
  {
    id: 'kristyna-rancikova',
    name: 'Kristýna Rančíková',
    role: 'Finanční poradce',
    bio: 'Pomáhám klientům orientovat se v možnostech spoření, investic a zabezpečení rodiny.',
    quote: '"S poctivým přístupem a jasným plánem lze dosáhnout každého finančního snu."',
    email: 'kristyna.rancikova@zfpa.cz',
    phone: '+420 607 396 112',
    imageUrl: '/kristyna-rancikova.png',
    socials: {
      facebook: 'https://www.facebook.com/kristyna.rancikova',
      instagram: 'https://www.instagram.com/rancicena'
    }
  },
  {
    id: 'klara-kovarova',
    name: 'Klára Kovářová',
    role: 'Finanční poradce',
    bio: 'Osobní přístup k řešení rodinných rozpočtů, pojištění a dlouhodobého spoření pro děti.',
    quote: '"Správná finanční rozhodnutí dělají život klidnějším a bezstarostnějším."',
    email: 'klara.kovarova@zfpa.cz',
    phone: '+420 603 542 055',
    imageUrl: '',
  },
  {
    id: 'michaela-ivanova',
    name: 'Bc. Michaela Ivanová',
    role: 'Vedoucí kanceláře',
    bio: 'Zajišťuji bezproblémový chod kanceláře, organizaci schůzek a kompletní klientskou a administrativní podporu pro celý tým.',
    quote: '"Perfektní organizace a servis pro klienty jsou pilířem naší práce."',
    email: 'kancelar.jagos@zfpa.cz',
    phone: '+420 606 084 044',
    imageUrl: '',
  },
  {
    id: 'lenka-studenkova',
    name: 'Bc. Lenka Studénková',
    role: 'Obchodní asistentka',
    bio: 'Péče o klientskou agendu, příprava podkladů pro jednání a podpora poradců při realizaci finančních plánů.',
    quote: '"Každý detail je důležitý pro spokojenost a jistotu našich klientů."',
    email: 'srk171@zfpakademie.cz',
    phone: '+420 776 507 991',
    imageUrl: '',
  },
  {
    id: 'david-hajek',
    name: 'David Hájek',
    role: 'Odborný finanční poradce',
    bio: 'Konzultace a zprostředkování v oblasti úvěrů, pojištění a spoření pro jednotlivce i rodiny.',
    quote: '"Mým cílem je, aby klienti přesně věděli, za co platí a co jim to přináší."',
    email: 'david.hajek@zfpa.cz',
    phone: '+420 606 084 044',
    imageUrl: '/HRK 1/David Hájek/WEB/DSC_7332.webp',
  },
  {
    id: 'tomas-herka',
    name: 'Tomáš Herka',
    role: 'Odborný poradce a majetkový konzultant',
    bio: 'Specializace na správu majetku, investiční strategie a ochranu rodinných financí.',
    quote: '"Investice do vlastní budoucnosti je to nejlepší rozhodnutí."',
    email: 'tomas.herka@zfpa.cz',
    phone: '+420 606 084 044',
    imageUrl: '',
  },
  {
    id: 'karel-cab',
    name: 'Karel Cáb',
    role: 'Spoluzakladatel týmu & Finanční specialista',
    bio: 'Dlouholetý odborník a spoluzakladatel týmu ZFP Jagoš & partneři. Komplexní správa rodinného a firemního majetku.',
    quote: '"Dlouhodobé partnerství a důvěra jsou nejcennější hodnoty v našem oboru."',
    email: 'karel.cab@zfpa.cz',
    phone: '+420 606 084 044',
    imageUrl: '',
  },
  {
    id: 'tereza-pribylova',
    name: 'Tereza Přibylová',
    role: 'Finanční poradkyně',
    bio: 'Péče o klientská portfolia, finanční analýzy a hledání optimálních řešení na trhu.',
    quote: '"Vaše spokojenost a finanční bezpečí jsou pro mě na prvním místě."',
    email: 'tereza.pribylova@zfpa.cz',
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
