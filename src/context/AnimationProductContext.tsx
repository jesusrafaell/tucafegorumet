import { ProductCartDto, ProductDto } from '@/utils/products';
import { useRouter } from 'next/router';
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

interface AnimationProductValue {
	isActive: boolean;
	product: ProductDto | null;
	setIsActive: Dispatch<SetStateAction<boolean>>;
	setProduct: Dispatch<SetStateAction<ProductDto | null>>;
	handleToProduct: () => void;
	handleProduct: (product: ProductDto) => void;
}

export const AnimationProductContext = createContext<AnimationProductValue>({
	isActive: false,
	product: null,
	setIsActive: () => {},
	setProduct: () => {},
	handleToProduct: () => {},
	handleProduct: () => {},
});

interface Props {
	children: ReactNode;
}

const AnimationProductProvider: FC<Props> = ({ children }) => {
	const [isActive, setIsActive] = useState(false);
	const [product, setProduct] = useState<ProductDto | null>(null);

	const router = useRouter();

	const handleToProduct = () => {
		console.log('Context Go', product);
		if (product) {
			router.push(`/product/${product.name}`);
		}
	};

	const handleProduct = (product: ProductDto) => {
		setIsActive(true);
		setProduct(product);
	};

	return (
		<AnimationProductContext.Provider
			value={{
				isActive,
				product,
				setIsActive,
				setProduct,
				handleToProduct,
				handleProduct,
			}}
		>
			{children}
		</AnimationProductContext.Provider>
	);
};

export default AnimationProductProvider;
