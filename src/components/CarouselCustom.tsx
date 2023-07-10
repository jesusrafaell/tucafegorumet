import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logoTuCafe from '@/images/logo_tucafe.png';
import { motion } from 'framer-motion';
import { textVariant } from '@/utils/monition';
import Image from 'next/image';
import banner1 from '@/images/banners/banner-1.jpg';
import banner2 from '@/images/banners/banner-2.jpg';
import banner3 from '@/images/banners/banner-3.jpg';

const CarouselCustom = () => {
	const slides = [
		{
			url: banner1.src,
		},
		{
			url: banner2.src,
		},
		{
			url: banner3.src,
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};

	const [autoSlide, SetAutoSlide] = useState(true);

	useEffect(() => {
		if (autoSlide) {
			SetAutoSlide(false);
			setTimeout(() => {
				nextSlide();
				SetAutoSlide(true);
			}, 10000);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentIndex]);

	return (
		<div className='w-screen h-screen pb-16 relative group'>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className='w-full h-full  bg-center bg-cover duration-500'
			></div>
			{/* Left Arrow */}
			<div className='hidden z-10 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>
			{/* Right Arrow */}
			<div className='hidden z-10 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<div className='flex top-4 z-1 justify-center py-2'>
				{slides.map((slide, slideIndex) => (
					<div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
						{/* <RxDotFilled className='text-white' /> */}
						{/* <div className='text-white text-2xl flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2'>
						</div> */}
					</div>
				))}
			</div>
			<div
				className='
					absolute
					top-0
					w-full
					h-full
					grid
					grid-cols-3
					px-10
					justify-center 
					items-center
				text-white
			'
			>
				{/* text */}
				<div className='flex flex-col w-full justify-center'>
					{/* pretitle */}
					<div className='font-gravity-bold flex items-center uppercase'></div>
					{/* title */}
					{/* leading-[1.1] */}
					<div
						className='text-[60px] 
							flex
							flex-col
							font-satoshi
							font-bold
							h1-hero
							justify-center
							items-center
							lg:whitespace-nowrap
							leading-[1.1] mb-5'
					>
						<motion.h1
							variants={textVariant(0.5, 20)}
							initial='hidden'
							whileInView='show'
							viewport={{ once: false, amount: 0.7 }}
						>
							Tu Café Gourmet
						</motion.h1>
						{/* <div className='w-[80%] h-[2px] bg-black mr-3 mt-8'></div> */}
					</div>
				</div>
				{/* img */}
				<div className='flex flex-col -order-1 items-center lg:order-none self-center justify-center lg:w-full'>
					<motion.div
						variants={textVariant(0.4, -20)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						// className='hidden lg:block flex-col'
					>
						{/* <Image src={coffe} alt='tucafegourmet' /> */}
						<Image src={logoTuCafe} alt='tucafegourmet' />
					</motion.div>
				</div>
				<div className='flex flex-col justify-center'>
					{/* <div className='text-[50px] leading-[1.1] font-gravity-light mb-4'>
						<span className='font-gravity-bold whitespace-nowrap'>Tu Café</span>
					</div> */}
					<Link
						href={'/'}
						className='self-start uppercase font-gravity-bold border-b-2 border-primary whitespace-nowrap
					 '
					>
						Estaciones de Café
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CarouselCustom;
