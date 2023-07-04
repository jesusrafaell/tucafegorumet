import { useEffect, useContext, useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';
import { AnimationProductContext } from '@/context/AnimationProductContext';
import { motion } from 'framer-motion';

import HomePage from '@/sections/Home';
import ShopPage from '@/sections/Shop';
import AboutPage from '@/sections/About';
import CoffeTimePage from '@/sections/CoffeTime';
import Footer from '@/components/Footer';
import CupLoading from '@/components/CupLoading';

export default function Home() {
	const router = useRouter();

	const { setColor } = useContext(BackGroundColorContext);
	const [loading, setLoading] = useState(true);

	const { isActive, handleToProduct } = useContext(AnimationProductContext);

	useEffect(() => {
		// Cargar el componente Product en segundo plano
		import('./product/[name]');
	}, []);

	useEffect(() => {
		if (router && router.asPath) {
			router.push(router.asPath, undefined, { scroll: true }).catch((error) => {
				console.error('Error al redirigir la ruta:', error);
			});
		}
		setColor('bg-base-dark');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useLayoutEffect(() => {
		if (localStorage.getItem('loadingShown') === 'true') {
			setLoading(false);
		} else {
			localStorage.setItem('loadingShown', 'true'); //
		}
	}, []);

	return (
		<>
			<div
				className={`
				${loading ? 'fixed' : 'hidden'}
						z-40
						bg-base-dark
						overflow-x-hidden
						flex flex-col gap-y-10
						justify-center items-center
						h-screen w-screen
				`}
			>
				<CupLoading />
				<h1 className='capitalize text-2xl text-white'>Loading...</h1>
			</div>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={isActive ? 'active' : 'inactive'}
				variants={{
					active: {
						opacity: 0,
						transition: {
							duration: 0.5,
							ease: 'easeOut',
						},
					},
					inactive: {
						opacity: 1,
						transition: {
							duration: 0.5,
							ease: 'easeIn',
						},
					},
				}}
				exit={{ opacity: 0 }}
				onAnimationComplete={() => {
					if (isActive) {
						console.log('go to product detail');
						handleToProduct();
						// window.scrollTo(0, 0);
					}
				}}
				className='overflow-hidden'
			>
				<HomePage />
				<ShopPage />
				<CoffeTimePage />
				<AboutPage />
				<Footer />
			</motion.div>
		</>
	);
}
