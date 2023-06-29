import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { AnimationCoverContext } from '@/context/AnimationCoverContext';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });
const HomePage = dynamic(() => import('@/sections/Home'));
const ShopPage = dynamic(() => import('@/sections/Shop'));
const AboutPage = dynamic(() => import('@/sections/About'));
const CoffeTimePage = dynamic(() => import('@/sections/CoffeTime'));

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		if (router && router.asPath) {
			router.push(router.asPath, undefined, { scroll: true, shallow: true }).catch((error) => {
				console.error('Error al redirigir la ruta:', error);
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className={`
				overflow-hidden}
			`}
		>
			<HomePage />
			<ShopPage />
			<CoffeTimePage />
			<AboutPage />
		</div>
	);
}
