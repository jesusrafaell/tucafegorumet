/* eslint-disable @next/next/no-img-element */
import Layout from '@/components/Layout';
import { CartContext } from '@/context/CartContext';
import products, { ProductCartDto, ProductDto } from '@/utils/products';
import { GetServerSideProps, NextPage } from 'next';
import { useContext, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

interface ProductPageProps {
	product: ProductCartDto | ProductDto;
}

const Product: NextPage<ProductPageProps> = ({ product }) => {
	const { name, price, description } = product;
	const { addToCart } = useContext(CartContext);
	if (!product) {
		return <section>Loading...</section>;
	}

	console.log('ya en el producto');

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const tl = gsap.timeline();

		// tl.to('.product-page', {
		// 	marginRight: 0,
		// 	opacity: 1,
		// 	duration: 0.5,
		// 	// width: '100%',
		// });
	}, []);

	let easing = [0.6, -0.05, 0.01, 0.99];

	return (
		<motion.div
			initial={{
				x: 80,
				opacity: 0,
				// transition: {
				// 	duration: 0.6,
				// 	ease: easing,
				// },
			}}
			animate={{
				x: 0,
				opacity: 1,
				transition: {
					duration: 0.6,
					ease: easing,
				},
			}}
			exit={{ opacity: 0 }}
			onAnimationComplete={() => {
				console.log('finish animation product');
			}}
		>
			<Layout active={false}>
				<section className='product-page opacity-1 pt-32 pb-12 lg:py-32 w-screen h-screen flex items-center'>
					<div className='container mx-auto'>
						{/* img & text */}
						<div className='flex flex-col lg:flex-row items-center'>
							{/* img */}
							<div>
								<img
									className='max-w-[200px] lg:max-w-sm'
									//
									src='https://www.tucafegourmet.com/wp-content/uploads/2018/07/TuCafe.png'
									alt={name}
								/>
							</div>
							{/* text */}
							<div className='flex-1 text-center lg:text-left'>
								<h1 className='text-[26px] font-gravity-regular mb-2 max-w-[450px] mx-auto'>{name}</h1>
								<div className='text-xl text-red-500 font-gravity-bold mb-6'>$ {price}</div>
								<p className='mb-8'>{description} </p>
								<button
									onClick={() => addToCart(product as ProductCartDto)}
									className='bg-primary py-4 px-8 text-white'
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</motion.div>
	);
};

// Función para obtener los datos del producto
export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({ params }) => {
	// Obtén el parámetro de la URL (nombre del archivo sin la extensión .tsx)
	const name = params?.name as string;

	const product = products.find((item) => item.name === name);

	if (!product) {
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
