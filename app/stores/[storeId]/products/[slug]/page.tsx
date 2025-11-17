import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductBySlug } from '@/lib/api/wc-api-client';
import CopyCheckoutButton from './CopyCheckoutButton';
import PriceDisplay from '@/components/PriceDisplay';
import StockBadge from '@/components/StockBadge';
import BackButton from '@/components/BackButton';

interface PageProps {
	params: Promise<{
		storeId: string;
		slug: string;
	}>;
}

/**
 * Strip HTML tags from a string
 */
function stripHtml(html: string): string {
	return html
		.replace(/<[^>]*>/g, '') // Remove HTML tags
		.replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
		.replace(/&amp;/g, '&') // Replace &amp; with &
		.replace(/&lt;/g, '<') // Replace &lt; with <
		.replace(/&gt;/g, '>') // Replace &gt; with >
		.replace(/&quot;/g, '"') // Replace &quot; with "
		.replace(/&#39;/g, "'") // Replace &#39; with '
		.trim();
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { storeId, slug } = await params;

	try {
		const product = await getProductBySlug(storeId, slug);

		if (!product) {
			return {
				title: 'Product Not Found',
			};
		}

		// Clean description from HTML
		const description = product.short_description
			? stripHtml(product.short_description).substring(0, 160)
			: product.description
				? stripHtml(product.description).substring(0, 160)
				: `Buy ${product.name} with crypto on Telegram via MerchPaddie`;

		// Get primary image - use thumbnail
		const primaryImage = product.images?.[0];
		const imageUrl = primaryImage?.thumbnail || '';
		const imageAlt = primaryImage?.alt || product.name;

		// Build product URL
		const productUrl = `https://merchpaddie.store/stores/${storeId}/products/${slug}`;

		// Format price for display
		const priceValue = parseFloat(product.price || product.regular_price || '0');
		const priceText = priceValue > 0 ? `$${priceValue.toFixed(2)}` : '';

		return {
			title: `${product.name} ${priceText ? `- ${priceText}` : ''} | MerchPaddie`,
			description,

			// Canonical URL
			alternates: {
				canonical: productUrl,
			},

			// Open Graph for Facebook, LinkedIn, etc.
			openGraph: {
				type: 'website',
				url: productUrl,
				title: product.name,
				description,
				siteName: 'MerchPaddie',
				images: product.images.map(img => ({
					url: img.thumbnail,
					alt: img.alt || product.name,
					width: 800,
					height: 800,
				})),
			},

			// Twitter Card
			twitter: {
				card: 'summary_large_image',
				title: product.name,
				description,
				images: imageUrl ? [imageUrl] : [],
			},

			// Additional meta tags
			keywords: [
				product.name,
				'crypto payment',
				'buy with crypto',
				'Telegram shopping',
				'SOL',
				'USDC',
				'TON',
				...(product.tags?.map(tag => tag.name) || []),
				...(product.categories?.map(cat => cat.name) || []),
			],

			// Robots
			robots: {
				index: product.stock_status === 'instock',
				follow: true,
			},
		};
	} catch {
		return {
			title: 'Product Not Found',
		};
	}
}

export default async function ProductDetailPage({ params }: PageProps) {
	const { storeId, slug } = await params;

	const product = await getProductBySlug(storeId, slug);

	if (!product) {
		notFound();
	}

	const telegramLink = `https://t.me/merchpaddie_bot?start=checkout_${storeId}_${product.id}`;
	const checkoutCommand = `/checkout ${storeId}:${product.id}`;

	// JSON-LD Structured Data for Google Rich Results
	const productUrl = `https://merchpaddie.store/stores/${storeId}/products/${slug}`;
	const priceValue = parseFloat(product.price || product.regular_price || '0');
	const primaryImage = product.images?.[0]?.thumbnail;

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: product.name,
		description: product.short_description
			? stripHtml(product.short_description)
			: product.description
				? stripHtml(product.description)
				: `Buy ${product.name} with crypto`,
		image: product.images?.map(img => img.thumbnail) || [],
		sku: product.sku || `product-${product.id}`,
		offers: {
			'@type': 'Offer',
			url: productUrl,
			priceCurrency: 'USD',
			price: priceValue.toFixed(2),
			availability:
				product.stock_status === 'instock'
					? 'https://schema.org/InStock'
					: product.stock_status === 'outofstock'
						? 'https://schema.org/OutOfStock'
						: 'https://schema.org/PreOrder',
			seller: {
				'@type': 'Organization',
				name: 'MerchPaddie',
			},
		},
		brand: {
			'@type': 'Brand',
			name: 'MerchPaddie',
		},
	};

	return (
		<div className="min-h-screen bg-background">
			{/* JSON-LD Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<div className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<BackButton href={`/stores/${storeId}`} label="Back to Store" />
				</div>
				{/* Product Image */}
				{product.images && product.images.length > 0 && (
					<div className="mb-8 flex justify-center">
						<div className="relative w-full max-w-2xl aspect-square rounded-lg overflow-hidden shadow-lg">
							<Image
								src={product.images[0].thumbnail}
								alt={product.images[0].alt || product.name}
								fill
								className="object-cover"
								priority
								sizes="(max-width: 768px) 100vw, 672px"
							/>
						</div>
					</div>
				)}

				{/* Product Info */}
				<div className="max-w-2xl mx-auto">
					<h1 className="text-4xl font-bold text-foreground mb-4">
						{product.name}
					</h1>

					{/* Price */}
					<div className="mb-6">
						<PriceDisplay
							price={product.price}
							regularPrice={product.regular_price}
							salePrice={product.sale_price}
							onSale={product.on_sale}
							size="large"
						/>
					</div>

					{/* Stock Status */}
					<div className="mb-6">
						<StockBadge status={product.stock_status} size="medium" showIcon />
					</div>

					{/* Buy with Crypto Button */}
					{product.stock_status === 'instock' && (
						<div className="mb-8">
							{/* Main CTA Button */}
							<a
								href={telegramLink}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
							>
								<span className="text-2xl">💳</span>
								<span>Buy with Crypto on Telegram</span>
							</a>

							{/* Help Section */}
							<div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
								<p className="text-sm font-semibold text-blue-900 mb-2">
									💡 Two ways to checkout:
								</p>

								<div className="space-y-2 text-sm text-blue-800">
									<div>
										<strong>🚀 Quick:</strong> Click the button above (instant!)
									</div>
									<div>
										<strong>📱 Manual:</strong> Open{' '}
										<code className="bg-blue-100 px-2 py-1 rounded">
											@merchpaddie_bot
										</code>{' '}
										on Telegram and send:
										<div className="mt-1 flex items-center gap-2 flex-wrap">
											<code className="bg-blue-100 px-3 py-2 rounded font-mono text-xs">
												{checkoutCommand}
											</code>
											<CopyCheckoutButton command={checkoutCommand} />
										</div>
									</div>
								</div>

								<p className="text-xs text-blue-700 mt-3">
									✅ Accepts: SOL, USDC, TON via MerchPaddie
								</p>
							</div>
						</div>
					)}

					{/* Description */}
					{product.description && (
						<div className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Description</h2>
							<div
								className="prose prose-sm max-w-none text-gray-700"
								dangerouslySetInnerHTML={{ __html: product.description }}
							/>
						</div>
					)}

					{/* SKU */}
					{product.sku && (
						<p className="text-sm text-gray-500">SKU: {product.sku}</p>
					)}
				</div>
			</div>
		</div>
	);
}
