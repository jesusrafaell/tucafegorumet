/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import coffe from '@/images/coffe1.png';
import { motion } from 'framer-motion';
import { textVariant } from '@/utils/monition';
import Image from 'next/image';
// import coffe2 from '@/images/coffe2.png';

const Hero = () => {
	return (
		<section
			// bg-base
			className='
			hero
			h-[800px] 
			bg-no-repeat 
			bg-base
			bg-cover
			bg-center py-24'
		>
			<div
				className='container flex flex-col mx-auto justify-center items-start h-full
								lg:items-center
								lg:flex-row
			'
			>
				{/* text */}
				<div className='flex flex-col justify-center'>
					{/* pretitle */}
					<div className='font-gravity-bold flex items-center uppercase'></div>
					{/* title */}
					{/* leading-[1.1] */}
					<div
						className='text-[60px] 
							flex
							flex-col
							font-satoshi
							font-light
							justify-center
							items-center
							lg:whitespace-nowrap
							leading-[1.1] mb-5'
					>
						<motion.h1
							variants={textVariant(0.5, 20)}
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
				<div className='flex flex-col -order-1 lg:order-none self-center justify-center w-80 lg:w-full'>
					<motion.div
						variants={textVariant(0.5, -100)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						// className='hidden lg:block flex-col'
					>
						<Image src={coffe} alt='tucafegourmet' />
					</motion.div>
				</div>
				<div className='flex flex-col justify-center'>
					<div className='text-[50px] leading-[1.1] font-gravity-light mb-4'>
						<span className='font-gravity-bold'>Coffe Shop</span>
					</div>
					<Link
						href={'/'}
						className='self-start uppercase font-gravity-bold 
					border-b-2
					 border-primary
					 '
					>
						Tu Café
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
