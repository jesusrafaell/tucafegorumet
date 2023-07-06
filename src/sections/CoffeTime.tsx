/* eslint-disable @next/next/no-img-element */
import Card from '@/components/Card';
import HeroCoffeTime from '@/components/Hero-CoffeTime';
import CupItems, { CupItem } from '@/utils/cardItems';
import { textVariant } from '@/utils/monition';
import { motion, useAnimation } from 'framer-motion';
import { title } from 'process';
import { useEffect, useState } from 'react';
import coffeTime_img from '@/images/coffe_time_rotate.png';
import Image from 'next/image';
import coffeTimeBg1 from '@/images/coffeTime/bg-coffetime.png';

export const CoffeTime = () => {
	const [selectCup, setSelectCup] = useState<CupItem>(CupItems[0]);

	const controlInfo = useAnimation();
	const controlCoffeTime = useAnimation();
	const controlBg = useAnimation();

	const transitionCoffes = {
		transition: { duration: 0.3, ease: 'easeInOut' },
	};

	useEffect(() => {
		const handleAnimationInit = async () => {
			handleRotateCoffe(selectCup.id);
		};
		handleAnimationInit();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleRotateCoffe = async (id: number) => {
		switch (id) {
			case 1:
				return await controlCoffeTime.start({ rotate: -130, ...transitionCoffes });
			case 2:
				return await controlCoffeTime.start({ rotate: -220, ...transitionCoffes });
			case 3:
				return await controlCoffeTime.start({ rotate: -310, ...transitionCoffes });
			case 4:
				return await controlCoffeTime.start({ rotate: -400, ...transitionCoffes });
		}
	};

	const handleSelectCup = async (cup: CupItem) => {
		await Promise.all([
			await controlInfo.start({ opacity: 0, y: -20 }),
			controlBg.start({ x: -5, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }),
			controlInfo.start({ y: 20, transition: { duration: 0, delay: 0 } }),
		]);
		setSelectCup(cup);
		await Promise.all([
			await handleRotateCoffe(cup.id),
			controlInfo.start({ y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeIn' } }),
			controlBg.start({ x: 0, opacity: 0.5, transition: { duration: 0.2, ease: 'easeIn', delay: 0 } }),
		]);
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

	return (
		<section
			id='coffeTime'
			className=' overflow-hidden relative flex flex-row h-screen w-screen' // bg-coffetime
		>
			<div className='flex flex-col h-full justify-center items-center w-full lg:w-[70%] z-10 px-10 lg:px-20 gap-y-0 lg:gap-y-10 relative'>
				<motion.div className=' transition duration-500 h-[50%] flex flex-col gap-y-4 items-start justify-center'>
					<h2 className='text-2xl lg:text-6xl uppercase text-gray-100 font-satoshi font-bold whitespace-nowrap'>
						How to drink café
					</h2>
					<motion.div
						initial={{ opacity: 1 }}
						animate={controlInfo}
						className='relative text-white w-[400x] h-[200px]'
					>
						<h1 className='text-2xl lg:text-5xl font-bold lg:flex  font-satoshi my-5' variants={fadeInUp}>
							{selectCup.title}
						</h1>
						<p className='text-[15px] lg:text-[17px] font-light whitespace-normal text-justify max-h-full leading-[1.4] py-5 w-full lg:w-[500px]'>
							{selectCup.info}
						</p>
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
					<div className='card-grid flex gap-x-5 relative'>
						{CupItems.map((cup, index) => {
							return <Card key={index} selectCup={selectCup} cup={cup} handleSelectCup={handleSelectCup} />;
						})}
					</div>
				</div>
				<motion.div
					initial={{ opacity: 0.5 }}
					animate={controlBg}
					className='absolute right-[-10%] top-5 z-[-1] opacity-50'
				>
					<Image src={coffeTimeBg1} alt='coffeTime background' />
				</motion.div>
			</div>
			<div id='divPadre' className='flex absolute lg:relative jutify-end items-end h-full w-screen lg:w-[30%]'>
				<motion.div
					id='divHijo'
					className='absolute
					opacity-30
					w-[600px] h-[600px] 
					bottom-[-250px] right-[-250px]
					lg:opacity-100
					lg:w-[800px] lg:h-[800px] 
					lg:bottom-[-330px] lg:right-[-300px]'
					animate={controlCoffeTime}
				>
					<Image className='scale-150' src={coffeTime_img} alt='coffeTime' width={800} height={800} />
				</motion.div>
			</div>
		</section>
	);
};

export default CoffeTime;
