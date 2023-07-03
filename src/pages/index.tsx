import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';
import { AnimationProductContext } from '@/context/AnimationProductContext';
import { motion } from 'framer-motion';
import CupLoading from '@/components/CupLoading';
import { setActiveLink } from 'react-scroll/modules/mixins/scroller';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const HomePage = dynamic(() => import('@/sections/Home'));
const ShopPage = dynamic(() => import('@/sections/Shop'));
const AboutPage = dynamic(() => import('@/sections/About'));
const CoffeTimePage = dynamic(() => import('@/sections/CoffeTime'));

export default function Home() {
	const router = useRouter();

	const [loading, setLoading] = useState(true);

	const { setColor } = useContext(BackGroundColorContext);

	const { isActive, handleToProduct } = useContext(AnimationProductContext);

	useEffect(() => {
		if (router && router.asPath) {
			router.push(router.asPath, undefined, { scroll: true }).catch((error) => {
				console.error('Error al redirigir la ruta:', error);
			});
		}
		setColor('bg-base-dark');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	useEffect(() => {
		if (HomePage && ShopPage && AboutPage && CoffeTimePage) {
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [HomePage, ShopPage, AboutPage, CoffeTimePage]);

	if (loading) {
		return (
			<div
				className='
						bg-base-dark
						overflow-x-hidden
						flex 
						flex-col
						gap-y-10
						justify-center items-center
						h-screen w-sreen'
			>
				<CupLoading />
				<h1 className='capitalize text-2xl text-white'>Loading...</h1>
			</div>
		);
	}

	return (
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
	);
}
