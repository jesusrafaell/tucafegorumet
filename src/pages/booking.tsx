import categoryList from '@/utils/category';
import { useContext, useLayoutEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import manCoffe from '@/images/home/mancoffe.png';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';
import { VscLocation } from 'react-icons/vsc';
import Link from 'next/link';

const Booking = () => {
	const { setItemColor } = useContext(BackGroundColorContext);
	const [date, setDate] = useState<Date | null>(new Date());

	useLayoutEffect(() => {
		setItemColor(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
			<div className='relative py-3 sm:max-w-xl sm:mx-auto mt-20'>
				<div className='absolute inset-0 bg-gradient-to-r from-base-red to-base-dark shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
				<div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
					<div className='max-w-md mx-auto'>
						<div className='flex flex-row justify-center items-end'>
							<h1 className='text-4xl font-lemonMilk text-black mt-4 mb-4'>Reservation Options</h1>
							<div className='flex'>
								<Image src={manCoffe} alt='man coffe' />
							</div>
						</div>
						<div className='divide-y divide-gray-200'>
							<div className='py-8 text-base flex flex-col gap-y-5 leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
								<div className='relative'>
									<DatePicker
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
										name='time'
										id='time'
										className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
									/>
									<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
										Time
									</label>
								</div>
								<div className='relative'>
									<input
										autoComplete='off'
										id='email'
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
									>
										<option value='' disabled>
											Please choose&hellip;
										</option>
										{categoryList.map((item, index) => {
											return (
												<option key={index} value={`item`}>
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
										id='frm-whatever'
									>
										<option value='' disabled>
											People&hellip;
										</option>
										{Array.from({ length: 100 }, (_, i) => (
											<option key={i + 1} value={`People ${i + 1}`}>{`People ${i + 1}`}</option>
										))}
									</select>
									<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
										Persons
									</label>
								</div>
								<div className='flex flex-row'>
									<VscLocation className='text-3xl' />
									<h1 className='text-2xl font-roboto-bold tracking-widest text-black'>Address</h1>
								</div>
								<div className='px-5 pb-5'>
									<input
										placeholder='Country'
										className=' text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400'
									/>
									<input
										placeholder='Address'
										className=' text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400'
									/>
									<div className='flex'>
										<div className='flex-grow w-1/4 pr-2'>
											<input
												placeholder='PLZ'
												className=' text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400'
											/>
										</div>
										<div className='flex-grow'>
											<input
												placeholder='City'
												className=' text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400'
											/>
										</div>
									</div>
								</div>
								<div className='flex justify-center items-center'>
									<Link href={'/payment'}>
										<button className='bg-blue-500 text-white rounded-md px-4 py-2 uppercase font-bebas-neue tracking-widest'>
											Reserved
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
