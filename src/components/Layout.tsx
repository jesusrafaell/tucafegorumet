import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';

interface Props {
	children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<title>tucafegourment</title>
				<meta name='description' content='Tu Cafe Gourmet' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<SideBar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
