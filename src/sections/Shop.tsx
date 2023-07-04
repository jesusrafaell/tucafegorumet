import Product from '@/components/Product';
import { AnimationProductContext } from '@/context/AnimationProductContext';
import { textVariant, variantsProducts } from '@/utils/monition';
import products from '@/utils/products';
import { motion } from 'framer-motion';

import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

export const Shop = () => {
	const router = useRouter();

	const { isActive, setIsActive, setProduct } = useContext(AnimationProductContext);

	useEffect(() => {
		setIsActive(false);
		setProduct(null);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section
			id='shop'
			className={`h-full w-screen 
			overflow-hidden relative 
			min-h-screen`}
		>
			<div className='py-8'>
				<div className='container mx-auto'>
					<div
						className='items-center justify-center lg:px-10 pt-10 pb-5 flex
					'
					>
						<motion.div variants={textVariant(0.2, 5)} initial='hidden' whileInView='show'>
							<h1
								className={`
									h1-shop
									relative
									uppercase
									font-satoshi
									text-white
									font-bold
									text-4xl 
									lg:text-4xl
								`}
							>
								MAKE IT YOURS!
							</h1>
						</motion.div>
					</div>
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
						transition={{ delay: 1 }}
						className='
									hidden
									lg:grid 
									lg:grid-cols-2
									gap-x-[50px]
									gap-y-[10px]
									'
					>
						<motion.div
							variants={variantsProducts('-30%')}
							initial='hidden'
							whileInView='show'
							// viewport={{ once: false, amount: 0.7 }}
						>
							{products.map((product, index) => index % 2 === 0 && <Product key={index} product={product} />)}
						</motion.div>
						<motion.div
							variants={variantsProducts('30%')}
							initial='hidden'
							whileInView='show'
							// viewport={{ once: false, amount: 0.7 }}
						>
							{products.map((product, index) => index % 2 !== 0 && <Product key={index} product={product} />)}
						</motion.div>
					</motion.div>
					<motion.div
						className='
									grid 
									grid-cols-1
									lg:hidden
									gap-y-[20px]
									'
					>
						{products.map((product, index) => (
							<Product product={product} key={index} />
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Shop;
