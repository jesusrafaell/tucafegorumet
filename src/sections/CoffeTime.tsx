/* eslint-disable @next/next/no-img-element */
import Card from '@/components/Card';
import HeroCoffeTime from '@/components/Hero-CoffeTime';
import CupItems, { CupItem } from '@/utils/cardItems';
import { textVariant } from '@/utils/monition';
import { motion, useAnimation } from 'framer-motion';
import { title } from 'process';
import { useEffect, useState } from 'react';

export const CoffeTime = () => {
	const [selectCup, setSelectCup] = useState<CupItem>(CupItems[0]);

	const controlInfo = useAnimation();

	const handleSelectCup = async (cup: CupItem) => {
		await controlInfo.start({ opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeOut' } });
		setSelectCup(cup);
		await controlInfo.start({ y: 20 });
		await controlInfo.start({ y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeIn' } });
	};

	const easing = [0.6, -0.05, 0.01, 0.99];

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

	console.log(selectCup);

	return (
		<section
			id='coffeTime'
			className=' overflow-hidden relative flex h-screen w-screen' // bg-coffetime
		>
			<div className='flex flex-col h-full justify-center items-center w-full lg:w-[60%] px-10 lg:px-20 gap-y-0 lg:gap-y-10'>
				<motion.div className=' transition duration-500 h-[50%] flex flex-col gap-y-4 items-start justify-center'>
					<h2 className='text-2xl lg:text-6xl uppercase text-gray-100 font-satoshi font-bold whitespace-nowrap'>
						How to drink café
					</h2>
					<motion.div
						initial={{ opacity: 1 }}
						animate={controlInfo}
						className='relative text-white w-[400x] h-[200px]'
					>
						<motion.h1 className='text-2xl lg:text-5xl font-bold m lg:flex  font-satoshi my-5' variants={fadeInUp}>
							{selectCup.title}
						</motion.h1>
						<motion.p className='text-[15px] lg:text-[17px] font-light whitespace-normal text-justify max-h-full leading-[1.4] py-5 w-full lg:w-[500px]'>
							{selectCup.info}
						</motion.p>
						{/* <motion.ul
								variants={fadeInUp}
								className='text-gray-300 py-5 px-5 lg:px-10 list-disc flex flex-col gap-y-2 text-[13px] lg:text-[18px]'
							>
								{li.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</motion.ul> */}
					</motion.div>
				</motion.div>
				{/* contedor cart cups */}
				<div className='flex items-center justify-center h-[20%] w-full'>
					<div className='card-grid grid grid-cols-2 lg:flex gap-x-10'>
						{CupItems.map((cup, index) => {
							return <Card key={index} cup={cup} handleSelectCup={handleSelectCup} />;
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CoffeTime;
