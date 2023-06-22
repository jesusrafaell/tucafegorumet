/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import coffe from '@/images/coffe1.png';
import coffe2 from '@/images/coffe2.png';

const Hero = () => {
	return (
		<section
			className='bg-gray-200 h-[800px] 
			bg-backgroundImage bg-no-repeat bg-cover
			bg-center py-24'
		>
			<div className='container mx-auto flex justify-around h-full'>
				{/* text */}
				<div className='flex flex-col justify-center'>
					{/* pretitle */}
					<div className='font-gravity-bold flex items-center uppercase'>
						<div className='w-10 h-[2px] bg-red-500 mr-3'></div>New
					</div>
					{/* title */}
					<h1 className='text-[60px] leading-[1.1] font-gravity-light mb-4'>
						Tu Cafe Gourment <br />
						<span className='font-gravity-bold'>Coffe Shop</span>
					</h1>
					<Link href={'/'} className='self-start uppercase font-gravity-bold border-b-2 border-primary'>
						Tu Cafe
					</Link>
				</div>
				{/* img */}
				<div className='hidden lg:block'>
					<img
						//
						src={coffe.src}
						alt='hola'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
