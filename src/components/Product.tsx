import { CartContext } from '@/context/CartContext';
import { ProductCartDto, ProductDto } from '@/utils/products';
import Link from 'next/link';
import React, { FC, useContext } from 'react';
import { BsEyeFill, BsPlus } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AnimationProductContext } from '@/context/AnimationProductContext';
import Image from 'next/image';
import { textVariant } from '@/utils/monition';

interface Props {
	product: ProductDto;
}

const Product: FC<Props> = ({ product }) => {
	const { product: select, handleProduct, isActive } = useContext(AnimationProductContext);
	const { addToCart } = useContext(CartContext);
	const { name, price, disponible, imagen } = product;

	const variantProduct = () => {
		if (isActive && select) {
			if (product.id === select.id) {
				return {
					opacity: 1,
					scale: 1.1,
					transition: { duration: 0.2, ease: 'easeIn' },
				};
			} else {
				return {
					opacity: 0,
					transition: { duration: 0.2, ease: 'easeOut' },
				};
			}
		}
	};

	return (
		<motion.div
			whileInView={variantProduct()}
			className='
				rounded-xl flex flex-col justify-center items-center
			text-white bg-black bg-opacity-20 hover:border-blue-500 hover:animate-pulseBtn
				m-10
				p-5
				'
		>
			<div
				className='
				group
				grad
				w-full
				group
				lg:h-[400px]
				h-[300px]
				flex
				cursor-pointer 
				border border-transparent
				productCard
				justify-center
				items-center
				relative overflow-hidden trasition'
			>
				<div className='w-full h-full flex justify-center items-center'>
					<div className='w-[300px] lg:w-[400px] mx-auto flex justify-center items-center'>
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
					<div className='text-sm capitalize mb-3 text-gray-500'>{disponible ? 'Disponible' : 'Agotado'}</div>
					<h2 className='font-gravity-regular mb-4'>{name}</h2>
					<div className='font-gravity-bold text-2xl mb-1 text-orange-400'>{price}$</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Product;
