import { ProductCartDto } from '@/utils/products';
import React, { FC, ReactNode, createContext, useEffect, useState } from 'react';

interface CartContextValue {
	cart: ProductCartDto[];
	itemAmount: number;
	total: number;
	setCart: React.Dispatch<React.SetStateAction<ProductCartDto[]>>;
	addToCartProduct: (product: ProductCartDto) => void;
	addToCart: (product: ProductCartDto) => void;
	removeFromCart: (id: number) => void;
	clearCart: () => void;
	increaseAmount: (id: number) => void;
	decreaseAmount: (id: number) => void;
	handleGetAmount: (id: number) => number;
}

export const CartContext = createContext<CartContextValue>({
	cart: [],
	itemAmount: 0,
	total: 0.0,
	setCart: () => {},
	addToCartProduct: () => {},
	addToCart: () => {},
	removeFromCart: () => {},
	clearCart: () => {},
	increaseAmount: () => {},
	decreaseAmount: () => {},
	handleGetAmount: () => 0,
});

interface Props {
	children: ReactNode;
}

const CartProvider: FC<Props> = ({ children }) => {
	const [cart, setCart] = useState<ProductCartDto[]>([]);

	const [itemAmount, setItemAmount] = useState(0);

	const [total, setTotal] = useState(0.0);

	useEffect(() => {
		const total = cart.reduce((accumulator, currentItem) => {
			return accumulator + parseFloat(currentItem.price) * currentItem.amount;
		}, 0);
		setTotal(total);
	}, [cart]);

	useEffect(() => {
		if (cart) {
			const amount = cart.reduce((accumulator, currentItem) => {
				return accumulator + currentItem.amount;
			}, 0);
			setItemAmount(amount);
		}
	}, [cart]);

	const handleGetAmount = (id: number) => {
		// console.log(id);
		const item = cart.find((item) => {
			return item.id === id;
		});
		// console.log(item);
		return item ? item.amount : 0;
	};

	const addToCart = (product: ProductCartDto) => {
		const { id } = product;
		// console.log(product);
		const newItem = { ...product, amount: 1 };
		const cartItem = cart.find((item) => {
			return item.id === id;
		});
		if (cartItem) {
			const newCart: ProductCartDto[] = [...cart].map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount + 1 };
				} else return item;
			});
			setCart(newCart);
		} else {
			setCart([...cart, newItem]);
		}
	};

	const addToCartProduct = (product: ProductCartDto) => {
		const { id } = product;
		// console.log(product);
		const newItem = { ...product, amount: product.amount ? product.amount : 1 };
		const cartItem = cart.find((item) => {
			return item.id === id;
		});
		if (cartItem) {
			const newCart: ProductCartDto[] = [...cart].map((item) => {
				if (item.id === id) {
					return { ...item, amount: product.amount ? product.amount : cartItem.amount + 1 };
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

	//clear
	const clearCart = () => {
		setCart([]);
	};

	//increase amount
	const increaseAmount = (id: number) => {
		const item = cart.find((item) => item.id === id);
		if (item) addToCart(item);
	};

	//decrease amount
	const decreaseAmount = (id: number) => {
		const cartItem = cart.find((item) => item.id === id);
		if (cartItem) {
			if (cartItem.amount > 1) {
				const newCart = cart.map((item) => {
					if (item.id === id) return { ...item, amount: cartItem.amount - 1 };
					else return item;
				});
				setCart(newCart);
			} else {
				removeFromCart(id);
			}
		}
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				itemAmount,
				total,
				setCart,
				addToCartProduct,
				addToCart,
				removeFromCart,
				clearCart,
				increaseAmount,
				decreaseAmount,
				handleGetAmount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
