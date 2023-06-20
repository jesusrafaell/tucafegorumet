import Hero from '@/components/Hero';
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
		</section>
	);
};

export default Home;
