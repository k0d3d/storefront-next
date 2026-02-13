import Link from 'next/link';

interface BackButtonProps {
	href: string;
	label?: string;
}

export default function BackButton({ href, label = 'Back to Home' }: BackButtonProps) {
	return (
		<Link href={href} className="text-blue-600 hover:underline text-sm">
			← {label}
		</Link>
	);
}
