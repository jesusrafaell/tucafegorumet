import Product from '@/components/Product';
import { AnimationProductContext } from '@/context/AnimationProductContext';
import { textVariant } from '@/utils/monition';
import products from '@/utils/products';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

export const Shop = () => {
	const router = useRouter();

	const { isActive, setIsActive, setProduct, handleToProduct } = useContext(AnimationProductContext);

	useEffect(() => {
		setIsActive(false);
		setProduct(null);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//animacion
	const [ref, inView] = useInView({
		triggerOnce: false,
		threshold: 0.5,
	});

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (inView && !isVisible) {
			setIsVisible(true);
		} else if (!inView && isVisible) {
			setIsVisible(false);
		}
	}, [inView, isVisible]);

	return (
		<motion.section
			ref={ref}
			id='shop'
			className='h-full w-screen 
			overflow-hidden relative 
			min-h-screen'
			initial={{
				x: 0,
				opacity: 0,
			}}
			animate={isActive ? 'active' : 'inactive'}
			variants={{
				active: {
					x: -100,
					opacity: 0,
					backdropFilter: 'blur(10px)',
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
					<div className='items-center justify-center lg:px-10 pt-10 pb-5 flex'>
						<motion.div variants={textVariant(0.2, 5)} initial='hidden' whileInView='show'>
							<h1
								className={`
									h1-shop
									relative
									uppercase
									font-satoshi
									text-black
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
						className='
									hidden
									lg:grid 
									lg:grid-cols-2
									gap-x-[50px]
									'
					>
						{isVisible &&
							products.map((product, index) => (
								<motion.div
									key={index}
									initial={{
										x: index % 2 === 0 ? '-80%' : '80%',
										opacity: 0,
									}}
									animate={{
										x: 0,
										opacity: 1,
									}}
									exit={{
										x: index % 2 === 0 ? '-80%' : '80%',
										opacity: 0,
									}}
									transition={{ duration: 1 }}
									viewport={{ once: false, amount: 0.7 }}
								>
									<Product product={product} />
								</motion.div>
							))}
					</motion.div>
					<motion.div
						className='
									grid 
									grid-cols-1
									lg:hidden
									gap-x-[50px]
									'
					>
						{products.map((product, index) => (
							<Product product={product} key={index} />
						))}
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default Shop;
