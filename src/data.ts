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
    imageUrl: '/team/jaroslav-jagos.webp',
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
    imageUrl: '/team/miroslava-jagosova.webp'
  },
  {
    id: 'david-jagos',
    name: 'David Jagoš, PFP',
    role: 'Expertní finanční poradce',
    bio: 'Postarám se o to, aby váš majetek nejen bezpečně rostl, ale byl také chráněn před inflací a neočekávanými událostmi.',
    quote: '"Správné investiční rozhodnutí dnes znamená klidnější zítřek."',
    email: 'david.jagos@zfpa.cz',
    phone: '+420 720 114 125',
    imageUrl: '/team/david-jagos.webp',
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
    imageUrl: '/team/dusan-ceresnak.webp',
  },
  {
    id: 'rene-kohoutek',
    name: 'René Kohoutek, PFP',
    role: 'Expertní finanční poradce',
    bio: 'Komplexní správa majetku vyžaduje nadhled a pečlivou analýzu trhu. Mým cílem je váš dlouhodobý profit a stabilita.',
    quote: '"Bohatství se netvoří přes noc, ale systematickou a smysluplnou prací."',
    email: 'rene.kohoutek@zfpa.cz',
    phone: '+420 732 421 745',
    imageUrl: '/team/rene-kohoutek.webp',
  },
  {
    id: 'sarka-navalana',
    name: 'Šárka Navalaná, PFP',
    role: 'Expertní finanční poradce',
    bio: 'Pomáhám klientům správně nastavit rodinné finance a bezpečně zhodnocovat jejich úspory.',
    quote: '"Důvěra a otevřená komunikace jsou základem úspěšné finanční cesty."',
    email: 'sarka.navalana@zfpa.cz',
    phone: '+420 731 554 487',
    imageUrl: '/team/sarka-navalana.webp',
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
    imageUrl: '/team/patrik-knotek.png',
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
    imageUrl: '/team/dominik-konecny.webp',
  },
  {
    id: 'katerina-lenghartova',
    name: 'Kateřina Lenghartová',
    role: 'Senior finanční poradce',
    bio: 'Osobní finanční poradenství se zaměřením na srozumitelnost, lidskost a férovost.',
    quote: '"Kvalitní poradenství je o naslouchání a hledání nejlepší cesty pro klienta."',
    email: 'katerina.lenghartova@zfpa.cz',
    phone: '+420 774 959 062',
    imageUrl: '/team/katerina-lenghartova.webp',
  },
  {
    id: 'jaromir-manak',
    name: 'Bc. Jaromír Maňák',
    role: 'Expertní finanční poradce',
    bio: 'Dlouholeté zkušenosti v oblasti osobních i firemních financí, investičního poradenství a komplexní správy majetku.',
    quote: '"Úspěch ve financích je výsledkem promyšlené strategie a dlouhodobé disciplíny."',
    email: 'jaromir.manak@zfpa.cz',
    phone: '+420 606 572 899',
    imageUrl: '/team/jaromir-manak.webp',
  },
  {
    id: 'kristyna-rancikova',
    name: 'Kristýna Rančíková',
    role: 'Finanční poradce',
    bio: 'Pomáhám klientům orientovat se v možnostech spoření, investic a zabezpečení rodiny.',
    quote: '"S poctivým přístupem a jasným plánem lze dosáhnout každého finančního snu."',
    email: 'kristyna.rancikova@zfpa.cz',
    phone: '+420 607 396 112',
    imageUrl: '/team/kristyna-rancikova.png',
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
    imageUrl: '/team/klara-kovarova.webp',
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
    id: 'karel-cab',
    name: 'Karel Cáb',
    role: 'Spoluzakladatel týmu & Finanční specialista',
    bio: 'Dlouholetý odborník a spoluzakladatel týmu ZFP Jagoš & partneři. Komplexní správa rodinného a firemního majetku.',
    quote: '"Dlouhodobé partnerství a důvěra jsou nejcennější hodnoty v našem oboru."',
    email: 'karel.cab@zfpa.cz',
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
    rating: 5
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
    id: 'jak-se-pripravit-na-hypoteku-2026',
    title: 'Jak se připravit na hypotéku v roce 2026: Kompletní průvodce financováním bydlení',
    excerpt: 'Úrokové sazby se vyvíjejí a banky upravují pravidla posuzování bonity. Na co si dát pozor a jak ušetřit statisíce korun při sjednání vlastního bydlení?',
    content: `Pořízení vlastního bydlení patří mezi nejvýznamnější finanční rozhodnutí v životě. V roce 2026 se český hypoteční trh nachází v dynamickém období, kdy banky bedlivě sledují vývoj inflace a základních úrokových sazeb ČNB. Přestože se podmínky mohou na první pohled zdát přísné, správně připravený žadatel může dosáhnout na výrazně výhodnější podmínky, než jaké banky běžně inzerují na svých přepážkách.

Prvním a zcela zásadním krokem je včasný audit bonity. Banky dnes detailně posuzují nejen výši oficiálních příjmů, ale především jejich stabilitu a strukturu pravidelných výdajů. Mezi časté komplikace patří například nevyužívané kreditní karty či kontokorenty, které bankovní registry chápou jako potenciální závazek a snižují tak vaši úvěrovou kapacitu. Doporučujeme tyto produkty zrušit alespoň tři měsíce před podáním žádosti.

Druhým pilířem je volba vhodné délky fixace. V prostředí kolísajících sazeb se vyplatí pečlivě zvážit rozdíl mezi tříletou a pětiletou fixací. Krátká fixace vám nabízí flexibilitu a možnost dřívějšího refinancování v případě poklesu tržních sazeb, zatímco delší fixace přináší rozpočtovou jistotu stabilní měsíční splátky. Neexistuje univerzální rada – vždy záleží na vaší rodinné rezervě a ochotě nést úrokové riziko.

Třetím klíčovým faktorem je nezávislé porovnání celého trhu. Když přijdete do jedné konkrétní banky, její úvěrový specialista vám vždy nabídne pouze produkty své mateřské instituce. My v ZFP Jagoš & partneři máme přímý přístup do všech významných hypotečních bank v České republice a ve spolupráci s platformou HypoSpace.cz dokážeme v reálném čase porovnat nabídky, vyjednat individuální slevy z úrokové sazby a často zajistit odhad nemovitosti zcela zdarma.

Nezapomeňte také na vlastní zdroje. Podle aktuálních regulatorních pravidel je standardně vyžadováno minimálně 10–20 % z kupní ceny nemovitosti (LTV 80–90 %). Pokud tyto prostředky nemáte v hotovosti, existují legální a bezpečné cesty dofinancování – například využitím další nemovitosti v rodině nebo kombinací s účelovým stavebním spořením. Rádi s vámi celou strategii projdeme na osobní schůzce v naší kanceláři ve Veselí nad Moravou.`,
    date: '15. září 2026',
    imageUrl: '/DSC_4749-Enhanced-NR.webp'
  },
  {
    id: 'proc-je-dulezite-mit-financni-plan',
    title: 'Proč je finanční plán základem rodinného klidu a jak jej sestavit',
    excerpt: 'Většina lidí plánuje dovolenou déle než své celoživotní zabezpečení. Proč je to zásadní chyba a jak vytvořit strategii, která obstojí v každé krizi?',
    content: `Je překvapivým faktem moderní doby, že průměrná česká rodina stráví desítky hodin výběrem letní dovolené, ale strategii pro správu vlastních celoživotních úspor nevěnuje téměř žádný systematický čas. Výsledkem bývají neřízené výdaje, nevhodně nastavené smlouvy z minulosti a neustálý podvědomý stres z budoucnosti.

Smysluplný finanční plán není o tom, abyste si odpírali každodenní radosti. Je to architektonický plán vašeho majetku, který vám dává jasnou mapu a odpověď na otázky: Kolik musím odkládat, abych zajistil vzdělání dětem? Kdy si budu moci dovolit splatit hypotéku? A jaký měsíční pasivní příjem budu mít v 55 nebo 60 letech?

Základem každého zdravého plánu jsou tzv. tři peněžní pilíře. Prvním je pohotovostní rezerva – částka ve výši 3 až 6 měsíčních rodinných výdajů uložená na likvidním účtu, která slouží výhradně pro nečekané situace (oprava auta, výměna spotřebiče). Druhým pilířem je střednědobá rezerva (na 3 až 7 let), která chrání úspory před inflací prostřednictvím konzervativnějších nástrojů a realitních fondů. Třetím pilířem je dlouhodobý majetek na 10 a více let, kde naplno využíváme sílu složeného úročení a dynamických investic.

Součástí plánu musí být také nekompromisní ochrana rodinných příjmů. Největším aktivem mladé rodiny není dům ani auto, ale její schopnost vydělávat peníze. Pokud vypadne hlavní živitel rodiny kvůli úrazu či dlouhodobé nemoci, hypotéka a běžné účty nezmizí. Kvalitní audit životního pojištění má za cíl pokrýt skutečně katastrofická rizika (invalidita III. a II. stupně, trvalé následky) a odbourat zbytečná drahá připojištění drobných úrazů.

V ZFP Jagoš & partneři stavíme finanční plány na pevných datech a otevřené komunikaci. Každý klient od nás odchází s přehlednou analýzou stávajících smluv a jasným doporučením kroků, které vedou k měřitelnému růstu čistého rodinného jmění.`,
    date: '2. září 2026',
    imageUrl: '/spolecna-2-scaled.webp'
  },
  {
    id: 'investovani-pro-zacatecniky-jak-ochranit-uspory',
    title: 'Investování pro začátečníky: Jak bezpečně chránit úspory před inflací',
    excerpt: 'Bojíte se investovat a necháváte peníze na běžném účtu? Ukážeme vám, proč je nečinnost největším rizikem a jak krok za krokem začít.',
    content: `Po letech vysoké inflace si většina Čechů uvědomila krutou pravdu: nechat peníze ležet na běžném účtu nebo standardním spořicím účtu znamená garantovanou ztrátu kupní síly. Inflace je tichý zloděj, který z každých uspořených 100 000 Kč během několika let ukrojí významnou část hodnoty. Jedinou skutečnou obranou je promyšlené a disciplinované investování.

Mnoho lidí má z investování strach, protože si pod ním představují riskantní spekulace na burze nebo nepřehledné kryptoměny. Skutečné bohatství se však netvoří hazardem, nýbrž systematickou prací s prověřenými aktivy. Mezi základní stavební kameny moderního portfolia patří globálně diverzifikované akciové fondy, realitní fondy a fyzické drahé kovy.

Klíčovým konceptem, který hraje ve váš prospěch, je složené úročení – to, co Albert Einstein údajně označil za osmý div světa. Když své výnosy znovu reinvestujete, úroky začnou generovat další úroky. Při pravidelném horizontu 15 či 20 let tvoří složené úročení často větší část celkového majetku než samotné vámi vložené peníze.

Důležitou součástí portfolia našich klientů jsou také prověřené realitní fondy ZFP Investments, které investují do prémiových komerčních a logistických nemovitostí v České republice i střední Evropě. Přinášejí stabilní výnos opřený o reálné nájemní smlouvy. Pro maximální stabilitu v turbulentních časech pak doporučujeme držet část úspor ve fyzickém investičním zlatě (ZFP Gold) nejvyšší certifikované ryzosti.

Začít s investováním přitom nevyžaduje miliony v kapse. Pravidelný investiční program lze odstartovat již od 1 000 Kč měsíčně. Naši experti vám pomohou nastavit portfolio přesně podle vašeho rizikového profilu tak, abyste mohli v noci klidně spát a vaše peníze pracovaly pro vás.`,
    date: '18. srpna 2026',
    imageUrl: '/DSC_4699_o.webp'
  }
];
