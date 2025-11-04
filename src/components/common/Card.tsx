import { type ReactElement } from 'react';

interface CardProps {
  bg: string;
}

interface StatisticsCardProps {
  number: string;
  title: string;
  description: string;
  icon?: ReactElement;
}

/**
 * Componente de tarjeta para mostrar información de industrias
 * @param bg - Ruta de la imagen de fondo
 */
export function Card({ bg }: CardProps): ReactElement {
  return (
    <div className='w-[200px] sm:w-[240px] md:w-[270px] lg:w-[296px] h-[300px] sm:h-[350px] md:h-[390px] lg:h-[423px] bg-[#EBF3FF] rounded-[16px] sm:rounded-[20px] lg:rounded-[25.19px] border border-[#9B9B9B]/20 p-3 sm:p-4 flex-shrink-0'>
      <img src={bg} alt="background" className='w-full h-full object-cover rounded-[12px] sm:rounded-[16px] lg:rounded-lg' />
    </div>
  )
}

/**
 * Componente de tarjeta para mostrar estadísticas
 * @param number - Número principal de la estadística (ej: "4x")
 * @param title - Título de la estadística (ej: "Contrataciones más rápidas")
 * @param description - Descripción detallada de la estadística
 * @param icon - Ícono opcional para la tarjeta
 */
export function StatistisCard({ number, title, description, icon }: StatisticsCardProps): ReactElement {
  return (
    <div className='bg-[#000F28] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] w-full sm:w-[90%] md:w-[85%] lg:w-[450px] xl:w-[486px] h-auto sm:h-[280px] md:h-[310px] lg:h-[334px] flex flex-col relative p-6 sm:p-8 lg:p-10'>
      {icon && (
        <div className='absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#E3EEFF]/10 border border-[#DBE9FF]/20 rounded-full flex items-center justify-center'>
          {icon}
        </div>
      )}
      <div className='pt-4 sm:pt-6 lg:pt-[35px]'>
        <h3 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-[63px] font-bold'>{number}</h3>
        <h4 className='text-white text-lg sm:text-xl md:text-2xl lg:text-[25px] font-semibold mt-2 sm:mt-3 lg:mt-0'>{title}</h4>
        <p className='text-[#95BFFF] text-base sm:text-lg md:text-xl lg:text-[22px] font-light mt-2 sm:mt-3 lg:mt-0'>{description}</p>
      </div>
    </div>
  );
}

interface PlanFeature {
  text: string;
}

interface PlanAdditional {
  text: string;
}

interface PlanCardProps {
  title: string;
  price?: string;
  priceSubtext?: string;
  isRequestQuote?: boolean;
  description: string;
  features: PlanFeature[];
  additionals?: PlanAdditional[];
  ctaText: string;
  isPopular?: boolean;
  currencyBadge?: string;
  subtext?: PlanAdditional[];
}

/**
 * Componente de tarjeta para mostrar planes de precios
 * @param title - Título del plan
 * @param price - Precio del plan (ej: "$490")
 * @param priceSubtext - Texto adicional del precio (ej: "/mes")
 * @param isRequestQuote - Si es true, muestra "Solicitar" en lugar del precio
 * @param description - Descripción del plan
 * @param features - Lista de funcionalidades del plan
 * @param additionals - Lista opcional de items adicionales solicitables
 * @param ctaText - Texto del botón de acción
 * @param isPopular - Si es true, muestra el badge "Mas popular"
 * @param currencyBadge - Texto del badge de moneda (ej: "$ USD")
 */
export function PlanCard({
  title,
  price,
  priceSubtext,
  isRequestQuote = false,
  description,
  features,
  additionals,
  ctaText,
  isPopular = false,
  currencyBadge = '$ USD',
}: PlanCardProps): ReactElement {
  return (
    <div className='border-[5px] border-[#B0D1FF] rounded-[30px] p-8 relative w-full w-[656px] h-[861px] flex flex-col min-h-[715px] flex flex-col items-start justify-between' style={{ background: isPopular ? '#012257' : '#0048BE' }}>
      {isPopular && (
        <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#012257] border-[3px] border-[#B0D1FF] px-6 py-2 rounded-full'>
          <span className='text-white text-sm font-semibold'>Mas popular</span>
        </div>
      )}

      {currencyBadge && (
        <div className='absolute top-6 right-6 bg-[#215FC4]/50 px-3 py-1 rounded-full'>
          <span className='text-white text-xs font-medium'>{currencyBadge}</span>
        </div>
      )}

      <div className='flex flex-col justify-start gap-10 h-full items-start'>
        <div className='flex flex-col gap-4 mt-4'>
          <h2 className='text-white text-[30px] font-bold'>{title}</h2>

          {isRequestQuote ? (
            <p className='text-[#A5CAFF] text-[40px] font-bold'>Solicitar</p>
          ) : (
            <div className='flex items-baseline gap-2'>
              <span className='text-[#A5CAFF] text-[40px] font-bold'>{price}</span>
              {priceSubtext && <span className='text-white text-xl'>{priceSubtext}</span>}
            </div>
          )}

          <p className='text-[#FFFFFF] text-[18px] h-[46px]'>{description}</p>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-[#FFFFFF] text-[18px] font-light uppercase'>Funcionalidades</h3>
            <div className='h-[1px] bg-[#FFFFFF]'></div>
            <ul className='flex flex-col gap-3 mt-2'>
              {features.map((feature, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <svg className="w-5 h-5 text-[#1677FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className='text-white text-[18px]'>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {additionals && additionals.length > 0 && (
            <div className='flex flex-col gap-3'>
              <h3 className='text-[#FFFFFF] text-[18px] font-semibold uppercase'>Adicional (Solicitar)</h3>
              <div className='h-[1px] bg-[#FFFFFF]'></div>
              <div className='flex flex-wrap gap-2'>
                {additionals.map((additional, index) => (
                  <div
                    key={index}
                    className='w-[124.65px] h-[78px] bg-[#215FC4] border-[1px] border-[#DBE9FF]/20 rounded-[10px] flex items-center justify-center p-4 text-[13px] text-[#FFFFFF]'
                  >
                    {additional.text}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        className={`place-self-end align-self-end py-3 px-6 rounded-[30px] w-[172px] h-[60px] font-semibold text-white transition-colors ${isPopular
            ? 'bg-[#0048BE] border-[2px] border-[#FFFFFF]/20 text-[#FFFFFF]'
            : 'bg-[#FFFFFF] text-[#0048BE]'
          }`}
      >
        {ctaText}
      </button>
    </div>
  );
}