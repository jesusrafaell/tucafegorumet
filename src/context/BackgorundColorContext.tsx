import { ProductCartDto } from '@/utils/products';
import { useRouter } from 'next/router';
import React, { FC, ReactNode, createContext, useEffect, useState } from 'react';

interface BackGrorundColorVallue {
	color: string;
	setColor: React.Dispatch<React.SetStateAction<string>>;
}

export const BackGroundColorContext = createContext<BackGrorundColorVallue>({
	color: 'bg-base-dark',
	setColor: () => {},
});

interface Props {
	children: ReactNode;
}

const BackGroundColorProveider: FC<Props> = ({ children }) => {
	const [color, setColor] = useState('bg-base-dark');

	return (
		<BackGroundColorContext.Provider
			value={{
				color,
				setColor,
			}}
		>
			{children}
		</BackGroundColorContext.Provider>
	);
};

export default BackGroundColorProveider;
