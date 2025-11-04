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
import { useState, type ReactElement } from 'react';
import sysConected from '@/assets/con-sys.png';
import starsIcon from '@/assets/stars2.png';
import performanceChart from '@/assets/performance-chart.png';

const icons = [goingUp, clock, persons, chat, clock, circles];

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
    <div className='border-b border-gray-300 pb-6 mb-6'>
      <button
        onClick={onToggle}
        className='w-full flex items-center justify-between text-left'
      >
        <h3 className={`text-xl font-bold ${isOpen ? 'text-[#05234F]' : 'text-[#05234F]'}`}>
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
        <p className='text-[#888888] text-lg mt-4 leading-relaxed'>
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
  return (
    <div className="flex flex-col items-center w-full">
      {/* Gradient header + Navbar*/}
      <section className="flex flex-col bg-gradient-to-b from-[#01122D] to-[#094FBE] h-full w-full flex items-center justify-center py-6">
        <div className='w-full flex flex-col items-center justify-center'>
          <nav className="flex justify-between items-center px-6 w-[90%] h-[88px] rounded-[52.5px] bg-[#FBFBFB]/10 text-[#FFFFFF] ">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Hoktus" className="w-[32.5px]" />
              <img src={title} alt="Hoktus" className="w-[134px] h-[29.3]" />
            </div>

            <div className="flex items-center gap-10 font-[100] text-[20px] text-[#FFFFFF]">
              <p>Funcionalidades</p>
              <p>Industrias</p>
              <p>Planes</p>
              <p>Contacto</p>
            </div>

            <div className="flex items-center gap-4">
              <img src={chile} alt="Chile" className="w-[40px]" />
              <button className='px-4 py-2 w-[178px] h-[54px] rounded-[27px] bg-[#00122D] border border-[#91BBFF]'>Iniciar Sesión</button>
              <button className='px-4 py-2 w-[178px] h-[54px] rounded-[27px] bg-[#FFFFFF] text-[#1677FF]'>Agendar demo</button>
            </div>
          </nav>
        </div>

        <div className='w-[75%] flex flex-col gap-4 text-center text-white items-center mt-[100px]'>
          <p className='text-[85px] font-bold'>Contrata a las <span className='text-[#1677FF]'>personas correctas</span> en minutos, no semanas</p>
          <p className='font-[100] text-[33px] max-w-[1100px] mt-2'>Automatiza el reclutamiento y todos sus procesos administrativos por WhatsApp con <span className='text-[#1677FF] font-bold italic'>IA conversacional</span>, sin sumar carga a tu equipo</p>
        </div>

        <button className='my-[89px] px-4 py-2 w-[441px] h-[89px] rounded-[44.5px] bg-[#FFFFFF] text-[33px] text-[#1677FF]'>Agendar demo</button>
      </section>

      {/* Porque Hoktus?*/}
      <section className='flex flex-col items-center justify-center'>
        <button className='w-[318px] h-[68px] rounded-[34px] bg-[#ECF4FF] text-[#1677FF] text-[20px] font-[100] my-[100px]'>Porque Hoktus</button>
        <p className='text-[60px] font-bold text-[#012257] text-center'>El camino inteligente para escalar tu reclutamiento</p>
        <p className='text-[30px] font-[100] text-[#A8A8A8] text-center w-[70%] py-10'>Hoktus transforma la forma en que reclutas personal operativo con IA conversacional, automatizando entrevistas y validación documental por WhatsApp. Recluta más rápido, sin sobrecargar a tu equipo.</p>

        {/* Images content */}
        <div className="flex flex-row items-center justify-center gap-[250px] px-8 py-16 w-full overflow-visible">
          {/* Left Section - Woman with UI elements */}
          <div className="relative flex-shrink-0" style={{ overflow: 'visible' }}>
            <div className="h-[527px] w-[604px] relative rounded-lg overflow-visible bg-[#FAFCFF]">
              <img
                src={person}
                alt="Persona usando Hoktus"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Floating UI Element 1 - Performance */}
              <img src={performanceChart} alt="Performance" className="absolute top-[100px] right-[-150px] z-10 w-[300px] object-cover" />

              {/* Floating UI Element 2 - Postulante Chat */}
              <div className="absolute bottom-20 right-[-190px] z-10 w-[235.47px] h-[73.83px] bg-white rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] shadow-lg p-2 px-4 text-[#1677FF]">
                <h3 className="font-semibold text-[15px]">Postulante</h3>
                <p className="text-[12px]">Hola Daniel, estoy interesado en el puesto de conductor, ¿Qué debo...</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center gap-8'>
            {/* Middle Section - Recruitment Card */}
            <div className="flex flex-col items-start justify-between bg-[#ECF4FF] rounded-[20px] shadow-lg p-8 max-w-[307.5px] h-[464.38px]">
              <img src={starsIcon} alt="Performance" className="w-10 h-10 mb-6" />
              <h2 className="text-[#1677FF] font-bold text-2xl mb-4 text-start">Recluta más rápido con Hoktus AI</h2>
              <p className="text-[#012257] text-[18px] mb-6 text-start">
                Automatiza conversaciones, valida aptitudes y revisa antecedentes en un solo flujo. Recibe reportes en tiempo real y toma decisiones ágiles.
              </p>
              <button className="w-full px-6 py-3 bg-[#1677FF] text-white rounded-[47px] font-semibold transition-colors">
                Agendar demo
              </button>
            </div>

            {/* Right Section - Systems Connection Card */}
            <div className="flex flex-col items-start bg-white rounded-[20px] shadow-lg p-8 max-w-[420px] h-[464px]">
              <img src={sysConected} alt="Conectados con tus sistemas" className="w-full h-full object-cover rounded-lg" />
              <h2 className="text-[#1677FF] font-bold text-2xl mb-4 text-start">Conectados con tus sistemas</h2>
              <p className="text-gray-600 text-[18px] leading-relaxed text-start w-[290px]">
                Nos integramos a tus sistemas para adaptarnos a ti. Si no tenemos integración, la desarrollamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automatiza tu reclutamiento, sin importar la industria */}
      <section className='bg-gradient-to-tl from-[#FFFFFF] to-[#E9F2FF] rounded-[80px] flex flex-col items-center justify-start w-[95%]'>
        <p className='text-[65px] text-[#05234F] font-bold text-center w-[900px] pt-[120px]' style={{ lineHeight: '65px' }}>Automatiza tu reclutamiento, sin importar la industria</p>
        <p className='text-[#888888] text-[35px] font-[100] text-center py-5'>Hoktus filtra, entrevista, revisa y valida por WhatsApp</p>

        <div className='flex flex-row items-center justify-center gap-8 pb-[120px] mt-[100px]'>
          <Card bg={retail} />
          <Card bg={education} />
          <Card bg={construction} />
          <Card bg={bpo} />
          <Card bg={security} />
        </div>
      </section>

      {/* Los números hablan solos */}
      <section className='bg-gradient-to-b from-[#01122D] to-[#002259] rounded-[80px] flex flex-col items-center justify-start w-full p-4 py-[120px] mt-[120px] '>
        <p className='text-[75px] text-[#FFFFFF] font-bold text-center w-[900px] mb-[100px]'>Los números <span className='text-[#1677FF]'>hablan</span></p>

        <div className='flex flex-row gap-8 flex-wrap justify-center'>
          {statisticsData.statistics.map((stat, index) => {
            const iconSrc = icons[index];
            return (
              <StatistisCard
                key={index}
                number={stat.number}
                title={stat.title}
                description={stat.description}
                icon={iconSrc ? <img src={iconSrc} alt="" className='w-[20px] h-[20px]' /> : undefined}
              />
            );
          })}
        </div>
      </section>

      {/* Planes */}
      <section className='bg-gradient-to-br from-[#FFFFFF] to-[#E9F2FF] rounded-[80px] w-[90%] flex flex-col items-center justify-center py-[120px]'>
        <p className='text-[65px] text-[#0048BE] font-bold text-center mb-4'>Planes</p>
        <p className='text-[#828282] text-[30px] font-[100] text-center mb-[100px]'>Elige el plan que se adapta a tu forma de contratar</p>

        <div className='flex flex-row gap-8 items-start justify-center flex-wrap'>
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
      <section className='bg-gradient-to-br from-[#EBF3FF] to-[#FFFFFF] rounded-[80px] w-[90%] min-h-[450px] flex items-center relative overflow-visible mt-[120px]'>
        <img src={stars} alt="Stars icon" className='w-[80px] absolute top-10 left-10' />
        <div className='flex flex-col absolute top-20 left-[200px] w-[685px] gap-20'>
          <h2 className='text-[#1677FF] text-5xl font-bold'>
            Empieza a contratar en minutos. Sin fricción, sin estrés.
          </h2>
          <button className='bg-[#1677FF] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 w-fit hover:bg-[#0050CC] transition-colors'>
            Probar Hoktus
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <img src={chatSimulation} alt="Chat Simulation" className='w-[300px] object-cover absolute top-[200px] left-[600px]' />

        <div className='absolute right-0 z-10 overflow-visible'>
          <img src={whatsapp} alt="WhatsApp" className='absolute top-[150px] right-[150px] w-[57px] z-10' />
          <img src={person2} alt="Professional woman" className='w-[751px] h-[551px] object-contain z-[9999] bottom-[50px] relative' />
        </div>
      </section>

      {/* Hero: Que dicen las empresas sobre Hoktus */}
      <section className='w-[90%] flex flex-col items-center justify-center py-[120px] px-8 mt-10'>
        {/* Testimonio Badge */}
        <div className='bg-[#EBF3FF] border border-[#1677FF]/20 px-6 py-2 rounded-full mb-8'>
          <span className='text-[#1677FF] text-sm font-semibold'>Testimonio</span>
        </div>

        {/* Main Title */}
        <h2 className='text-[#05234F] text-5xl font-bold text-center mb-12 max-w-[900px]'>
          ¿Qué están diciendo las empresas sobre Hoktus?
        </h2>

        {/* Testimonial Text */}
        <p className='text-[#888888] text-xl text-center max-w-[70%] mb-12 leading-relaxed'>
          Hoktus es genial. Antes, contratar y validar conductores y personal de faena era un dolor de cabeza. Ahora, el proceso es súmamente rápido. Nos olvidamos de revisar mil documentos y nos enfocamos en hacer crecer el negocio.
        </p>

        {/* Profile Picture */}
        <div className='mb-6'>
          <img
            src={person2}
            alt="Matías Romero"
            className='w-24 h-24 rounded-full object-cover border-2 border-[#1677FF]/20'
          />
        </div>

        {/* Name and Title */}
        <div className='flex flex-col items-center gap-2 mb-8'>
          <p className='text-[#1677FF] text-2xl font-bold'>Matías Romero</p>
          <p className='text-[#888888] text-lg'>Co-fundador</p>
        </div>

        {/* Company Logo */}
        <div className='flex items-center gap-2'>
          <span className='text-black text-2xl font-bold'>RECICLAPP</span>
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
        </div>
      </section>

      {/* Hero: Nosotros respondemos todas tus preguntas */}
      <section className='bg-gradient-to-br from-[#EBF3FF] to-[#FFFFFF] rounded-[80px] w-[90%] flex flex-col items-center justify-center py-[120px] px-8'>
        {/* FAQ Badge */}
        <div className='mb-8'>
          <span className='text-[#1677FF] text-sm font-semibold'>FAQ</span>
        </div>

        {/* Main Title */}
        <h2 className='text-[#05234F] text-5xl font-bold text-center mb-16 max-w-[900px]'>
          Nosotros responderemos todas tus preguntas
        </h2>

        {/* FAQ List */}
        <div className='w-full max-w-[800px]'>
          <FAQList />
        </div>

        {/* Bottom Section */}
        <p className='text-[#888888] text-lg text-center mt-12'>
          Si no encuentras lo que buscas, no dudes en{' '}
          <a href="#" className='underline text-[#1677FF] hover:text-[#0050CC]'>
            contactárnos directamente
          </a>
        </p>
      </section>

      {/* Hero - Footer: ¿Listo para automatizar tus procesos de forma conversacional? */}
      <section className='bg-[#01122D] rounded-t-[80px] w-full flex flex-col items-center justify-center pt-[120px]'>
        {/* Top CTA Section */}
        <div className='w-[90%] flex flex-row items-center justify-between pb-[100px] border-b border-[#FFFFFF]/10'>
          <h2 className='text-white text-5xl font-bold max-w-[700px] leading-tight'>
            ¿LISTO PARA AUTOMATIZAR TUS PROCESOS DE FORMA CONVERSACIONAL?
          </h2>
          <div className='flex flex-col items-end gap-4'>
            <div className='flex flex-row items-center gap-4'>
              <div className='flex flex-col items-end'>
                <p className='text-white text-sm'>AI for Hiring</p>
                <p className='text-white text-sm'>One conversation. One hire.</p>
              </div>
              <img src={logo} alt="Hoktus Logo" className='w-10 h-10' />
            </div>
            <button className='bg-white text-[#01122D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors'>
              Agendar reunión
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className='w-[90%] flex flex-row justify-between py-[100px] border-b border-[#FFFFFF]/10 gap-12'>
          {/* Hoktus Info */}
          <div className='flex flex-col gap-6 max-w-[300px]'>
            <div className='flex flex-row items-center gap-3'>
              <img src={logo} alt="Hoktus Logo" className='w-8 h-8' />
              <span className='text-white text-3xl font-bold'>Hoktus</span>
            </div>
            <p className='text-white text-base'>
              Plataforma de reclutamiento y automatización con IA conversacional.
            </p>
            <div className='flex flex-row items-center gap-2'>
              <img src={chile} alt="Chile Flag" className='w-6 h-6' />
              <span className='text-white text-base'>Santiago, Chile (HQ)</span>
            </div>
          </div>

          {/* Links */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white text-lg font-bold'>Links</h4>
            <ul className='flex flex-col gap-2'>
              <li><a href='#' className='text-white text-base hover:underline'>Nosotros</a></li>
              <li><a href='#' className='text-white text-base hover:underline'>Funcionalidades</a></li>
              <li><a href='#' className='text-white text-base hover:underline'>Planes</a></li>
              <li><a href='#' className='text-white text-base hover:underline'>Contacto</a></li>
            </ul>
          </div>

          {/* Follow */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white text-lg font-bold'>Follow</h4>
            <ul className='flex flex-col gap-2'>
              <li><a href='#' className='text-white text-base hover:underline'>LinkedIn</a></li>
              <li><a href='#' className='text-white text-base hover:underline'>Instagram</a></li>
            </ul>
          </div>

          {/* News */}
          <div className='flex flex-col gap-4 max-w-[300px]'>
            <h4 className='text-white text-lg font-bold'>News</h4>
            <p className='text-white text-base'>Registrarme para recibir novedades</p>
            <input
              type='email'
              placeholder='Correo electrónico'
              className='bg-transparent border border-[#FFFFFF]/30 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#1677FF] placeholder:text-gray-400'
            />
            <button className='bg-white text-[#01122D] px-6 py-3 rounded-lg font-semibold text-base hover:bg-gray-100 transition-colors'>
              Suscribirme
            </button>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className='w-[90%] flex flex-row items-center justify-between py-8'>
          <p className='text-white text-sm'>
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
