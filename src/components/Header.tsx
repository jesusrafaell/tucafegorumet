import { SidebarContext } from '@/context/SidebarContext';
import React, { useContext } from 'react';
import { BsBag } from 'react-icons/bs';

const Header = () => {
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	return (
		<header className='bg-pink-200'>
			<div>
				<div>Header</div>
				<div
					onClick={() => setIsOpen(!isOpen)}
					className='cursor-pointer flex relative'
					//
				>
					<BsBag className='text-2xl' />
				</div>
			</div>
		</header>
	);
};

export default Header;
