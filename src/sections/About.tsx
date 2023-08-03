import Image from 'next/image';
import React from 'react';
import info1 from '@/images/info/info1.png';
import info2 from '@/images/info/info2.png';
import info3 from '@/images/info/info3.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import lang from '@/LANG/eng.json';

const About = () => {
	return (
		<section id='about' className='flex w-screen h-full min-h-screen justify-center items-center'>
			<div className='flex w-full lg:w-[1000px] h-full flex-col justify-center items-center  py-20 gap-y-10'>
				{/* 1 img & text */}
				{/* <div className='flex w-full h-full flex-col lg:flex-row justify-between px-5'>
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='w-full lg:w-[500px] flex flex-col justify-center items-center gap-y-5 relative'
					>
						<div className='absolute top-0 lg:top-10 right-0 lg:left-0 opacity-10'>
							<span className='text-9xl font-gravity-bold'>01</span>
						</div>
						<div className='flex flex-row justify-end items-end'>
							<motion.div
								initial={{ x: 50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.4, ease: 'easeIn' }}
								className='flex lg:hidden justify-center items-center w-[220px] h-full mr-5 '
							>
								<Image src={info1} alt='instagram img' className='rounded-md' />
							</motion.div>
							<h1 className='text-2xl lg:text-5xl text-black font-roboto-bold uppercase'>{lang.info_title_1}</h1>
						</div>
						<p className='text-[15px] lg:text-1xl text-gray-700 text-justify'>{lang.info_text_1}</p>
					</motion.div>
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='hidden lg:flex justify-center items-center w-full h-full px-10 lg:px-0 lg:w-[400px] lg:h-[300px]'
					>
						<Image src={info1} alt='instagram img' className='rounded-md' />
					</motion.div>
				</div> */}
				{/* 2 img & text */}
				{/* <div className='flex w-full h-full flex-row justify-between px-5'>
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='hidden lg:flex w-[400px] h-full lg:w-[400px] lg:h-[400px]'
					>
						<Image src={info2} alt='instagram img' className='rounded-md' />
					</motion.div>
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='w-full lg:w-[500px] flex flex-col justify-center items-center gap-y-2 relative '
					>
						<div className='absolute top-20 left-0 opacity-10'>
							<span className='text-9xl font-gravity-bold'>02</span>
						</div>
						<div className='flex flex-row items-end'>
							<h1 className='text-2xl lg:text-5xl text-black font-roboto-bold font-bold uppercase mb-2'>
								{lang.info_title_2}
							</h1>
							<motion.div
								initial={{ scale: 0, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.4, ease: 'easeIn' }}
								className='flex lg:hidden w-[200px] h-full'
							>
								<Image src={info2} alt='instagram img' className='rounded-md' />
							</motion.div>
						</div>
						<p className='text-1xl text-gray-700 text-justify'>{lang.info_text_2}</p>
						<Link
							href={'/services'}
							className='bg-primary 
								flex text-[12px] lg:text-[14px]
								p-3 rounded-md justify-center
								items-center text-white
								font-roboto-bold 
								'
						>
							Our Services
						</Link>
					</motion.div>
				</div> */}
				<h1 className='text-4xl lg:text-5xl text-black font-lemonMilk-bold uppercase px-5 text-center'>
					{lang.info_title_3}
				</h1>
				<div className='flex w-full h-full flex-col lg:flex-row gap-x-10 justify-between items-start px-5'>
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='w-full h-full lg:w-full flex flex-col justify-center items-center relative'
					>
						<p className='text-2xl leading-[1.3] text-gray-700 text-justify'>{lang.info_text_3}</p>
					</motion.div>
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='flex pt-5 lg:pt-0 w-[300px] h-full lg:w-full lg:h-[400px]'
					>
						<Image src={info3} alt='instagram img' className='rounded-md' />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
