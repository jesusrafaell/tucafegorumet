import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import dynamic from 'next/dynamic';
import { useContext, useEffect } from 'react';
import { AnimationCoverContext } from '@/context/AnimationCoverContext';

const inter = Inter({ subsets: ['latin'] });
const HomePage = dynamic(() => import('@/sections/Home'));
const ShopPage = dynamic(() => import('@/sections/Shop'));
const AboutPage = dynamic(() => import('@/sections/About'));

export default function Home() {
	const { isLoading, setIsLoading } = useContext(AnimationCoverContext);

	useEffect(() => {
		setIsLoading(false);
	}, [setIsLoading]);

	return (
		<Layout active={true}>
			<div
				className={`
				overflow-hidden}
			`}
			>
				<>
					<HomePage />
					<ShopPage />
					<AboutPage />
				</>
			</div>
		</Layout>
	);
}
