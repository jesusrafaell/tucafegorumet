/* eslint-disable @next/next/no-img-element */
import { CartContext } from '@/context/CartContext';
import products, { ProductCartDto, ProductDto } from '@/utils/products';
import { GetServerSideProps, NextPage } from 'next';
import { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsArrowLeftCircle } from 'react-icons/bs';

interface ProductPageProps {
	product: ProductCartDto | ProductDto;
}

const Product: NextPage<ProductPageProps> = ({ product }) => {
	const { name, price, description } = product;
	console.log('Product.tsx', product);
	const { addToCart } = useContext(CartContext);

	let easing = [0.6, -0.05, 0.01, 0.99];

	return (
		<motion.div
			initial={{
				x: 80,
				opacity: 0,
			}}
			animate={{
				x: 0,
				opacity: 1,
				transition: {
					duration: 0.6,
					ease: easing,
				},
			}}
			exit={{
				opacity: 0,
			}}
			onAnimationComplete={() => {
				window.scrollTo(0, 2);
				// console.log('finish animation product');
				// console.log(window.scrollY);
			}}
		>
			<section className='pt-32 pb-12 lg:py-32 w-screen h-screen flex items-center'>
				<div className='container mx-auto'>
					<div className='grid lg:hidden w-full justify-start items-center'>
						<span className='flex hover:animate-pulse text-[12px]  text-gray-500 font-gravity-regular mb-2 mx-auto cursor-pointer'>
							<BsArrowLeftCircle className='text-2xl mr-2' />
							<p className='py-1'>Go back Shop</p>
						</span>
					</div>
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
		</motion.div>
	);
};

// Función para obtener los datos del producto
export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({ params }) => {
	// Obtén el parámetro de la URL (nombre del archivo sin la extensión .tsx)
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
