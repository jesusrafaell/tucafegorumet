/* eslint-disable @next/next/no-img-element */
import { CartContext } from '@/context/CartContext';
import { ProductCartDto, ProductDto } from '@/utils/products';
import Link from 'next/link';
import React, { FC, useContext } from 'react';
import { BsEyeFill, BsPlus } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { AnimationProductContext } from '@/context/AnimationProductContext';

interface Props {
	id: number;
	product: ProductDto;
}

const Product: FC<Props> = ({ id, product }) => {
	const { handleProduct } = useContext(AnimationProductContext);
	const { addToCart } = useContext(CartContext);
	const { name, price, disponible } = product;
	const router = useRouter();
	return (
		<AnimatePresence>
			<motion.div
				key={router.route}
				initial='initialState'
				animate='animateState'
				exit='exitState'
				transition={{
					duration: 2,
				}}
				variants={{
					initialState: {
						opacity: 0,
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
					},
					animateState: {
						opacity: 1,
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
					},
					exitState: {
						clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
					},
				}}
			>
				<div className=' bg-white'>
					<div
						className='
				border border-[#e4e4e4] h-[230px]
				mb-2 relative overflow-hidden group
				trasition'
					>
						<div className='w-full h-full flex justify-center items-center'>
							<div className='w-[200px] mx-auto flex justify-center items-center'>
								<img
									className='max-h-[160px] group-hover:scale-110:'
									//
									src='https://www.tucafegourmet.com/wp-content/uploads/2018/07/TuCafe.png'
									alt='hola'
								/>
							</div>
						</div>
						{/* buttuns */}
						<div
							className='absolute top-6
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
										className='flex justify-center 
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
								bg-white flex justify-center
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
					<div className='text-sm capitalize text-gray-500'>{disponible ? 'Disponible' : 'Agotado'}</div>
					<Link
						href={{
							pathname: `/product/${name}`,
						}}
					>
						<h2 className='font-gravity-regular mb-1'>{name}</h2>
						<div className='font-gravity-regular'>{price}$</div>
					</Link>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Product;
