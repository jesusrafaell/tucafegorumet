import { ProductCartDto } from '@/utils/products';
import { useRouter } from 'next/router';
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

interface AnimationContextValue {
	isLoading: boolean;
	completedAnimation: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setCompletedAnimation: Dispatch<SetStateAction<boolean>>;
}

export const AnimationCoverContext = createContext<AnimationContextValue>({
	isLoading: true,
	completedAnimation: false,
	setIsLoading: () => {},
	setCompletedAnimation: () => {},
});

interface Props {
	children: ReactNode;
}

const AnimationCoverProvider: FC<Props> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [completedAnimation, setCompletedAnimation] = useState(false);

	const router = useRouter();
	useEffect(() => {
		const goTo = () => {
			const loadingTimeout = setTimeout(() => {
				console.log('go to', router.asPath);
				router.push(router.asPath, undefined, { scroll: false });
			}, 200);
			return () => clearTimeout(loadingTimeout);
		};
		if (completedAnimation && router) {
			goTo();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [completedAnimation, router.asPath]);

	return (
		<AnimationCoverContext.Provider
			value={{
				isLoading,
				completedAnimation,
				setIsLoading,
				setCompletedAnimation,
			}}
		>
			{children}
		</AnimationCoverContext.Provider>
	);
};

export default AnimationCoverProvider;
