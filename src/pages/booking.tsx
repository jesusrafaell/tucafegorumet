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

const Booking = () => {
	const { setItemColor } = useContext(BackGroundColorContext);
	const currentDate = new Date();
	const nextDay = new Date(currentDate.setDate(currentDate.getDate() + 1));
	const [date, setDate] = useState<Date | null>(nextDay);
	const [time, setTime] = useState('');
	const [timeFormat, setTimeFormat] = useState('');
	const [email, setEmail] = useState('');
	const [category, setCategory] = useState('');
	const [people, setPeople] = useState('');
	const [address, setAddres] = useState('');
	const [PLZ, setPLZ] = useState('');
	const [city, setCity] = useState('');
	const timeInputRef = useRef<HTMLInputElement>(null);

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
			!validarCorreo(email) ||
			category === '' ||
			address === '' ||
			PLZ === '' ||
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
			// console.log('valid', validateTimeRange(aux));
			if (!validateTimeRange(aux)) {
				console.log('Hora no valida');
			} else {
				setTime(value);
				setTimeFormat(aux);
			}
			// const formattedTime = selectedTime.toLocaleTimeString([], {
			// 	hour: 'numeric',
			// 	minute: 'numeric',
			// 	hour12: true,
			// });
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
		<section
			id='booking'
			className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center items-center sm:py-12'
		>
			<div className='relative py-3 w-full lg:w-[950px] mt-20 '>
				<div className='absolute inset-0 bg-gradient-to-r from-base-red to-base-dark shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
				<div className='relative px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20 w-full flex flex-col bg-white gap-y-5'>
					{/* title */}
					<div className='flex flex-row justify-center items-end'>
						<h1 className='text-4xl font-lemonMilk text-black mt-4 mb-4'>Reservation Options</h1>
						<div className='flex w-[150px]'>
							<Image src={manCoffe} alt='man coffe' />
						</div>
					</div>
					<div className='w-full flex-col lg:flex-row gap-x-10 flex justify-center items-start pt-10'>
						{/* info */}
						<div className='divide-y divide-gray-200  w-full flex-1 relative'>
							<div className='py-8 text-base flex flex-col gap-y-5 leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
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
										Date
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
										Time
									</label>
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
										Email
									</label>
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
											Please choose&hellip;
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
										Category
									</label>
								</div>
								<div className='relative'>
									<select
										className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
										name='whatever'
										onChange={(e) => setPeople(e.target.value)}
										value={people}
										id='frm-whatever'
									>
										<option value='' disabled>
											hour&hellip;
										</option>
										{Array.from({ length: 6 }, (_, i) => (
											<option key={i + 1} value={`${i + 1}`}>{`${i + 1} ${i + 1 > 1 ? 'hours' : 'hour'}`}</option>
										))}
									</select>
									<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
										Duration of the event
									</label>
								</div>
								<div className='relative'>
									<select
										className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
										name='whatever'
										onChange={(e) => setPeople(e.target.value)}
										value={people}
										id='frm-whatever'
									>
										<option value='' disabled>
											People&hellip;
										</option>
										{Array.from({ length: 150 }, (_, i) => (
											<option key={i + 1} value={`People ${i + 1}`}>{`People ${i + 1}`}</option>
										))}
										<option value={`People 150+`}>{`People +150`}</option>
									</select>
									<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
										Persons
									</label>
								</div>
							</div>
							<div className='absolute top-0 bottom-0 -right-5 w-0.5 f-full py-10 bg-gray-200'></div>
						</div>
						{/* address */}
						<div className='flex h-full flex-col w-full flex-1 relative'>
							<div className='flex flex-row'>
								<VscLocation className='text-3xl' />
								<h1 className='text-2xl font-roboto-bold tracking-widest text-black mb-5'>Address</h1>
							</div>
							<div className='px-5 pb-5'>
								<div className='flex'>
									<div className='flex-grow w-1/4 pr-2'>
										<input
											onChange={(e) => setPLZ(e.target.value)}
											value={PLZ}
											placeholder='PLZ'
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
												Citys
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
									placeholder='Address'
									onChange={(e) => setAddres(e.target.value)}
									value={address}
									className=' text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400'
								/>
							</div>
						</div>
					</div>
					<div className='flex justify-center items-center'>
						<button
							disabled={!isValid()}
							onClick={handleSubmit}
							className='submit-button bg-blue-500 text-white rounded-md px-4 py-2 uppercase font-bebas-neue tracking-widest'
						>
							Reserved
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Booking;
