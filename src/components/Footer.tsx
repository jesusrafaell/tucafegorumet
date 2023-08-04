/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaClock, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import { FiCoffee } from 'react-icons/fi';
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { textVariant } from '@/utils/motion';
import lang from '@/LANG/eng.json';

const Footer = () => {
	return (
		<footer id='footer' className='footer bg-black'>
			<div className='footer_container text-white'>
				<div className='px-10 py-20 grid gap-x-10 gap-y-10 lg:gap-y-4 grid-cols-2 lg:grid-cols-4 '>
					<motion.div
						variants={textVariant(0.2, 20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex flex-col w-full justify-start items-start lg:items-center relative'
					>
						<i className='text-2xl md:text-4xl'>
							<FaLocationArrow />
						</i>
						<h3 className='capitalize py-2 text-1xl md:text-2xl'>{lang.footer_title_1}</h3>
						<p className='text-[12px] md:text-[18px] text-gray-200 leading-2 lg:px-5'>{lang.footer_text_1}</p>
						<div className='absolute top-0 bottom-0 -right-5 w-0.5 h-full bg-base-red bg-opacity-40'></div>
					</motion.div>
					<motion.div
						variants={textVariant(0.4, 20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex flex-col w-full justify-start items-start lg:items-center relative'
					>
						<i className='text-2xl md:text-4xl'>
							<FaEnvelope />
						</i>
						<h3 className='capitalize py-2 text-1xl md:text-2xl'>{lang.footer_title_2}</h3>
						<a
							href='#'
							className='text-[12px] md:text-[18px] text-gray-200 font-satoshi font-bold cursor-pointer hover:underline hover:text-red-200'
						>
							{lang.footer_text_2}
						</a>

						<div className='hidden lg:flex absolute top-0 bottom-0 -right-5 w-0.5 h-full bg-base-red bg-opacity-40'></div>
					</motion.div>

					<motion.div
						variants={textVariant(0.6, 20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex flex-col w-full justify-start items-start lg:items-center relative'
					>
						<i className='text-2xl md:text-4xl'>
							<BsFillTelephoneFill />
						</i>
						<h3 className='capitalize py-2 text-1xl: md:text-2xl'>{lang.footer_title_3}</h3>
						<div className='flex flex-col items-start justify-start gap-y-2'>
							{lang.footer_text_3.map((item, index) => {
								const value = item.split(':');
								return (
									<span
										key={index}
										className='text-[12px] md:text-[18px] flex flex-col lg:flex-row gap-x-1 font-satoshi'
									>
										{value[0]}
										<p className='text-gray-200 font-bold'>{value[1]}</p>
									</span>
								);
							})}
						</div>
						<div className='absolute top-0 bottom-0 -right-5 w-0.5 h-full bg-base-red bg-opacity-40'></div>
					</motion.div>

					<motion.div
						variants={textVariant(0.8, 20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex flex-col w-full justify-start items-start lg:items-center'
					>
						<i className='text-2xl md:text-4xl'>
							<FaClock />
						</i>
						<h3 className='capitalize py-2 text-1xl md:text-2xl'>{lang.footer_title_4}</h3>
						<p className='text-gray-200 text-[12px] md:text-[18px] lg:text-1xl leading-2'>
							{lang.footer_text_4}:
							<br /> 7:30am - 4:30pm
						</p>
					</motion.div>
				</div>
			</div>
			{/* social media */}
			<div className='flex flex-row justify-center gap-5 my-8 text-2xl md:text-3xl text-white'>
				<motion.i
					variants={textVariant(0.2, 20)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.7 }}
				>
					<div
						className='cursor-pointer hover:animate-pulse'
						onClick={() => window.open('https://www.facebook.com/tucafegourmet/', '_blank')}
					>
						<BsFacebook />
					</div>
				</motion.i>
				<motion.i
					variants={textVariant(0.3, 20)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.7 }}
				>
					<div
						className='cursor-pointer hover:animate-pulse'
						onClick={() => window.open('https://www.instagram.com/tucafemiami/', '_blank')}
					>
						<BsInstagram />
					</div>
				</motion.i>
				<motion.i
					variants={textVariant(0.4, 20)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.7 }}
				>
					<div
						className='cursor-pointer hover:animate-pulse'
						onClick={() => window.open('https://twitter.com/TuCafegourmet', '_blank')}
					>
						<BsTwitter />
					</div>
				</motion.i>
				<motion.i
					variants={textVariant(0.5, 20)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.7 }}
				>
					<div
						className='cursor-pointer hover:animate-pulse'
						onClick={() => window.open('https://www.linkedin.com/company/tu-cafe-gourmet/', '_blank')}
					>
						<BsLinkedin />
					</div>
				</motion.i>
			</div>
			<div className='text-white bg-black w-full flex justify-center items-center text-[10px] md:text-[16px] py-2 '>
				Copyright 2023 © Cafetales De Miami,
				<i className='fa-solid fa-heart'>
					<FiCoffee className='text-2xl py-1 mx-2' />
				</i>{' '}
				All rights reserved
			</div>
		</footer>
	);
};

export default Footer;
