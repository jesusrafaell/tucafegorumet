/* eslint-disable @next/next/no-img-element */
import { textVariant } from '@/utils/monition';
import { motion } from 'framer-motion';
import imageOurStory from '@/images/Our-Story-LR.jpg';

export const CoffeTime = () => {
	return (
		<section
			id='about'
			className='
			overflow-hidden relative 
			w-screen
			py-40
			min-h-screen
			bg-coffeTime
      bg-center
      bg-cover
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
						<h2 className='text-2xl lg:text-4xl font-gravity-bold uppercase'>HOW TO DRINK TU CAFÉ</h2>
					</motion.div>
					<div className='flex min-w-screen min-h-full flex-col lg:flex-row lg:gap-x-[80px] justify-center items-center'></div>
				</div>
			</div>
		</section>
	);
};

export default CoffeTime;
