/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import coffe from '@/images/coffe1.png';
import logoTuCafe from '@/images/logo_tucafe.png';
import { motion } from 'framer-motion';
import { textVariant } from '@/utils/monition';
import Image from 'next/image';

const Hero = () => {
	const [scrollDirection, setScrollDirection] = useState<number>(50);
	const prevScrollYRef = useRef<number>(0);
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > prevScrollYRef.current) {
				console.log('baje');
				setScrollDirection(-50); // Scroll hacia abajo
			} else {
				console.log('subi');
				setScrollDirection(50); // Scroll hacia arriba
			}
			prevScrollYRef.current = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<section
			// bg-base
			className='
			flex
			justify-center
			h-screen
			heroHome
			lg:bg-fixed
			bg-no-repeat 
			bg-containt
			bg-cover
			bg-center
			'
		>
			<div
				className='
					grid
					w-full
					h-full
					grid-cols-1
					lg:grid-cols-2
					px-10
					justify-center 
					items-center
				text-base-red
			'
			>
				<div className='flex flex-col w-full justify-center'>
					<div className='font-gravity-bold flex items-center uppercase'></div>
					<div
						className='
							hidden
							lg:text-[60px] 
							lg:flex
							flex-col
							font-satoshi
							font-bold
							h1-hero
							justify-center
							items-end
							lg:px-40
							lg:whitespace-nowrap
							leading-[1.1] mb-5'
					>
						<motion.h1
							variants={textVariant(0.7, -30)}
							initial='hidden'
							whileInView='show'
							viewport={{ once: false, amount: 0.7 }}
						>
							Tu Café Gourmet
						</motion.h1>
						{/* <div className='w-[80%] h-[2px] bg-black mr-3 mt-8'></div> */}
					</div>
				</div>
				{/* img */}
				{/* <div className='flex flex-col -order-1 items-center lg:order-none self-center justify-center lg:w-full'>
					<motion.div
						variants={textVariant(0.4, scrollDirection)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						// className='hidden lg:block flex-col'
					>
						<Image src={coffe} alt='tucafegourmet' />
						<Image src={logoTuCafe} alt='tucafegourmet' />
					</motion.div>
				</div> */}
				<div className='flex flex-col justify-center items-center'>
					<motion.div
						variants={textVariant(0.7, 30)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex gap-y-5 bg-white bg-opacity-50 lg:bg-opacity-100 lg:rounded-xl flex-col justify-center items-center 
					p-5 text-black lg:w-[400px] '
					>
						<p className='self-start text-gray-700 lg:text-gray-300 flex text-[15px] font-gravity-bold uppercase'>
							New
						</p>
						<h1 className='self-start flex text-2xl lg:text-3xl font-gravity-bold uppercase'>
							Estaciones de Café
						</h1>
						<p>
							A coffee station is a reservation-based coffee shop where customers can enjoy a curated menu of
							specialty coffees in a cozy and intimate atmosphere. With limited seating, customers make
							reservations in advance to secure a spot and receive personalized service from knowledgeable
							baristas. It offers a unique and refined coffee-drinking experience, providing a tranquil setting
							away from the everyday hustle and bustle.
						</p>
						<Link
							href={'/reserve'}
							className='flex justify-center items-center bg-red-200 relative px-10 py-5 font-bold text-black group uppercase 
							font-gravity-bold border-b-2 border-primary whitespace-nowrap

					 '
						>
							<span className='absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-base-dark bg-opacity-50 group-hover:translate-x-0 group-hover:translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full border-[0.5rem] border-black'></span>
							<span className='relative text-xl capitalize'>Reserve Now!</span>
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
