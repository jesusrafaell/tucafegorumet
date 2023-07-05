import { textVariant } from '@/utils/monition';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const Hero2 = () => {
	return (
		<div
			className='
			hero2
			lg:h-[600px]
			h-full
			lg:bg-fixed
			bg-containt
			bg-no-repeat 
			'
		>
			<div className='w-[100%] lg:ml-[50%] lg:w-[50%] h-full flex bg-white bg-opacity-50 justify-center items-center'>
				<div className='flex flex-col gap-y-10 lg:gap-y-20 justify-center items-center py-10 lg:py-0'>
					<motion.h2
						variants={textVariant(0.5, 20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='text-2xl lg:text-6xl capitalize font-prilly-monly'
					>
						i like tu café
					</motion.h2>
					{/* <p className='self-end text-3xl capitalize font-satoshi'>try ours!</p> */}
					<motion.div
						variants={textVariant(0.5, -20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex justify-center'
					>
						<Link
							href={'reserve'}
							className='relative inline-flex items-center 
							w-[150px]
							h-[40px]
							lg:w-full
							lg:h-full
							justify-start 
							px-6 
							py-3
							 overflow-hidden font-medium 
							transition-all 
							bg-base-dark rounded 
							group'
						>
							<span className='w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
							<span className='relative text-[15px] flex justify-center items-center w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black'>
								Reserve Now!
							</span>
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Hero2;
