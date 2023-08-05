import AnimationCoverProvider from '@/context/AnimationCoverContext';
import CartProvider from '@/context/CartContext';
import SidebarProvider from '@/context/SidebarContext';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import AnimationProductProvider from '@/context/AnimationProductContext';
import Layout from '@/components/Layout';
import BackGroundColorProveider from '@/context/BackgorundColorContext';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<BackGroundColorProveider>
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
		</BackGroundColorProveider>
	);
}
