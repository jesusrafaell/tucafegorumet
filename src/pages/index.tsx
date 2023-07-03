import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';
import { AnimationProductContext } from '@/context/AnimationProductContext';
import { motion } from 'framer-motion';
import CupLoading from '@/components/CupLoading';

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
		if (router && router.asPath && !loading) {
			setTimeout(() => {
				router.push(router.asPath, undefined, { scroll: true, shallow: true }).catch((error) => {
					console.error('Error al redirigir la ruta:', error);
				});
			}, 1000);
		}
		setColor('bg-base-dark');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	useEffect(() => {
		if (HomePage && ShopPage && AboutPage && CoffeTimePage) {
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [HomePage, ShopPage, AboutPage, CoffeTimePage]);

	return (
		<motion.div
			initial={{
				x: 0,
				opacity: 0,
			}}
			animate={isActive ? 'active' : 'inactive'}
			variants={{
				active: {
					x: '-100vw',
					opacity: 0,
					transition: {
						duration: 2,
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
					window.scrollTo(0, 0);
				}
			}}
			className='overflow-hidden'
		>
			{loading ? (
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
			) : (
				<div>
					<HomePage />
					<ShopPage />
					<CoffeTimePage />
					<AboutPage />
				</div>
			)}
		</motion.div>
	);
}
