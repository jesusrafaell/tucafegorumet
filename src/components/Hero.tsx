/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Hero = () => {
	return (
		<section
			className='bg-pink-200 h-[800px] 
    bg-backgroundImage bg-no-repeat bg-cover
     bg-center py-24'
		>
			<div className='container mx-auto flex justify-around h-full'>
				{/* text */}
				<div className='flex flex-col justify-center'>
					{/* pretitle */}
					<div className='font-gravity-bold flex items-center uppercase'>
						<div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
					</div>
					{/* title */}
					<h1 className='text-[70px] leading-[1.1] font-gravity-light mb-4'>
						Tu Cafe Gourment <br />
						<span className='font-gravity-bold'>Coffe</span>
					</h1>
					<Link href={'/'} className='self-start uppercase font-gravity-bold border-b-2 border-primary'>
						Tu Cafe
					</Link>
				</div>
				{/* img */}
				<div className='hidden lg:block'>
					<img
						//
						src='https://www.tucafegourmet.com/wp-content/uploads/2018/07/TuCafe.png'
						alt='hola'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
