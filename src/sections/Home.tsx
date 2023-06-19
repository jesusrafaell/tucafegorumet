import Hero from '@/components/Hero';
import Product from '@/components/Product';
import products from '@/utils/products';

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
					<div
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
