import { Metadata } from 'next';
import { getProducts } from '@/lib/api/wc-api-client';
import ProductCard from '@/components/ProductCard';
import BackButton from '@/components/BackButton';

interface PageProps {
	params: Promise<{
		storeId: string;
	}>;
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { storeId } = await params;

	return {
		title: `Store ${storeId} - MerchPaddie`,
		description: 'Browse products and buy with crypto',
	};
}

export default async function StorePage({ params }: PageProps) {
	const { storeId } = await params;

	const products = await getProducts(storeId, { per_page: 20 });

	// Show coming soon page if store has no products
	if (products.length === 0) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4">
				<main className="text-center max-w-2xl w-full">
					<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 shadow-2xl">
						<div className="text-6xl mb-4">🏪</div>
						<h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
							Coming Soon
						</h1>
						<p className="text-2xl text-white/90 mb-2 font-light">
							This store is being set up
						</p>
						<p className="text-lg text-white/70 mb-8">
							Check back soon for amazing products!
						</p>

						{/* Store Info */}
						<div className="bg-white/5 rounded-lg p-6 mb-8">
							<p className="text-sm text-white/60 mb-2">Store ID</p>
							<p className="text-xl font-mono text-white/90">{storeId}</p>
						</div>

						{/* CTA Button */}
						<a
							href="https://mediapaddie.store"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-700 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
						>
							<span className="text-2xl">🛍</span>
							<span>Browse Other Stores</span>
						</a>

						{/* Features */}
						<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
							<div className="bg-white/5 rounded-lg p-4">
								<div className="text-3xl mb-2">⚡</div>
								<div className="font-semibold">Crypto Payments</div>
								<div className="text-sm text-white/70">SOL, USDC, TON</div>
							</div>
							<div className="bg-white/5 rounded-lg p-4">
								<div className="text-3xl mb-2">💬</div>
								<div className="font-semibold">Buy on Telegram</div>
								<div className="text-sm text-white/70">Instant checkout</div>
							</div>
							<div className="bg-white/5 rounded-lg p-4">
								<div className="text-3xl mb-2">🔐</div>
								<div className="font-semibold">Secure</div>
								<div className="text-sm text-white/70">Safe & encrypted</div>
							</div>
						</div>
					</div>

					{/* Footer */}
					<div className="mt-8 text-white/60 text-sm">
						<p>Powered by MerchPaddie</p>
					</div>
				</main>
			</div>
		);
	}

	// Show product grid if store has products
	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<BackButton href="/" />
				</div>

				<h1 className="text-4xl font-bold text-foreground mb-2">
					Store: {storeId}
				</h1>
				<p className="text-gray-600 mb-8">Browse our products and buy with crypto</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} storeId={storeId} />
					))}
				</div>
			</div>
		</div>
	);
}
