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
    <div className='w-[296px] h-[423px] bg-[#EBF3FF] rounded-[25.19px] border border-[#9B9B9B]/20 p-4'>
      <img src={bg} alt="background" />
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
    <div className='bg-[#000F28] rounded-[25px] border border-[#00173B] p-6 relative'>
      {icon && (
        <div className='absolute top-4 right-4 w-12 h-12 bg-[#E3EEFF]/10 border border-[#DBE9FF]/20 rounded-full flex items-center justify-center'>
          {icon}
        </div>
      )}
      <div className='flex flex-col gap-3'>
        <h3 className='text-[#95BFFF] text-5xl font-bold'>{number}</h3>
        <h4 className='text-[#95BFFF] text-xl font-semibold'>{title}</h4>
        <p className='text-[#95BFFF] text-sm font-light'>{description}</p>
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
  currencyBadge = '$ USD'
}: PlanCardProps): ReactElement {
  return (
    <div className='bg-gradient-to-b from-[#01122D] to-[#002259] rounded-[30px] p-8 relative w-full max-w-[500px] flex flex-col min-h-[715px]'>
      {isPopular && (
        <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#01122D] px-6 py-2 rounded-full'>
          <span className='text-white text-sm font-semibold'>Mas popular</span>
        </div>
      )}

      {currencyBadge && (
        <div className='absolute top-6 right-6 bg-gray-200 px-3 py-1 rounded-full'>
          <span className='text-gray-700 text-xs font-medium'>{currencyBadge}</span>
        </div>
      )}

      <div className='flex flex-col gap-4 mt-4'>
        <h2 className='text-white text-3xl font-bold'>{title}</h2>
        
        {isRequestQuote ? (
          <p className='text-white text-4xl font-bold'>Solicitar</p>
        ) : (
          <div className='flex items-baseline gap-2'>
            <span className='text-white text-4xl font-bold'>{price}</span>
            {priceSubtext && <span className='text-white text-xl'>{priceSubtext}</span>}
          </div>
        )}

        <p className='text-gray-400 text-sm'>{description}</p>
      </div>

      <div className='mt-8 flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-gray-400 text-xs font-semibold uppercase'>Funcionalidades</h3>
          <div className='h-px bg-gray-600'></div>
          <ul className='flex flex-col gap-3 mt-2'>
            {features.map((feature, index) => (
              <li key={index} className='flex items-start gap-3'>
                <svg className="w-5 h-5 text-[#1677FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className='text-white text-sm'>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {additionals && additionals.length > 0 && (
          <div className='flex flex-col gap-3 mt-4'>
            <h3 className='text-gray-400 text-xs font-semibold uppercase'>Adicional (Solicitar)</h3>
            <div className='flex flex-wrap gap-2'>
              {additionals.map((additional, index) => (
                <button
                  key={index}
                  className='px-3 py-1.5 border border-gray-400 rounded-lg text-white text-xs hover:bg-gray-700 transition-colors'
                >
                  {additional.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        className={`mt-8 py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
          isPopular
            ? 'bg-[#01122D] hover:bg-[#00173B]'
            : 'bg-[#1677FF] hover:bg-[#0050CC]'
        }`}
      >
        {ctaText}
      </button>
    </div>
  );
}