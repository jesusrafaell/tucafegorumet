import Image from 'next/image';
import React, { FC, useState } from 'react';
import { textVariant } from '@/utils/monition';
import { motion } from 'framer-motion';
import CupLoading from './CupLoading';

interface Props {
	card: {
		id: number;
		title: string;
		imagen: string;
		imagen2: string;
	};
}

const Card: FC<Props> = ({ card }) => {
	const { title, imagen, imagen2 } = card;
	const [hover, setHover] = useState(false);

	return (
		<div
			className={`
        card relative 
				w-[200px]
        lg:w-full
        cursor-pointer 
        list-none 
        before:block 
        before:w-full
				transition duration-300 ease-linear 
      `}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<Image
				src={imagen}
				alt={title}
				placeholder='blur'
				blurDataURL='../'
				className={`
          card__background 
          left-0 top-0 right-0 bottom-0 
          bg-contain 
          bg-no-repeat
          bg-center rounded-lg
					relative
          filter brightness-75 
          saturate-120 contrast-85 
          transform scale-100 
          translate-z-0 
          transition duration-300 ease-linear 
					${hover ? 'opacity-0' : 'opacity-100'}
			`}
			/>
			<Image
				src={imagen2}
				alt={title}
				placeholder='blur'
				blurDataURL='../'
				className={`
					${hover ? 'opacity-100' : 'opacity-0'}
          card__background absolute 
          bottom-0 
          bg-contain 
          bg-no-repeat
          bg-center rounded-lg
          filter brightness-75 
          saturate-120 contrast-85 
          transform scale-100 
          translate-z-0 
        `}
			/>
			<motion.div
				variants={textVariant(0.5, -10)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.7 }}
				className='card_content absolute -bottom-3 lg:bottom-0 w-full h-full flex justify-center items-end lg:items-end py-5 lg:py-0'
			>
				<h3 className='text-gray-200 font-gravity-bold text-1xl lg:text-2xl whitespace-nowrap shadow-text-lighter'>
					{title}
				</h3>
			</motion.div>
		</div>
	);
};

export default Card;
