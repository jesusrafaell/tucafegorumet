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
			}, 5000);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentIndex]);

	return (
		<div className='max-w-screen h-[300px] lg:h-[500px] w-full m-auto pb-16 px-4 group relative '>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
			></div>
			{/* Left Arrow */}
			<div className='hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>
			{/* Right Arrow */}
			<div className='hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<div className='flex top-4 justify-center py-2'>
				{slides.map((slide, slideIndex) => (
					<div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	);
};

export default CarouselCustom;
