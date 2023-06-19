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
			<div className='py-16'>
				<div className='container mx-auto'>
					<motion.div
						variants={textVariant(0.2, 10)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='grid grid-cols-1 
                md:grid-cols-1
                lg:grid-cols-3
                xl:grid-cols-3
                gap-[30px]
                max-w-sm 
								mx-auto 
								md:max-w-none 
								md:mx-0'
					>
						{products.map((product, index) => {
							return (
								<div key={index}>
									<Product id={index} product={product} />;
								</div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Home;
