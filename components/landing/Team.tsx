import Link from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  social?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

interface TeamProps {
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    name: 'Andrew Mark',
    role: 'CEO & Founder',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Jack Taylor',
    role: 'Senior Designer',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Martine Joy',
    role: 'Project Manager',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Adam Straw',
    role: 'Web Developer',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
];

const SocialIcon = ({ type }: { type: 'twitter' | 'facebook' | 'instagram' | 'linkedin' }) => {
  const icons = {
    twitter: (
      <svg width="19" height="16" viewBox="0 0 19 16" fill="currentColor">
        <path d="M18 2C17.4 2.3 16.8 2.4 16.1 2.5C16.8 2.1 17.3 1.5 17.5 0.7C16.9 1.1 16.2 1.3 15.4 1.5C14.8 0.9 13.9 0.5 13 0.5C11.1 0.5 9.6 2 9.6 3.9C9.6 4.2 9.6 4.4 9.7 4.7C6.7 4.5 4.1 3.2 2.4 1.2C2.1 1.7 1.9 2.3 1.9 3C1.9 4.1 2.5 5.1 3.3 5.7C2.8 5.7 2.3 5.5 1.8 5.3C1.8 5.3 1.8 5.3 1.8 5.4C1.8 7 3 8.3 4.5 8.6C4.2 8.7 3.9 8.7 3.6 8.7C3.4 8.7 3.2 8.7 3 8.6C3.4 9.9 4.7 10.8 6.2 10.8C5 11.7 3.5 12.2 1.8 12.2C1.5 12.2 1.2 12.2 0.9 12.2C2.4 13.1 4.2 13.7 6.1 13.7C13 13.7 16.8 8.8 16.8 4.5C16.8 4.3 16.8 4.2 16.8 4C17.5 3.5 18.1 2.9 18.5 2.2L18 2Z"/>
      </svg>
    ),
    facebook: (
      <svg width="10" height="17" viewBox="0 0 10 17" fill="currentColor">
        <path d="M6.5 17V9.3H9.2L9.6 6.3H6.5V4.4C6.5 3.5 6.7 2.9 8 2.9H9.7V0.2C9.4 0.2 8.4 0.1 7.3 0.1C5 0.1 3.4 1.5 3.4 4.1V6.3H0.7V9.3H3.4V17H6.5Z"/>
      </svg>
    ),
    instagram: (
      <svg width="17" height="18" viewBox="0 0 17 18" fill="currentColor">
        <path d="M8.5 4.4C6.1 4.4 4.2 6.3 4.2 8.7C4.2 11.1 6.1 13 8.5 13C10.9 13 12.8 11.1 12.8 8.7C12.8 6.3 10.9 4.4 8.5 4.4ZM8.5 11.5C7 11.5 5.7 10.3 5.7 8.7C5.7 7.1 6.9 5.9 8.5 5.9C10.1 5.9 11.3 7.1 11.3 8.7C11.3 10.3 10 11.5 8.5 11.5ZM13.9 4.2C13.9 3.6 13.4 3.1 12.8 3.1C12.2 3.1 11.7 3.6 11.7 4.2C11.7 4.8 12.2 5.3 12.8 5.3C13.4 5.3 13.9 4.8 13.9 4.2ZM16.8 5.3C16.7 3.9 16.4 2.7 15.4 1.7C14.4 0.7 13.2 0.4 11.8 0.3C10.4 0.2 6.6 0.2 5.2 0.3C3.8 0.4 2.7 0.7 1.6 1.7C0.6 2.7 0.3 3.9 0.2 5.3C0.1 6.7 0.1 10.6 0.2 12C0.3 13.4 0.6 14.6 1.6 15.6C2.7 16.6 3.8 16.9 5.2 17C6.6 17.1 10.4 17.1 11.8 17C13.2 16.9 14.4 16.6 15.4 15.6C16.4 14.6 16.7 13.4 16.8 12C16.9 10.6 16.9 6.7 16.8 5.3ZM15.1 13.5C14.8 14.3 14.2 14.9 13.4 15.2C12.3 15.6 9.7 15.5 8.5 15.5C7.3 15.5 4.7 15.6 3.6 15.2C2.8 14.9 2.2 14.3 1.9 13.5C1.5 12.4 1.6 9.8 1.6 8.6C1.6 7.4 1.5 4.8 1.9 3.7C2.2 2.9 2.8 2.3 3.6 2C4.7 1.6 7.3 1.7 8.5 1.7C9.7 1.7 12.3 1.6 13.4 2C14.2 2.3 14.8 2.9 15.1 3.7C15.5 4.8 15.4 7.4 15.4 8.6C15.4 9.8 15.5 12.4 15.1 13.5Z"/>
      </svg>
    ),
    linkedin: (
      <svg width="17" height="18" viewBox="0 0 17 18" fill="currentColor">
        <path d="M3.8 17V5.7H0.3V17H3.8ZM2 4.2C3.3 4.2 4.2 3.2 4.2 2C4.2 0.8 3.3 0 2 0C0.7 0 0 0.8 0 2C0 3.2 0.7 4.2 2 4.2ZM16.9 17H17V10.8C17 7.7 16.3 5.4 12.7 5.4C11 5.4 9.9 6.3 9.4 7.2H9.4V5.7H6V17H9.5V11.4C9.5 9.9 9.8 8.5 11.7 8.5C13.6 8.5 13.6 10.2 13.6 11.5V17H16.9Z"/>
      </svg>
    ),
  };

  return icons[type];
};

