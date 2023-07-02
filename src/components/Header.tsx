/* eslint-disable @next/next/no-img-element */
import { CartContext } from '@/context/CartContext';
import { SidebarContext } from '@/context/SidebarContext';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { FaCoffee } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';

import { Link as LinkS } from 'react-scroll';
import Link from 'next/link';
import navLinks from './variables/navLinks';
import MenuMobile from './NavMobile';

const Header = () => {
	// header state
	const [isActive, setIsActive] = useState(false);
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	const { itemAmount } = useContext(CartContext);
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
		});
	}, []);

	const handleClick = (to: string) => {
		router.push(`/#${to}`, undefined, { scroll: true });
	};

	return (
		<header
			className={`${isActive || mobileMenu ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} 
			fixed w-full z-50 transition-all`}
		>
			<div className='container mx-auto flex items-center justify-between h-full '>
				{/* cart */}
				<LinkS
					to={'home'}
					spy
					smooth
					offset={0}
					duration={400}
					onClick={() => {
						setMobileMenu(false);
						handleClick('home');
					}}
				>
					<div className='cursor-pointer hover:animate-pulse'>
						{/* <img
							className='w-[40px]'
							src='https://www.tucafegourmet.com/wp-content/uploads/2018/07/TuCafe.png'
							alt='logo'
						/> */}
						<div className='flex'>
							<FaCoffee className='text-[1.6rem] my-1' />
						</div>
					</div>
				</LinkS>
				<div>
					<ul className='hidden md:flex items-center gap-8 font-bold'>
						{navLinks.map((itemNav, index) => {
							return (
								<li key={index}>
									<div className='text-[16px] cursor-pointer hover:animate-pulse relative'>
										<LinkS
											// activeClass='before:absolute'
											className="hover:before:absolute before:content-[''] before:bottom-0 before:h-1 before:w-full before:bg-[#e2e2e2] before:transition"
											to={itemNav.to}
											spy
											smooth
											offset={0}
											duration={400}
											onClick={() => handleClick(itemNav.to)}
										>
											{itemNav.name}
										</LinkS>
									</div>
								</li>
							);
						})}
						<li className={`cursor-pointer hover:animate-pulse`}>
							<div
								onClick={() => setIsOpen(!isOpen)}
								className='cursor-pointer flex relative'
								//
							>
								<HiShoppingCart className='text-2xl' />
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
						</li>
					</ul>
					<div className='flex items-center gap-8'>
						{/* Mobile icon start */}
						<div className='w-8 h-8 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative  text-black'>
							<div
								onClick={() => {
									setMobileMenu(false);
									setIsOpen(!isOpen);
								}}
								className='cursor-pointer flex relative'
								//
							>
								<HiShoppingCart className='text-[20px]' />
								<div
									className='
											bg-red-500 absolute 
											-right-2 -top-2
											text-[10px] 
											w-[12px] h-[12px]
											text-white rounder-full
											flex justify-center items-center'
								>
									{itemAmount}
								</div>
							</div>
						</div>
						<div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative  text-black'>
							{mobileMenu ? (
								<VscChromeClose className='text-[20px]' onClick={() => setMobileMenu(false)} />
							) : (
								<BiMenu className='text-[25px]' onClick={() => setMobileMenu(true)} />
							)}
						</div>
						{/* Mobile icon end */}
					</div>
				</div>
			</div>
			{mobileMenu && <MenuMobile setMobileMenu={setMobileMenu} />}
		</header>
	);
};

export default Header;
