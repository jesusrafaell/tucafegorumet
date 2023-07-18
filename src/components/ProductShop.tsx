import { CartContext } from '@/context/CartContext';
import { ProductCartDto, ProductDto } from '@/utils/products';
import React, { FC, useContext } from 'react';
import { BsEyeFill, BsPlus } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AnimationProductContext } from '@/context/AnimationProductContext';
import Image from 'next/image';
import { textVariant } from '@/utils/monition';

interface Props {
	product: ProductDto;
}

const ProductShop: FC<Props> = ({ product }) => {
	const { handleProduct } = useContext(AnimationProductContext);
	const { addToCart } = useContext(CartContext);
	const { name, price, disponible, imagen } = product;

	return (
		<motion.div
			onClick={() => handleProduct(product)}
			className='
				rounded-md 
				relative
				group
				text-black bg-black bg-opacity-5 lg:hover:border-blue-500 lg:hover:animate-pulseBtn shadow-lg
				p-10
				flex flex-col justify-center items-center
				w-full
				h-full
				'
		>
			<div
				className='
				cursor-pointer 
				border border-transparent
				productCard
				justify-center
				items-center
				relative overflow-hidden trasition'
			>
				<div className='w-full h-full flex justify-center items-center'>
					<div className='w-[200px] h-[200px]  mx-auto flex justify-center items-center'>
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
					className='flex flex-col justify-start items-start cursor-pointer whitespace-nowrap'
					onClick={() => handleProduct(product)}
				>
					<div className='text-sm capitalize mb-1 text-gray-500'>{disponible ? 'available' : 'exhausted'}</div>
					<h2 className='font-gravity-regular mb-2'>{name}</h2>
					<div className='font-gravity-bold text-2xl text-red-400 self-end'>{price}$</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ProductShop;
