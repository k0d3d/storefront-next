import Link from 'next/link';

interface FooterProps {
  companyName?: string;
  description?: string;
}

export default function Footer({
  companyName = 'Your Company',
  description = 'Creating beautiful digital experiences for the modern world.'
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-colorButteryWhite">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold font-syne mb-4">{companyName}</h3>
            <p className="text-base opacity-80 max-w-md mb-6">
              {description}
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-colorButteryWhite hover:bg-colorLightLime hover:border-black hover:text-black transition-all duration-300"
              >
                <svg width="19" height="16" viewBox="0 0 19 16" fill="currentColor">
                  <path d="M18 2C17.4 2.3 16.8 2.4 16.1 2.5C16.8 2.1 17.3 1.5 17.5 0.7C16.9 1.1 16.2 1.3 15.4 1.5C14.8 0.9 13.9 0.5 13 0.5C11.1 0.5 9.6 2 9.6 3.9C9.6 4.2 9.6 4.4 9.7 4.7C6.7 4.5 4.1 3.2 2.4 1.2C2.1 1.7 1.9 2.3 1.9 3C1.9 4.1 2.5 5.1 3.3 5.7C2.8 5.7 2.3 5.5 1.8 5.3V5.4C1.8 7 3 8.3 4.5 8.6C4.2 8.7 3.9 8.7 3.6 8.7C3.4 8.7 3.2 8.7 3 8.6C3.4 9.9 4.7 10.8 6.2 10.8C5 11.7 3.5 12.2 1.8 12.2C1.5 12.2 1.2 12.2 0.9 12.2C2.4 13.1 4.2 13.7 6.1 13.7C13 13.7 16.8 8.8 16.8 4.5V4C17.5 3.5 18.1 2.9 18.5 2.2L18 2Z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-colorButteryWhite hover:bg-colorLightLime hover:border-black hover:text-black transition-all duration-300"
              >
                <svg width="10" height="17" viewBox="0 0 10 17" fill="currentColor">
                  <path d="M6.5 17V9.3H9.2L9.6 6.3H6.5V4.4C6.5 3.5 6.7 2.9 8 2.9H9.7V0.2C9.4 0.2 8.4 0.1 7.3 0.1C5 0.1 3.4 1.5 3.4 4.1V6.3H0.7V9.3H3.4V17H6.5Z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-colorButteryWhite hover:bg-colorLightLime hover:border-black hover:text-black transition-all duration-300"
              >
                <svg width="17" height="18" viewBox="0 0 17 18" fill="currentColor">
                  <path d="M8.5 4.4C6.1 4.4 4.2 6.3 4.2 8.7C4.2 11.1 6.1 13 8.5 13C10.9 13 12.8 11.1 12.8 8.7C12.8 6.3 10.9 4.4 8.5 4.4ZM8.5 11.5C7 11.5 5.7 10.3 5.7 8.7C5.7 7.1 6.9 5.9 8.5 5.9C10.1 5.9 11.3 7.1 11.3 8.7C11.3 10.3 10 11.5 8.5 11.5Z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-colorButteryWhite hover:bg-colorLightLime hover:border-black hover:text-black transition-all duration-300"
              >
                <svg width="17" height="18" viewBox="0 0 17 18" fill="currentColor">
                  <path d="M3.8 17V5.7H0.3V17H3.8ZM2 4.2C3.3 4.2 4.2 3.2 4.2 2C4.2 0.8 3.3 0 2 0C0.7 0 0 0.8 0 2C0 3.2 0.7 4.2 2 4.2Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold font-syne mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 hover:text-colorLightLime transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 hover:text-colorLightLime transition-all duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="opacity-80 hover:opacity-100 hover:text-colorLightLime transition-all duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 hover:text-colorLightLime transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold font-syne mb-4">Contact</h4>
            <ul className="space-y-3 opacity-80">
              <li>
                <a href="mailto:hello@example.com" className="hover:text-colorLightLime transition-colors duration-300">
                  hello@example.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-colorLightLime transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li>123 Business Street<br />City, State 12345</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center opacity-80">
          <p>&copy; {currentYear} {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
