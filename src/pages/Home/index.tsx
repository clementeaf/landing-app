import logo from '@/assets/hoktus-icon.png';
import title from '@/assets/hoktus-title.png';
import chile from '@/assets/chile.png';
import person from '@/assets/person.png';
import retail from '@/assets/retail.png';
import education from '@/assets/eductaion.png';
import construction from '@/assets/construction.png';
import bpo from '@/assets/bpo.png';
import security from '@/assets/security.png';
import goingUp from '@/assets/going-up.png';
import clock from '@/assets/clock.png';
import persons from '@/assets/persons.png';
import chat from '@/assets/chat.png';
import circles from '@/assets/circles.png';
import chatSimulation from '@/assets/conversation.png';
import person2 from '@/assets/person2.png';
import { Card, StatistisCard, PlanCard } from '@/components/common/Card';
import statisticsData from '@/data/statistics.json';
import { useState, useEffect, useRef, type ReactElement } from 'react';
import sysConected from '@/assets/con-sys.png';
import performanceChart from '@/assets/performance-chart.png';
import matias from '@/assets/maatias.png';
import reciclapp from '@/assets/reciclapp.png';
const icons = [goingUp, clock, persons, chat, clock, circles];
import hoktusWhatsapp from '@/assets/hoktus-white.png';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Componente de item de FAQ
 * @param question - Pregunta del FAQ
 * @param answer - Respuesta del FAQ
 * @param isOpen - Si el item está expandido
 * @param onToggle - Función para expandir/colapsar
 */
