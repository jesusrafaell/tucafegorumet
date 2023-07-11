import React, { useEffect, useRef } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Product from '@/components/Product';
import products from '@/utils/products';
import { textVariant } from '@/utils/monition';
import ProductSlider from '@/components/ProductSlider';

const Shop: NextPage = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = (e: WheelEvent) => {
			e.preventDefault();
			const container = containerRef.current;

			if (container) {
				const scrollAmount = (e.deltaY / 100) * 400;
				const newScrollLeft = container.scrollLeft + scrollAmount;
				container.scrollTo({
					left: newScrollLeft,
					behavior: 'smooth',
				});
			}
		};

		if (containerRef.current) {
			containerRef.current.addEventListener('wheel', handleScroll);
		}

		return () => {
			if (containerRef.current) {
				containerRef.current.removeEventListener('wheel', handleScroll);
			}
		};
	}, []);

	return (
		<section id='shop' className='h-full py-20 w-screen bg-base-dark overflow-hidden relative'>
			<div className='container mx-auto '>
				<motion.div
					variants={textVariant(0.2, 5)}
					initial='hidden'
					whileInView='show'
					className='flex justify-center items-center'
				>
					<h1
						className={`h1-shop relative uppercase font-satoshi text-white font-bold border-b-[2px] py-5 border-base-red text-4xl lg:text-4xl`}
					>
						MAKE IT YOURS!
					</h1>
				</motion.div>
			</div>
			{/* strapi */}
			<ProductSlider data={products} />
		</section>
	);
};

export default Shop;

/* <motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
						className='hidden lg:grid lg:grid-cols-2 gap-x-20 pt-5'
					>
						<motion.div
							className='flex flex-col gap-y-10'
							variants={variantsProducts('-30%')}
							initial='hidden'
							whileInView='show'
						>
							{products.map((product, index) => index % 2 === 0 && <Product key={index} product={product} />)}
						</motion.div>
						<motion.div
							className='flex flex-col gap-y-10'
							variants={variantsProducts('30%')}
							initial='hidden'
							whileInView='show'
							// viewport={{ once: false, amount: 0.7 }}
						>
							{products.map((product, index) => index % 2 !== 0 && <Product key={index} product={product} />)}
						</motion.div> 
	 </motion.div> 

					 	{products.map((product, index) => (
					 		<div key={index} className='card'>
					 			<Product product={product} key={index} />
					 		</div>
					 	))}
	*/
