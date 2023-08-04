import { CartContext } from '@/context/CartContext';
import { ProductCartDto, ProductDto } from '@/utils/products';
import React, { FC, useContext, useEffect, useLayoutEffect } from 'react';
import { BsEyeFill, BsPlus } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AnimationProductContext } from '@/context/AnimationProductContext';
import Image from 'next/image';
import { textVariant } from '@/utils/motion';

interface Props {
	product: ProductDto;
}

const Product: FC<Props> = ({ product }) => {
	const { handleProduct } = useContext(AnimationProductContext);
	const { addToCart } = useContext(CartContext);
	const { name, price, disponible, imagen } = product;

	return (
		<motion.div
			className='
				flex flex-col justify-center items-center rounded-md
			text-black bg-gray-700 bg-opacity-10 w-full h-full p-5
				'
		>
			<div
				m-10
				className='
				group
				grad
				w-[150px]
				h-[250px]
				lg:w-[300px]
				lg:h-[200px]
				group
				flex
				cursor-pointer 
				border border-transparent
				productCard
				justify-center
				items-center
				relative overflow-hidden trasition'
			>
				<div className='w-full h-full flex justify-center items-center'>
					<div className='w-[300px] lg:w-[200px] h-[300px]  mx-auto flex justify-center items-center'>
						<Image className={`transition duration-200 ease-in group-hover:scale-110`} src={imagen} alt='hola' />
					</div>
				</div>
				{/* buttuns */}
				<div
					className='
								absolute top-6
								-right-11 p-2
								group-hover:right-5
								flex flex-col items-center 
								justify-center gap-y-2 
								opacity-0 
								group-hover:opacity-100 
								trasition-all duration-200'
				>
					{disponible && (
						<button onClick={() => addToCart(product as ProductCartDto)}>
							<div
								className='flex justify-center rounded-sm
												items-center text-white 
												w-10 h-10 bg-red-500'
							>
								<BsPlus className='text-3xl' />
							</div>
						</button>
					)}
					<div
						onClick={() => handleProduct(product)}
						className='
									w-10 h-10 
								bg-white flex justify-center rounded-sm
									items-center
									text-primary drop-shadow-xl
									cursor-pointer
							'
					>
						<BsEyeFill />
					</div>
				</div>
			</div>
			{/* category & title & price */}
			<motion.div
				variants={textVariant(0.5, 10)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.7 }}
			>
				<div
					className='flex flex-col justify-center items-center cursor-pointer whitespace-nowrap'
					onClick={() => handleProduct(product)}
				>
					<h2 className='font-gravity-regular mb-4'>{name}</h2>
					<div className='font-gravity-bold text-2xl mb-1 text-base-red'>{price}$</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Product;
