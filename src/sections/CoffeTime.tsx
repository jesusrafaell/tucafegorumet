/* eslint-disable @next/next/no-img-element */
import Card from '@/components/Card';
import cardItems from '@/utils/cardItems';
import { textVariant } from '@/utils/monition';
import { motion } from 'framer-motion';

export const CoffeTime = () => {
	return (
		<section
			id='coffeTime'
			className='
			overflow-hidden relative 
			w-screen
			py-20
			min-h-screen
      bg-center
      bg-cover
			flex
			items-center
			justify-center
			h-full'
			// bg-coffeTime
		>
			<div className='flex w-full justify-center h-full'>
				<div className='container max-auto flex flex-col'>
					<motion.div
						variants={textVariant(0.5, -10)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.7 }}
						className='flex w-full justify-center items-center'
					>
						<h2 className='text-2xl lg:text-4xl font-gravity-bold uppercase text-gray-700 -mb-10'>
							HOW TO DRINK TU CAFÉ
						</h2>
					</motion.div>
					{/* contedor cart cups */}
					<div className='flex items-start justify-center text-white  ml-0 lg:-ml-[100px]'>
						{/* card grid */}
						<div
							className='card-grid 
								flex
								flex-col
								lg:grid
								grid-cols-1
								gap-x-8
								gap-y-0
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
