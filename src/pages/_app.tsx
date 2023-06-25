import AnimationCoverProvider from '@/context/AnimationCoverContext';
import CartProvider from '@/context/CartContext';
import SidebarProvider from '@/context/SidebarContext';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import AnimationProductProvider from '@/context/AnimationProductContext';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<AnimationCoverProvider>
			<SidebarProvider>
				<CartProvider>
					<AnimationProductProvider>
						<Component {...pageProps} />
					</AnimationProductProvider>
				</CartProvider>
			</SidebarProvider>
		</AnimationCoverProvider>
	);
}
