import CupItems, { CupItem } from '@/utils/cardItems';
import { textVariant } from '@/utils/monition';
import { motion, useAnimation } from 'framer-motion';
import { useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import coffeTime_img from '@/images/coffe_time_rotate.png';
import Image from 'next/image';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';
import categoryList from '@/utils/category';
import { FaRegCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RxTimer } from 'react-icons/rx';
import { BiCategoryAlt } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { VscLocation } from 'react-icons/vsc';

export const Reserve = () => {
	const [selectCup, setSelectCup] = useState<CupItem>(CupItems[0]);
	const [date, setDate] = useState<Date | null>(new Date());

	const { setItemColor } = useContext(BackGroundColorContext);

	useLayoutEffect(() => {
		setItemColor(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const controlCoffeTime = useAnimation();

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
		setSelectCup(cup);
		await handleRotateCoffe(cup.id);
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
			className='overflow-hidden h-full py-20 flex w-full relative bg-white justify-center items-center min-h-screen'
		>
			<div className='flex flex-col justify-center items-center z-10 container mx-auto'>
				<motion.div
					initial={{
						scale: 0,
						opacity: 0,
					}}
					whileInView={{
						scale: 1,
						opacity: 1,
					}}
					viewport={{ once: false, amount: 0.7 }}
					className=' transition duration-500 flex flex-col items-center justify-center bg-base-dark rounded-md p-5 lg:p-10'
				>
					<div className='mx-auto w-full lg:max-w-[550px]'>
						<h1 className='text-4xl font-lemonMilk text-white mt-4 mb-4'>Reservation Options</h1>
						<form
							action='https://formbold.com/s/FORM_ID'
							method='POST'
							className='flex flex-col lg:gap-y-5 gap-y-0'
						>
							<div className='flex h-15 bg-white items-center rounded mb-6 pr-10'>
								<div className='flex flex-nowrap -mr-px justify-center w-ful p-5'>
									<span className='flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600'>
										<FaRegCalendarAlt />
									</span>
								</div>
								<div className='text-[20px] w-[200px] flex-1 font-medium text-black outline-none focus:border-none'>
									<DatePicker
										selected={date}
										onChange={(date) => {
											setDate(date);
										}}
										dateFormat='MM/dd/yyyy'
									/>
								</div>
							</div>
							<div className='flex flex-nowrap h-15 bg-white items-center rounded mb-6 pr-10'>
								<div className='flex -mr-px justify-center w-15 p-4'>
									<span className='flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600'>
										<RxTimer />
									</span>
								</div>
								<input
									type='time'
									name='time'
									id='time'
									className='text-[20px] w-full flex-1 font-medium text-black outline-none focus:border-none'
								/>
							</div>
							<div className='flex flex-nowrap h-15 bg-white items-center rounded mb-6 pr-10'>
								<div className='flex -mr-px justify-center w-15 p-4'>
									<span className='flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600'>
										<BiCategoryAlt />
									</span>
								</div>
								<select
									className='flex flex-1 w-full text-[15px] outline-none focus:border-none'
									name='whatever'
									id='frm-whatever'
								>
									<option value=''>Please choose&hellip;</option>
									{categoryList.map((item, index) => {
										return (
											<option key={index} value={`item`}>
												{item}
											</option>
										);
									})}
								</select>
							</div>
							<div className='flex flex-nowrap h-15 bg-white items-center rounded mb-6 pr-10'>
								<div className='flex -mr-px justify-center w-15 p-4'>
									<span className='flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600'>
										<BsPeople />
									</span>
								</div>
								<select
									className='flex flex-1 w-full text-[20px] outline-none focus:border-none'
									name='whatever'
									id='frm-whatever'
								>
									<option value=''>People</option>
									{Array.from({ length: 100 }, (_, i) => (
										<option key={i + 1} value={`People ${i + 1}`}>{`People ${i + 1}`}</option>
									))}
								</select>
							</div>
							<div className='flex flex-nowrap h-15 bg-white items-center rounded mb-6 pr-10'>
								<div className='flex -mr-px justify-center w-15 p-4'>
									<span className='flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600'>
										<VscLocation />
									</span>
								</div>
								<input
									type='text'
									name='addres'
									id='people'
									placeholder='Addres'
									className='flex flex-1 w-full text-[20px] outline-none focus:border-none'
								/>
							</div>
							<div className='flex flex-nowrap h-15 bg-white items-center rounded mb-6 pr-10'>
								<div className='flex -mr-px justify-center w-15 p-4'>
									<span className='flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600'>
										<AiOutlineMail />
									</span>
								</div>
								<input
									type='mail'
									name='guest'
									id='guest'
									placeholder='example@correo.com'
									className='flex flex-1 w-full text-[20px] outline-none focus:border-none'
								/>
							</div>
							<div className='flex justify-center items-center  w-full flex-col gap-y-4'>
								<label className=' block text-base font-medium text-[#07074D]'>Are you coming to the event?</label>
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
								<div>
									<button className='hover:shadow-form rounded-md bg-base-red py-3 px-8 text-center text-base font-semibold text-white outline-none'>
										Reserve
									</button>
								</div>
							</div>
						</form>
					</div>
				</motion.div>
			</div>
			<div id='divPadre' className='flex absolute jutify-end items-end h-full right-0'>
				<motion.div
					id='divHijo'
					className='
					hidden
					lg:flex
					absolute
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
