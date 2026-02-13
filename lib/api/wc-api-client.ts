/**
 * WooCommerce API client for Next.js
 * Calls the wc-api Node.js service
 *
 * Note: WC_API_URL is server-side only (no NEXT_PUBLIC_ prefix)
 * All data fetching happens in Server Components, keeping API URL secure
 */

const WC_API_URL = process.env.WC_API_URL || "http://localhost:5000";

export interface Product {
	id: number;
	name: string;
	slug: string;
	permalink: string;
	price: string;
	regular_price: string;
	sale_price: string;
	on_sale: boolean;
	description: string;
	short_description: string;
	images: ProductImage[];
	categories: ProductCategory[];
	tags: ProductTag[];
	stock_status: "instock" | "outofstock" | "onbackorder";
	stock_quantity: number | null;
	sku: string;
}

export interface ProductImage {
	id: number;
	src: string;
	name: string;
	alt: string;
	thumbnail?: string;
	srcset?: string;
	sizes?: string;
}

export interface ProductCategory {
	id: number;
	name: string;
	slug: string;
}

export interface ProductTag {
	id: number;
	name: string;
	slug: string;
}

export interface Store {
	id: string;
	subdirectory: string;
	email: string;
	status: string;
	createdAt: string;
}

/**
 * Fetch product by slug from wc-api
 */
export async function getProductBySlug(
	storeId: string,
	slug: string,
): Promise<Product | null> {
	try {
		console.log("[wc-api-client] Fetching product", { storeId, slug });

		const response = await fetch(
			`${WC_API_URL}/public/stores/${storeId}/products/slug/${slug}`,
			{ cache: 'no-store' } // Always fetch fresh data
		);

		if (!response.ok) {
			if (response.status === 404) {
				console.log("[wc-api-client] Product not found:", slug);
				return null;
			}
			throw new Error(`Failed to fetch product: ${response.statusText}`);
		}

		const product = await response.json();
		// console.log("[wc-api-client] Product fetched successfully:", product.id);
		// console.log(product)
		return product;
	} catch (error) {
		console.error("[wc-api-client] Error fetching product by slug:", error);
		throw error;
	}
}

/**
 * Fetch product by ID from wc-api
 */
export async function getProductById(
	storeId: string,
	productId: number,
): Promise<Product | null> {
	try {
		console.log("[wc-api-client] Fetching product by ID", {
			storeId,
			productId,
		});

		const response = await fetch(
			`${WC_API_URL}/public/stores/${storeId}/products/${productId}`,
			{ cache: 'no-store' }
		);

		if (!response.ok) {
			if (response.status === 404) {
				console.log("[wc-api-client] Product not found:", productId);
				return null;
			}
			throw new Error(`Failed to fetch product: ${response.statusText}`);
		}

		const product = await response.json();
		console.log("[wc-api-client] Product fetched successfully:", product.id);
		return product;
	} catch (error) {
		console.error("[wc-api-client] Error fetching product by ID:", error);
		throw error;
	}
}

/**
 * Fetch list of all active stores from wc-api
 */
export async function getStores(): Promise<Store[]> {
	try {
		console.log("[wc-api-client] Fetching stores list");

		const response = await fetch(`${WC_API_URL}/public/stores`, {
			cache: 'no-store'
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch stores: ${response.statusText}`);
		}

		const data = await response.json();
		console.log(
			"[wc-api-client] Stores fetched successfully:",
			data.stores.length,
		);
		return data.stores;
	} catch (error) {
		console.error("[wc-api-client] Error fetching stores:", error);
		throw error;
	}
}

/**
 * Fetch products list for a specific store from wc-api
 */
export async function getProducts(
	storeId: string,
	params?: {
		page?: number;
		per_page?: number;
		search?: string;
		category?: string;
	},
): Promise<Product[]> {
	try {
		console.log("[wc-api-client] Fetching products list", { storeId, params });

		const url = new URL(`${WC_API_URL}/public/stores/${storeId}/products`);

		if (params) {
			if (params.page) url.searchParams.append("page", params.page.toString());
			if (params.per_page)
				url.searchParams.append("per_page", params.per_page.toString());
			if (params.search) url.searchParams.append("search", params.search);
			if (params.category) url.searchParams.append("category", params.category);
		}

		const response = await fetch(url.toString(), {
			cache: 'no-store'
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch products: ${response.statusText}`);
		}

		const products = await response.json();
		console.log(
			"[wc-api-client] Products fetched successfully:",
			products.length,
		);
		return products;
	} catch (error) {
		console.error("[wc-api-client] Error fetching products list:", error);
		throw error;
	}
}
