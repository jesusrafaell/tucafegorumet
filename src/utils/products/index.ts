import { StaticImageData } from 'next/image';

// products images
import whole_bean_8lbs from '@/images/products/whole_bean_8lbs_4pack.png';
import whole_bean_2lbs_2pack from '@/images/products/whole_bean_2lbs_2pack.png';
import ground_coffe_10oz from '@/images/products/ground_coffe_10oz_12pack.png';
import whole_ean_2lb_bag from '@/images/products/whole_ean_2lb_bag.png';

export interface ProductDto {
	id: number;
	disponible: boolean;
	imagen: StaticImageData;
	name: string;
	price: string;
	description: string;
	li: string[];
	rank: number;
}

export interface ProductCartDto extends ProductDto {
	amount: number;
}

const products: ProductDto[] = [
	{
		id: 1,
		imagen: whole_bean_8lbs,
		disponible: true,
		name: 'Whole Bean 8lbs – 4 Pack',
		price: '144.99',
		description: `Tu Café is carefully crafted to deliver the ultimate Cuban style espresso experience. It is a premium coffee, that ground and brewed, you will immediately notice the alluring aroma, smooth flavor and natural sweetness of this distinctly bold and engaging roast.`,
		li: [
			'A full-bodied, smooth and sophisticated gourmet whole bean blend that is roasted to perfection',
			'Perfect for grinding and brewing into a gourmet espresso for the ultimate Cuban-style coffee experience',
			'Certified Kosher',
			'4 Pack',
		],
		rank: 3.95,
	},
	{
		id: 2,
		disponible: true,
		imagen: whole_bean_2lbs_2pack,
		name: 'Whole Bean 2lbs- 2 Pack',
		price: '59.99',
		description: `Tu Café is carefully crafted to deliver the ultimate Cuban style espresso experience. It is a premium coffee, that  ground and brewed, you will immediately notice the alluring aroma, smooth flavor and natural sweetness of this distinctly bold and engaging roast.`,
		li: [
			'A full-bodied, smooth and sophisticated gourmet whole bean blend that is roasted to perfection',
			'Perfect for grinding and brewing into a gourmet espresso for the ultimate Cuban-style coffee experience',
			'Certified Kosher',
			'2 Pack',
		],
		rank: 4.84,
	},
	{
		id: 3,
		disponible: true,
		imagen: ground_coffe_10oz,
		name: 'Ground Coffee 10 OZ – 12 PACK',
		price: '94.99',
		description: `Tu Café is carefully crafted to deliver the ultimate Cuban-Style premium espresso experience. This full-bodied gourmet blend is finely ground and ready to brew. You will immediately notice the alluring aroma, smooth flavor and natural sweetness of this distinctly bold and engaging roast.`,
		li: [
			'A full-bodied, smooth and sophisticated gourmet coffee, finely ground and read to brew',
			'Perfect for brewing with all espresso machines',
			'Certified Kosher',
		],
		rank: 4.02,
	},
	{
		id: 4,
		disponible: true,
		imagen: ground_coffe_10oz,
		name: 'Ground Coffee 10 OZ – 6 PACK',
		price: '51.99',
		description: `Tu Café is carefully crafted to deliver the ultimate Cuban-Style premium espresso experience. This full-bodied gourmet blend is finely ground and ready to brew. You will immediately notice the alluring aroma, smooth flavor and natural sweetness of this distinctly bold and engaging roast.`,
		li: [
			'	A full-bodied, smooth and sophisticated gourmet coffee, finely ground and read to brew',
			'	Perfect for brewing with all espresso machines',
			'	Certified Kosher',
		],
		rank: 4.82,
	},
	{
		id: 5,
		disponible: true,
		imagen: ground_coffe_10oz,
		name: 'Ground Coffee 10 OZ – 4 PACK',
		price: '34.99',
		description: `Tu Café is carefully crafted to deliver the ultimate Cuban-Style premium espresso experience. This full-bodied gourmet blend is finely ground and ready to brew. You will immediately notice the alluring aroma, smooth flavor and natural sweetness of this distinctly bold and engaging roast.`,
		li: [
			'A full-bodied, smooth and sophisticated gourmet coffee, finely ground and read to brew',
			'Perfect for brewing with all espresso machines',
			'Certified Kosher',
		],
		rank: 3.92,
	},
	{
		id: 6,
		disponible: true,
		name: 'Whole Bean-2 LB Bag',
		imagen: whole_ean_2lb_bag,
		price: '34.99',
		description: `Tu Café is carefully crafted to deliver the ultimate Cuban style espresso experience. Our Coffe is a coffe premium, that once ground and brewed, you will immediately notice the alluring aroma, smooth flavor and natural sweetness of this distinctly bold and engaging roast.`,
		li: [
			'A full-bodied, smooth and sophisticated gourmet whole bean blend that is roasted to perfection',
			'Perfect for grinding and brewing into a gourmet espresso for the ultimate Cuban-style coffee experience',
			'Certified Kosher',
		],
		rank: 4.92,
	},
];
export default products;
