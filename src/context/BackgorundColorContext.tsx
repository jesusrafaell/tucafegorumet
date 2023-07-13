import { ProductCartDto } from '@/utils/products';
import { useRouter } from 'next/router';
import React, { FC, ReactNode, createContext, useEffect, useState } from 'react';

interface BackGrorundColorVallue {
	color: string;
	setColor: React.Dispatch<React.SetStateAction<string>>;
	itemColor: boolean;
	setItemColor: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BackGroundColorContext = createContext<BackGrorundColorVallue>({
	color: 'bg-base-dark',
	setColor: () => {},
	itemColor: false,
	setItemColor: () => {},
});

interface Props {
	children: ReactNode;
}

const BackGroundColorProveider: FC<Props> = ({ children }) => {
	const [color, setColor] = useState('bg-base-dark');
	const [itemColor, setItemColor] = useState(false);

	return (
		<BackGroundColorContext.Provider
			value={{
				color,
				setColor,
				itemColor,
				setItemColor,
			}}
		>
			{children}
		</BackGroundColorContext.Provider>
	);
};

export default BackGroundColorProveider;
