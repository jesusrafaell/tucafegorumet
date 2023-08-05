import Image from 'next/image';
import React from 'react';
import info3 from '@/images/info/info3.png';
import { motion } from 'framer-motion';
import lang from '@/LANG/eng.json';

const About = () => {
	return (
		<section id='about' className='bg-base-light flex w-screen h-full min-h-screen justify-center items-center'>
			<div className='bgAbout absolute w-screen h-full opacity-10'></div>
			<div className='container mx-auto flex w-full h-full flex-col justify-center items-center pt-[7rem] pb-8 lg:py-0 relative'>
				<div className='flex w-full h-full flex-col lg:flex-row gap-x-10 justify-center items-center lg:items-start px-3 lg:px-10'>
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='flex justify-center items-center order-2 lg:order-1 pt-4 h-full w-[300px] lg:w-[500px] relative'
					>
						<Image src={info3} alt='instagram img' className='rounded-md' />
					</motion.div>
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='w-full h-full order-1 lg:order-2 lg:w-full flex flex-col justify-center items-center relative lg:pt-10 relative'
					>
						<h1 className='text-2xl lg:text-4xl text-black font-lemonMilk-bold uppercase px-5 text-start lg:text-center mb-5'>
							{lang.info_title_3}
						</h1>
						<p className='text-[17px] lg:text-3xl leading-[1.3] text-gray-700 text-justify'>{lang.info_text_3}</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
