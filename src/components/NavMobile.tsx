import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useRouter } from 'next/router';
import navLinks from './variables/navLinks';

interface Props {
	setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile: React.FC<Props> = ({ setMobileMenu }) => {
	const router = useRouter();

	console.log(window.location.pathname);

	const handleClick = (to: string) => {
		console.log('go to', to);
		router.push(`/#${to}`, undefined, { scroll: true });
		setMobileMenu(false);
	};

	return (
		<ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
			{navLinks.map((item, index) => {
				return (
					<li key={index}>
						<Link to={item.to} offset={0} duration={400} onClick={() => handleClick(item.to)}>
							<div className='py-4 px-5 border-b cursor-pointer'>{item.name}</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default MenuMobile;