/* eslint-disable @next/next/no-img-element */
import { CartContext } from '@/context/CartContext';
import { ProductCartDto, ProductDto } from '@/utils/products';
import Link from 'next/link';
import React, { FC, useContext } from 'react';
import { BsEyeFill, BsPlus } from 'react-icons/bs';

interface Props {
	id: number;
	product: ProductDto;
}

const Product: FC<Props> = ({ id, product }) => {
	const { addToCart } = useContext(CartContext);
	const { name, price, disponible } = product;
	return (
		<div className=' bg-white'>
			<div
				className='
				border border-[#e4e4e4] h-[250px]
				mb-4 relative overflow-hidden group
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
					<Link
						href={{
							pathname: `/product/${name}`,
						}}
						className='
							w-10 h-10 
						bg-white flex justify-center
							items-center
						  text-primary drop-shadow-xl
							'
					>
						<BsEyeFill />
					</Link>
				</div>
			</div>
			{/* category & title & price */}
			<div className='text-sm capitalize text-gray-500'>{disponible ? 'Disponible' : 'Agotado'}</div>
			<Link
				href={{
					pathname: `/product/${name}`,
				}}
			/>
			<h2 className='font-gravity-regular mb-1'>{name}</h2>
			<div className='font-gravity-regular'>{price}$</div>
		</div>
	);
};

export default Product;
