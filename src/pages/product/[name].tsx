import { CartContext } from '@/context/CartContext';
import products, { ProductCartDto, ProductDto } from '@/utils/products';
import { GetServerSideProps, NextPage } from 'next';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';
import Link from 'next/link';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import bgImage from '@/images/splash-product.png';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { textVariant } from '@/utils/monition';

interface ProductPageProps {
	product: ProductCartDto | ProductDto;
}

const Product: NextPage<ProductPageProps> = ({ product }) => {
	const { id, name, price, description, imagen, li } = product;
	const { addToCartProduct, handleGetAmount } = useContext(CartContext);
	const [amount, setAmount] = useState(handleGetAmount(id) ? handleGetAmount(id) : 1);
	const { setColor } = useContext(BackGroundColorContext);
	const [effect, setEffect] = useState(false);
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	const controls = useAnimation();
	const controls2 = useAnimation();
	const controlImage = useAnimation();
	const controlBg = useAnimation();
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		setLoading(false);
	}, []);

	const handleClick = async () => {
		if (!isAnimating) {
			await controls2.start({ opacity: 0, y: 20, transition: { duration: 0.2, ease: 'easeOut' } });
			await controls2.start({ width: 0, transition: { duration: 0.7, ease: 'easeOut' } });
			await controlBg.start({ opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } });
			await controls.start({ width: '100%', transition: { duration: 0.5, ease: 'easeIn' } });
			await controlImage.start({ scale: 1.3, transition: { duration: 0.5, ease: 'easeIn' } });
			await controlBg.start({ x: 100 });
			setIsAnimating(true);
		} else {
			setIsAnimating(false);
			await controlImage.start({ scale: 1, transition: { duration: 0.5, ease: 'easeOut' } });
			Promise.all([
				await controls.start({ width: '50%', transition: { duration: 0.7, ease: 'easeOut' } }),
				await controls2.start({ width: '50%' }),
			]);
			Promise.all([
				await controls2.start({ opacity: 1, y: 0, transition: { duration: 0.3 } }),
				await controlBg.start({ opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeIn' } }),
			]);
		}
	};

	const handleIncrement = (value: number) => {
		setAmount(value + 1);
	};

	const handleDecrease = (value: number) => {
		setAmount(value - 1 < 1 ? 1 : value - 1);
	};

	useLayoutEffect(() => {
		setColor('bg-base-dark');
		if (router.pathname.includes('product')) {
			window.scrollTo(0, 0);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	let easing = [0.6, -0.05, 0.01, 0.99];

	const stagger = {
		animate: {
			transition: {
				staggerChildren: 0.05,
			},
		},
	};

	const fadeInUp = {
		initial: {
			y: 60,
			opacity: 0,
			transition: { duration: 0.6, ease: easing },
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: easing,
			},
		},
	};
	return (
		<motion.section
			id='infoProduct'
			className=' 
			w-full 
			h-screen
			max-w-screen 
			text-white
			justify-center
			items-center'
			initial='initial'
			animate='animate'
			exit={{ opacity: 0 }}
		>
			<div
				className='
					lg:h-full w-full flex items-center 
					justify-center
					py-20
					lg:py-0
					lg:justify-between
					lg:mt-0
					flex-col lg:flex-row '
			>
				<motion.h1 className='flex lg:hidden font-bold text-2xl' variants={fadeInUp}>
					{name}
				</motion.h1>
				<motion.div
					transition={{ duration: 0.5 }}
					className={`
						lg:bg-base
						transition duration-500
						w-[50%]
						h-full flex items-center justify-center relative
						flex-col
					`}
					initial={{ opacity: 1 }}
					animate={controls}
				>
					<motion.div
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1, transition: { ease: 'easeIn' } }}
						exit={{ opacity: 0 }}
						transition={{ delay: 0.2 }}
						className='z-20 w-[300px] lg:w-full h-full flex items-center justify-center flex-col'
					>
						<motion.div
							className='hidden lg:flex absolute w-full top-[40%] justify-center items-center flex-col -z-1'
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1, transition: { ease: 'easeIn' } }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0.2 }}
						>
							<motion.div initial={{ opacity: 1 }} animate={controlBg}>
								<Image loading='lazy' width={600} src={bgImage} alt='splah' />
							</motion.div>
						</motion.div>
						<motion.div initial={{ opacity: 1 }} animate={controlImage} className='relative'>
							<div
								className={`hidden lg:flex absolute h-[50px] -top-10 justify-center items-start w-full ${
									isAnimating ? 'opacity-100' : 'opacity-0'
								} `}
							>
								<motion.div
									variants={textVariant(0.2, 10)}
									initial='hidden'
									animate='show'
									exit='hidden'
									className='justify-center items-center flex w-full absolute left-0'
								>
									<h1 className='text-black font-extrabold whitespace-nowrap text-4xl'>{name}</h1>
								</motion.div>
							</div>
							<Image
								onClick={() => handleClick()}
								loading='lazy'
								className='animate-heart cursor-pointer hidden lg:block z-30 w-[500px]'
								src={imagen}
								alt={name}
							/>
							<div
								className={`hidden lg:flex absolute h-[50px] -bootm-10 justify-center items-start w-full ${
									isAnimating ? 'opacity-100' : 'opacity-0'
								} `}
							>
								<motion.div
									variants={textVariant(0.2, 10)}
									initial='hidden'
									animate='show'
									exit='hidden'
									className='justify-center items-center flex w-full left-0'
								>
									<div
										onClick={() => handleClick()}
										className={`
											text-1xl bg-black text-white
											w-[30px] h-[30px]
											 rounded-xl justify-center items-center
											cursor-pointer
											flex
											ml-10
											p-1 animate-pulseBtn
											right-0
										`}
									>
										<IoMdClose />
									</div>
								</motion.div>
							</div>
						</motion.div>
						<Image className='cursor-pointer block lg:hidden' src={imagen} alt={name} />
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ opacity: 1 }}
					animate={loading ? { opacity: 1 } : controls2}
					className={`
						w-full lg:w-[50%] transition duration-500 h-full flex
						flex-col gap-y-10 items-center justify-center`}
				>
					<motion.div variants={stagger} className='w-[80%] relative'>
						<motion.div variants={fadeInUp} className='text-[14px] flex justify-start lg:justify-end py-2'>
							<Link
								href={'/#shop'}
								// onClick={() => router.push(`/#shop`, undefined, { scroll: false })}
								className='
									flex flex-row
									justify-center
									items-center
									gap-x-3
									lg:text-[17px] 
									hover:animate-pulse
									text-red-200 cursor-pointer text-center 
									hover:text-blue-100 hover:underline'
							>
								<FaArrowLeft />
								Back to Shop
							</Link>
						</motion.div>
						<div
							onClick={() => handleClick()}
							className='animate-pulseBtn hidden text-1xl bg-white text-black  rounded-md p-2 z-20 cursor-pointer w-[40px] lg:flex justify-center  items-center'
						>
							<FaEye />
						</div>
						<motion.h1 className='hidden font-bold m lg:flex text-2xl my-5  justify-center' variants={fadeInUp}>
							{name}
						</motion.h1>
						<motion.p
							className='text-[15px] lg:text-[18px] font-light whitespace-normal text-justify'
							variants={fadeInUp}
						>
							{description}
						</motion.p>
						<motion.ul
							variants={fadeInUp}
							className='text-gray-300 py-5 px-5 lg:px-10 list-disc flex flex-col gap-y-2 text-[13px] lg:text-[18px]'
						>
							{li.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</motion.ul>
						<motion.div variants={fadeInUp}>
							<div className='flex font-bold items-center w-full mb-4'>
								<svg
									aria-hidden='true'
									className='w-5 h-5 text-yellow-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<title>First star</title>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
								</svg>
								<svg
									aria-hidden='true'
									className='w-5 h-5 text-yellow-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<title>Second star</title>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
								</svg>
								<svg
									aria-hidden='true'
									className='w-5 h-5 text-yellow-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<title>Third star</title>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
								</svg>
								<svg
									aria-hidden='true'
									className='w-5 h-5 text-yellow-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<title>Fourth star</title>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
								</svg>
								<svg
									aria-hidden='true'
									className='w-5 h-5 text-gray-300 dark:text-gray-500'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<title>Fifth star</title>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
								</svg>
								<span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
								<p className='ml-2 text-1xl font-bold text-gray-200'>4.95</p>
							</div>
						</motion.div>
						<motion.div
							variants={fadeInUp}
							className='flex items-start lg:items-center justify-between flex-col lg:flex-row gap-y-2 py-5 lg:py-0'
						>
							<div className='flex items-center self-end lg:self-start rounded p-1 bg-[#cdcdcd] text-black'>
								<div
									onClick={() => handleDecrease(amount)}
									className='p-1  h-[24px] w-[24px] flex justify-center items-center bg-[#cdcdcd] text-black rounded cursor-pointer border-white
									hover:bg-white
									'
								>
									<IoMdRemove className='text-2xl' />
								</div>
								<div className='px-3 w-[34px] font-bold'>{amount}</div>
								<div
									onClick={() => handleIncrement(amount)}
									className='p-1  h-[24px] w-[24px] flex justify-center items-center bg-[#cdcdcd] text-black rounded cursor-pointer border-white
									 hover:bg-white'
								>
									<IoMdAdd />
								</div>
							</div>
							<span className='font-bold text-[18px] lg:text-2xl select-none'>
								{`$ ${parseFloat(`${Number(price) * amount}`).toFixed(2)}`}
							</span>
						</motion.div>
						<motion.div variants={fadeInUp} className='mt-10 flex items-center justify-center'>
							<button
								onClick={() => {
									setEffect(true);
									addToCartProduct({ ...product, amount });
									setTimeout(() => {
										setEffect(false);
									}, 1000);
								}}
								className={`
									relative
									cursor-pointer rounded h-12 w-40 border tracking-wider leading-none overflow-hidden hover:text-teal-60
									border-blue-500 bg-transparent 
									text-white text-base hover:animate-pulseBtn
								`}
							>
								<span
									className={`absolute inset-0 flex items-center 
									${effect && 'text-black translate-x-0'}
								justify-center 
								duration-300 transition-transform transform -translate-x-full
								 bg-white
								`}
								></span>
								<span
									className={`
									${effect && 'text-black translate-x-0'}
								absolute inset-0 flex justify-center items-center font-bold capitalize`}
								>
									{effect ? 'Now Buy' : 'add to cart'}
								</span>
							</button>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</motion.section>
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
