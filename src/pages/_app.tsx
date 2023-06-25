import AnimationCoverProvider from '@/context/AnimationCoverContext';
import CartProvider from '@/context/CartContext';
import SidebarProvider from '@/context/SidebarContext';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import AnimationProductProvider from '@/context/AnimationProductContext';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<AnimationCoverProvider>
			<SidebarProvider>
				<CartProvider>
					<AnimationProductProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</AnimationProductProvider>
				</CartProvider>
			</SidebarProvider>
		</AnimationCoverProvider>
	);
}
