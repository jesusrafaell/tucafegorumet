import { textVariant } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import coffeTime from '@/images/coffe_time.png';

const HeroCoffeTime = () => {
	return (
		<div
			className='
			hero-coffe-time
			h-full
			bg-cover
			bg-no-repeat 
			'
		>
			<div className='w-[100%] h-full flex text-white justify-center items-center'>
				<div className='flex flex-col gap-y-10 lg:gap-y-20 justify-center items-center py-10 lg:py-0'>
					<motion.h2
						variants={textVariant(0.5, 20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='text-4xl lg:text-8xl capitalize font-prilly-monly h1-shop'
					>
						Coffe Time 100%
					</motion.h2>
					<motion.h2
						variants={textVariant(0.5, -20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='text-2xl lg:text-6xl capitalize font-prilly-monly '
					>
						100% Pure Coffe
					</motion.h2>
				</div>
			</div>
		</div>
	);
};

export default HeroCoffeTime;
