import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import dynamic from 'next/dynamic';
import { useContext, useEffect } from 'react';
import { AnimationCoverContext } from '@/context/AnimationCoverContext';

const inter = Inter({ subsets: ['latin'] });
const HomePage = dynamic(() => import('@/sections/Home'));

export default function Home() {
	const { isLoading, setIsLoading } = useContext(AnimationCoverContext);

	useEffect(() => {
		setIsLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout>
			<div
				className={`
				overflow-hidden h-[100vh]}
			`}
			>
				<HomePage />
			</div>
		</Layout>
	);
}
