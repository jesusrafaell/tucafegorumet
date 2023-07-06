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
import navLinks, { interfaceLink } from './variables/navLinks';
import MenuMobile from './NavMobile';

const Header = () => {
	// header state
	const [isActive, setIsActive] = useState(false);
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	const { itemAmount } = useContext(CartContext);
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);
	const router = useRouter();
	const [effectAmount, setEffectAmount] = useState(false);

	useEffect(() => {
		if (itemAmount > 0) {
			setEffectAmount(true);
			setTimeout(() => {
				setEffectAmount(false);
			}, 1000);
		}
	}, [itemAmount]);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
		});
	}, []);

	const handleClick = (link: interfaceLink) => {
		if (link.scroll) {
			router.push(`/#${link.to}`, undefined, { scroll: true });
		} else {
			router.push(`/${link.to}`);
		}
	};

	return (
		<header
			className={`${
				isActive || mobileMenu || router.pathname.includes('product') ? 'bg-white py-3 shadow-md' : 'bg-none py-5'
			} 
			fixed w-full z-30 transition-all`}
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
						handleClick({ to: 'home', scroll: true, name: 'home' });
					}}
				>
					<div className='cursor-pointer hover:animate-pulse'>
						<div className='flex'>
							<FaCoffee className='text-[1.6rem] my-1' />
						</div>
					</div>
				</LinkS>
				<div>
					<ul className='hidden md:flex gap-x-9 font-gravity-light font-bold text-1xl list-none items-center navLink'>
						{navLinks.map((itemNav, index) => {
							return (
								<li key={index} className='relative'>
									<LinkS
										className='
												text-black capitalize block relative cursor-pointer 
													after:bottom-0 after:content after:block after:h-[2px] after:left-[50%] 
													after:absolute after:bg-black after:w-0
													after:transition-all after:duration-300 after:ease-in-out
													hover:after:w-full hover:after:left-0
													'
										to={itemNav.to}
										spy
										smooth
										offset={0}
										duration={400}
										onClick={() => handleClick(itemNav)}
									>
										{itemNav.name}
									</LinkS>
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
									className={`
										${itemAmount > 0 ? 'block' : 'hidden'}
										${!effectAmount ? 'bg-red-500' : 'bg-blue-700'}
											duration-300  transition
											absolute 
											-right-2 -bottom-2 
											text-[12px] rounded-xl
											w-[18px] h-[18px]
											text-white rounder-full
											flex justify-center items-center`}
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
