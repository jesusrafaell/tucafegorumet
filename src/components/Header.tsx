/* eslint-disable @next/next/no-img-element */
import { CartContext } from '@/context/CartContext';
import { SidebarContext } from '@/context/SidebarContext';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { FaCoffee } from 'react-icons/fa';

const Header = () => {
	// header state
	const [isActive, setIsActive] = useState(false);
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	const { itemAmount } = useContext(CartContext);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
		});
	}, []);

	return (
		<header
			className={
				//
				`${isActive ? 'bg-white py-2 shadow-md' : 'bg-none py-4'} 
			fixed w-full z-10 transition-all`
			}
		>
			<div className='container mx-auto flex items-center justify-between h-full '>
				{/* cart */}
				<Link href={`/`}>
					<div>
						{/* <img
							className='w-[40px]'
							src='https://www.tucafegourmet.com/wp-content/uploads/2018/07/TuCafe.png'
							alt='logo'
						/> */}
						<FaCoffee className='w-[40px]' />
					</div>
				</Link>
				<div
					onClick={() => setIsOpen(!isOpen)}
					className='cursor-pointer flex relative'
					//
				>
					<BsBag className='text-2xl' />
					<div
						className='
							bg-red-500 absolute 
							-right-2 -bottom-2 
							text-[12px] 
							w-[18px] h-[18px]
							text-white rounder-full
							flex justify-center items-center'
					>
						{itemAmount}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
