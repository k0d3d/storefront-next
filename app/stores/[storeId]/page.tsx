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

				{products.length === 0 ? (
					<div className="text-center py-12">
						<p className="text-gray-600 text-lg">
							No products available yet.
						</p>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{products.map((product) => (
							<ProductCard key={product.id} product={product} storeId={storeId} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
