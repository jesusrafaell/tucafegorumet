import { ProductCartDto, ProductDto } from '@/utils/products';
import { useRouter } from 'next/router';
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

interface AnimationProductValue {
	isActive: boolean;
	product: ProductDto | null;
	setIsActive: Dispatch<SetStateAction<boolean>>;
	setProduct: Dispatch<SetStateAction<ProductDto | null>>;
	handleToProduct: () => void;
}

export const AnimationProductContext = createContext<AnimationProductValue>({
	isActive: false,
	product: null,
	setIsActive: () => {},
	setProduct: () => {},
	handleToProduct: () => {},
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

	return (
		<AnimationProductContext.Provider
			value={{
				isActive,
				product,
				setIsActive,
				setProduct,
				handleToProduct,
			}}
		>
			{children}
		</AnimationProductContext.Provider>
	);
};

export default AnimationProductProvider;
