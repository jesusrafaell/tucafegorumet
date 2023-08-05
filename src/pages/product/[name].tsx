import { CartContext } from '@/context/CartContext';
import products, { ProductCartDto, ProductDto } from '@/utils/products';
import { GetServerSideProps, NextPage } from 'next';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ProductSlider from '@/components/ProductSlider';
import Image from 'next/image';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';
import Link from 'next/link';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import bgImage from '@/images/splash-product.png';
import bgImage2 from '@/images/splash-ground.png';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { textVariant } from '@/utils/motion';
import lang from '@/LANG/eng.json';

interface ProductPageProps {
	product: ProductCartDto | ProductDto;
}

const Product: NextPage<ProductPageProps> = ({ product }) => {
	const { id, name, price, description, imagen, li, rank, category } = product;
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

	const otherProducts = products.filter((p) => p.id !== id);

	const startRanking = (rank: number, limit: number) => {
		const result = [];
		for (let i = 0; i < limit; i++) {
			if (i < rank - 1) {
				result.push(
					<svg
						className='w-4 h-4 text-yellow-300'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 22 20'
					>
						<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
					</svg>
				);
			} else {
				result.push(
					<svg
						className='w-4 h-4 text-gray-300 dark:text-gray-500'
						aria-hidden='true'
						fill='currentColor'
						viewBox='0 0 22 20'
					>
						<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
					</svg>
				);
			}
		}
		return result;
	};

	useEffect(() => {
		setLoading(false);
	}, []);

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

	const easing = [0.6, -0.05, 0.01, 0.99];

	const stagger = {
		animate: {
			transition: {
				staggerChildren: 0.05,
				delay: 0.3,
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
				delay: 0.3,
			},
		},
	};
	return (
		<>
			<motion.section
				id='infoProduct'
				className=' 
			bg-base-dark
			w-full 
			h-full
			lg:h-screen
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
					pb-20
					pt-40
					lg:p-0
					lg:justify-between
					lg:mt-0
					flex-col lg:flex-row '
				>
					<motion.h1 className='flex lg:hidden font-bold text-2xl' variants={fadeInUp}>
						{name}
					</motion.h1>
					<motion.div
						className={`
						lg:bg-base-light
						transition duration-500
						w-[50%]
						h-full flex items-center justify-center relative
						flex-col
					`}
						initial={{ width: '100%' }}
						animate={{ width: '50%' }}
						exit={{ width: '100%' }}
						transition={{ duration: 0.5 }}
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
								initial={{ x: -50, opacity: 0 }}
								animate={{ x: 0, opacity: 1, transition: { ease: 'easeIn', delay: 0.3 } }}
								exit={{ opacity: 0 }}
							>
								<motion.div initial={{ opacity: 1 }} animate={controlBg}>
									<Image loading='lazy' width={600} src={category === 'whole' ? bgImage : bgImage2} alt='splah' />
								</motion.div>
							</motion.div>
							<motion.div className='relative'>
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
									// onClick={() => handleClick()}
									loading='lazy'
									className='animate-heart cursor-pointer hidden lg:block z-30 w-[500px]'
									src={imagen}
									alt={name}
								/>
								<div
									className={`hidden lg:flex absolute h-[50px] -bottom-10 justify-center items-start w-full ${
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
											// onClick={() => handleClick()}
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
						// initial={{ width: 0 }}
						// animate={{ width: '50%' }}
						// exit={{ width: 0 }}
						// transition={{ duration: 0.5 }}
						className={`
						w-full lg:w-[50%] transition duration-500 h-full flex
						lg:bg-base-dark
						lg:pt-20
						flex-col gap-y-10 items-center justify-center`}
					>
						<motion.div variants={stagger} className='w-[80%] relative'>
							<motion.div variants={fadeInUp} className='text-[14px] flex justify-start lg:justify-end py-2'>
								<Link
									href={'/products'}
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
									Go to products
								</Link>
							</motion.div>
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
									{/* start ranking */}

									<div className='flex flex-row gap-x-1'>{startRanking(rank, lang.limitStart)}</div>
									{/* ranking */}
									<p className='ml-2 text-1xl font-bold text-gray-200'>{rank}</p>
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
									border-blue-500 bg-white
									text-black text-base hover:animate-pulseBtn
								`}
								>
									<span
										className={`absolute inset-0 flex items-center 
									${effect && 'text-black translate-x-0'}
										justify-center 
										duration-300 transition-transform transform -translate-x-full
									bg-black
								`}
									></span>
									<span
										className={`
									${effect && 'text-white translate-x-0'}
								absolute inset-0 flex justify-center items-center font-bold capitalize`}
									>
										{effect ? lang.shop_button_2 : lang.shop_button_1}
									</span>
								</button>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</motion.section>
			<div className='w-screen h-full bg-base-light'>
				<div className='container mx-auto py-10'>
					<ProductSlider data={otherProducts} />
				</div>
			</div>
		</>
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
