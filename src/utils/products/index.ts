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
		description: `Tu Café is carefully crafted to deliver the ultimate Cuban style espresso 
									experience. Once ground and brewed, you will immediately notice the alluring 
									aroma, smooth flavor and natural sweetness of this distinctly bold and
									engaging roast.`,
	},
	{
		id: 2,
		disponible: true,
		imagen: whole_bean_2lbs_2pack,
		name: 'Whole Bean 2lbs- 2 Pack',
		price: '59.99',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
								It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
								in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
								Aldus PageMaker including versions of Lorem Ipsum.`,
	},
	{
		id: 3,
		disponible: true,
		imagen: ground_coffe_10oz,
		name: 'Ground Coffee 10 OZ – 12 PACK',
		price: '94.99',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
								It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
								in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
								Aldus PageMaker including versions of Lorem Ipsum.`,
	},
	{
		id: 4,
		disponible: false,
		imagen: ground_coffe_10oz,
		name: 'Ground Coffee 10 OZ – 6 PACK',
		price: '51.99',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
								It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
								in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
								Aldus PageMaker including versions of Lorem Ipsum.`,
	},
	{
		id: 5,
		disponible: true,
		imagen: ground_coffe_10oz,
		name: 'Ground Coffee 10 OZ – 4 PACK',
		price: '34.99',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
								It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
								in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
								Aldus PageMaker including versions of Lorem Ipsum.`,
	},
	{
		id: 5,
		disponible: true,
		name: 'Whole Bean-2 LB Bag',
		imagen: whole_ean_2lb_bag,
		price: '34.99',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
								It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
								in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
								Aldus PageMaker including versions of Lorem Ipsum.`,
	},
];
export default products;
