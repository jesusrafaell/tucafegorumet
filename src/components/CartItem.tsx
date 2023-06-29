/* eslint-disable @next/next/no-img-element */
import { AnimationProductContext } from '@/context/AnimationProductContext';
import { CartContext } from '@/context/CartContext';
import { SidebarContext } from '@/context/SidebarContext';
import { ProductDto } from '@/utils/products';
import Link from 'next/link';
import { FC, useContext } from 'react';

import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

interface Props {
	item: any;
}

const CartItem: FC<Props> = ({ item }) => {
	const { id, name, price, amount } = item;
	const { handleProduct } = useContext(AnimationProductContext);
	const { increaseAmount, decreaseAmount, removeFromCart } = useContext(CartContext);
	const { handleClose } = useContext(SidebarContext);
	return (
		<div className='flex gap-x-4 z-20 py-2 lg:px-2 border-b border-gray-200 w-full font-gravity-light text-gray-500'>
			<div className='w-full min-h-[150px] flex items-center gap-x-4'>
				{/* image */}
				<Link href={`/product/${1}`} onClick={() => handleClose()}>
					<img
						className='max-w-[80px]'
						src='https://www.tucafegourmet.com/wp-content/uploads/2018/07/TuCafe.png'
						alt='hola'
					/>
				</Link>
				<div className='w-full flex flex-col'>
					{/* title & remove */}
					<div className='flex justify-between mb-2'>
						{/* title */}
						<div
							onClick={() => {
								console.log('go product', name);
								handleProduct(item as ProductDto);
								handleClose();
							}}
							className='
								cursor-pointer
								text-[13px] uppercase font-gravity-bold
								max-w-[240px] text-primary hover:underline
								'
						>
							{name}
						</div>
						{/* remove */}
						<div className='text-xl cursor-pointer'>
							<IoMdClose
								onClick={() => removeFromCart(id)}
								className='text-gray-500 hover:text-red-500 transition'
							/>
						</div>
					</div>
					<div className='flex gap-x-2 h-[36px] text-[13px]'>
						{/* qty	 */}
						<div
							className='
								flex flex-1 
								max-w-[80px] items-center h-full border 
								text-primary font-gravity-bold
						'
						>
							{/* minus icon */}
							<div
								onClick={() => decreaseAmount(id)}
								className='flex-1 flex justify-center items-center cursor-pointer'
							>
								<IoMdRemove />
							</div>
							{/* amount */}
							<div className='h-full flex justify-center items-center px-1'>{amount}</div>
							{/* plus icon	 */}
							<div
								onClick={() => increaseAmount(id)}
								className='flex-1 h-full flex justify-center items-center cursor-pointer'
							>
								<IoMdAdd />
							</div>
						</div>
						{/* product price */}
						<div className='flex-1 flex items-center justify-around'>{`${price}$`}</div>
						{/* final price */}
						{/* make the price at 2 decimal */}
						<div className='flex-1 flex justify-end items-center text-primary font-gravity-bold'>
							{`$ ${parseFloat(`${price * amount}`).toFixed(2)}`}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
