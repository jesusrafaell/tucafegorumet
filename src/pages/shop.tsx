import React, { useContext, useLayoutEffect } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Product from '@/components/ProductShop';
import products from '@/utils/products';
import { textVariant } from '@/utils/monition';
import CarouselCustom from '@/components/CarouselCustom';

const Shop: NextPage = () => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
			}}
			animate={{
				opacity: 1,
				clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
			}}
			exit={{
				opacity: 0,
				clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
			}}
			transition={{
				duration: 0.4,
				ease: 'easeIn',
			}}
		>
			<section id='shop' className='h-full py-20 w-screen bg-white overflow-hidden relative'>
				<CarouselCustom />
				<div className='container mx-auto'>
					<motion.div
						variants={textVariant(0.2, 5)}
						initial='hidden'
						whileInView='show'
						className='flex justify-center items-center'
					>
						<h1
							className={`mb-10 h1-shop relative uppercase font-satoshi text-black font-bold border-b-[2px] py-5 border-base-red text-3xl lg:text-4xl`}
						>
							Products
						</h1>
					</motion.div>
					<motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
						className='grid grid-col-1 lg:grid-cols-3 gap-x-10 gap-y-10 container mx-auto'
					>
						{products.map((product, index) => (
							<motion.div
								initial={{
									opacity: 0,
									y: 10,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								exit={{
									opacity: 0,
								}}
								transition={{
									delay: index * 0.2,
									duration: 0.4,
								}}
								key={index}
							>
								<Product product={product} key={index} />
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>
		</motion.div>
	);
};

export default Shop;
