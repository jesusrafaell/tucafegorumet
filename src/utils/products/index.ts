export interface ProductDto {
	id: number;
	name: string;
	price: string;
}

export interface ProductCartDto extends ProductDto {
	amount: number;
}

const products: ProductDto[] = [
	{
		id: 1,
		name: 'Item1',
		price: '150',
	},
	{
		id: 2,
		name: 'Item2',
		price: '200',
	},
	{
		id: 3,
		name: 'Item3',
		price: '50',
	},
	{
		id: 4,
		name: 'Item4',
		price: '300',
	},
	{
		id: 5,
		name: 'Item5',
		price: '80',
	},
];
export default products;
