/* eslint-disable @next/next/no-img-element */
import Card from '@/components/Card';
import HeroCoffeTime from '@/components/Hero-CoffeTime';
import CupItems, { CupItem } from '@/utils/cardItems';
import { textVariant } from '@/utils/monition';
import { motion, useAnimation } from 'framer-motion';
import { title } from 'process';
import { useEffect, useMemo, useState } from 'react';
import coffeTime_img from '@/images/coffe_time_rotate.png';
import Image from 'next/image';
import DatePicker from '@/components/DatePicker';

export const Reserve = () => {
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
			controlBg.start({ x: 0, opacity: 0.2, transition: { duration: 0.2, ease: 'easeIn', delay: 0 } }),
		]);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (selectCup.id === 4) {
				handleSelectCup(CupItems[0]);
			} else {
				handleSelectCup(CupItems[selectCup.id]);
			}
		}, 5000);
		return () => {
			// Esto se ejecuta cuando el componente se desmonta
			clearTimeout(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectCup]);

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

	const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

	return (
		<motion.section
			initial={{
				opacity: 0,
				clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
			}}
			animate={{
				opacity: 1,
				clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
			}}
			exit={{
				opacity: 0,
				clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
			}}
			transition={{
				duration: 0.4,
				ease: 'easeIn',
			}}
			id='home'
			className='overflow-hidden flex flex-row h-screen w-screen relative bg-base-dark'
		>
			<div className='flex flex-col h-full justify-center items-center w-full lg:w-[70%] z-10 px-10 lg:px-20 gap-y-0 lg:gap-y-10 relative'>
				<motion.div className=' transition duration-500 h-[50%] flex flex-col gap-y-4 items-start justify-center'>
					<div className='mx-auto w-full max-w-[550px]'>
						<form action='https://formbold.com/s/FORM_ID' method='POST'>
							<div className='-mx-3 flex flex-wrap'>
								<div className='w-full px-3 sm:w-1/2'>
									<div className='mb-5'>
										<label className='mb-3 block text-base font-medium text-[#07074D]'>Date</label>
										<DatePicker />
									</div>
								</div>
								<div className='w-full px-3 sm:w-1/2'>
									<div className='mb-5'>
										<label className='mb-3 block text-base font-medium text-[#07074D]'>Time</label>
										<input
											type='time'
											name='time'
											id='time'
											className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md'
										/>
									</div>
								</div>
							</div>
							<div className='-mx-3 flex flex-wrap'>
								<div className='w-full px-3 sm:w-1/2'>
									<div className='mb-5'>
										<label className='mb-3 block text-base font-medium text-[#07074D]'>De que trata</label>
										<select
											className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md'
											name='whatever'
											id='frm-whatever'
										>
											<option value=''>Please choose&hellip;</option>
											<option value='1'>Fiesta</option>
											<option value='2'>Reunion</option>
											<option value='3'>Graduacion</option>
										</select>
									</div>
								</div>
								<div className='w-full px-3 sm:w-1/2'>
									<div className='mb-5'>
										<label className='mb-3 block text-base font-medium text-[#07074D]'>N personas</label>
										<input
											type='number'
											name='guest'
											id='guest'
											placeholder='5'
											min='0'
											className='w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md'
										/>
									</div>
								</div>
							</div>
							<div className='mb-5'>
								<label className='mb-3 block text-base font-medium text-[#07074D]'>Ubiacion</label>
								<input
									type='text'
									name='guest'
									id='guest'
									placeholder='Place'
									className='w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md'
								/>
							</div>

							<div className='mb-5'>
								<label className='mb-3 block text-base font-medium text-[#07074D]'>
									Are you coming to the event?
								</label>
								<div className='flex items-center space-x-6'>
									<div className='flex items-center'>
										<input type='radio' name='radio1' id='radioButton1' className='h-5 w-5' />
										<label className='pl-3 text-base font-medium text-[#07074D]'>Yes</label>
									</div>
									<div className='flex items-center'>
										<input type='radio' name='radio1' id='radioButton2' className='h-5 w-5' />
										<label className='pl-3 text-base font-medium text-[#07074D]'>No</label>
									</div>
								</div>
							</div>

							<div>
								<button className='hover:shadow-form rounded-md bg-base-red py-3 px-8 text-center text-base font-semibold text-white outline-none'>
									Reserved
								</button>
							</div>
						</form>
					</div>
				</motion.div>
				{/* contedor cart cups */}
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
		</motion.section>
	);
};

export default Reserve;
