/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaClock, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import { FiCoffee } from 'react-icons/fi';
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { textVariant } from '@/utils/monition';

const Footer = () => {
	return (
		<footer id='footer' className='footer bg-black'>
			{/* <div className='waves'>
				bg-[#cc9e7a]
				<div className='wave' id='wave1'></div>
				<div className='wave' id='wave2'></div>
				<div className='wave' id='wave3'></div>
				<div className='wave' id='wave4'></div>
			</div> */}
			<div className='footer_container text-white'>
				<div className='px-10 py-20 grid gap-x-10 gap-y-10 lg:gap-y-4 grid-cols-2 lg:grid-cols-4 '>
					<motion.div
						variants={textVariant(0.2, 20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex flex-col w-full border-r border-base-red justify-start items-start lg:items-center'
					>
						<i className='text-2xl md:text-4xl'>
							<FaLocationArrow />
						</i>
						<h3 className='capitalize py-2 text-1xl md:text-2xl'>address</h3>
						<p className='text-gray-200 text-1xl lead-2 lg:px-5'>
							Unidated State, Cafetales de Miami, Inc. 8465 NW 70th Street Miami, FL 33166
						</p>
					</motion.div>
					<motion.div
						variants={textVariant(0.4, 20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex flex-col w-full lg:border-r border-base-red justify-start items-start lg:items-center'
					>
						<i className='text-2xl md:text-4xl'>
							<FaEnvelope />
						</i>
						<h3 className='capitalize py-2 text-1xl md:text-2xl'>E - mail</h3>
						<a
							href='#'
							className=' text-[14px] md:text-[15px] text-gray-200 font-satoshi font-bold cursor-pointer hover:underline hover:text-red-200'
						>
							Info@tucafegourmet.com
						</a>
					</motion.div>

					<motion.div
						variants={textVariant(0.6, 20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex flex-col w-full border-r border-base-red justify-start items-start lg:items-center'
					>
						<i className='text-2xl md:text-4xl'>
							<BsFillTelephoneFill />
						</i>
						<h3 className='capitalize py-2 text-2xl'>call us</h3>
						<div className='flex flex-col items-start justify-start gap-y-2'>
							<span className='flex flex-col lg:flex-row gap-x-1 font-satoshi'>
								Phone
								<p className='text-[14px] md:text-[17px] text-gray-200  font-bold'>+(305) 594-0190</p>
							</span>
							<span className='flex flex-col lg:flex-row gap-x-1 font-satoshi'>
								Mobile
								<p className='text-[14px] md:text-[17px] text-gray-200 font-satoshi font-bold'>+(954) 274-3661</p>
							</span>
							<span className='flex flex-col lg:flex-row gap-x-6 font-satoshi'>
								Fax
								<p className='text-[14px] md:text-[17px] text-gray-200 font-satoshi font-bold'>+(305) 594-2316</p>
							</span>
						</div>
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
						<h3 className='capitalize py-2 text-1xl md:text-2xl'>opening hours</h3>
						<p className='text-gray-200 text-[15px] md:text-1xl leading-2'>
							Customer Service Hours:
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