export default function Team({ members = defaultMembers }: TeamProps) {
  return (
    <section className="section-team">
      <div className="section-space">
        <div className="container mx-auto px-4">
          {/* Section Block */}
          <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne">
              We have a team of creative{' '}
              <span className="inline-flex items-center gap-2">
                people
                <svg className="relative inline-block h-auto w-8 md:w-10 lg:w-[57px]" width="74" height="70" viewBox="0 0 74 70" fill="none">
                  <path d="M37 0L44.5 25.5L70 33L44.5 40.5L37 66L29.5 40.5L4 33L29.5 25.5L37 0Z" fill="#BFF747"/>
                </svg>
              </span>
            </h2>
          </div>

          {/* Team List */}
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {members.map((member, index) => (
              <li key={index} className="group/team-item">
                <div className="relative overflow-hidden rounded-[20px] border-[5px] border-black bg-black">
                  <div className="h-[300px] w-full bg-gray-300 relative overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover transition-all duration-300 ease-out group-hover/team-item:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-6xl font-bold transition-all duration-300 ease-out group-hover/team-item:scale-110">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Social Links */}
                  {member.social && (
                    <div className="absolute top-full left-0 right-0 flex w-full justify-center gap-3 transition-all duration-300 ease-out group-hover/team-item:-translate-y-14">
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime"
                        >
                          <span className="text-colorButteryWhite group-hover/link:text-black">
                            <SocialIcon type="twitter" />
                          </span>
                        </a>
                      )}
                      {member.social.facebook && (
                        <a
                          href={member.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime"
                        >
                          <span className="text-colorButteryWhite group-hover/link:text-black">
                            <SocialIcon type="facebook" />
                          </span>
                        </a>
                      )}
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime"
                        >
                          <span className="text-colorButteryWhite group-hover/link:text-black">
                            <SocialIcon type="instagram" />
                          </span>
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime"
                        >
                          <span className="text-colorButteryWhite group-hover/link:text-black">
                            <SocialIcon type="linkedin" />
                          </span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-5 text-center">
                  <Link href="#" className="text-2xl md:text-3xl font-bold font-syne block mb-2 hover:text-colorLightLime transition-colors leading-tight">
                    {member.name}
                  </Link>
                  <span className="text-lg md:text-[21px]">{member.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
