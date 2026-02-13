import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="bg-black">
        <div className="pb-20 pt-[150px] lg:pb-[100px] lg:pt-[196px] xl:pb-[130px]">
          <div className="container mx-auto px-4">
            <div className="relative z-10 grid grid-cols-1 items-center justify-center gap-x-[90px] gap-y-16 lg:grid-cols-[1fr_minmax(0,0.6fr)]">
              {/* Hero Left Block */}
              <div className="text-center text-colorButteryWhite lg:text-start">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-syne mb-6 leading-tight">
                  A{' '}
                  <span className="inline-flex items-center gap-3 md:gap-5">
                    creative
                    <svg className="w-12 md:w-14 lg:w-auto h-auto inline-block" width="74" height="70" viewBox="0 0 74 70" fill="none">
                      <path d="M37 0L44.5 25.5L70 33L44.5 40.5L37 66L29.5 40.5L4 33L29.5 25.5L37 0Z" fill="#BFF747"/>
                    </svg>
                  </span>{' '}
                  design studio
                </h1>
                <p className="mb-10 mt-6 text-base sm:text-lg leading-[1.4] md:mb-14 lg:text-[21px]">
                  We&apos;re a creative design studio specializing in meeting the
                  needs of the new generation. We offer innovative and
                  cutting-edge design solutions to help our clients stand
                  out in today&apos;s fast-paced world.
                </p>

                <div className="mb-[50px] flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <div className="flex -space-x-3">
                    <div className="z-0 h-[66px] w-[66px] rounded-full border-[6px] border-black bg-gray-300" />
                    <div className="z-[2] h-[66px] w-[66px] rounded-full border-[6px] border-black bg-gray-400" />
                    <div className="z-[3] h-[66px] w-[66px] rounded-full border-[6px] border-black bg-gray-500" />
                  </div>
                  <span className="text-base font-semibold">Believed by more than a thousand people</span>
                </div>

                <Link href="/contact" className="btn-primary relative pr-16 sm:pr-20 md:pr-[118px]">
                  <span className="hidden sm:inline">Book a free consultation</span>
                  <span className="inline sm:hidden">Get Started</span>
                  <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-black">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="w-6 h-6">
                      <path d="M25 18.75V23.75C25 24.413 24.7366 25.0489 24.2678 25.5178C23.7989 25.9866 23.163 26.25 22.5 26.25C16.6875 25.6875 11.375 23.0625 7.5 18.75C3.1875 14.875 0.5625 9.5625 0 3.75C0 3.08696 0.263392 2.45107 0.732233 1.98223C1.20107 1.51339 1.83696 1.25 2.5 1.25H7.5C8.15 1.25 8.7125 1.6875 8.8 2.3125C8.95625 3.4375 9.25 4.5 9.6875 5.5C9.875 5.9375 9.8125 6.4375 9.5 6.8125L7.25 9.0625C9.125 12.75 12.25 15.875 15.9375 17.75L18.1875 15.5C18.5625 15.1875 19.0625 15.125 19.5 15.3125C20.5 15.75 21.5625 16.0438 22.6875 16.2C23.3125 16.2875 23.75 16.85 23.75 17.5V22.5Z" fill="#FDFDE1"/>
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Hero Right Block */}
              <div className="mx-auto inline-block max-w-[495px] overflow-hidden rounded-[25px] bg-colorButteryWhite p-[5px] lg:mx-0">
                <div className="h-[540px] w-full rounded-[20px] bg-gray-300 relative">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Hero Image
                  </div>
                </div>
              </div>

              {/* Hero Elements */}
              <svg
                className="absolute bottom-0 left-1/2 -z-10 hidden h-auto max-w-52 -translate-x-1/2 lg:inline-block xl:max-w-full"
                width="284"
                height="153"
                viewBox="0 0 284 153"
                fill="none"
              >
                <path d="M142 153C142 153 2 100 2 50C2 0 142 0 142 0C142 0 282 0 282 50C282 100 142 153 142 153Z" fill="#BFF747" opacity="0.2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
