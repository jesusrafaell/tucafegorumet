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
	const { color } = useContext(BackGroundColorContext);

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
