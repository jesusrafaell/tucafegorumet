import React, { FC, ReactNode, createContext, useState } from 'react';

interface CartContextValue {
	cart: any[];
	setCart: React.Dispatch<React.SetStateAction<any[]>>;
	addToCart: (product: any, id: number) => void;
}

export const CartContext = React.createContext<CartContextValue>({
	cart: [],
	setCart: () => {},
	addToCart: () => {},
});

interface Props {
	children: ReactNode;
}

const CartProvider: FC<Props> = ({ children }) => {
	const [cart, setCart] = useState<any[]>([]);

	const addToCart = (product: any, id: number) => {
		const newItem = { ...product, amount: 1 };
		const cartItem = cart.find((item) => {
			return item.id === id;
		});
		if (cartItem) {
			const newCart = [...cart].map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount + 1 };
				} else item;
			});
			setCart(newCart);
		} else {
			setCart([...cart, newItem]);
		}
	};
	console.log(cart);

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				addToCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
