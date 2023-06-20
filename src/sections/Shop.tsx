import Product from '@/components/Product';
import { textVariant } from '@/utils/monition';
import products from '@/utils/products';
import { motion } from 'framer-motion';

export const Shop = () => {
	return (
		<section
			id='shop'
			className='h-full w-screen 
			overflow-hidden relative 
			min-h-screen '
		>
			<div className='py-10'>
				<div className='container mx-auto'>
					<div className='items-center justify-start px-10 py-10 flex'>
						<motion.div
							variants={textVariant(0.2, 10)}
							initial='hidden'
							whileInView='show'
							viewport={{ once: false, amount: 0.7 }}
						>
							<h1 className='font-gravity-bold text-xl'>Shops</h1>
						</motion.div>
					</div>
					<div
						className='grid grid-cols-1 
                md:grid-cols-1
                lg:grid-cols-3
                xl:grid-cols-3
                gap-[50px]
                max-w-sm 
								mx-auto 
								md:max-w-none 
								md:mx-0'
					>
						{products.map((product, index) => {
							return (
								<motion.div
									key={index}
									variants={textVariant(0.2, 10)}
									initial='hidden'
									whileInView='show'
									viewport={{ once: false, amount: 0.7 }}
								>
									<Product id={index} product={product} />;
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Shop;
