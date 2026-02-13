interface PriceDisplayProps {
	price: string;
	regularPrice: string;
	salePrice: string;
	onSale: boolean;
	size?: 'small' | 'medium' | 'large';
}

export default function PriceDisplay({
	price,
	regularPrice,
	salePrice,
	onSale,
	size = 'medium',
}: PriceDisplayProps) {
	const sizeClasses = {
		small: {
			sale: 'text-xl',
			regular: 'text-sm',
			normal: 'text-xl',
		},
		medium: {
			sale: 'text-2xl',
			regular: 'text-lg',
			normal: 'text-2xl',
		},
		large: {
			sale: 'text-3xl',
			regular: 'text-xl',
			normal: 'text-3xl',
		},
	};

	if (onSale && salePrice) {
		return (
			<div className="flex items-center gap-2">
				<span className={`${sizeClasses[size].sale} font-bold text-red-600`}>
					${salePrice}
				</span>
				<span className={`${sizeClasses[size].regular} text-gray-500 line-through`}>
					${regularPrice}
				</span>
			</div>
		);
	}

	return (
		<span className={`${sizeClasses[size].normal} font-bold text-foreground`}>
			${price}
		</span>
	);
}
