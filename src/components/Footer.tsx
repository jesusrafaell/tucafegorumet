/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Footer = () => {
	return (
		<footer className='footer mt-[120px]'>
			<div className='waves py-10'>
				<div className='wave' id='wave1'></div>
				<div className='wave' id='wave2'></div>
				<div className='wave' id='wave3'></div>
				<div className='wave' id='wave4'></div>
			</div>
			<div className='flex justify-center flex-wrap gap-6 text-white font-medium'>
				<h2 className='text-4xl font-extrabold font-gravity-light hover:text-gray-900'>Social Media</h2>
			</div>
			<div className='flex justify-center space-x-12 py-10'>
				<a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
					<img src='https://img.icons8.com/fluent/30/000000/facebook-new.png' />
				</a>
				<a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
					<img src='https://img.icons8.com/fluent/30/000000/linkedin-2.png' />
				</a>
				<a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
					<img src='https://img.icons8.com/fluent/30/000000/instagram-new.png' />
				</a>
				<a href='https://messenger.com' target='_blank' rel='noopener noreferrer'>
					<img src='https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png' />
				</a>
				<a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
					<img src='https://img.icons8.com/fluent/30/000000/twitter.png' />
				</a>
			</div>
			<p className='text-white text-center font-medium'>
				Copyright &copy; Ecommerce Shop Coffe 2023. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
