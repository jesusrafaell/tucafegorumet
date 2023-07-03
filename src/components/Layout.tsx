import Head from 'next/head';
import { FC, ReactNode, useContext, useEffect } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import { AnimationCoverContext } from '@/context/AnimationCoverContext';
import Footer from './Footer';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';

interface Props {
	children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	const { completedAnimation, setCompletedAnimation } = useContext(AnimationCoverContext);
	const { color } = useContext(BackGroundColorContext);

	useEffect(() => {
		const isPageLoaded = localStorage.getItem('isPageLoaded');

		if (isPageLoaded === 'loaded') {
			console.log('La página ha sido cargada anteriormente en el navegador');
			// setCompletedAnimation(true);
		} else {
			console.log('Es la primera vez que la página se carga en el navegador');
			localStorage.setItem('isPageLoaded', 'loaded');
		}
	}, [setCompletedAnimation]);

	return (
		<div className={color}>
			<Head>
				<title>tucafegourment</title>
				<meta name='description' content='Tu Cafe Gourmet' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<SideBar />
			{children}
		</div>
	);
};

export default Layout;
