import { ProductCartDto } from '@/utils/products';
import React, { FC, ReactNode, createContext, useState } from 'react';

interface CartContextValue {
	cart: ProductCartDto[];
	setCart: React.Dispatch<React.SetStateAction<any[]>>;
	addToCart: (product: ProductCartDto) => void;
	removeFromCart: (id: number) => void;
}

export const CartContext = React.createContext<CartContextValue>({
	cart: [],
	setCart: () => {},
	addToCart: () => {},
	removeFromCart: () => {},
});

interface Props {
	children: ReactNode;
}

const CartProvider: FC<Props> = ({ children }) => {
	const [cart, setCart] = useState<ProductCartDto[]>([]);

	const addToCart = (product: ProductCartDto) => {
		const newItem = { ...product, amount: 1 };
		const cartItem = cart.find((item) => {
			return item.id === product.id;
		});
		if (cartItem) {
			const newCart: ProductCartDto[] = [...cart].map((item) => {
				if (item.id === product.id) {
					return { ...item, amount: cartItem.amount + 1 };
				} else return item;
			});
			setCart(newCart);
		} else {
			setCart([...cart, newItem]);
		}
	};

	const removeFromCart = (id: number) => {
		const newCart = cart.filter((item) => item.id !== id);
		setCart(newCart);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				addToCart,
				removeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
