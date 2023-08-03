import categoryList from '@/utils/category';
import { ChangeEvent, useContext, useLayoutEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import manCoffe from '@/images/home/mancoffe.png';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';
import { VscLocation } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import citiesOfMiami from '@/utils/citysMiami';
import estadosDeMiami from '@/utils/stateMiami';
import lang from '@/LANG/eng.json';
import { motion } from 'framer-motion';
import timeCalls from '@/utils/timeCallMe';

const Booking = () => {
	const timeInputRef = useRef<HTMLInputElement>(null);
	const { setItemColor } = useContext(BackGroundColorContext);
	const currentDate = new Date();
	const nextDay = new Date(currentDate.setDate(currentDate.getDate() + 1));

	// state
	const [date, setDate] = useState<Date | null>(nextDay);
	const [time, setTime] = useState('');
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [category, setCategory] = useState('');
	const [people, setPeople] = useState('');
	const [address, setAddres] = useState('');
	const [state, setState] = useState(estadosDeMiami[0]);
	const [duration, setDuration] = useState('');
	const [ZipCode, setZipCode] = useState('');
	const [city, setCity] = useState('');
	const [timeFormat, setTimeFormat] = useState('');
	const [timeCallMe, setTimeCallMe] = useState('');

	const handleInputClick = () => {
		if (timeInputRef.current) {
			timeInputRef.current.click();
		}
	};

	function validarCorreo(correo: string) {
		const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return patronCorreo.test(correo);
	}

	const isValid = () => {
		if (
			date === null ||
			time === '' ||
			email === '' ||
			phone === '' ||
			timeCallMe === '' ||
			!validarCorreo(email) ||
			category === '' ||
			address === '' ||
			ZipCode === '' ||
			city === ''
		) {
			return false;
		}
		return true;
	};

	const [monto, setMonto] = useState('200');

	const formatTime = (time: Date) => {
		const hours = time.getHours();
		const minutes = time.getMinutes();
		const period = hours >= 12 ? 'pm' : 'am';
		const formattedHours = hours % 12 || 12;
		const formattedMinutes = minutes.toString().padStart(2, '0');
		return `${formattedHours}:${formattedMinutes} ${period}`;
	};

	const validateTimeRange = (timeString: string) => {
		const [time, period] = timeString.split(' ');
		const [hours, minutes] = time.split(':');

		let parsedHours = parseInt(hours, 10);

		if (period.toLowerCase() === 'am' && parsedHours === 12) {
			parsedHours = 0;
		} else if (period.toLowerCase() === 'pm' && parsedHours !== 12) {
			parsedHours += 12;
		}

		const minHours = 6;
		const maxHours = 20;

		return parsedHours >= minHours && parsedHours <= maxHours;
	};

	const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		if (value) {
			const selectedTime = new Date(`1970-01-01T${value}`);
			const aux = formatTime(selectedTime);
			if (!validateTimeRange(aux)) {
				console.log('Hora no valida');
			} else {
				setTime(value);
				setTimeFormat(aux);
			}
		}
	};

	useLayoutEffect(() => {
		setItemColor(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const router = useRouter();

	const handleSubmit = () => {
		router.push({
			pathname: '/payment',
			query: { monto, r: 1 },
		});
	};

	return (
		<motion.section
			initial={{ opacity: 0, y: '-100%' }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: '-100%' }}
			transition={{
				duration: 0.4,
				ease: 'easeIn',
			}}
			id='booking'
			className='min-h-screen max-w-screen bg-gray-100 flex flex-col justify-center items-center sm:py-12 py-6 '
		>
			<div className='relative py-3 w-full lg:w-[950px] mt-20 px-2'>
				<div className='absolute inset-0 bg-gradient-to-r from-base-red to-base-dark shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
				<div className='relative px-4 py-5 shadow-lg rounded-3xl flex flex-col bg-white gap-y-5'>
					<div className='flex flex-row justify-center items-end w-full'>
						<h1 className='text-3xl lg:text-4xl text-gray-700 font-lemonMilk-bold font-bold mt-4 mb-4'>
							{lang.booking_title}
						</h1>
						<div className='flex w-[200px] lg:w-[150px]'>
							<Image src={manCoffe} alt='man coffe' />
						</div>
					</div>
					<div className='w-full flex-col lg:flex-row lg:gap-x-10 flex justify-center items-start pt-5'>
						<div className='divide-y divide-gray-200  w-full flex-1 relative'>
							<div className='py-8 text-base flex flex-col gap-y-5 leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
								<div className='grid grid-cols-2 gap-x-10 relative'>
									<div className='relative'>
										<DatePicker
											minDate={nextDay}
											selected={date}
											onChange={(date: Date | null) => {
												setDate(date);
											}}
											dateFormat='MM/dd/yyyy'
											className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
											wrapperClassName='w-full'
										/>
										<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
											{lang.booking_date}
										</label>
									</div>
									<div className='relative'>
										<input
											type='time'
											onFocus={(event) => {
												if ('showPicker' in event.target) {
													event.preventDefault();
													event.target.showPicker();
												}
											}}
											onChange={handleTimeChange}
											value={time}
											name='time'
											min='06:00:00'
											max='15:00:00'
											id='time'
											className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
										/>
										<span className='text-[14px] h-2 flex'>6:00am - 11:00pm</span>
										<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
											{lang.booking_time}
										</label>
									</div>
								</div>
								<div className='grid grid-cols-2 gap-x-10 relative'>
									<div className='relative'>
										<input
											autoComplete='off'
											id='lastName'
											onChange={(e) => setLastName(e.target.value)}
											value={lastName}
											name='LastName'
											type='text'
											className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
											placeholder='Last Name'
										/>
										<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
											{lang.booking_lastName}
										</label>
									</div>
									<div className='relative'>
										<input
											autoComplete='off'
											id='name'
											onChange={(e) => setName(e.target.value)}
											value={name}
											name='name'
											type='text'
											className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
											placeholder='Name'
										/>
										<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
											{lang.booking_name}
										</label>
									</div>
								</div>
								<div className='relative'>
									<input
										autoComplete='off'
										id='email'
										onChange={(e) => setEmail(e.target.value)}
										value={email}
										name='email'
										type='text'
										className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
										placeholder='Email'
									/>
									<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
										{lang.booking_email}
									</label>
								</div>
								<div className='relative'>
									<input
										autoComplete='off'
										id='phone'
										onChange={(e) => setPhone(e.target.value)}
										value={phone}
										name='Phone'
										type='text'
										className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
										placeholder='+1 (000) 000 0000'
									/>
									<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
										{lang.booking_phone}
									</label>
								</div>
								<div className='relative'>
									<select
										className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
										name='callme'
										id='frm-whatever'
										onChange={(e) => setTimeCallMe(e.target.value)}
										value={timeCallMe}
									>
										<option value='' disabled>
											Please choose&hellip;
										</option>
										{timeCalls.map((item, index) => {
											return (
												<option key={index} value={item}>
													{item}
												</option>
											);
										})}
									</select>
									<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
										{lang.booking_timeCallMe}
									</label>
								</div>
								<div className='grid grid-cols-2 gap-x-10 relative'>
									<div className='relative'>
										<select
											className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
											name='whatever'
											onChange={(e) => setPeople(e.target.value)}
											value={people}
											id='frm-whatever'
										>
											<option value='' disabled>
												{lang.booking_people}&hellip;
											</option>
											{Array.from({ length: 10 }, (_, i) => (
												<option key={i + 1} value={`People ${(i + 1) * 50}`}>{`${lang.booking_people} ${
													(i + 1) * 50
												}`}</option>
											))}
											<option value={`People +500`}>{`${lang.booking_people} +500`}</option>
										</select>
										<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
											{lang.booking_persons}
										</label>
									</div>
									<div className='relative'>
										<select
											className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
											name='whatever'
											onChange={(e) => setDuration(e.target.value)}
											value={duration}
											id='frm-whatever'
										>
											<option value='' disabled>
												{lang.booking_hour}&hellip;
											</option>
											{Array.from({ length: 6 }, (_, i) => (
												<option key={i + 1} value={`${i + 1}`}>
													{`${i + 1} 
												${lang.booking_hour}${i + 1 > 1 ? 's' : ''}`}
												</option>
											))}
										</select>
										<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
											{lang.booking_duration}
										</label>
									</div>
								</div>
								<div className='relative'>
									<select
										className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
										name='whatever'
										id='frm-whatever'
										onChange={(e) => setCategory(e.target.value)}
										value={category}
									>
										<option value='' disabled>
											{lang.booking_category_select}&hellip;
										</option>
										{categoryList.map((item, index) => {
											return (
												<option key={index} value={item}>
													{item}
												</option>
											);
										})}
									</select>
									<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
										{lang.booking_category}
									</label>
								</div>
							</div>
							<div className='absolute top-0 bottom-0 -right-5 w-0.5 f-full py-10 bg-gray-200'></div>
						</div>
						<div className='flex h-full flex-col w-full flex-1 relative'>
							<div className='flex flex-row'>
								<VscLocation className='text-3xl' />
								<h1 className='text-2xl font-roboto-bold tracking-widest text-black mb-5'>
									{lang.booking_title_address}
								</h1>
							</div>
							<div className='px-5 pb-5 flex flex-col gap-y-2'>
								<div className='flex-grow'>
									<select
										className='text-black placeholder-gray-600
											 w-full px-4 py-3 mt-2 text-base  
											 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400'
										name='whatever'
										id='frm-whatever'
										onChange={(e) => setState(e.target.value)}
										value={state}
									>
										<option value='' disabled>
											{lang.booking_state}
										</option>
										{estadosDeMiami.map((item, index) => {
											return (
												<option key={index} value={item}>
													{item}
												</option>
											);
										})}
									</select>
								</div>
								<div className='flex'>
									<div className='flex-grow w-1/4 pr-2'>
										<input
											onChange={(e) => setZipCode(e.target.value)}
											value={ZipCode}
											placeholder={lang.booking_zip_code}
											className=' text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400'
										/>
									</div>
									<div className='flex-grow'>
										<select
											className='text-black placeholder-gray-600
											 w-full px-4 py-3 mt-2 text-base  
											 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400'
											name='whatever'
											id='frm-whatever'
											onChange={(e) => setCity(e.target.value)}
											value={city}
										>
											<option value='' disabled>
												{lang.booking_city}
											</option>
											{citiesOfMiami.map((item, index) => {
												return (
													<option key={index} value={item}>
														{item}
													</option>
												);
											})}
										</select>
									</div>
								</div>
								<input
									placeholder={lang.booking_title_address}
									onChange={(e) => setAddres(e.target.value)}
									value={address}
									className=' text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400'
								/>
							</div>
						</div>
					</div>
					<div className='w-full flex justify-center items-center text-gray-400 text-md'>
						<ul className='list-disc flex flex-col text-[14px] lg:text-[17px] px-5'>
							<li>We recommend 2 coffee stations if your event is from 200 to 500 guests.</li>
							<li>Max. capacity 6.000 people.</li>
						</ul>
					</div>
					<div className='flex justify-center items-center'>
						<button
							disabled={!isValid()}
							onClick={handleSubmit}
							className='submit-button bg-blue-500 text-white rounded-md px-4 py-2 uppercase font-bebas-neue tracking-widest'
						>
							{lang.booking_button}
						</button>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Booking;
