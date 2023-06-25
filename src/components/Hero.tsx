/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import coffe from '@/images/coffe1.png';
import { motion } from 'framer-motion';
import { textVariant } from '@/utils/monition';
// import coffe2 from '@/images/coffe2.png';

const Hero = () => {
	return (
		<section
			className='bg-gray-200 h-[800px] 
			bg-backgroundImage bg-no-repeat bg-cover
			bg-center py-24'
		>
			<div className='container mx-auto flex justify-around h-full'>
				{/* text */}
				<div className='flex flex-col justify-center'>
					{/* pretitle */}
					<div className='font-gravity-bold flex items-center uppercase'>
						<div className='w-10 h-[2px] bg-red-500 mr-3'></div>New
					</div>
					{/* title */}
					<div className='text-[60px] leading-[1.1] font-gravity-light mb-4'>
						<motion.h1
							variants={textVariant(0.5, 20)}
							initial='hidden'
							whileInView='show'
							viewport={{ once: false, amount: 0.7 }}
						>
							Tu Café Gourment
						</motion.h1>
						<span className='font-gravity-bold'>Coffe Shop</span>
					</div>
					<Link href={'/'} className='self-start uppercase font-gravity-bold border-b-2 border-primary'>
						Tu Café
					</Link>
				</div>
				{/* img */}
				<motion.div
					variants={textVariant(0.5, -100)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.7 }}
					className='hidden lg:block'
				>
					<img
						//
						src={coffe.src}
						alt='hola'
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
