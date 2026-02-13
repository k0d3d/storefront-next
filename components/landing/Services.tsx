import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServicesProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    title: 'UI/UX Design',
    description: 'Focusing on user interface (UI) and user experience (UX) design to enhance the usability and accessibility of digital products & app.',
    icon: (
      <svg width="64" height="70" viewBox="0 0 64 70" fill="none" className="h-[70px] w-auto">
        <rect x="8" y="8" width="48" height="54" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="32" cy="35" r="15" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Graphic Design',
    description: 'Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.',
    icon: (
      <svg width="77" height="70" viewBox="0 0 77 70" fill="none" className="h-[70px] w-auto">
        <path d="M10 10L67 10L67 60L10 60L10 10Z" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M20 25L57 25M20 35L57 35M20 45L45 45" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Web Design',
    description: 'Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.',
    icon: (
      <svg width="75" height="70" viewBox="0 0 75 70" fill="none" className="h-[70px] w-auto">
        <rect x="5" y="15" width="65" height="45" rx="3" stroke="currentColor" strokeWidth="3" fill="none" />
        <line x1="5" y1="25" x2="70" y2="25" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Motion Graphics',
    description: 'Creating animated graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.',
    icon: (
      <svg width="55" height="70" viewBox="0 0 55 70" fill="none" className="h-[70px] w-auto">
        <path d="M15 10L40 35L15 60V10Z" stroke="currentColor" strokeWidth="3" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Services({ services = defaultServices }: ServicesProps) {
  return (
    <section className="section-service">
      <div className="bg-colorIvory">
        <div className="section-space">
          <div className="container mx-auto px-4">
            {/* Section Block */}
            <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne">
                We provide effective design{' '}
                <span className="inline-flex items-center gap-2">
                  solutions
                  <svg className="relative inline-block h-auto w-8 md:w-10 lg:w-[57px]" width="74" height="70" viewBox="0 0 74 70" fill="none">
                    <path d="M37 0L44.5 25.5L70 33L44.5 40.5L37 66L29.5 40.5L4 33L29.5 25.5L37 0Z" fill="#BFF747"/>
                  </svg>
                </span>
              </h2>
            </div>

            {/* Service List */}
            <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
              {services.map((service, index) => (
                <li key={index}>
                  <div className="shadow-bg group h-full">
                    <div className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition-colors duration-300 group-hover:bg-colorLightLime">
                      <div className="text-black">
                        {service.icon}
                      </div>

                      <h4 className="mb-[15px] mt-[30px] text-2xl md:text-3xl font-bold font-syne leading-tight">
                        {service.title}
                      </h4>
                      <p className="mb-7 text-base md:text-lg leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        href="#"
                        className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-2"
                      >
                        <svg width="34" height="28" viewBox="0 0 34 28" fill="currentColor">
                          <path d="M20 2L32 14L20 26M2 14H31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
