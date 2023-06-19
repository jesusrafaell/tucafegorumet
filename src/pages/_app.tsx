import AnimationCoverProvider from '@/context/AnimationCoverContext';
import CartProvider from '@/context/CartContext';
import SidebarProvider from '@/context/SidebarContext';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AnimationCoverProvider>
			<SidebarProvider>
				<CartProvider>
					<Component {...pageProps} />
				</CartProvider>
			</SidebarProvider>
		</AnimationCoverProvider>
	);
}
