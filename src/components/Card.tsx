import Image, { StaticImageData } from 'next/image';
import React, { FC, useState } from 'react';
import { textVariant } from '@/utils/monition';
import { motion } from 'framer-motion';
import CupLoading from './CupLoading';
import { CupItem } from '@/utils/cardItems';

interface Props {
	cup: CupItem;
	selectCup: CupItem;
	handleSelectCup: (cup: CupItem) => void;
}

const Card: FC<Props> = ({ cup, selectCup, handleSelectCup }) => {
	const { title, imagen, imagen2 } = cup;
	const [hover, setHover] = useState(false);

	return (
		<div
			// lg:h-[300px]
			className={`
				w-[100px]
				h-[100px]
				border-b
				lg:border-none
        card 
				relative 
        cursor-pointer 
        list-none 
				flex
				justify-center
				items-center
				transition duration-300 ease-linear 
				after:bottom-0 after:content after:block after:h-[2px]
				after:absolute after:bg-white after:w-0
				after:transition-all after:duration-300 after:ease-in-out
				hover:after:w-full hover:after:left-0
				${selectCup.id === cup.id ? 'after:w-full after:left-0' : 'after:left-[50%]'}
      `}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={() => handleSelectCup(cup)}
		>
			<Image
				src={imagen}
				width={400}
				alt={title}
				placeholder='blur'
				blurDataURL='../'
				className={`
          card__background 
          rounded-lg relative filter brightness-75 
          saturate-120 contrast-85 transform scale-100 
          translate-z-0 transition duration-300 ease-linear 
			`}
			/>
			{/* <motion.div
				viewport={{ once: false, amount: 0.7 }}
				className={`absolute -bottom-3 lg:-bottom-2 w-full h-full flex justify-center items-end lg:items-end lg:py-0
					${hover ? 'opacity-100' : 'opacity-0'}
					`}
			>
				<h3 className='text-gray-200 font-gravity-bold text-1xl lg:text-2xl whitespace-nowrap shadow-text-lighter'>
					{title}
				</h3>
			</motion.div> */}
		</div>
	);
};

export default Card;
