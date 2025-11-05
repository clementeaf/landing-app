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
import whatsapp from '@/assets/whatsapp.png';
import chatSimulation from '@/assets/conversation.png';
import person2 from '@/assets/person2.png';
import stars from '@/assets/stars.png';
import { Card, StatistisCard, PlanCard } from '@/components/common/Card';
import statisticsData from '@/data/statistics.json';
import { useState, useEffect, type ReactElement } from 'react';
import sysConected from '@/assets/con-sys.png';
import starsIcon from '@/assets/stars2.png';
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
        <h3 className={`text-[24px] font-normal text-[#1677FF] w-full`}>
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
        <p className='text-[#293753] text-[19px] font-light mt-4 leading-relaxed'>
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
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);

  const cards = [retail, education, construction, bpo, security];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [cards.length]);

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
          <h1 className='text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[85px] font-bold leading-[1.2] sm:leading-[1.15] md:leading-tight px-2'>
            Contrata a las <span className='text-[#1677FF]'>personas correctas</span> en minutos, no semanas
          </h1>
          <p className='font-[100] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[33px] max-w-[1100px] leading-relaxed px-2 block md:hidden'>
            Automatiza el reclutamiento con <span className='text-[#1677FF] font-bold italic'>IA conversacional</span> sin sumar carga a tu equipo
          </p>
          <p className='font-[100] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[33px] max-w-[1100px] leading-relaxed px-2 hidden md:block'>
            Automatiza el reclutamiento y todos sus procesos administrativos por WhatsApp con <span className='text-[#1677FF] font-bold italic'>IA conversacional</span>, sin sumar carga a tu equipo
          </p>
          <button className='flex items-center justify-center mt-6 sm:mt-4 md:mt-6 lg:mt-8 px-6 sm:px-8 md:px-10 lg:px-6 xl:px-6 py-3 sm:py-4 md:py-5 lg:py-3 xl:py-4 w-[90%] sm:w-auto sm:min-w-[280px] md:min-w-[320px] lg:w-[220px] xl:w-[250px] h-[50px] sm:h-[56px] md:h-[64px] lg:h-[44px] xl:h-[50px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[22px] xl:rounded-[25px] bg-[#FFFFFF] text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-[#1677FF] font-semibold text-center'>
            Agendar demo
          </button>
        </div>
      </section>

      {/* Porque Hoktus?*/} {/* Responsive */}
      <section className='flex flex-col items-center justify-center gap-6 py-[50px]'>
        <button className='w-auto px-4 py-3 rounded-[28px] bg-[#ECF4FF] text-[#1677FF] text-base'>
          Porque Hoktus
        </button>
        <p className='text-[40px] font-bold text-[#012257] text-center px-4'>
          El camino inteligente para escalar tu reclutamiento
        </p>

        {/* Images content */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-auto overflow-x-hidden lg:overflow-visible h-auto mt-5 gap-[150px]">
          {/* Left Section - Woman with UI elements */}
          <div className="relative w-auto min-w-[425px]" style={{ overflow: 'visible' }}>
            <img
              src={person}
              alt="Persona usando Hoktus"
              className="w-[400px] h-[400px] sm:w-[465px] sm:h-[465px] object-contain sm:object-cover"
            />

            {/* Floating UI Element 1 - Performance */}
            <img
              src={performanceChart}
              alt="Performance"
              className="absolute top-0 left-[0px] w-[170px] sm:w-[250px] sm:left-[300px] object-cover overflow-visible"
            />

            {/* Floating UI Element 2 - Postulante Chat */}
            <div className="absolute top-4 right-4 sm:top-[200px] md:top-[250px] lg:top-[300px] sm:right-[-50px] md:right-[-70px] lg:right-[-140px] z-10 w-[100px] sm:w-[150px] md:w-[190px] lg:w-[235.47px] h-auto sm:h-[60px] md:h-[68px] lg:h-[73.83px] bg-white rounded-tl-[12px] sm:rounded-tl-[16px] lg:rounded-tl-[20px] rounded-tr-[12px] sm:rounded-tr-[16px] lg:rounded-tr-[20px] rounded-br-[12px] sm:rounded-br-[16px] lg:rounded-br-[20px] shadow-lg p-1.5 sm:p-2 px-2 sm:px-3 lg:px-4 text-[#1677FF]">
              <h3 className="font-semibold text-xs sm:text-sm lg:text-[15px]">Postulante</h3>
              <p className="text-[10px] sm:text-[11px] lg:text-[12px]">Hola Daniel, estoy interesado en el puesto de conductor, ¿Qué debo...</p>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center gap-6 sm:gap-6 lg:gap-8 w-full lg:w-auto'>
            {/* Middle Section - Recruitment Card */}
            <div className="flex flex-col items-start justify-between bg-[#ECF4FF] rounded-[20px] shadow-lg p-6 sm:p-8 w-full sm:w-[90%] md:w-[85%] lg:max-w-[307.5px] h-auto sm:h-[420px] lg:h-[464.38px]">
              <img src={starsIcon} alt="Performance" className="w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-6" />
              <h2 className="text-[#1677FF] font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-start">
                Recluta más rápido con Hoktus AI
              </h2>
              <p className="text-[#012257] text-base sm:text-[18px] mb-4 sm:mb-6 text-start flex-1">
                Automatiza conversaciones, valida aptitudes y revisa antecedentes en un solo flujo. Recibe reportes en tiempo real y toma decisiones ágiles.
              </p>
              <button className="w-full px-6 py-3 bg-[#1677FF] text-white rounded-[47px] font-semibold transition-colors text-sm sm:text-base">
                Agendar demo
              </button>
            </div>

            {/* Right Section - Systems Connection Card */}
            <div className="flex flex-col items-start bg-white rounded-[20px] shadow-lg p-6 sm:p-8 w-full sm:w-[90%] md:w-[85%] lg:max-w-[420px] h-auto lg:h-[464px]">
              <img
                src={sysConected}
                alt="Conectados con tus sistemas"
                className="w-full h-auto sm:h-[200px] md:h-[250px] lg:h-full object-cover rounded-lg mb-4 sm:mb-0"
              />
              <h2 className="text-[#1677FF] font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-start">
                Conectados con tus sistemas
              </h2>
              <p className="text-gray-600 text-base sm:text-[18px] leading-relaxed text-start w-full sm:w-[290px]">
                Nos integramos a tus sistemas para adaptarnos a ti. Si no tenemos integración, la desarrollamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automatiza tu reclutamiento, sin importar la industria */} {/* Responsive */}
      <section className='bg-gradient-to-tl from-[#FFFFFF] to-[#E9F2FF] rounded-[20px] sm:rounded-[40px] md:rounded-[60px] lg:rounded-[80px] flex flex-col items-center justify-start w-full sm:w-[95%]'>
        <h2 className='text-2xl text-[#05234F] font-bold text-center w-full pt-8 px-4'>
          Automatiza tu reclutamiento, sin importar la industria
        </h2>
        <p className='text-[#888888] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[35px] font-[100] text-center py-3 sm:py-4 md:py-5 px-4 sm:px-6 lg:px-0'>
          Hoktus filtra, entrevista, revisa y valida por WhatsApp
        </p>

        <div className='flex flex-col items-center justify-center gap-6 sm:gap-8 pb-8 sm:pb-12 md:pb-16 lg:pb-[120px] mt-6 sm:mt-8 md:mt-12 lg:mt-[100px] w-full'>
          <div className='w-full flex items-center justify-center overflow-hidden relative'>
            <div className='flex transition-transform duration-500 ease-in-out w-full' style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}>
              {cards.map((card, index) => (
                <div key={index} className='w-full flex-shrink-0 flex justify-center px-4'>
                  <Card bg={card} />
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores (dots) */}
          <div className='flex items-center justify-center gap-2 mt-4'>
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCardIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentCardIndex ? 'bg-[#1677FF] w-8' : 'bg-[#1677FF]/30 w-2'
                  }`}
                aria-label={`Ir a tarjeta ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Los números hablan solos */} {/* Responsive */}
      <section className='bg-gradient-to-b from-[#01122D] to-[#002259] rounded-[20px] sm:rounded-[40px] md:rounded-[60px] lg:rounded-[80px] flex flex-col items-center justify-start w-full p-4 sm:p-6 lg:p-4 py-8 sm:py-12 md:py-16 lg:py-[120px] mt-8 sm:mt-12 md:mt-16 lg:mt-[120px]'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[75px] text-[#FFFFFF] font-bold text-center w-full sm:w-[95%] md:w-[90%] lg:w-[900px] mb-6 sm:mb-8 md:mb-12 lg:mb-[100px] px-4 sm:px-6 lg:px-0'>
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
      <section className='bg-gradient-to-br from-[#FFFFFF] to-[#E9F2FF] rounded-[20px] sm:rounded-[40px] md:rounded-[60px] lg:rounded-[80px] w-full sm:w-[95%] lg:w-[90%] flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-[120px] px-4 sm:px-6 lg:px-0'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[65px] text-[#0048BE] font-bold text-center mb-3 sm:mb-4 px-4 sm:px-6 lg:px-0'>
          Planes
        </h2>
        <p className='text-[#828282] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] font-[100] text-center mb-6 sm:mb-8 md:mb-12 lg:mb-[100px] px-4 sm:px-6 lg:px-0'>
          Elige el plan que se adapta a tu forma de contratar
        </p>

        <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 items-start justify-center w-full px-4 sm:px-6 lg:px-0'>
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
      <section className='bg-gradient-to-br from-[#EBF3FF] to-[#FFFFFF] rounded-[20px] w-full h-[550px]'>
        <img src={stars} alt="Stars icon" className='absolute z-10 h-[25px] left-[20px] mt-10' />
        <div className='flex flex-col absolute z-10'>
          <h2 className='text-[#1677FF] text-[30px] mt-[75px] ml-[50px] font-bold'>
            Empieza a contratar en minutos. Sin fricción, sin estrés.
          </h2>
          <button className='bg-[#1677FF] text-white px-4 rounded-[15px] font-semibold hover:bg-[#0050CC] w-[250px] flex items-center justify-center ml-[90px] py-1 gap-3'>
            Probar Hoktus
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <img src={chatSimulation} alt="Chat Simulation" className='w-[180px] object-cover transform z-10 mt-[350px] absolute' />

        <div className='z-10 mt-[70px]'>
          <img src={whatsapp} alt="WhatsApp" className='w-[40px] absolute mt-[190px] right-[60px]' />
          <img src={person2} alt="Professional woman" className='w-[310px] object-contain absolute mt-[170px] right-[55px]' />
        </div>
      </section>

      {/* Hero: Que dicen las empresas sobre Hoktus */}
      <section className='w-full sm:w-[95%] lg:w-[90%] flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-[120px] px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10'>
        {/* Testimonio Badge */}
        <div className='bg-[#EBF3FF] px-4 sm:px-6 py-2 rounded-full mb-6 sm:mb-8'>
          <span className='text-[#1677FF] text-xs sm:text-sm font-light'>Testimonio</span>
        </div>

        {/* Main Title */}
        <h2 className='text-[#05234F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] w-full px-4'>
          ¿Qué están diciendo las empresas sobre Hoktus?
        </h2>

        {/* Testimonial Text */}
        <p className='text-[#001844] text-base sm:text-lg md:text-xl lg:text-[24px] text-center max-w-full sm:max-w-[600px] md:max-w-[690px] mb-6 sm:mb-8 md:mb-12 leading-relaxed px-4'>
          Hoktus es genial. Antes, contratar y validar conductores y personal de faena era un dolor de cabeza. Ahora, el proceso es súmamente rápido. Nos olvidamos de revisar mil documentos y nos enfocamos en hacer crecer el negocio.
        </p>

        {/* Profile Picture */}
        <div className='mb-6'>
          <img
            src={matias}
            alt="Matías Romero"
            className='w-24 h-24 rounded-full object-cover border-2 border-[#1677FF]/20'
          />
        </div>

        {/* Name and Title */}
        <div className='flex items-center gap-2 mb-8'>
          <p className='text-[#1677FF] text-[20px] font-semibold'>Matías Romero, </p>
          <p className='text-[#1677FF] text-[20px] font-light'>Co-fundador</p>
        </div>

        {/* Company Logo */}
        <div className='flex items-center gap-2'>
          <img src={reciclapp} alt="Reciclapp" className='w-[125px] h-[16px]' />
        </div>
      </section>

      {/* Hero: Nosotros respondemos todas tus preguntas */}
      <section className='bg-[#F7FAFF] w-full flex flex-col items-center justify-center py-[120px] px-8'>
        {/* FAQ Badge */}
        <div className='mb-8 rounded-[66px] bg-[#EBF3FF] px-6 py-2'>
          <span className='text-[#1677FF] text-[16px] font-semibold'>FAQ</span>
        </div>

        {/* Main Title */}
        <h2 className='text-[#05234F] text-[52px] font-bold text-center mb-16 max-w-[700px]'>
          Nosotros responderemos todas tus preguntas
        </h2>

        {/* FAQ List */}
        <div className='w-full sm:w-[95%] md:w-[90%] lg:w-[900px] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-0'>
          <FAQList />
        </div>

        {/* Bottom Section */}
        <p className='text-[#001844] text-lg text-center mt-12'>
          Si no encuentras lo que buscas, no dudes en{' '}
          <a href="#" className='underline text-[#001844]'>
            contactárnos
          </a>
          {' '}directamente
        </p>
      </section>

      {/* Hero - Footer: ¿Listo para automatizar tus procesos de forma conversacional? */}
      <section className='bg-[#02193B] rounded-t-[20px] sm:rounded-t-[40px] md:rounded-t-[60px] lg:rounded-t-[80px] w-full flex flex-col items-center justify-center py-4 sm:py-5 lg:py-[20px]'>
        {/* Top CTA Section */}
        <div className='w-full sm:w-[95%] lg:w-[90%] h-auto sm:h-[242px] min-h-[200px] sm:min-h-[242px] flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between border-b border-[#FFFFFF]/10 px-4 sm:px-6 lg:px-0 py-6 sm:py-0 gap-6 sm:gap-0'>
          <h2 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[733px] text-center sm:text-left'>
            ¿LISTO PARA AUTOMATIZAR TUS PROCESOS DE FORMA CONVERSACIONAL?
          </h2>
          <div className='flex flex-col items-center sm:items-end gap-4 sm:gap-[30px]'>
            <div className='flex flex-row items-center gap-2 sm:gap-4 h-auto sm:h-[50px]'>
              <div className='flex flex-col items-center sm:items-end'>
                <p className='text-white text-sm sm:text-base md:text-lg lg:text-[23.36px]'>AI for Hiring</p>
                <p className='text-white text-sm sm:text-base md:text-lg lg:text-[23.36px]'>One conversation. <span className='italic'>One hire</span>.</p>
              </div>
              <img src={hoktusWhatsapp} alt="Hoktus Logo" className='h-[30px] sm:h-[40px] lg:h-[50px]' />
            </div>
            <button className='bg-white text-[#000E2] h-[40px] sm:h-[46px] w-[160px] sm:w-[175px] rounded-[24.5px] flex items-center justify-center font-normal text-sm sm:text-base lg:text-lg mt-0 sm:mt-10'>
              Agendar reunión
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className='w-full sm:w-[95%] lg:w-[90%] flex flex-col sm:flex-row items-start justify-between py-4 sm:py-5 lg:py-[20px] border-b border-[#FFFFFF]/10 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-0'>
          {/* Hoktus Info */}
          <div className='flex flex-col gap-6 max-w-[300px] items-start justify-start'>
            <div className='flex flex-row items-center gap-3'>
              <img src={logo} alt="Hoktus Logo" className='w-8 h-8' />
              <span className='text-white text-[60px] font-bold'>Hoktus</span>
            </div>
            <p className='text-white text-base'>
              Plataforma de reclutamiento y automatización con IA conversacional.
            </p>
            <div className='flex flex-row items-center gap-2 mt-8'>
              <img src={chile} alt="Chile Flag" className='w-6 h-6' />
              <span className='text-white text-base'>Santiago, Chile (HQ)</span>
            </div>
          </div>

          {/* Links */}
          <div className='flex flex-col gap-4 mt-4'>
            <h4 className='text-white text-lg font-bold'>Links</h4>
            <ul className='flex flex-col gap-2'>
              <li><a href='#' className='text-white/60 text-light hover:underline'>Nosotros</a></li>
              <li><a href='#' className='text-white/60 text-light hover:underline'>Funcionalidades</a></li>
              <li><a href='#' className='text-white/60 text-light hover:underline'>Planes</a></li>
              <li><a href='#' className='text-white/60 text-light hover:underline'>Contacto</a></li>
            </ul>
          </div>

          {/* Follow */}
          <div className='flex flex-col gap-4 mt-4'>
            <h4 className='text-white text-lg font-bold'>Follow</h4>
            <ul className='flex flex-col gap-2'>
              <li><a href='#' className='text-white/60 text-light hover:underline'>LinkedIn</a></li>
              <li><a href='#' className='text-white/60 text-light hover:underline'>Instagram</a></li>
            </ul>
          </div>

          {/* News */}
          <div className='flex flex-col gap-4 max-w-[300px] mt-4'>
            <h4 className='text-white text-lg font-bold'>News</h4>
            <p className='text-white/60 text-light'>Registrarme para recibir novedades</p>
            <input
              type='email'
              placeholder='Correo electrónico'
              className='bg-transparent border border-[#FFFFFF] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#1677FF] placeholder:text-gray-400 rounded-[24.5px]'
            />
            <button className='bg-white text-[#01122D] px-6 py-3 text-light rounded-[24.5px] w-[124px] h-[46px] flex items-center justify-center'>
              Suscribirme
            </button>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className='w-full sm:w-[95%] lg:w-[90%] flex flex-col sm:flex-row items-center justify-center sm:justify-between py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-0 gap-4 sm:gap-0'>
          <p className='text-white text-sm text-light'>
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
