import React, { useState } from 'react';
import { useRouter } from 'next/router';
import navLinks, { interfaceLink } from './variables/navLinks';
import logoTuCafe from '@/images/logo_tucafe.png';
import Image from 'next/image';
import Link from 'next/link';
import navLinksMobile from './variables/navLinksMobile';

interface Props {
	handleClick: () => void;
}

const MenuMobile: React.FC<Props> = ({ handleClick }) => {
	return (
		<ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
			{navLinksMobile.map((item, index) => {
				return (
					<li key={index}>
						<Link href={item.to} onClick={() => handleClick()}>
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
