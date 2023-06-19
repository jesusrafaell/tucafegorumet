import React, { FC, ReactNode, useState } from 'react';

interface SidebarContextValue {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleClose: () => void;
}

export const SidebarContext = React.createContext<SidebarContextValue>({
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
		console.log('close');
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
