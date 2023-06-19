/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FC } from 'react';

import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

interface Props {
	item: any;
}

const CartItem: FC<Props> = ({ item }) => {
	const { name, amount } = item;
	return (
		<div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-gravity-light text-gray-500'>
			<div className='w-full min-h-[150px] flex items-center gap-x-4'>
				{/* image */}
				<Link href={`/product/${1}`}>
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
						<Link
							href={`/product/${1}`}
							className='
								text-[13px] uppercase font-gravity-bold
								max-w-[240px] text-primary hover:underline
								'
						>
							{name}
						</Link>
						{/* remove */}
						<div className='text-xl cursor-pointer'>
							<IoMdClose className='text-gray-500 hover:text-red-500 transition' />
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
							<div className='flex-1 flex justify-center items-center cursor-pointer'>
								<IoMdRemove />
							</div>
							{/* amount */}
							<div className='h-full flex justify-center items-center px-1'>{amount}</div>
							{/* plus icon	 */}
							<div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
								<IoMdAdd />
							</div>
						</div>
						{/* product price */}
						<div className='flex-1 flex items-center justify-around'>{'100$'}</div>
						{/* final price */}
						{/* make the price at 2 decimal */}
						<div className='flex-1 flex justify-end items-center text-primary font-gravity-bold'>
							{`$ ${parseFloat(`${150 * amount}`).toFixed(2)}`}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
