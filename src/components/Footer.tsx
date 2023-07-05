/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaClock, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FiCoffee } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { textVariant } from '@/utils/monition';

const Footer = () => {
	return (
		<footer className='footer bg-[#cc9e7a] mt-40'>
			<div className='waves'>
				<div className='wave' id='wave1'></div>
				<div className='wave' id='wave2'></div>
				<div className='wave' id='wave3'></div>
				<div className='wave' id='wave4'></div>
			</div>
			<div className='footer_container'>
				<div className='p-10 grid gap-x-10 gap-y-10 lg:gap-y-4 grid-cols-2 lg:grid-cols-4 '>
					<motion.div
						variants={textVariant(0.2, 20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex flex-col w-full text-base border-r border-base-dark justify-center items-start lg:items-center'
					>
						<i className='text-black text-2xl md:text-4xl'>
							<FaLocationArrow />
						</i>
						<h3 className='capitalize py-2 text-1xl md:text-2xl'>address</h3>
						<p className='text-gray-700 text-1xl leading-2'>Unidated State, Miami</p>
					</motion.div>
					<motion.div
						variants={textVariant(0.4, 20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex flex-col w-full text-base lg:border-r border-base-dark justify-center items-start lg:items-center'
					>
						<i className='text-black text-2xl md:text-4xl'>
							<FaEnvelope />
						</i>
						<h3 className='capitalize py-2 text-1xl md:text-2xl'>E - mail</h3>
						<a
							href='#'
							className=' text-[14px] md:text-[15px] text-gray-700 font-satoshi font-bold cursor-pointer hover:underline hover:text-black'
						>
							Info@tucafegourmet.com
						</a>
					</motion.div>

					<motion.div
						variants={textVariant(0.6, 20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex flex-col w-full text-base border-r border-base-dark justify-center items-start lg:items-center'
					>
						<i className='text-black text-2xl md:text-4xl'>
							<BsFillTelephoneFill />
						</i>
						<h3 className='capitalize py-2 text-2xl'>call us</h3>
						<p className='text-[14px] md:text-[17px] text-gray-700 font-satoshi font-bold'>+(305) 594-0190</p>
					</motion.div>

					<motion.div
						variants={textVariant(0.8, 20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex flex-col w-full text-base justify-center items-start lg:items-center'
					>
						<i className='text-black text-2xl md:text-4xl'>
							<FaClock />
						</i>
						<h3 className='capitalize py-2 text-1xl md:text-2xl'>opening hours</h3>
						<p className='text-gray-700 text-[15px] md:text-1xl leading-2'>
							Customer Service Hours:
							<br /> 7:30am - 4:30pm
						</p>
					</motion.div>
				</div>
			</div>
			{/* social media */}
			<div className='flex flex-row justify-center gap-5 my-8 text-2xl md:text-3xl text-black'>
				<motion.i
					variants={textVariant(0.2, 20)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.7 }}
				>
					<BsFacebook />
				</motion.i>
				<motion.i
					variants={textVariant(0.3, 20)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.7 }}
				>
					<BsInstagram />
				</motion.i>
				<motion.i
					variants={textVariant(0.4, 20)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.7 }}
				>
					<BsTwitter />
				</motion.i>
				<motion.i
					variants={textVariant(0.5, 20)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.7 }}
				>
					<BsLinkedin />
				</motion.i>
			</div>
			<div className='text-white bg-black w-full flex justify-center items-center text-[10px] md:text-[16px] py-2 '>
				Copyright 2023 © Cafetales De Miami
				<i className='fa-solid fa-heart'>
					<FiCoffee className='text-2xl py-1 mx-2' />
				</i>{' '}
				All rights reserved Coffe Shop{' '}
			</div>
		</footer>
	);
};

export default Footer;
