import Image, { StaticImageData } from 'next/image';
import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '@/utils/monition';

interface Props {
	card: {
		id: number;
		title: string;
		imagen: StaticImageData;
		imagen2: StaticImageData;
	};
}

const Card: FC<Props> = ({ card }) => {
	const { id, title, imagen, imagen2 } = card;
	const [hover, setHover] = useState(false);

	return (
		<motion.div
			variants={textVariant(0.2 * id, 10)} //duracion, direccion
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.7 }}
			className={`
				w-[200px]
				h-[200px]
				lg:h-[300px]
				border-b
				lg:border-none
        card relative 
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
				width={400}
				alt={title}
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
				width={400}
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
			<div
				className='card_content absolute bottom-0
				w-full h-full flex justify-center
			  items-end lg:items-end py-5 lg:py-0'
			>
				<h3 className='text-gray-200 font-gravity-bold text-1xl lg:text-2xl shadow-text-lighter'>{title}</h3>
			</div>
		</motion.div>
	);
};

export default Card;
