import Product from '@/components/Product';
import { AnimationProductContext } from '@/context/AnimationProductContext';
import { productLisVariant, textVariant } from '@/utils/monition';
import products from '@/utils/products';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

export const Shop = () => {
	const router = useRouter();

	const { isActive, setIsActive, setProduct, handleToProduct } = useContext(AnimationProductContext);

	useEffect(() => {
		setIsActive(false);
		setProduct(null);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let easing = [0.6, -0.05, 0.01, 0.99];
	return (
		<section
			id='shop'
			className='h-full w-screen 
				overflow-hidden relative 
				min-h-screen'
		>
			<motion.div
				initial={{
					x: 0,
					opacity: 0,
					// transition: {
					// 	duration: 0.6,
					// 	ease: easing,
					// },
				}}
				animate={isActive ? 'active' : 'inactive'}
				variants={{
					active: {
						x: -100,
						opacity: 0,
						transition: {
							duration: 0.6,
							ease: 'easeOut',
						},
					},
					inactive: {
						x: 0,
						opacity: 1,
					},
				}}
				exit={{ opacity: 0 }}
				onAnimationComplete={() => {
					if (isActive) {
						console.log('go to product detail');
						handleToProduct();
					}
				}}
			>
				<div className='py-8'>
					<div className='container mx-auto'>
						<div className='items-center justify-center px-10 py-20 flex'>
							<motion.div variants={textVariant(0.2, 5)} initial='hidden' whileInView='show'>
								<h1
									className={`
										relative
										uppercase
										font-gravity-bold
										text-4xl 
										lg:text-4xl
									`}
								>
									MAKE IT YOURS!
								</h1>
							</motion.div>
						</div>
						<div
							className='grid 
									grid-cols-1 
									md:grid-cols-2
									lg:grid-cols-3
									xl:grid-cols-3
									gap-x-[50px]
									gap-y-[20px]
									max-w-sm 
									mx-auto 
									md:max-w-none 
									md:mx-0'
						>
							{products.map((product, index) => {
								return (
									<motion.div
										key={index}
										variants={productLisVariant(0.5, 20)}
										initial='hidden'
										whileInView='show'
										viewport={{ once: false, amount: 0.7 }}
									>
										<Product id={index} product={product} />;
									</motion.div>
								);
							})}
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Shop;
