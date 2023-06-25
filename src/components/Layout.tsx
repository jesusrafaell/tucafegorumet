import Head from 'next/head';
import { FC, ReactNode, useContext, useEffect } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import AnimationCover from './AnimationCover';
import { AnimationCoverContext } from '@/context/AnimationCoverContext';
import Footer2 from './Footer';
import Footer from './Footer';

interface Props {
	children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	const { completedAnimation, setCompletedAnimation } = useContext(AnimationCoverContext);

	useEffect(() => {
		// Verificar si la página ya ha sido cargada previamente
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
		<>
			<Head>
				<title>tucafegourment</title>
				<meta name='description' content='Tu Cafe Gourmet' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{/* {(completedAnimation || !active) && ( */}
			<Header />
			<SideBar />
			{/* )} */}
			{/* {active ? <AnimationCover title={'TuCafeGourmet'}> */}
			{children}
			{/* </AnimationCover> : children} */}
			{/* {(completedAnimation || !active) && */}
			<Footer />
			{/* } */}
		</>
	);
};

export default Layout;
