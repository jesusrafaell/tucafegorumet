import Image from 'next/image';
import React from 'react';
import info1 from '@/images/info/info1.png';
import info2 from '@/images/info/info2.png';
import info3 from '@/images/info/info3.png';
import { motion } from 'framer-motion';

const Info = () => {
	return (
		<section id='info' className='flex w-screen  h-full justify-center items-center'>
			<div className='flex w-full lg:w-[1000px] h-full flex-col justify-center items-center  py-20 gap-y-10'>
				{/* 1 img & text */}
				<div className='flex w-full h-full flex-col lg:flex-row justify-between px-5'>
					{/* text1 */}
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='w-full lg:w-[500px] flex flex-col justify-center items-center gap-y-5 relative'
					>
						<div className='absolute top-0 lg:top-10 right-0 lg:left-0 opacity-10'>
							<span className='text-9xl font-gravity-bold'>01</span>
						</div>
						<h1 className='text-2xl text-black font-prilly-monly font-bold uppercase flex flex-row items-end'>
							<motion.div
								initial={{ x: 50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.4, ease: 'easeIn' }}
								className='flex lg:hidden justify-center items-center w-[220px] h-full mr-5 '
							>
								<Image src={info1} alt='instagram img' className='rounded-md' />
							</motion.div>
							What do we specialize ?
						</h1>
						<p className='text-[15px] lg:text-1xl  text-gray-700'>
							{`
							We are dedicated to providing gourmet Cuban-style espresso. We specialize in crafting and offering a
							unique espresso experience with an alluring aroma, smooth flavor, and a touch of vitality. Our
							company is committed to delivering coffee that complements customers' lifestyles, going beyond just a
							morning beverage. In addition to the exquisite Cuban-style espresso, we promote and sell other
							products such as café con leche, ice coffee, and cortadito at our coffee stations
              `}
						</p>
					</motion.div>
					{/* img */}
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='hidden lg:flex justify-center items-center w-full h-full px-10 lg:px-0 lg:w-[400px] lg:h-[300px]'
					>
						<Image src={info1} alt='instagram img' className='rounded-md' />
					</motion.div>
				</div>
				{/* 2 img & text */}
				<div className='flex w-full h-full flex-row justify-between px-5'>
					{/* img */}
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='hidden lg:flex w-[400px] h-full lg:w-[400px] lg:h-[400px]'
					>
						<Image src={info2} alt='instagram img' className='rounded-md' />
					</motion.div>
					{/* text1 */}
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='w-full lg:w-[500px] flex flex-col justify-center items-center gap-y-5 relative '
					>
						<div className='absolute top-20 left-0 opacity-10'>
							<span className='text-9xl font-gravity-bold'>02</span>
						</div>
						<h1 className='text-2xl text-black font-prilly-monly font-bold uppercase flex flex-row items-end'>
							What do we offer ?
							<motion.div
								initial={{ scale: 0, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.4, ease: 'easeIn' }}
								className='flex lg:hidden w-[300px] h-full'
							>
								<Image src={info2} alt='instagram img' className='rounded-md' />
							</motion.div>
						</h1>
						<p className='text-1xl  text-gray-700'>
							{`
							We offer gourmet Cuban-style espresso, café con leche, ice coffee, and cortadito. Our goal is to
							provide a distinctive and high-quality coffee experience with enticing aromas, smooth flavors, and a
							touch of vitality.
              `}
						</p>
					</motion.div>
				</div>
				<div className='flex w-full h-full flex-col lg:flex-row justify-between items-center px-5'>
					{/* text1 */}
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='w-full h-full lg:w-[400px] flex flex-col justify-center items-center gap-y-5 relative'
					>
						<div className='absolute top-0 left-0 opacity-10'>
							<span className='text-9xl font-gravity-bold'>03</span>
						</div>
						<h1 className='text-2xl text-black font-prilly-monly font-bold uppercase'>Tu Café ?</h1>
						<p className='text-1xl  text-gray-700'>
							{`
							Tu Café is carefully crafted to deliver the ultimate Cuban style espresso experience. This
							full-bodied gourmet blend is finely ground and ready to brew. You will immediately notice the
							alluring aroma, smooth flavor and natural sweetness of this distinctly bold and engaging roast.
              `}
						</p>
					</motion.div>
					{/* img */}
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4, ease: 'easeIn' }}
						className='flex pt-5 lg:pt-0 w-[300px] h-full  lg:w-[400px] lg:h-[400px]'
					>
						<Image src={info3} alt='instagram img' className='rounded-md' />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Info;
