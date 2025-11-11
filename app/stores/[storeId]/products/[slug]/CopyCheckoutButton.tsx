'use client';

import { useState } from 'react';

interface CopyCheckoutButtonProps {
	command: string;
}

export default function CopyCheckoutButton({ command }: CopyCheckoutButtonProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(command);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	return (
		<button
			onClick={handleCopy}
			className="text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors"
			title="Copy command"
		>
			{copied ? '✅ Copied!' : '📋 Copy'}
		</button>
	);
}
