import React, { useContext } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { SidebarContext } from '@/context/SidebarContext';
import { CartContext } from '@/context/CartContext';
import CartItem from './CartItem';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const SideBar = () => {
	const { isOpen, handleClose } = useContext(SidebarContext);
	const { cart, total, itemAmount, clearCart } = useContext(CartContext);
	return (
		<div
			className={`
      ${isOpen ? 'right-0' : '-right-full'}
        w-full bg-white fixed top-0 h-full 
				shadow-2xl 
				md:w-[30vw]
        xl:max-w-[35vw] 
				transition-all duration-300 
        z-50 px-4 
				lg:px-[35px]
      `}
		>
			<div
				className='flex items-center 
			justify-between py-6 border-b'
			>
				<div className='uppercase text-sm font-gravity-bold'>
					{cart.length ? (
						<div className='flex'>
							<AiOutlineShoppingCart className='text-2xl mr-2 ' />
							<span className='py-1'>{itemAmount}</span>
						</div>
					) : null}
				</div>
				{/* icon */}
				<div
					onClick={handleClose}
					className='cursor-pointer w-8 h-8 flex 
					justify-center items-center'
				>
					<IoMdArrowForward className='text-2xl' />
				</div>
			</div>
			<div
				className='
					flex flex-col gap-y-2 
					px-4
					lg:px-0
					h-[420px] lg:h-[480px]
					overflow-y-auto overflow-x-hidden border-b
			'
			>
				{!cart.length ? (
					<div className='flex justify-center items-center w-full h-full'>
						<AiOutlineShoppingCart className='text-8xl text-gray-400' />
					</div>
				) : (
					cart.map((product, index) => {
						return <CartItem key={index} item={product} />;
					})
				)}
			</div>
			{/* sidebar bottom */}
			<div className='flex flex-col gap-y-3 py-4 mt-4'>
				<div className='flex w-full justify-between items-center'>
					{/* total */}
					<div className='uppercase font-gravity-bold'>
						<span className='mr-2'>Total:</span>$ {total.toFixed(2)}
					</div>
					<div
						onClick={() => clearCart()}
						className='cursor-pointer py-4 bg-red-500 text-white w-10 h-10 flex justify-center items-center text-xl rounded-xl'
					>
						<FiTrash2 />
					</div>
				</div>
				<Link
					href={'/'}
					className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-gravity-regular'
				>
					View Cart
				</Link>
				<Link
					href={'/'}
					className='bg-primary flex p-4 justify-center items-center text-white w-full font-gravity-regular'
				>
					Checkout
				</Link>
			</div>
		</div>
	);
};

export default SideBar;
