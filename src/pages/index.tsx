import { useEffect, useContext, useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';
import { AnimationProductContext } from '@/context/AnimationProductContext';
import { motion } from 'framer-motion';

import HomePage from '@/sections/Home';
import ShopPage from '@/sections/Shop';
import AboutPage from '@/sections/About';
import CoffeTimePage from '@/sections/CoffeTime';
import CupLoading from '@/components/CupLoading';
import Hero2 from '@/components/Hero2';

export default function Home() {
	const router = useRouter();

	const { setColor } = useContext(BackGroundColorContext);
	const [loading, setLoading] = useState(false);

	const { isActive, setIsActive, handleToProduct } = useContext(AnimationProductContext);

	useLayoutEffect(() => {
		import('./product/[name]');

		const handlePrimary = () => {
			const handleRouteChangeStart = () => {
				console.log('El navegador está cargando la página');
				setLoading(true);
			};

			const handleRouteChangeComplete = () => {
				console.log('El navegador ha terminado de cargar la página');
				setLoading(false);
			};

			router.events.on('routeChangeStart', handleRouteChangeStart);
			router.events.on('routeChangeComplete', handleRouteChangeComplete);

			return () => {
				router.events.off('routeChangeStart', handleRouteChangeStart);
				router.events.off('routeChangeComplete', handleRouteChangeComplete);
			};
		};
		const cachedData = localStorage.getItem('cachedData');
		if (!cachedData) {
			localStorage.setItem('cachedData', 'true');
			handlePrimary();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (router && router.asPath) {
			router.push(router.asPath, undefined, { scroll: true }).catch((error) => {
				console.error('Error al redirigir la ruta:', error);
			});
		}
		setColor('bg-base-light');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useLayoutEffect(() => {
		if (localStorage.getItem('loadingShown') === 'true') {
			setLoading(false);
		} else {
			localStorage.setItem('loadingShown', 'true'); //
			setLoading(false);
		}
	}, []);

	return (
		<>
			<motion.div
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
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={isActive ? 'active' : 'inactive'}
				variants={{
					active: {
						// x: -100, //esto agregarlo al ir a product
						opacity: 0,
						transition: {
							duration: 0.5,
							ease: 'easeOut',
						},
					},
					inactive: {
						opacity: 1,
						// x: '0',
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
						// handleToProduct();
						setIsActive(false);
					}
				}}
				className='overflow-hidden bg-white'
			>
				<CoffeTimePage />
				<ShopPage />
				<HomePage />
				<AboutPage />
				{/* <Hero2 /> */}
			</motion.div>
		</>
	);
}
