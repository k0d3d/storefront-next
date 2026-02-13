import Link from 'next/link';

interface FooterMinimalProps {
  companyName?: string;
  email?: string;
}

export default function FooterMinimal({
  companyName = 'MerchPaddie',
  email = 'hello@merchpaddie.com'
}: FooterMinimalProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-500 text-sm">
          © {currentYear} {companyName} ·{' '}
          <Link href="/terms" className="hover:text-gray-400 transition-colors">
            Terms
          </Link>{' '}
          ·{' '}
          <Link href="/privacy" className="hover:text-gray-400 transition-colors">
            Privacy
          </Link>{' '}
          ·{' '}
          <a href={`mailto:${email}`} className="hover:text-gray-400 transition-colors">
            {email}
          </a>
        </div>
      </div>
    </footer>
  );
}
