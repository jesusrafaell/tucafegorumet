import { CartContext } from '@/context/CartContext';
import products from '@/utils/products';
import { FC, useContext } from 'react';

interface Props {
	name: string;
}
const Product: FC<Props> = ({ name }) => {
	console.log(name);
	const { addToCart } = useContext(CartContext);
	const product = products.find((item) => item.name === name);
	if (!product) {
		return <section>Loading...</section>;
	}
	return <div>{product.name}</div>;
};

export default Product;
