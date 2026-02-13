import Link from 'next/link';

export default function ProductNotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background">
			<div className="text-center max-w-md px-4">
				<div className="text-6xl mb-4">🔍</div>
				<h1 className="text-3xl font-bold text-foreground mb-4">
					Product Not Found
				</h1>
				<p className="text-gray-600 mb-6">
					Sorry, we couldn't find the product you're looking for.
				</p>
				<Link
					href="/"
					className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
				>
					← Back to Home
				</Link>
			</div>
		</div>
	);
}
