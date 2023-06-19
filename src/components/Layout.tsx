import Head from 'next/head';
import { FC, ReactNode, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import AnimationCover from './AnimationCover';
import { AnimationCoverContext } from '@/context/AnimationCoverContext';

interface Props {
	children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	const { completedAnimation } = useContext(AnimationCoverContext);

	console.log('completed', completedAnimation);

	return (
		<>
			<Head>
				<title>tucafegourment</title>
				<meta name='description' content='Tu Cafe Gourmet' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{completedAnimation && (
				<>
					<Header />
					<SideBar />
				</>
			)}
			<AnimationCover title={'TuCafeGourmet'}>{children}</AnimationCover>
			{completedAnimation && <Footer />}
		</>
	);
};

export default Layout;
