import React, { FC, ReactNode, createContext, useState } from 'react';

interface SidebarContextValue {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleClose: () => void;
}

export const SidebarContext = createContext<SidebarContextValue>({
	isOpen: false,
	setIsOpen: () => {},
	handleClose: () => {},
});

interface Props {
	children: ReactNode;
}

const SidebarProvider: FC<Props> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => {
		// console.log('close carrito');
		setIsOpen(false);
	};

	const contextValue: SidebarContextValue = {
		isOpen,
		setIsOpen,
		handleClose,
	};

	return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
