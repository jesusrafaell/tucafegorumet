/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaClock, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FiCoffee } from 'react-icons/fi';

const Footer = () => {
	return (
		<footer className='footer mt-[120px] bg-red-700'>
			<div className='waves py-10'>
				<div className='wave' id='wave1'></div>
				<div className='wave' id='wave2'></div>
				<div className='wave' id='wave3'></div>
				<div className='wave' id='wave4'></div>
			</div>
			<div className='footer_container'>
				<div className='p-10 grid gap-x-2 gap-y-4 grid-cols-2 md:grid-cols-4 '>
					<div className='text-base'>
						<i className='text-black text-2xl md:text-4xl'>
							<FaLocationArrow />
						</i>
						<h3 className='capitalize py-2 text-1xl md:text-2xl'>address</h3>
						<p className='text-gray-700 text-1xl leading-2'>Unidated State, Miami</p>
					</div>
					<div className='text-base'>
						<i className='text-black text-2xl md:text-4xl'>
							<FaEnvelope />
						</i>
						<h3 className='capitalize py-2 text-1xl md:text-2xl'>E - mail</h3>
						<a
							href='#'
							className='text-[14px] md:text-[17px] text-gray-700 font-satoshi font-bold cursor-pointer hover:underline hover:text-black'
						>
							Info@tucafegourmet.com
						</a>
					</div>

					<div className='text-base'>
						<i className='text-black text-2xl md:text-4xl'>
							<BsFillTelephoneFill />
						</i>
						<h3 className='capitalize py-2 text-2xl'>call us</h3>
						<p className='text-[14px] md:text-[17px] text-gray-700 font-satoshi font-bold'>+(305) 594-0190</p>
					</div>

					<div className='text-base'>
						<i className='text-black text-2xl md:text-4xl'>
							<FaClock />
						</i>
						<h3 className='capitalize py-2 text-1xl md:text-2xl'>opening hours</h3>
						<p className='text-gray-700 text-[15px] md:text-1xl leading-2'>
							Customer Service Hours:
							<br /> 7:30am - 4:30pm
						</p>
						{/* social media */}
						<div className='flex flex-row gap-5 my-8 text-2xl md:text-3xl text-black'>
							<i>
								<BsFacebook />
							</i>
							<i>
								<BsInstagram />
							</i>
							<i>
								<BsTwitter />
							</i>
							<i>
								<BsLinkedin />
							</i>
						</div>
					</div>
				</div>
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
