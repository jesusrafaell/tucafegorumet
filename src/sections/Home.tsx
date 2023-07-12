import Hero from '@/components/Hero';
import Hero2 from '@/components/Hero2';
import Product from '@/components/Product';
import { textVariant } from '@/utils/monition';
import products from '@/utils/products';
import { motion } from 'framer-motion';

export const Home = () => {
	return (
		<section
			id='coffeTime'
			className='h-full  
			overflow-x-hidden relative 
			bg-base-dark'
		>
			{/* <CarouselCustom /> */}
			<Hero />
		</section>
	);
};

export default Home;
