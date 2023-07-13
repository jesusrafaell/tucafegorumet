import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useRouter } from 'next/router';
import { interfaceLink } from './variables/navLinks';
import navLinksMobile from './variables/navLinksMobile';
import logoTuCafe from '@/images/logo_tucafe.png';
import Image from 'next/image';

interface Props {
	setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile: React.FC<Props> = ({ setMobileMenu }) => {
	const router = useRouter();

	const handleClick = (link: interfaceLink) => {
		setMobileMenu(false);
		if (link.scroll) {
			router.push(`/#${link.to}`, undefined, { scroll: true });
		} else {
			router.push(`/${link.to}`);
		}
	};

	return (
		<ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
			{navLinksMobile.map((item, index) => {
				return (
					<li key={index}>
						<Link to={item.scroll ? item.to : ''} offset={0} duration={400} onClick={() => handleClick(item)}>
							<div className='py-4 px-5 border-b cursor-pointer'>{item.name}</div>
						</Link>
					</li>
				);
			})}
			<div className='flex justify-center items-center'>
				<div className='w-[200px] mt-10'>
					<Image src={logoTuCafe} alt='logo' />
				</div>
			</div>
		</ul>
	);
};

export default MenuMobile;
