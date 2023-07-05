import Image, { StaticImageData } from 'next/image';
import React, { FC, useState } from 'react';
import { textVariant } from '@/utils/monition';
import { motion } from 'framer-motion';
import CupLoading from './CupLoading';

interface Props {
	card: {
		id: number;
		title: string;
		imagen: StaticImageData;
		imagen2: StaticImageData;
	};
}

const Card: FC<Props> = ({ card }) => {
	const { title, imagen, imagen2 } = card;
	const [hover, setHover] = useState(false);

	return (
		<div
			className={`
				w-[200px]
				h-[200px]
				lg:h-[300px]
				border-b
				lg:border-none
        card 
				relative 
        lg:w-full
        cursor-pointer 
        list-none 
        before:block 
        before:w-full
				flex
				px-5
				justify-center
				items-center
				transition duration-300 ease-linear 
      `}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<Image
				src={imagen}
				width={400}
				alt={title}
				placeholder='blur'
				blurDataURL='../'
				className={`
          card__background 
          left-0 top-0 right-0 bottom-0 
          rounded-lg relative filter brightness-75 
          saturate-120 contrast-85 transform scale-100 
          translate-z-0 transition duration-300 ease-linear 
			`}
			/>
			<motion.div
				viewport={{ once: false, amount: 0.7 }}
				className={`absolute -bottom-3 lg:-bottom-2 w-full h-full flex justify-center items-end lg:items-end lg:py-0
					${hover ? 'opacity-100' : 'opacity-0'}
					`}
			>
				<h3 className='text-gray-200 font-gravity-bold text-1xl lg:text-2xl whitespace-nowrap shadow-text-lighter'>
					{title}
				</h3>
			</motion.div>
		</div>
	);
};

export default Card;
