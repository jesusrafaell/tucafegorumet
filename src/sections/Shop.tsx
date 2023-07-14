import { NextPage } from 'next';
import { motion } from 'framer-motion';
import products from '@/utils/products';
import { textVariant } from '@/utils/monition';
import ProductSlider from '@/components/ProductSlider';

const Shop: NextPage = () => {
	return (
		<section id='shopHome' className='h-full py-20 w-screen bg-none overflow-hidden relative'>
			<div className='container mx-auto'>
				<motion.div
					variants={textVariant(0.2, 5)}
					initial='hidden'
					whileInView='show'
					className='flex justify-center items-center'
				>
					<h1
						className={`h1-shop relative uppercase font-satoshi text-black font-bold border-b-[2px] py-5 border-base-red text-4xl lg:text-4xl`}
					>
						MAKE IT YOURS!
					</h1>
				</motion.div>
			</div>
			{/* strapi */}
			<div className='container mx-auto py-10'>
				<ProductSlider data={products} />
			</div>
		</section>
	);
};

export default Shop;
