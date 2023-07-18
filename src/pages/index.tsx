import { useEffect, useContext, useState, useLayoutEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';
import { AnimationProductContext } from '@/context/AnimationProductContext';
import { motion } from 'framer-motion';
import HomePage from '@/sections/Home';
import ShopPage from '@/sections/Shop';
import OurStoryPage from '@/sections/OurStory';
import CupLoading from '@/components/CupLoading';
import AboutPage from '@/sections/About';
import Hero from '@/components/Hero';

export default function Home() {
	const router = useRouter();

	const { setColor } = useContext(BackGroundColorContext);
	const [loading, setLoading] = useState(false);

	const { isActive, setIsActive } = useContext(AnimationProductContext);

	useLayoutEffect(() => {
		import('./product/[name]');
		import('./services');
		import('./products');
		import('./book');

		const handlePrimary = () => {
			// const handleRouteChangeStart = () => {
			// 	console.log('El navegador está cargando la página');
			// 	setLoading(true);
			// };
			// const handleRouteChangeComplete = () => {
			// 	console.log('El navegador ha terminado de cargar la página');
			// 	setLoading(false);
			// };
			// router.events.on('routeChangeStart', handleRouteChangeStart);
			// router.events.on('routeChangeComplete', handleRouteChangeComplete);
			// return () => {
			// 	router.events.off('routeChangeStart', handleRouteChangeStart);
			// 	router.events.off('routeChangeComplete', handleRouteChangeComplete);
			// };
		};
		handlePrimary();
		setColor('bg-base-light');

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (router && router.asPath) {
			router.push(router.asPath, undefined, { scroll: true }).catch((error) => {
				console.error('Error al redirigir la ruta:', error);
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
						// console.log('go to product detail');
						// handleToProduct();
						setIsActive(false);
					}
				}}
				className='overflow-hidden bg-white'
			>
				<HomePage />
				<ShopPage />
				<AboutPage />
				<Hero />
				<OurStoryPage />
			</motion.div>
		</>
	);
}
