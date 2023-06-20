export interface ProductDto {
	id: number;
	disponible: boolean;
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
		disponible: true,
		name: 'Item1',
		price: '150.99',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
								It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
								in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
								Aldus PageMaker including versions of Lorem Ipsum.`,
	},
	{
		id: 2,
		disponible: false,
		name: 'Item2',
		price: '200.50',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
								It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
								in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
								Aldus PageMaker including versions of Lorem Ipsum.`,
	},
	{
		id: 3,
		disponible: true,
		name: 'Item3',
		price: '50.99',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
								It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
								in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
								Aldus PageMaker including versions of Lorem Ipsum.`,
	},
	{
		id: 4,
		disponible: false,
		name: 'Item4',
		price: '300.50',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
								It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
								in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
								Aldus PageMaker including versions of Lorem Ipsum.`,
	},
	{
		id: 5,
		disponible: true,
		name: 'Item5',
		price: '80.99',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
								It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
								in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
								Aldus PageMaker including versions of Lorem Ipsum.`,
	},
];
export default products;
