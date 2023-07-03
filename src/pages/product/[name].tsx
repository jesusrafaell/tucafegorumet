import { CartContext } from '@/context/CartContext';
import products, { ProductCartDto, ProductDto } from '@/utils/products';
import { GetServerSideProps, NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CupLoading from '@/components/CupLoading';
import ReactImageMagnify from 'react-image-magnify';
import Image from 'next/image';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';
// import Image from 'next/image';

interface ProductPageProps {
	product: ProductCartDto | ProductDto;
}

const Product: NextPage<ProductPageProps> = ({ product }) => {
	const { name, price, description, imagen } = product;
	const { addToCart } = useContext(CartContext);
	const [loading, setLoading] = useState(true);
	const { setColor } = useContext(BackGroundColorContext);

	let easing = [0.6, -0.05, 0.01, 0.99];

	useEffect(() => {
		setLoading(false); // Simulate data loading completed
		setColor('bg-base');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<section
			className='flex 
			w-full h-screen
			max-w-screen 
			justify-center
			items-center 
			overflow-hidden'
		>
			<motion.div
				className='lg:py-32'
				initial={{
					x: '100%',
					opacity: 0,
				}}
				animate={{
					x: 0,
					opacity: 1,
					transition: {
						duration: 2,
						ease: easing,
					},
				}}
				exit={{
					opacity: 0,
					x: '-100%',
				}}
			>
				{loading ? (
					<div className='pt-32 pb-12 lg:py-32 w-screen h-screen flex items-center'>
						<CupLoading />
					</div>
				) : (
					<div className='container mx-auto'>
						<div className='flex flex-col lg:flex-row items-center'>
							<div className='p-4 rounded-md hover:opacity-100 transition-opacity'>
								<div className='image flex flex-col pt-40 lg:pt-0'>
									<div className='w-full h-full'>
										<Image
											alt={name}
											src={imagen}
											className='
											lg:max-w-sm
											product-img--main 
											hover:scale-150
											transition
											duracation-400
										'
										/>
										{/* <ReactImageMagnify
										{...{
											smallImage: {
												alt: name,
												isFluidWidth: true,
												src: imagen.src,
											},
											largeImage: {
												src: imagen.src,
												width: 1200,
												height: 1800,
											},
										}}
									/> */}
									</div>
								</div>
							</div>
							<div className='flex-1 text-center lg:text-left lg:ml-20'>
								<h1 className='text-[26px] font-gravity-regular mb-2 max-w-[450px] mx-auto'>{name}</h1>
								<div className='text-xl text-red-500 font-gravity-bold mb-6'>$ {price}</div>
								<p className='mb-8'>{description}</p>
								<button
									onClick={() => addToCart(product as ProductCartDto)}
									className='bg-primary py-4 px-8 text-white buttonHover rounded-md'
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				)}
			</motion.div>
		</section>
	);
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({ params }) => {
	const name = params?.name as string;

	const product = products.find((item) => item.name === name);

	if (!product) {
		console.log('Not Found product');
		return {
			notFound: true,
		};
	}

	return {
		props: {
			product,
		},
	};
};

export default Product;
