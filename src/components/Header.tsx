/* eslint-disable @next/next/no-img-element */
import { CartContext } from '@/context/CartContext';
import { SidebarContext } from '@/context/SidebarContext';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { FaCoffee } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';

import { Link as LinkS } from 'react-scroll';
import Link from 'next/link';

const Header = () => {
	// header state
	const [isActive, setIsActive] = useState(false);
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	const { itemAmount } = useContext(CartContext);
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
			className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} 
			fixed w-full z-10 transition-all`}
		>
			<div className='container mx-auto flex items-center justify-between h-full '>
				{/* cart */}
				<Link href={'/'}>
					<div className='cursor-pointer hover:animate-pulse'>
						{/* <img
							className='w-[40px]'
							src='https://www.tucafegourmet.com/wp-content/uploads/2018/07/TuCafe.png'
							alt='logo'
						/> */}
						<FaCoffee className='w-[40px]' />
					</div>
				</Link>
				<div>
					<ul className='hidden md:flex items-center gap-8 font-bold'>
						<li className={`cursor-pointer hover:animate-pulse`}>
							<div className='text-[16px]'>
								<LinkS
									activeClass='before:absolute'
									className="hover:before:absolute before:content-[''] before:bottom-4 before:h-1 before:w-[40px] before:bg-[#e2e2e2] before:transition"
									to={'shop'}
									spy
									smooth
									offset={0}
									duration={400}
									onClick={() => handleClick('shop')}
								>
									Shop
								</LinkS>
							</div>
						</li>
						<li className={`cursor-pointer hover:animate-pulse`}>
							<div className='text-[16px]'>
								<LinkS
									activeClass='before:absolute'
									className="hover:before:absolute before:content-[''] before:bottom-4 before:h-1 before:w-[65px] before:bg-[#e2e2e2] before:transition"
									to={'about'}
									spy
									smooth
									offset={0}
									duration={400}
									onClick={() => handleClick('about')}
								>
									Our Story
								</LinkS>
							</div>
						</li>
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
				</div>
			</div>
		</header>
	);
};

export default Header;