function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps): ReactElement {
  return (
    <div className='border-b border-gray-300 pb-6 mb-6 w-full flex flex-col items-center justify-center'>
      <button
        onClick={onToggle}
        className='w-full flex items-center justify-between text-left'
      >
        <h3 className={`font-cal-sans text-[16px] font-normal text-[#1677FF] w-full`}>
          {question}
        </h3>
        <svg
          className={`w-6 h-6 text-[#1677FF] transition-transform ${isOpen ? 'rotate-45' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      {isOpen && (
        <p className='font-satoshi text-[#293753] text-[14px] text-justify font-light mt-4 leading-relaxed'>
          {answer}
        </p>
      )}
    </div>
  );
}

/**
 * Componente de lista de FAQ con estado
 */
function FAQList(): ReactElement {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "¿Qué datos puede validar Hoktus automáticamente durante el reclutamiento?",
      answer: "Hoktus permite validar antecedentes, identidad (RUT/DNI), curriculum y otros documentos, directamente desde el chat y en segundos, usando fuentes públicas y privadas confiables."
    },
    {
      question: "¿Cuántos procesos de reclutamiento puedo gestionar al mismo tiempo?",
      answer: "Hoktus permite gestionar múltiples procesos de reclutamiento simultáneamente. El número exacto depende del plan que elijas, con opciones desde pequeños equipos hasta empresas con volúmenes altos."
    },
    {
      question: "¿Se puede integrar Hoktus con portales de empleo o ATS que ya uso?",
      answer: "Sí, Hoktus se puede integrar con portales de empleo y sistemas ATS existentes. Si no tenemos integración directa, desarrollamos una personalizada para adaptarnos a tus sistemas."
    },
    {
      question: "¿Qué sucede si un candidato responde fuera de horario o varios días después?",
      answer: "Hoktus funciona 24/7, por lo que los candidatos pueden responder en cualquier momento. El sistema procesa y valida las respuestas automáticamente, sin importar el horario, y te notifica cuando haya actualizaciones."
    },
    {
      question: "¿Qué tan segura es la información que se recolecta por WhatsApp?",
      answer: "Hoktus utiliza protocolos de seguridad avanzados y cumple con estándares de protección de datos. Toda la información se maneja de forma cifrada y se almacena de manera segura, cumpliendo con las normativas de privacidad y protección de datos personales."
    }
  ];

  return (
    <>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </>
  );
}

export const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);

  const cards = [retail, education, construction, bpo, security];
  const infiniteCards = [cards[cards.length - 1], ...cards, cards[0]];

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 640) {
        return;
      }
    };

    handleResize();

    const interval = setInterval(() => {
      if (window.innerWidth < 640) {
        setCurrentCardIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= infiniteCards.length - 1) {
            setTimeout(() => {
              setIsTransitioning(false);
              setCurrentCardIndex(1);
              setTimeout(() => {
                setIsTransitioning(true);
              }, 50);
            }, 500);
            return nextIndex;
          }
          return nextIndex;
        });
      }
    }, 2000);

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [infiniteCards.length]);

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* Gradient header + Navbar*/} {/* Responsive */}
      <section className="flex flex-col bg-gradient-to-b from-[#01122D] to-[#094FBE] min-h-screen w-full items-center justify-between py-4 sm:py-6 md:py-8">
        <div className='w-full flex flex-col items-center justify-center px-4 sm:px-0 relative'>
          <nav className="flex justify-between items-center px-3 sm:px-6 w-full sm:w-[90%] h-[56px] sm:h-[72px] md:h-[88px] rounded-[20px] sm:rounded-[40px] md:rounded-[52.5px] bg-[#FBFBFB]/10 text-[#FFFFFF] relative z-50">
            {/* Logo Section */}
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              <img src={logo} alt="Hoktus" className="w-[20px] sm:w-[28px] md:w-[32.5px]" />
              <img src={title} alt="Hoktus" className="w-[85px] sm:w-[110px] md:w-[134px] h-auto" />
            </div>

            {/* Desktop Navigation - Hidden en móvil y tablet */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-10 font-[100] text-sm lg:text-base xl:text-[20px] text-[#FFFFFF]">
              <p className="cursor-pointer hover:text-[#1677FF] transition-colors whitespace-nowrap">Funcionalidades</p>
              <p className="cursor-pointer hover:text-[#1677FF] transition-colors whitespace-nowrap">Industrias</p>
              <p className="cursor-pointer hover:text-[#1677FF] transition-colors whitespace-nowrap">Planes</p>
              <p className="cursor-pointer hover:text-[#1677FF] transition-colors whitespace-nowrap">Contacto</p>
            </div>

            {/* Desktop Actions - Hidden en móvil y tablet */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4">
              <img src={chile} alt="Chile" className="w-[28px] lg:w-[32px] xl:w-[40px] hidden lg:block" />
              <button className='px-3 lg:px-4 py-2 w-[120px] lg:w-[140px] xl:w-[178px] h-[40px] lg:h-[44px] xl:h-[54px] rounded-[20px] lg:rounded-[22px] xl:rounded-[27px] bg-[#00122D] border border-[#91BBFF] text-xs lg:text-sm xl:text-base whitespace-nowrap'>Iniciar Sesión</button>
              <button className='px-3 lg:px-4 py-2 w-[120px] lg:w-[140px] xl:w-[178px] h-[40px] lg:h-[44px] xl:h-[54px] rounded-[20px] lg:rounded-[22px] xl:rounded-[27px] bg-[#FFFFFF] text-[#1677FF] text-xs lg:text-sm xl:text-base whitespace-nowrap'>Agendar demo</button>
            </div>

            {/* Mobile Menu Button - Visible solo en móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-7 h-7 gap-1.5 z-50"
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </nav>

          {/* Mobile Menu Overlay - Visible solo en móvil */}
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="md:hidden fixed inset-0 bg-black/50 z-[45] transition-opacity duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              {/* Menu Panel */}
              <div className="md:hidden fixed top-[80px] left-4 right-4 rounded-[20px] bg-[#FBFBFB]/10 backdrop-blur-sm p-4 transition-all duration-300 ease-in-out z-50 shadow-lg max-w-[395px]">
                <div className="flex flex-col gap-3 mb-4">
                  <p
                    className="text-white text-base font-[100] cursor-pointer hover:text-[#1677FF] transition-colors py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Funcionalidades
                  </p>
                  <p
                    className="text-white text-base font-[100] cursor-pointer hover:text-[#1677FF] transition-colors py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Industrias
                  </p>
                  <p
                    className="text-white text-base font-[100] cursor-pointer hover:text-[#1677FF] transition-colors py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Planes
                  </p>
                  <p
                    className="text-white text-base font-[100] cursor-pointer hover:text-[#1677FF] transition-colors py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contacto
                  </p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={chile} alt="Chile" className="w-[28px] h-[28px]" />
                  </div>
                  <button
                    className='w-full px-4 py-3 rounded-[20px] bg-[#00122D] border border-[#91BBFF] text-white text-base font-medium'
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  >
                    Iniciar Sesión
                  </button>
                  <button
                    className='w-full px-4 py-3 rounded-[20px] bg-[#FFFFFF] text-[#1677FF] text-base font-medium'
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  >
                    Agendar demo
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Hero Content - Centrado verticalmente con mejor distribución */}
        <div className='w-full sm:w-[90%] md:w-[85%] lg:w-[75%] flex flex-col gap-8 sm:gap-5 md:gap-6 lg:gap-8 text-center text-white items-center flex-1 justify-center px-4 sm:px-6'>
          <h1 className='font-cal-sans text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[85px] font-bold leading-[1.2] sm:leading-[1.15] md:leading-tight px-2'>
            Contrata a las <span className='text-[#1677FF]'>personas correctas</span> en minutos, no semanas
          </h1>
          <p className='font-satoshi font-[100] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[33px] max-w-[1100px] leading-relaxed px-2 block md:hidden'>
            Automatiza el reclutamiento con <span className='text-[#1677FF] font-bold italic'>IA conversacional</span> sin sumar carga a tu equipo
          </p>
          <p className='font-satoshi font-[100] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[33px] max-w-[1100px] leading-relaxed px-2 hidden md:block'>
            Automatiza el reclutamiento y todos sus procesos administrativos por WhatsApp con <span className='text-[#1677FF] font-bold italic'>IA conversacional</span>, sin sumar carga a tu equipo
          </p>
          <button className='flex items-center justify-center mt-6 sm:mt-4 md:mt-6 lg:mt-8 px-6 sm:px-8 md:px-10 lg:px-6 xl:px-6 py-3 sm:py-4 md:py-5 lg:py-3 xl:py-4 w-[90%] sm:w-auto sm:min-w-[280px] md:min-w-[320px] lg:w-[220px] xl:w-[250px] h-[50px] sm:h-[56px] md:h-[64px] lg:h-[44px] xl:h-[50px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[22px] xl:rounded-[25px] bg-[#FFFFFF] text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-[#1677FF] font-semibold text-center'>
            Agendar demo
          </button>
        </div>
      </section>

      {/* Porque Hoktus?*/} {/* Responsive */}
      <section className='flex flex-col items-center justify-center gap-6 py-[50px]'>
        <button className='w-auto px-4 py-3 rounded-[28px] bg-[#ECF4FF] text-[#1677FF] text-[14px] font-[400]'>
          Por qué Hoktus
        </button>
        <p className='font-cal-sans text-[28px] w-[85%] sm:text-[30px] font-semibold text-[#012257] text-center px-4'>
          El camino inteligente para escalar tu reclutamiento
        </p>

        {/* Images content */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-auto overflow-x-hidden lg:overflow-visible h-auto mt-5 gap-[150px]">
          {/* Left Section - Woman with UI elements */}
          <div className="relative w-auto min-w-[425px]">
            {/* Floating UI Element 1 - Performance (detrás de person) */}
            <img
              src={performanceChart}
              alt="Performance"
              className="absolute top-0 left-[0px] w-[190px] sm:w-[250px] sm:left-[300px] z-0 object-cover"
            />

            <img
              src={person}
              alt="Persona usando Hoktus"
              className="relative w-[400px] h-[400px] sm:w-[465px] sm:h-[465px] z-10 object-contain sm:object-cover"
            />

            {/* Floating UI Element 2 - Postulante Chat */}
            <div className="absolute top-[250px] right-[30px] sm:top-[200px] md:top-[250px] lg:top-[300px] sm:right-[-50px] md:right-[-70px] lg:right-[-140px] z-10 w-[200px] sm:w-[150px] md:w-[190px] lg:w-[235.47px] h-auto sm:h-[60px] md:h-[68px] lg:h-[73.83px] bg-white rounded-tl-[12px] sm:rounded-tl-[16px] lg:rounded-tl-[20px] rounded-tr-[12px] sm:rounded-tr-[16px] lg:rounded-tr-[20px] rounded-br-[12px] sm:rounded-br-[16px] lg:rounded-br-[20px] shadow-lg p-2 text-[#1677FF]">
              <h3 className="font-cal-sans font-semibold text-xs sm:text-sm lg:text-[15px]">Postulante</h3>
              <p className="font-satoshi text-[10px] sm:text-[11px] lg:text-[12px]">Hola Daniel, estoy interesado en el puesto de conductor, ¿Qué debo...</p>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center gap-6 sm:gap-6 lg:gap-8 w-full lg:w-auto'>
            {/* Middle Section - Recruitment Card */}
            <div className="flex flex-col items-center justify-between bg-[#ECF4FF] rounded-[20px] shadow-lg py-6 px-[15px] sm:p-8 w-[83%] sm:w-[90%] h-auto mb-10">
              {/* <img src={starsIcon} alt="Performance" className="w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-6" /> */}
              <h2 className="font-cal-sans text-[#1677FF] font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-center">
                Recluta más rápido con Hoktus AI
              </h2>
              <p className="font-satoshi text-[#012257] text-[14px] sm:text-[18px] mb-4 sm:mb-6 text-center">
                Automatiza conversaciones, valida aptitudes y revisa antecedentes en un solo flujo. Recibe reportes en tiempo real y toma decisiones ágiles.
              </p>
              <button className="w-full px-6 py-3 mt-2 bg-[#1677FF] text-white rounded-[47px] font-semibold transition-colors text-sm sm:text-base">
                Agendar demo
              </button>
            </div>

            {/* Right Section - Systems Connection Card */}
            <div className="flex flex-col items-center bg-white rounded-[20px] shadow-lg p-6 sm:p-8 w-full sm:w-[90%] md:w-[85%] lg:max-w-[420px] h-auto lg:h-[464px]">
              <img
                src={sysConected}
                alt="Conectados con tus sistemas"
                className="w-full h-auto sm:h-[200px] md:h-[250px] lg:h-full object-cover rounded-lg mb-7 sm:mb-0"
              />
              <h2 className="font-cal-sans text-[#1677FF] font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-start">
                Conectados con tus sistemas
              </h2>
              <p className="font-satoshi text-gray-600 text-base sm:text-[18px] leading-relaxed text-center w-[90%] sm:w-[290px]">
                Nos integramos a tus sistemas para adaptarnos a ti. Si no tenemos integración, la desarrollamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automatiza tu reclutamiento, sin importar la industria */} {/* Responsive */}
      <section className='bg-gradient-to-tl from-[#FFFFFF] to-[#E9F2FF] flex flex-col items-center justify-start w-full sm:w-[95%] px-2'>
        <h2 className='font-cal-sans text-[22px] mt-7 text-[#05234F] font-bold text-center w-[85%] px-4 pt-6'>
          Automatiza tu reclutamiento, sin importar la industria
        </h2>
        <p className='font-satoshi text-[#888888] text-[14px] sm:text-[40px] sm:font-[200] font-[400] text-center py-3'>
          Hoktus filtra, entrevista, revisa y valida por WhatsApp
        </p>

        <div className='flex flex-col items-center justify-center gap-6 py-4 w-full'>
          {/* Carousel solo en móvil (< 640px) */}
          <div className='w-full flex items-center justify-center overflow-hidden relative sm:hidden'>
            <div
              ref={carouselRef}
              className={`flex w-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}
            >
              {infiniteCards.map((card, index) => (
                <div key={`${card}-${index}`} className='w-full flex-shrink-0 flex justify-center px-4'>
                  <Card bg={card} />
                </div>
              ))}
            </div>
          </div>

          {/* Layout normal en sm y superior (≥ 640px) - Todas en una línea */}
          <div className='hidden sm:flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 w-full px-4 sm:px-6 lg:px-0 overflow-x-auto'>
            {cards.map((card, index) => (
              <div key={index} className='flex justify-center flex-shrink-0'>
                <Card bg={card} />
              </div>
            ))}
          </div>

          {/* Indicadores (dots) - Solo en móvil */}
          <div className='flex items-center justify-center gap-2 mt-4 sm:hidden'>
            {cards.map((_, index) => {
              const displayIndex = currentCardIndex === 0 ? cards.length - 1 :
                currentCardIndex === infiniteCards.length - 1 ? 0 :
                  currentCardIndex - 1;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentCardIndex(index + 1)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === displayIndex ? 'bg-[#1677FF] w-8' : 'bg-[#1677FF]/30 w-2'
                    }`}
                  aria-label={`Ir a tarjeta ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Los números hablan solos */} {/* Responsive */}
      <section className='bg-gradient-to-b from-[#01122D] to-[#002259] rounded-[20px] sm:rounded-[30px] flex flex-col items-center justify-start w-[93%] p-4 mt-10 w-[85%] sm:w-[90%] pb-6'>
        <h2 className='font-cal-sans text-[40px] text-[#FFFFFF] font-bold text-center w-full pt-8 pb-10' style={{ lineHeight: '1.2' }}>
          Los números <span className='text-[#1677FF]'>hablan</span>
        </h2>

        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center w-full px-4 sm:px-6 lg:px-0'>
          {statisticsData.statistics.map((stat, index) => {
            const iconSrc = icons[index];
            return (
              <StatistisCard
                key={index}
                number={stat.number}
                title={stat.title}
                description={stat.description}
                icon={iconSrc ? <img src={iconSrc} alt="" className='w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]' /> : undefined}
              />
            );
          })}
        </div>
      </section>

      {/* Planes */}
      <section className='w-full sm:w-[95%] lg:w-[90%] flex flex-col items-center justify-center py-8 sm:py-12 px-4 sm:px-6 mt-10'>
        <h2 className='font-cal-sans text-[35px] sm:text-[60px] text-[#0048BE] font-[600] text-center mb-3'>
          Planes
        </h2>

        <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 items-start justify-center w-full sm:px-6'>
          <PlanCard
            title="Plan Standard"
            price="$490"
            priceSubtext="/mes"
            description="Ideal para reclutadores independientes o equipos pequeños."
            features={[
              { text: "1 Agente IA conversacional (2.000 conversaciones)" },
              { text: "Configuración del sistema por un especialista" },
              { text: "Validaciones de antecedentes (personas)" },
              { text: "Modelo único de IA conectado (Gemini 2.5 Flash-Google)" },
              { text: "Integración estándar" },
              { text: "Soporte estándar (Grupo en WhatsApp y E-mail)" },
              { text: "4 usuarios disponibles" }
            ]}
            additionals={[
              { text: "Firma de contratos" },
              { text: "Validación Antecedentes" },
              { text: "Meta Ads" },
              { text: "Revi AI" }
            ]}
            subtext={[
              { text: "FES o FEA" },
              { text: "Empresas" },
              { text: "Apoyo en campañas" },
              { text: "Lectura de documentos" }
            ]}
            ctaText="Elegir plan"
            currencyBadge="$ USD"
          />

          <PlanCard
            title="Plan Business"
            isRequestQuote={true}
            description="Diseñado para empresas que necesitan máxima personalización, flexibilidad y escalabilidad."
            features={[
              { text: "Incluye todo lo del Plan Standard" },
              { text: "Funcionalidades personalizadas según tus procesos" },
              { text: "Ajuste a volúmenes altos o necesidades específicas" },
              { text: "Ítems sin límites de consumo" },
              { text: "Soporte avanzado y acompañamiento continuo" },
              { text: "Integraciones y reportes a medida" },
              { text: "Usuarios ilimitados" }
            ]}
            ctaText="Elegir plan"
            isPopular={true}
            currencyBadge="$ USD"
          />
        </div>
      </section>

      {/* Hero: Empieza a contratar */}
      <section className='w-full h-[510px] sm:h-[350px] sm:w-[90%] sm:rounded-[40px] mt-[70px] sm:mt-20'>
        {/* <img src={stars} alt="Stars icon" className='absolute z-10 h-[25px] left-[20px] mt-8 sm:mt-5 sm:left-[90px]' /> */}
        <div className='flex flex-col items-center justify-center absolute z-10'>
          <p className='font-cal-sans text-[#1677FF] text-[33px] mt-[70px] text-center w-[80%] font-bold sm:text-[30px] sm:w-[330px] sm:ml-[120px] sm:text-start'>
            Empieza a contratar en minutos.
          </p>
        </div>

        <img src={chatSimulation} alt="Chat Simulation" className='w-[180px] object-cover transform z-10 mt-[350px] absolute sm:mt-[170px] sm:ml-[350px]' />

        <div className='z-10 mt-[30px] sm:mt-[-125px]'>
          <img src={person2} alt="Professional woman" className='w-[310px] object-contain absolute mt-[170px] right-[55px]' />
        </div>
      </section>

      <button className='bg-[#1677FF] text-white px-4 rounded-[20px] font-semibold hover:bg-[#0050CC] w-[180px] flex items-center justify-center py-2 gap-3 sm:ml-[120px] sm:mt-[80px] my-10'>
        Probar Hoktus
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Hero: Que dicen las empresas sobre Hoktus */}
      <div className='w-full h-[20px] bg-[#EBF3FF] mt-[20px]' />
      <section className='w-full sm:w-[95%] lg:w-[90%] flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-[120px] px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 rounded-t-[40px]'>
        {/* Testimonio Badge */}
        <div className='bg-[#EBF3FF] px-4 sm:px-6 py-2 rounded-full mb-6 sm:mb-8'>
          <span className='text-[#1677FF] text-[16px] font-[600] sm:text-[20px]'>Testimonio</span>
        </div>

        {/* Main Title */}
        <h2 className='font-cal-sans text-[#05234F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] w-full px-4'>
          Caso de éxito
        </h2>

        {/* Testimonial Text */}
        <p className='font-satoshi text-gray-500 text-base sm:text-lg md:text-xl lg:text-[24px] text-center max-w-full sm:max-w-[600px] md:max-w-[690px] mb-6 sm:mb-8 md:mb-12 leading-relaxed px-4'>
          Hoktus es genial. Antes, contratar y validar conductores y personal de faena era un dolor de cabeza. Ahora, el proceso es súmamente rápido. Nos olvidamos de revisar mil documentos y nos enfocamos en hacer crecer el negocio.
        </p>

        {/* Profile Picture */}
        <div className='mb-6'>
          <img
            src={matias}
            alt="Matías Romero"
            className='w-16 rounded-full object-cover border-2 border-[#1677FF]/20 mt-6'
          />
        </div>

        {/* Name and Title */}
        <div className='flex items-center gap-2 mb-4'>
          <p className='font-satoshi text-[#1677FF] text-[16px] font-semibold'>Matías Romero, </p>
          <p className='font-satoshi text-[#1677FF] text-[16px] font-light'>Co-fundador</p>
        </div>

        {/* Company Logo */}
        <div className='flex items-center gap-2 mb-8'>
          <img src={reciclapp} alt="Reciclapp" className='w-[125px] h-[16px]' />
        </div>
      </section>

      {/* Hero: Nosotros respondemos todas tus preguntas */}
      <section className='bg-[#F7FAFF] w-full flex flex-col items-center justify-center py-14 px-8'>
        {/* FAQ Badge */}
        <div className='mb-8 rounded-[66px] bg-[#EBF3FF] px-6 py-2'>
          <span className='text-[#1677FF] text-[16px] font-[600] sm:text-[24px] lg:font-[500]'>FAQ</span>
        </div>

        {/* Main Title */}
        <h2 className='font-cal-sans text-[#05234F] text-[26px] font-bold text-center mb-16 max-w-[700px]'>
          Nosotros responderemos todas tus preguntas
        </h2>

        {/* FAQ List */}
        <div className='w-full sm:w-[95%] md:w-[90%] lg:w-[900px] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-0'>
          <FAQList />
        </div>
      </section>

      {/* Hero - Footer: ¿Listo para automatizar tus procesos de forma conversacional? */}
      <section className='bg-[#02193B] rounded-t-[20px] sm:rounded-t-[40px] md:rounded-t-[60px] lg:rounded-t-[80px] w-full flex flex-col items-center justify-center py-4 sm:py-5 lg:py-[20px]'>
        {/* Top CTA Section */}
        <div className='w-full sm:w-[95%] lg:w-[90%] h-auto sm:h-[242px] min-h-[200px] sm:min-h-[242px] flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between border-b border-[#FFFFFF]/10 px-4 sm:px-6 lg:px-0 py-6 sm:py-0 gap-6 sm:gap-0'>
          <h2 className='font-cal-sans text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[733px] text-center sm:text-left'>
            ¿LISTO PARA AUTOMATIZAR TUS PROCESOS DE FORMA CONVERSACIONAL?
          </h2>
          <div className='flex flex-col items-center sm:items-end gap-4 sm:gap-[30px]'>
            <div className='flex flex-row items-center gap-2 sm:gap-4 h-auto sm:h-[50px]'>
              <div className='flex flex-col items-center sm:items-end'>
                <p className='font-satoshi text-white text-sm sm:text-base md:text-lg lg:text-[23.36px]'>AI for Hiring One conversation. <span className='italic'>One hire</span>.</p>
              </div>
              <img src={hoktusWhatsapp} alt="Hoktus Logo" className='h-[30px] sm:h-[40px]' />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className='w-full sm:w-[95%] lg:w-[90%] flex flex-col sm:flex-row items-start justify-between py-4 sm:py-5 lg:py-[20px] border-b border-[#FFFFFF]/10 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-0'>
          {/* Hoktus Info */}
          <div className='flex flex-col gap-6 w-full items-center justify-start'>
            <div className='flex flex-row items-center gap-3'>
              <img src={logo} alt="Hoktus Logo" className='w-8' />
              <span className='text-white text-[35px] font-bold'>Hoktus</span>
            </div>
            <p className='font-satoshi text-white text-[15px] text-center w-full'>
              Plataforma de reclutamiento y automatización con IA conversacional.
            </p>
            <div className='flex flex-row items-center gap-2 mt-8'>
              <img src={chile} alt="Chile Flag" className='w-6 h-6' />
              <span className='text-white text-base'>Santiago, Chile (HQ)</span>
            </div>
          </div>

          <div className='flex gap-8 w-full'>
            {/* Links */}
            <div className='flex flex-col gap-4 mt-4'>
              <h4 className='font-cal-sans text-white text-lg font-bold'>Links</h4>
              <ul className='flex flex-col gap-2'>
                <li><a href='#' className='text-white/60 text-light hover:underline'>Nosotros</a></li>
                <li><a href='#' className='text-white/60 text-light hover:underline'>Funcionalidades</a></li>
                <li><a href='#' className='text-white/60 text-light hover:underline'>Planes</a></li>
                <li><a href='#' className='text-white/60 text-light hover:underline'>Contacto</a></li>
              </ul>
            </div>

            {/* Follow */}
            <div className='flex flex-col gap-4 mt-4'>
              <h4 className='font-cal-sans text-white text-lg font-bold'>Follow</h4>
              <ul className='flex flex-col gap-2'>
                <li><a href='#' className='text-white/60 text-light hover:underline'>LinkedIn</a></li>
                <li><a href='#' className='text-white/60 text-light hover:underline'>Instagram</a></li>
              </ul>
            </div>

            {/* News */}
            <div className='flex flex-col gap-4 max-w-[300px] mt-4'>
              <h4 className='font-cal-sans text-white text-lg font-bold'>News</h4>
              <p className='font-satoshi text-white/60 text-light'>Registrarme para recibir novedades</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-[90%] py-4 gap-4'>
          <input
            type='email'
            placeholder='Correo electrónico'
            className='bg-transparent border border-[#FFFFFF] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#1677FF] placeholder:text-gray-400 rounded-[24.5px]'
          />
          <button className='bg-white text-[#01122D] text-light rounded-[24.5px] w-full h-[46px] flex items-center justify-center'>
            Suscribirme
          </button>
        </div>

        {/* Bottom Copyright Section */}
        <div className='w-full sm:w-[95%] lg:w-[90%] flex flex-col sm:flex-row items-center justify-center sm:justify-between py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-0 gap-4 sm:gap-0'>
          <p className='font-satoshi text-white text-sm text-light'>
            Hoktus Inc. y sus subsidiarias - Todos los derechos reservados
          </p>
          <div className='flex flex-row gap-6'>
            <a href='#' className='text-white text-sm hover:underline'>Privacidad</a>
            <a href='#' className='text-white text-sm hover:underline'>Términos</a>
          </div>
        </div>
      </section>
    </div>
  );
};
