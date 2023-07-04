/* eslint-disable @next/next/no-img-element */
import Card from '@/components/Card';
import cardItems from '@/utils/cardItems';
import { textVariant } from '@/utils/monition';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const CoffeTime = () => {
	const [isImagesLoaded, setIsImagesLoaded] = useState(false);

	return (
		<section
			id='coffeTime'
			className='
			overflow-hidden relative 
			w-screen
			py-20
			lg:py-40
			min-h-screen
      bg-center
      bg-cover
			flex
			h-full'
			// bg-coffeTime
		>
			<div className='relative flex flex-col w-full h-100 justify-center items-center'>
				<motion.div
					variants={textVariant(0.5, -10)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.7 }}
					className='flex flex-col gap-y-20 w-full justify-center items-center'
				>
					<h2
						className='
							text-2xl lg:text-4xl
							uppercase
							text-gray-100 
							 py-10 
							lg:py-0
							font-satoshi
							font-bold
						'
					>
						How to drink café
					</h2>
				</motion.div>
				<div className='flex flex-col gap-y-10 justify-center items-center w-full h-full lg:px-40'>
					{/* contedor cart cups */}
					<div className='flex items-start justify-center  ml-0 lg:-ml-[100px]'>
						{/* card grid */}
						<div
							className='card-grid 
								flex
								flex-col
								lg:grid
								gap-x-8
								gap-y-8
								w-full
								items-center
								md:grid-cols-2 
								lg:grid-cols-4
								'
						>
							{/* card */}
							{cardItems.map((card, index) => {
								return <Card key={index} card={card} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CoffeTime;
