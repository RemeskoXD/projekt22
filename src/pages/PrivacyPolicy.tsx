import { motion } from 'motion/react';
import { ShieldCheck, Lock, FileText, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPolicy() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Zásady ochrany osobních údajů – ZFP Jagoš & partneři",
    "description": "Informace o zpracování a ochraně osobních údajů v souladu s GDPR a regulatorními předpisy ČNB.",
    "url": "https://zfpjagos.cz/ochrana-osobnich-udaju"
  };

  return (
    <div className="bg-white min-h-screen py-8 lg:py-16">
      <SEO 
        title="Zásady ochrany osobních údajů (GDPR)"
        description="Informace o zpracování a ochraně osobních údajů, cookies a právní identifikaci ZFP Jagoš & partneři v souladu s GDPR a předpisy ČNB."
        canonical="/ochrana-osobnich-udaju"
        schema={privacySchema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs 
          items={[{ label: 'Ochrana osobních údajů' }]} 
          className="mb-6"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <header className="mb-10 pb-8 border-b border-slate-100">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4">
              <ShieldCheck className="w-4 h-4 mr-1.5" />
              V souladu s Nařízením EU 2016/679 (GDPR)
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Zásady ochrany osobních údajů a právní doložka
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Vážíme si vaší důvěry. Níže naleznete podrobné informace o tom, jaké osobní údaje shromažďujeme, jak s nimi nakládáme, jaká jsou vaše práva a jakým regulatorním rámcům podléháme.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Poslední aktualizace dokumentu: 27. září 2026
            </p>
          </header>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
            
            {/* 1. Kdo je správcem a regulatorní status ČNB */}
            <section className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-600" />
                1. Identifikace správce a regulatorní postavení ČNB
              </h2>
              <p>
                Správcem osobních údajů zpracovávaných prostřednictvím webových stránek <strong>zfpjagos.cz</strong> a poskytovatelem finančních služeb je:
              </p>
              <div className="mt-3 p-4 bg-white rounded-xl border border-slate-200 font-medium text-slate-900 text-sm space-y-1.5">
                <p><strong>Bc. Jaroslav Jagoš, EFA</strong> — ředitel obchodního týmu a zakladatel ZFP Jagoš & partneři</p>
                <p><strong>IČO:</strong> 74832182</p>
                <p><strong>Sídlo strukturní kanceláře:</strong> Hutník 1503, 698 01 Veselí nad Moravou</p>
                <p><strong>E-mail:</strong> <a href="mailto:info@zfpjagos.cz" className="text-brand-600 hover:underline">info@zfpjagos.cz</a> | <strong>Telefon:</strong> <a href="tel:+420606084044" className="text-brand-600 hover:underline">+420 606 084 044</a></p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                <p>
                  <strong>Regulace a registrace u České národní banky (ČNB):</strong><br />
                  Bc. Jaroslav Jagoš, EFA (IČO: 74832182) i certifikovaní poradci týmu vykonávají poradenskou a zprostředkovatelskou činnost na finančním trhu jako <strong>vázaní zástupci</strong> zapsaní v oficiálním registru finančních zprostředkovatelů vedeném Českou národní bankou.
                </p>
                <p>
                  Ověření registrace v oficiálním registru subjektů ČNB je veřejně dostupné na adrese:{' '}
                  <a
                    href="https://www.cnb.cz/cnb/jerrs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 font-semibold underline"
                  >
                    Registr subjektů ČNB (JERRS) &rarr;
                  </a>{' '}
                  (vyhledáním podle IČO <strong>74832182</strong> nebo jména <em>Jaroslav Jagoš</em>).
                </p>
                <div className="p-3 bg-white/90 rounded-lg border border-slate-200 text-xs space-y-1 mt-2">
                  <p><strong>Zastoupený samostatný zprostředkovatel:</strong></p>
                  <p>
                    <strong>ZFP akademie, a.s.</strong>, IČO: 26307961, se sídlem 17. listopadu 3110/1a, 690 02 Břeclav, zapsaná v obchodním rejstříku vedeném Krajským soudem v Brně, oddíl B, vložka 3959.
                  </p>
                  <p className="text-slate-500 pt-1">
                    Rozsah oprávnění ČNB: Samostatný zprostředkovatel spotřebitelského úvěru (zákon č. 257/2016 Sb.), samostatný zprostředkovatel pojištění (zákon č. 170/2018 Sb.), investiční zprostředkovatel (zákon č. 256/2004 Sb.) a zprostředkovatel doplňkového penzijního spoření (zákon č. 427/2011 Sb.).
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Jaké údaje sbíráme */}
            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">
                2. Rozsah zpracovávaných osobních údajů
              </h2>
              <p>
                Zpracováváme pouze ty údaje, které nám sami dobrovolně poskytnete za účelem sjednání schůzky, výpočtu kalkulace nebo zodpovězení dotazu:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li><strong>Identifikační a kontaktní údaje:</strong> Jméno a příjmení, e-mailová adresa, telefonní číslo.</li>
                <li><strong>Údaje z poptávkových formulářů:</strong> Předmět zájmu (např. hypotéka, investice, pojištění), text vaší zprávy, případně požadavek na termín konzultace.</li>
                <li><strong>Technické údaje:</strong> IP adresa, anonymizované logy přístupů, nezbytné technické cookies potřebné pro bezpečný provoz webu.</li>
              </ul>
            </section>

            {/* 3. Účel a právní základ */}
            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">
                3. Účel a právní základ zpracování
              </h2>
              <p>Vaše osobní údaje zpracováváme výhradně na základě zákonných důvodů dle čl. 6 GDPR:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Jednání o smlouvě / vyřízení poptávky (čl. 6 odst. 1 písm. b) GDPR):</strong><br />
                  Zpracování je nezbytné pro kontaktování vaší osoby, přípravu nezávazné nabídky, kalkulaci hypotéky či sjednání termínu konzultace.
                </li>
                <li>
                  <strong>Plnění právních povinností (čl. 6 odst. 1 písm. c) GDPR):</strong><br />
                  V případě následného sjednání finančních smluv jsme povinni plnit regulatorní požadavky zákona o distribuci pojištění, spotřebitelském úvěru a předpisů proti legalizaci výnosů z trestné činnosti (AML).
                </li>
                <li>
                  <strong>Oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR):</strong><br />
                  Ochrana našich právních nároků a zajištění bezpečnosti webového serveru a IT infrastruktury.
                </li>
              </ul>
            </section>

            {/* 4. Doba uchování */}
            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">
                4. Doba uchovávání osobních údajů
              </h2>
              <p>
                Údaje z kontaktních formulářů uchováváme po dobu trvání komunikace a nejdéle po dobu 6 měsíců od jejího ukončení, pokud nedojde k navázání smluvní spolupráce. Pokud je uzavřena zprostředkovatelská či klientská smlouva, řídí se doba archivace zákonnými předpisy ČNB (obvykle 10 let od ukončení smluvního vztahu).
              </p>
            </section>

            {/* 5. Předávání údajů třetím stranám */}
            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">
                5. Předávání osobních údajů dalším subjektům
              </h2>
              <p>
                Vaše osobní údaje <strong>neprodáváme, nepronajímáme ani neposkytujeme neoprávněným třetím stranám</strong>. Mohou být zpřístupněny pouze:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Oprávněným finančním poradcům strukturní kanceláře ZFP Jagoš & partneři pověřeným řešením vaší poptávky.</li>
                <li>Společnosti ZFP akademie, a.s. v rozsahu plnění regulatorních požadavků zprostředkování.</li>
                <li>Partnerům zajišťujícím IT infrastrukturu, hosting a zabezpečení (zpracovatelé vázaní smlouvou o zpracování osobních údajů a přísnou mlčenlivostí v rámci EU).</li>
              </ul>
            </section>

            {/* 6. Soubory cookies */}
            <section className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-brand-600" />
                6. Zásady používání souborů cookies
              </h2>
              <p>
                Tyto webové stránky využívají soubory cookies a obdobné technologie pro zajištění správného chodu a bezpečí návštěvníků:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Nezbytné (technické) cookies:</strong> Zajišťují základní funkce webu (např. zabezpečení formulářů proti spamu, uložení vašich preferencí). Tyto cookies jsou povoleny vždy, protože bez nich by web nemohl bezpečně fungovat.
                </li>
                <li>
                  <strong>Analytické cookies:</strong> Pomáhají nám anonymně porozumět tomu, jak návštěvníci web používají (např. které stránky jsou nejčtenější), abychom mohli prostředí webu neustále vylepšovat.
                </li>
              </ul>
              <p className="mt-3 text-xs sm:text-sm text-slate-600">
                Při první návštěvě můžete udělit či upravit svůj souhlas prostřednictvím cookie lišty. Soubory cookies lze rovněž kdykoliv smazat nebo zakázat v nastavení vašeho internetového prohlížeče.
              </p>
            </section>

            {/* 7. Vaše práva */}
            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">
                7. Vaše práva dle GDPR
              </h2>
              <p>Jako subjekt údajů máte plné právo kdykoliv:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Právo na přístup</strong>
                  <p className="text-xs text-slate-600">Získat potvrzení, jaké vaše osobní údaje zpracováváme a za jakým účelem.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Právo na opravu</strong>
                  <p className="text-xs text-slate-600">Požadovat bezodkladnou opravu nepřesných nebo neúplných údajů.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Právo na výmaz („být zapomenut")</strong>
                  <p className="text-xs text-slate-600">Požádat o smazání osobních údajů, pokud pominul účel nebo byl odvolán souhlas.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Právo vznést námitku</strong>
                  <p className="text-xs text-slate-600">Vznést námitku proti zpracování na základě oprávněného zájmu.</p>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-slate-600">
                Pro uplatnění jakéhokoliv práva nás kontaktujte na e-mailu <a href="mailto:info@zfpjagos.cz" className="text-brand-600 underline font-semibold">info@zfpjagos.cz</a>. Máte rovněž právo podat stížnost u dozorového orgánu, kterým je <strong>Úřad pro ochranu osobních údajů</strong> (ÚOOÚ), Pplk. Sochora 27, 170 00 Praha 7 (<a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">www.uoou.cz</a>).
              </p>
            </section>

            {/* 8. Mimosoudní řešení spotřebitelských sporů */}
            <section className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-600" />
                8. Mimosoudní řešení spotřebitelských sporů (ADR)
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                V souladu se zákonem č. 634/1992 Sb., o ochraně spotřebitele, informujeme klienta o možnosti mimosoudního řešení případných sporů vyplývajících z poskytovaných finančních služeb:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-700">
                <li>
                  <strong>Spotřebitelské úvěry, hypotéky a investice:</strong> Věcně příslušným orgánem mimosoudního řešení sporů je <strong>Finanční arbitr</strong>, Legerova 1581/69, 110 00 Praha 1, web:{' '}
                  <a href="https://www.finarbitr.cz" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline font-semibold">
                    www.finarbitr.cz
                  </a>.
                </li>
                <li>
                  <strong>Životní a neživotní pojištění:</strong> Věcně příslušným orgánem je <strong>Kancelář ombudsmana České asociace pojišťoven</strong>, Elišky Krásnohorské 135/7, 110 00 Praha 1, web:{' '}
                  <a href="https://www.ombudsmancap.cz" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline font-semibold">
                    www.ombudsmancap.cz
                  </a>.
                </li>
                <li>
                  <strong>Ostatní spotřebitelské spory:</strong> Věcně příslušným orgánem je <strong>Česká obchodní inspekce (ČOI)</strong>, Štěpánská 567/15, 120 00 Praha 2, web:{' '}
                  <a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline font-semibold">
                    www.coi.cz
                  </a>.
                </li>
              </ul>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
