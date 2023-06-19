import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AnimationCover from '@/components/AnimationCover';
import HomePage from '@/sections/Home';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [HW, setHW] = useState(true);
	const [isInitialRender, setIsInitialRender] = useState(true);
	const [completedAnimation, setCompletedAnimation] = useState(false);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	const router = useRouter();
	useEffect(() => {
		const goTo = () => {
			const loadingTimeout = setTimeout(() => {
				console.log('go to', router.asPath);
				router.push(router.asPath, undefined, { scroll: false });
			}, 200);
			return () => clearTimeout(loadingTimeout);
		};
		if (completedAnimation && router) {
			goTo();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [completedAnimation, router.asPath]);

	return (
		<Layout>
			<div
				className={`
				overflow-hidden h-[100vh]}
			`}
			>
				{/* <AnimationCover
					title={'TuCafeGourmet'}
					setCompletedAnimation={setCompletedAnimation}
					isLoading={isLoading}
				> */}
				<Header />
				<HomePage />
				<SideBar />
				{/* </AnimationCover> */}

				{completedAnimation && (
					<>
						{/* <Header />
						<SkillsPage />
						<AboutPage />
						<WorksPage />
						<ContactPage /> */}
					</>
				)}
			</div>
		</Layout>
	);
}
