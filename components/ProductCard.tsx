import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/api/wc-api-client';
import StockBadge from './StockBadge';
import PriceDisplay from './PriceDisplay';

interface ProductCardProps {
	product: Product;
	storeId: string;
}

export default function ProductCard({ product, storeId }: ProductCardProps) {
	return (
		<Link
			href={`/stores/${storeId}/products/${product.slug}`}
			className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden"
		>
			{product.images && product.images.length > 0 && (
				<div className="aspect-square overflow-hidden relative">
					<Image
						src={product.images[0].thumbnail}
						alt={product.images[0].alt || product.name}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			)}

			<div className="p-4">
				<h2 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
					{product.name}
				</h2>

				<div className="mb-3">
					<PriceDisplay
						price={product.price}
						regularPrice={product.regular_price}
						salePrice={product.sale_price}
						onSale={product.on_sale}
						size="small"
					/>
				</div>

				<StockBadge status={product.stock_status} />
			</div>
		</Link>
	);
}
