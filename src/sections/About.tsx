/* eslint-disable @next/next/no-img-element */
import { textVariant } from '@/utils/monition';
import { motion } from 'framer-motion';
import imageOurStory from '@/images/Our-Story.jpg';
import Image from 'next/image';

export const About = () => {
	return (
		<section
			id='about'
			className='
			overflow-hidden relative 
			w-screen
			min-h-screen
			flex
			items-center 
			justify-center
			h-full'
		>
			<div className='flex items-center justify-center'>
				<div className='container max-auto flex flex-col'>
					<motion.div
						variants={textVariant(0.5, -10)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex w-full justify-center items-center mb-4 lg:mb-20'
					>
						<h2
							className='
							text-2xl lg:text-4xl 
							font-satoshi
							text-gray-200
							font-bold
							uppercase'
						>
							HOW TU CAFÉ WAS BORN
						</h2>
					</motion.div>
					<div className='flex min-w-screen min-h-full flex-col lg:flex-row lg:gap-x-[80px] justify-center items-center '>
						{/* image */}
						<motion.div
							variants={textVariant(0.5, 10)}
							initial='hidden'
							whileInView='show'
							viewport={{ once: false, amount: 0.7 }}
							className='bg-white flex-1 order-1 my-4 py-0 lg:-order-1 w-[300px] 
							lg:w-[full] lg:p-6 lg:shadow-2xl'
						>
							<Image src={imageOurStory} alt='Our-Story-LR' />
						</motion.div>
						{/* text */}
						<motion.div
							variants={textVariant(0.5, -10)}
							initial='hidden'
							whileInView='show'
							viewport={{ once: false, amount: 0.7 }}
							className='lg:flex-1 flex flex-col justify-end px-4 lg:px-0'
						>
							{/* info */}
							<div className='flex-1 flex flex-col  items-center'>
								<p className='text-1xl lg:text-2xl font-gravity-bold my-4 uppercase text-white'>
									MARCIO & MARCEL SOPENA
								</p>
								<p className='text-gray-100'>
									Established in 1996, Tu Café is a family-owned & operated business dedicated to providing
									gourmet, Cuban style espresso. Tu Café is carefully crafted to deliver a gourmet Cuban-style
									espresso experience like none other. With an alluring aroma, smooth flavor and touch of life, Tu
									Café is more than just a morning coffee, it is coffee that compliments your lifestyle.
								</p>
								<span className='hidden lg:block self-start font-gravity-regular py-4 text-white'>
									Tu Café, make it yours!
								</span>
							</div>
						</motion.div>
					</div>
					<span className='block lg:hidden self-start font-gravity-regular py-4'>Tu Café, make it yours!</span>
				</div>
			</div>
		</section>
	);
};

export default About;
