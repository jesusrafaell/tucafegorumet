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
				<div className='box-container p-10'>
					<div className='box'>
						<i className='text-5xl'>
							<FaLocationArrow />
						</i>
						<h3>address</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>

					<div className='box'>
						<i className='text-5xl'>
							<FaEnvelope />
						</i>
						<h3>E - mail</h3>
						<a href='#' className='link text-[17px] text-gray-700 font-satoshi font-bold'>
							Info@tucafegourmet.com
						</a>
					</div>

					<div className='box'>
						<i className='text-5xl'>
							<BsFillTelephoneFill />
						</i>
						<h3>call us</h3>
						<p className='text-[17px] text-gray-700 font-satoshi font-bold'>+(305) 594-0190</p>
					</div>

					<div className='box'>
						<i className='text-5xl'>
							<FaClock />
						</i>
						<h3>opening hours</h3>
						<p>
							Customer Service Hours:
							<br /> 7:30am - 4:30pm
						</p>
						{/* social media */}
						<div className='flex flex-row gap-5 my-8 text-3xl'>
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
			<div className='credit text-white bg-black w-full flex justify-center items-center text-[16px] py-2'>
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
