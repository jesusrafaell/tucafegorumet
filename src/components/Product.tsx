import { CartContext } from '@/context/CartContext';
import { ProductCartDto, ProductDto } from '@/utils/products';
import Link from 'next/link';
import React, { FC, useContext } from 'react';
import { BsEyeFill, BsPlus } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
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
	const router = useRouter();

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
				rounded-xl p-5
				lg:flex
				lg:flex-row
				justify-center
				items-center
			text-white
				cursor-pointer 
				border border-transparent
				hover:border-blue-500
				hover:animate-pulseBtn
				bg-white bg-opacity-10
				group
				productCard'
		>
			<div
				className='
							h-[150px]
							lg:h-[220px]
							mb-2 relative overflow-hidden 
							trasition'
			>
				<div className='w-full h-full flex justify-center items-center'>
					<div className='w-[200px] lg:w-[700px] mx-auto flex justify-center items-center'>
						<Image className={`group-hover:scale-110`} src={imagen} alt='hola' />
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
				className='px-4 w-full'
			>
				<div className='cursor-pointer whitespace-nowrap' onClick={() => handleProduct(product)}>
					<h2 className='font-gravity-regular mb-4'>{name}</h2>
					<div className='font-gravity-regular mb-1'>{price}$</div>
				</div>
				<div className='text-sm flex justify-end capitalize text-gray-500'>
					{disponible ? 'Disponible' : 'Agotado'}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Product;
