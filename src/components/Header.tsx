/* eslint-disable @next/next/no-img-element */
import { CartContext } from '@/context/CartContext';
import { SidebarContext } from '@/context/SidebarContext';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';

import logoTuCafe from '@/images/logo_tucafe.png';

import { Link as LinkS } from 'react-scroll';
import navLinks, { interfaceLink } from './variables/navLinks';
import MenuMobile from './NavMobile';
import Image from 'next/image';

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
			className={`
				${
					isActive || mobileMenu || router.pathname.includes('product')
						? 'bg-white py-1 shadow-md text-black'
						: 'py-3 text-black'
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
						<div className='flex w-[80px] h-[50px] relative'>
							<div className='absolute w-full top-0 duration-200 transition-all'>
								<Image src={logoTuCafe} alt='tucafegourmet' width={100} />
							</div>
						</div>
					</div>
				</LinkS>
				<div>
					<ul className='hidden md:flex gap-x-9 font-gravity-regular text-[15px] list-none items-center navLink'>
						{navLinks.map((itemNav, index) => {
							return (
								<li key={index} className='relative'>
									<LinkS
										className={`
												capitalize block relative cursor-pointer 
												after:bottom-0 after:content after:block after:h-[2px] after:left-[50%] 
												after:absolute 
												${isActive ? 'after:bg-black' : 'after:bg-white'}
												after:w-0
												after:transition-all after:duration-300 after:ease-in-out
												hover:after:w-full hover:after:left-0
										`}
										to={itemNav.scroll ? itemNav.to : ''}
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
					</ul>
				</div>
				<div className='flex items-center gap-8'>
					{/* Mobile icon start */}
					<div className='w-8 h-8 rounded-full flex  justify-center items-center hover:bg-black/[0.05] cursor-pointer relative '>
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
			{mobileMenu && <MenuMobile setMobileMenu={setMobileMenu} />}
		</header>
	);
};

export default Header;
