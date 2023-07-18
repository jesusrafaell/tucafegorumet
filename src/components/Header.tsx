/* eslint-disable @next/next/no-img-element */
import { CartContext } from '@/context/CartContext';
import { SidebarContext } from '@/context/SidebarContext';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import lang from '@/LANG/eng.json';

import logoTuCafe from '@/images/logo_tucafe.png';

import { Link as LinkS } from 'react-scroll';
import navLinks, { interfaceLink } from './variables/navLinks';
import MenuMobile from './NavMobile';
import Image from 'next/image';
import Link from 'next/link';
import timeScroll from '@/utils/timeScroll';

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

	const handleClick = async (link: interfaceLink) => {
		setMobileMenu(false);
		if (!link.scroll) {
			router.push(`/${link.to}`);
		} else {
			if (router.pathname.split('/').length > 1 && router.pathname !== '/') {
				await router.push(`/#${link.to}`);
			}
			await router.replace(`/#${link.to}`);
		}
	};

	return (
		<header
			className={`
				${
					isActive || mobileMenu || router.pathname.includes('product')
						? 'bg-white py-3 shadow-md text-black'
						: 'py-5 text-black'
				} 
			fixed w-full z-30 transition-all`}
		>
			<div className='container mx-auto w-screen grid grid-col-2 lg:grid-cols-3 h-full'>
				<div className='w-full h-full'>
					<LinkS
						to={'home'}
						spy
						smooth
						offset={0}
						duration={timeScroll}
						onClick={() => {
							setMobileMenu(false);
							handleClick({ to: 'home', scroll: true, name: 'home' });
						}}
					>
						<div className='cursor-pointer hover:animate-pulse'>
							<div
								className={`${
									mobileMenu ? 'opacity-0' : 'opacity-100'
								} transition duration-200 flex w-[80px] h-full relative`}
							>
								<div className='absolute w-full top-0 duration-200 transition-all'>
									<Image src={logoTuCafe} alt='tucafegourmet' width={100} />
								</div>
							</div>
						</div>
					</LinkS>
				</div>
				<div className='hidden lg:flex flex-row justify-center items-center'>
					<ul className='gap-x-9 font-gravity-regular flex flex-row text-[15px] list-none items-center navLink'>
						{navLinks.map((itemNav, index) => {
							return (
								<li key={index} className='relative'>
									<LinkS
										className={`
												capitalize block relative cursor-pointer 
												text-[20px] whitespace-nowrap
												after:bottom-0 after:content after:block after:h-[2px] after:left-[50%] 
												after:absolute after:w-0
												after:bg-black
												after:transition-all after:duration-300 after:ease-in-out
												hover:after:w-full hover:after:left-0
										`}
										to={itemNav.scroll ? itemNav.to : ''}
										spy
										smooth
										offset={0}
										duration={timeScroll}
										onClick={() => handleClick(itemNav)}
									>
										{itemNav.name}
									</LinkS>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='flex flex-row justify-end items-center gap-x-4 w-full'>
					{/* Mobile icon start */}
					<div className='w-10 h-10 rounded-full flex justify-center items-center  cursor-pointer relative'>
						<div
							onClick={() => {
								setMobileMenu(false);
								setIsOpen(!isOpen);
							}}
							className='cursor-pointer flex relative text-black'
						>
							<HiShoppingCart className='text-[25px]' />
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
					<Link
						className={`
						hidden lg:flex justify-center items-center
						relative cursor-pointer uppercase
						group h-12 w-50 overflow-hidden rounded-lg bg-black text-lg shadow
						p-5
						`}
						href={'/book'}
					>
						<div className='absolute inset-0 w-0 bg-base-red transition-all duration-500 ease-out group-hover:w-full'></div>
						<span className='relative text-white group-hover:text-black whitespace-nowrap font-bebas-neue tracking-widest text-bold text-1xl'>
							{lang.header_Reserve}
						</span>
					</Link>
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
			{mobileMenu && <MenuMobile handleClick={handleClick} />}
		</header>
	);
};

export default Header;
