import Image from 'next/image';
import React, { FC, useState } from 'react';

interface Props {
	card: {
		title: string;
		imagen: string;
		imagen2: string;
	};
}

const Card: FC<Props> = ({ card }) => {
	const { title, imagen, imagen2 } = card;
	const [hover, setHover] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	return (
		<div
			className={`
        card relative 
        w-[340px]
				h-2/3
        lg:w-full
        cursor-pointer 
        list-none 
        before:content 
        before:block 
        before:pb-[150%]
        before:w-full"
				transition duration-300 ease-linear 
      `}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<Image
				src={imagen}
				alt={title}
				className={`
          card__background absolute 
          left-0 top-0 right-0 bottom-0 
          bg-contain 
          bg-no-repeat
          bg-center rounded-lg
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
				className={`
					${hover ? 'opacity-100' : 'opacity-0'}
          card__background absolute 
          left-0 top-0 right-0 bottom-0 
          bg-contain 
          bg-no-repeat
          bg-center rounded-lg
          filter brightness-75 
          saturate-120 contrast-85 
          transform scale-100 
          translate-z-0 
        `}
			/>
			<div className='card_content absolute left-0 top-20 w-full h-full flex justify-center items-center lg:items-end py-20'>
				<h3 className='text-black font-gravity-bold text-2xl shadow-text-lighter'>{title}</h3>
			</div>
		</div>
	);
};

export default Card;
