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
	const [actualImagen, setActualImagen] = useState(imagen);

	const hoverImagen = () => {
		console.log('hover', title);
		setActualImagen(imagen2);
	};

	const ExitHoverImagen = () => {
		setActualImagen(imagen);
	};

	return (
		<div
			className={`
        card relative 
        w-[350px]
        lg:w-[400px]
        cursor-pointer 
        list-none 
        before:content 
        before:block 
        before:pb-[150%]
        before:w-full"
        transition
      `}
			onMouseEnter={hoverImagen}
			onMouseLeave={ExitHoverImagen}
		>
			<div
				className='
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
        '
				style={{ backgroundImage: `url(${actualImagen})` }}
			></div>
			<div className='card_content absolute left-0 -top-8 lg:top-0 bottom-0 w-full h-full p-4 flex flex-col justify-end items-center'>
				<h3
					className='
          text-black font-gravity-bold text-2xl 
          shadow-text-lighter
        '
				>
					{title}
				</h3>
				{/* <p className='card__category'>Category</p> */}
			</div>
		</div>
	);
};

export default Card;
