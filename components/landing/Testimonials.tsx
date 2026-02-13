interface Testimonial {
  name: string;
  title: string;
  comment: string;
  rating: number;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    name: 'William Jack',
    title: 'Founder@XYZ',
    comment: 'Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient.',
    rating: 5,
  },
  {
    name: 'Smith Align',
    title: 'Businessman',
    comment: 'Working with this team was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they designed perfectly captures our essence & has become instantly recognizable. We couldn&apos;t be happier with the results!',
    rating: 5,
  },
  {
    name: 'Milano Joe',
    title: 'Creative Director',
    comment: 'I can&apos;t say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought them to life in ways we couldn&apos;t have imagined. Their innovative approach and dedication to our project.',
    rating: 5,
  },
  {
    name: 'Danial Mark',
    title: 'Marketing Director',
    comment: 'Our partnership with this team transformed our brand from ordinary to extraordinary. Their branding expertise and meticulous design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition.',
    rating: 5,
  },
];

const StarIcon = () => (
  <svg width="37" height="35" viewBox="0 0 37 35" fill="currentColor">
    <path d="M18.5 0L22.8 13.1H36.5L25.4 21.2L29.7 34.3L18.5 26.2L7.3 34.3L11.6 21.2L0.5 13.1H14.2L18.5 0Z" />
  </svg>
);

export default function Testimonials({ testimonials = defaultTestimonials }: TestimonialsProps) {
  return (
    <section className="section-testimonial">
      <div className="section-space">
        <div className="container mx-auto px-4">
          {/* Section Block */}
          <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne">
              Clients are always satisfied with{' '}
              <span className="inline-flex items-center gap-2">
                us
                <svg className="relative inline-block h-auto w-8 md:w-10 lg:w-[57px]" width="74" height="70" viewBox="0 0 74 70" fill="none">
                  <path d="M37 0L44.5 25.5L70 33L44.5 40.5L37 66L29.5 40.5L4 33L29.5 25.5L37 0Z" fill="#BFF747"/>
                </svg>
              </span>
            </h2>
          </div>

          {/* Testimonial List */}
          <ul className="grid grid-cols-1 gap-x-6 gap-y-[30px] md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <li key={index}>
                <div className="flex h-full flex-col rounded-[20px] border-2 border-black px-[30px] py-6 transition-all duration-300 hover:shadow-[5px_5px_0_0] hover:shadow-black bg-white hover:-translate-y-1">
                  <div className="mb-8 flex gap-x-2 text-black">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>

                  <h4 className="mb-5 text-xl md:text-2xl font-bold font-syne leading-tight">
                    {testimonial.comment.split('.')[0]}!
                  </h4>

                  <p className="mb-[30px] text-base md:text-lg leading-relaxed">
                    {testimonial.comment}
                  </p>

                  <div className="mt-auto flex items-center gap-3">
                    <div className="h-[70px] w-[70px] overflow-hidden rounded-full border-2 border-black bg-gray-300">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-gray-500 text-2xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 font-syne text-lg font-bold leading-tight -tracking-[0.5px] lg:text-[21px]">
                      {testimonial.name}
                      <br />
                      <span className="font-normal text-base leading-tight block mt-1">{testimonial.title}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
