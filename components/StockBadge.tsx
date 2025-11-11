interface StockBadgeProps {
	status: 'instock' | 'outofstock' | 'onbackorder';
	size?: 'small' | 'medium';
	showIcon?: boolean;
}

export default function StockBadge({ status, size = 'small', showIcon = false }: StockBadgeProps) {
	const sizeClasses = size === 'small' ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1';
	const iconClass = showIcon ? 'inline-flex items-center gap-2' : '';

	if (status === 'instock') {
		return (
			<span className={`${iconClass} ${sizeClasses} bg-green-100 text-green-800 rounded-full font-medium`}>
				{showIcon && '✓'} In Stock
			</span>
		);
	}

	if (status === 'onbackorder') {
		return (
			<span className={`${iconClass} ${sizeClasses} bg-yellow-100 text-yellow-800 rounded-full font-medium`}>
				{showIcon && '⌛'} On Backorder
			</span>
		);
	}

	return (
		<span className={`${iconClass} ${sizeClasses} bg-red-100 text-red-800 rounded-full font-medium`}>
			{showIcon && '✗'} Out of Stock
		</span>
	);
}
