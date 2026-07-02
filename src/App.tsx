import { Phone, Mail, Facebook, Zap, Banknote, ShieldCheck, Car, EyeOff } from 'lucide-react';

export default function App() {
  const logoUrl = "https://i.ibb.co/jZWLdKKB/481470014-122095326494797999-907440138050943582-n.jpg";

  return (
    <div id="landing-page" className="min-h-screen bg-gradient-to-b from-dark-deep via-dark-surface to-dark-deep text-white font-sans selection:bg-gold-premium selection:text-dark-deep relative subtle-noise">
      
      {/* Dynamic Gold Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-gold-premium/5 blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-[40%] right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-gold-premium/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gold-premium/4 blur-[120px] pointer-events-none" />

      {/* Elegant Header */}
      <header id="main-header" className="sticky top-0 z-50 backdrop-blur-md bg-dark-deep/80 border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <img 
              src={logoUrl} 
              alt="Skup Mieszkań Warszawa Logo" 
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-gold-premium/50 group-hover:border-gold-light transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif tracking-wider text-sm sm:text-base font-medium text-white group-hover:text-gold-light transition-colors duration-300 hidden sm:inline">
              SKUP MIESZKAŃ WARSZAWA
            </span>
          </a>
          
          <nav className="flex items-center gap-4 sm:gap-6">
            <a href="#o-firmie" className="hidden sm:inline-block text-xs sm:text-sm tracking-wider uppercase text-gray-400 hover:text-white transition-colors duration-300">
              O nas
            </a>
            <a href="#dlaczego-my" className="hidden sm:inline-block text-xs sm:text-sm tracking-wider uppercase text-gray-400 hover:text-white transition-colors duration-300">
              Dlaczego my
            </a>
            <a 
              href="tel:790298424" 
              className="px-4 py-2 bg-gold-premium hover:bg-gold-light text-dark-deep font-semibold text-xs sm:text-sm uppercase tracking-wider rounded transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Zadzwoń</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* 1. HERO SECTION */}
        <section 
          id="hero" 
          className="relative min-h-[90vh] sm:min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center border-b border-white/5 overflow-hidden"
        >
          {/* Subtle line background */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/30 via-transparent to-dark-deep pointer-events-none" />
          
          <div className="max-w-4xl mx-auto z-10 flex flex-col items-center animate-fade-up">
            
            {/* Elegant Circular Logo Frame */}
            <div className="mb-8 relative group">
              <div className="absolute inset-0 rounded-full bg-gold-premium/20 blur-md group-hover:bg-gold-premium/40 transition-all duration-500" />
              <img 
                src={logoUrl} 
                alt="Skup Mieszkań za Gotówkę Warszawa Logo" 
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-gold-premium relative z-10 transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Main Premium H1 Title */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-[1.15]">
              Skup Mieszkań za Gotówkę <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-premium via-gold-light to-gold-premium bg-[length:200%_auto] animate-[shimmer_5s_linear_infinite]">
                Warszawa
              </span>
            </h1>

            {/* Elegant Subtitle */}
            <p className="font-sans text-sm sm:text-lg lg:text-xl text-gray-300 tracking-wide max-w-2xl mb-12 uppercase sm:normal-case font-light">
              Szybka wycena <span className="text-gold-premium mx-1.5 sm:mx-2">•</span> Gotówka od ręki <span className="text-gold-premium mx-1.5 sm:mx-2">•</span> Bezpieczna transakcja
            </p>

            {/* CTAs with generous target and responsive spacing */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
              <a 
                href="tel:790298424" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-premium to-gold-light text-dark-deep font-bold tracking-wider text-sm uppercase rounded shadow-lg shadow-gold-premium/10 hover:shadow-gold-premium/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                <span>Zadzwoń teraz</span>
              </a>
              <a 
                href="mailto:wysocki.sop@gmail.com" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-dark-surface/60 border border-white/10 text-white font-medium tracking-wider text-sm uppercase rounded hover:bg-dark-surface/100 hover:border-gold-premium/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-5 h-5 text-gold-premium" />
                <span>Napisz email</span>
              </a>
            </div>

            {/* Elegant small caption */}
            <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest font-light">
              Darmowa, niezobowiązująca konsultacja w 24h
            </p>

          </div>
        </section>

        {/* 2. ABOUT US SECTION */}
        <section 
          id="o-firmie" 
          className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Title Column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-gold-premium" />
                <span className="text-xs uppercase tracking-widest text-gold-premium font-medium">O FIRMIE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
                Profesjonalizm <br />i zaufanie na rynku nieruchomości
              </h2>
            </div>

            {/* Narrative Content Column */}
            <div className="lg:col-span-7">
              <div className="border-l-2 border-gold-premium pl-6 sm:pl-8 py-2">
                <p className="font-sans text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
                  „Profesjonalnie zajmujemy się skupem mieszkań za gotówkę na terenie Warszawy i okolic. Oferujemy szybką wycenę, bezpieczeństwo transakcji oraz pełne wsparcie na każdym etapie sprzedaży nieruchomości.”
                </p>
                <p className="mt-6 text-sm text-gray-400 leading-relaxed font-light">
                  Każdą transakcję traktujemy indywidualnie z zachowaniem najwyższych standardów dyskrecji. Pomagamy uregulować stan prawny, spłacić zadłużenia i kompletować niezbędne dokumenty do aktu notarialnego. Z nami przejdziesz przez cały proces szybko i bez zbędnego stresu.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 3. WHY US SECTION */}
        <section 
          id="dlaczego-my" 
          className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5"
        >
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold-premium" />
              <span className="text-xs uppercase tracking-widest text-gold-premium font-medium">DLACZEGO MY</span>
              <span className="h-px w-8 bg-gold-premium" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
              Gwarancja bezpiecznej i szybkiej sprzedaży
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-400 font-light max-w-xl mx-auto">
              Zapewniamy profesjonalizm, pełną dyskrecję i kompleksowe wsparcie na każdym kroku transakcji.
            </p>
          </div>

          {/* Premium Vertical List Layout with Luxury Animations */}
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 sm:space-y-6">
              {[
                {
                  no: "01",
                  title: "Szybka wycena",
                  desc: "Szacunkową wycenę nieruchomości otrzymasz nawet w ciągu kilku godzin od kontaktu. Całkowicie bezpłatnie i bez zobowiązań.",
                  icon: <Zap className="w-5 h-5" />,
                  delay: "delay-100"
                },
                {
                  no: "02",
                  title: "Gotówka od ręki",
                  desc: "Płatność gotówką lub ekspresowym przelewem bezpośrednio przy podpisaniu aktu notarialnego. Nie czekasz na decyzje kredytowe.",
                  icon: <Banknote className="w-5 h-5" />,
                  delay: "delay-200"
                },
                {
                  no: "03",
                  title: "Bezpieczeństwo transakcji",
                  desc: "Wszystkie transakcje są realizowane w renomowanych warszawskich kancelariach notarialnych, zgodnie z obowiązującym prawem.",
                  icon: <ShieldCheck className="w-5 h-5" />,
                  delay: "delay-300"
                },
                {
                  no: "04",
                  title: "Dojazd do klienta",
                  desc: "Nasi eksperci dojadą do Ciebie w Warszawie i okolicach, aby obejrzeć mieszkanie i omówić szczegóły transakcji.",
                  icon: <Car className="w-5 h-5" />,
                  delay: "delay-400"
                },
                {
                  no: "05",
                  title: "Dyskretna obsługa",
                  desc: "Szanujemy Twoją prywatność. Cała procedura przebiega bez rozgłosu, banerów reklamowych czy zbędnych telefonów od pośredników.",
                  icon: <EyeOff className="w-5 h-5" />,
                  delay: "delay-500"
                }
              ].map((item) => (
                <li 
                  key={item.no} 
                  className={`group bg-dark-surface/40 border-l-2 border-white/5 p-6 sm:p-8 rounded-r-lg flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 hover:border-gold-premium hover:bg-dark-surface/80 transition-all duration-500 hover:shadow-[0_0_30px_rgba(200,162,74,0.08)] transform hover:-translate-y-0.5 animate-fade-up ${item.delay}`}
                >
                  {/* Luxury list index & Icon */}
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-serif text-xl sm:text-2xl font-light text-gold-premium/40 group-hover:text-gold-premium transition-colors duration-500 tracking-wider">
                      {item.no}
                    </span>
                    <div className="w-10 h-10 rounded bg-gold-premium/5 border border-gold-premium/20 flex items-center justify-center text-gold-premium group-hover:scale-110 group-hover:bg-gold-premium/15 group-hover:border-gold-premium transition-all duration-500">
                      {item.icon}
                    </div>
                  </div>

                  {/* Text columns */}
                  <div className="flex-1">
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-white mb-2 group-hover:text-gold-light transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. CONTACT SECTION */}
        <section 
          id="kontakt" 
          className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-dark-surface relative overflow-hidden"
        >
          {/* subtle gold accent line at the top */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-premium/55 to-transparent" />

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
              
              {/* Text Area Column */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-px w-8 bg-gold-premium" />
                  <span className="text-xs uppercase tracking-widest text-gold-premium font-medium">KONTAKT</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6">
                  Porozmawiajmy <br />o Twojej nieruchomości
                </h2>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light mb-8">
                  Skontaktuj się z nami bezpośrednio. Nasi specjaliści odpowiedzą na wszystkie pytania i rozpoczną darmową procedurę wyceny nieruchomości. Bez pośpiechu, w pełnym zaufaniu.
                </p>

                {/* Direct info items */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded border border-gold-premium/30 flex items-center justify-center text-gold-premium shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500">Zadzwoń bezpośrednio</span>
                      <a href="tel:790298424" className="text-lg sm:text-xl font-semibold text-white hover:text-gold-premium transition-colors duration-300">
                        790 298 424
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded border border-gold-premium/30 flex items-center justify-center text-gold-premium shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500">Napisz wiadomość</span>
                      <a href="mailto:wysocki.sop@gmail.com" className="text-lg sm:text-xl font-semibold text-white hover:text-gold-premium transition-colors duration-300 break-all">
                        wysocki.sop@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded border border-gold-premium/30 flex items-center justify-center text-gold-premium shrink-0">
                      <Facebook className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500">Odwiedź social media</span>
                      <a 
                        href="https://www.facebook.com/profile.php?id=61573939975769" 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        className="text-base sm:text-lg text-white hover:text-gold-premium transition-colors duration-300 underline underline-offset-4 decoration-gold-premium/45"
                      >
                        Skup Mieszkań Warszawa na Facebooku
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Action Column */}
              <div className="lg:col-span-6 bg-dark-deep/90 border border-gold-premium/20 rounded p-6 sm:p-10 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-premium/3 rounded-bl-full pointer-events-none" />
                
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
                  Darmowa wycena w 24h
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-8 font-light">
                  Wybierz preferowaną formę kontaktu poniżej. Jesteśmy dostępni pod telefonem i mailem przez 7 dni w tygodniu.
                </p>

                <div className="space-y-4">
                  <a 
                    href="tel:790298424" 
                    className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-gold-premium to-gold-light text-dark-deep font-bold text-sm uppercase tracking-wider rounded transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-gold-premium/10"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Zadzwoń teraz</span>
                  </a>

                  <a 
                    href="mailto:wysocki.sop@gmail.com" 
                    className="flex items-center justify-center gap-3 w-full py-4 bg-dark-surface border border-white/10 hover:border-gold-premium text-white font-semibold text-sm uppercase tracking-wider rounded transition-all duration-300 hover:bg-dark-surface/80"
                  >
                    <Mail className="w-5 h-5 text-gold-premium" />
                    <span>Napisz email</span>
                  </a>

                  <a 
                    href="https://www.facebook.com/profile.php?id=61573939975769" 
                    target="_blank" 
                    rel="noreferrer noopener" 
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-white font-medium text-sm uppercase tracking-wider rounded transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5 text-[#1877F2]" />
                    <span>Nasz Facebook</span>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                  <p className="text-xs text-gray-500 font-light">
                    Gwarancja bezpiecznej i poufnej rozmowy wstępnej.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Elegant Footer */}
      <footer id="main-footer" className="bg-dark-deep border-t border-white/5 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 text-center text-xs sm:text-sm text-gray-500 font-light">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={logoUrl} 
              alt="Logo" 
              className="w-8 h-8 rounded-full object-cover filter grayscale opacity-60"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif text-xs tracking-wider text-gray-400">SKUP MIESZKAŃ WARSZAWA</span>
          </div>
          <p>© 2026 Skup Mieszkań za Gotówkę Warszawa. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#hero" className="hover:text-gold-premium transition-colors">Do góry</a>
            <span className="text-gray-700">|</span>
            <span className="text-gray-600">Premium Investment</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

