import Hero from '@/components/Hero';
import Hero2 from '@/components/Hero2';
import Product from '@/components/Product';
import { textVariant } from '@/utils/monition';
import products from '@/utils/products';
import { motion } from 'framer-motion';

export const Home = () => {
	return (
		<section
			id='home'
			className='h-full w-screen 
			overflow-x-hidden relative 
			min-h-screen '
		>
			<Hero />
			<Hero2 />
		</section>
	);
};

export default Home;
