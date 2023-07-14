/* eslint-disable @next/next/no-img-element */
import React, { useContext, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import cartFront from '@/images/payment/card-visa-front.png';
import cartBack from '@/images/payment/card-visa-back.png';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';

const Payment = () => {
	const [cardholder, setCardholder] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [expiredMonth, setExpiredMonth] = useState('');
	const [expiredYear, setExpiredYear] = useState('');
	const [securityCode, setSecurityCode] = useState('');
	const [card, setCard] = useState('front');
	const currentYear = new Date().getFullYear();

	const { setItemColor } = useContext(BackGroundColorContext);

	useLayoutEffect(() => {
		setItemColor(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const formatCardNumber = (value: string) => {
		if (value.length > 18) {
			return;
		}
		const formattedValue = value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
		setCardNumber(formattedValue);
	};

	const isValid = () => {
		if (cardholder.length < 5) {
			return false;
		}
		if (cardNumber === '') {
			return false;
		}
		if (expiredMonth === '') {
			return false;
		}
		if (expiredYear === '') {
			return false;
		}
		if (securityCode.length !== 3) {
			return false;
		}
		return true;
	};

	const onSubmit = () => {
		alert(`You did it ${cardholder}.`);
	};

	return (
		<section className='w-full h-full py-20 bg-white'>
			<div className=''>
				<div className='credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white'>
					<header className='flex flex-col justify-center items-center'>
						<div
							className={`relative ${card === 'front' ? 'block' : 'hidden'}`}
							key='front'
							// transition classes removed for simplicity
						>
							<Image className='w-full h-auto' src={cartFront} alt='front credit card' />
							<div className='front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12'>
								<p className='number mb-5 sm:text-xl'>{cardNumber !== '' ? cardNumber : '0000 0000 0000 0000'}</p>
								<div className='flex flex-row justify-between'>
									<p>{cardholder !== '' ? cardholder : 'Card holder'}</p>
									<div>
										<span>{expiredMonth}</span>
										{expiredMonth !== '' && <span>/</span>}
										<span>{expiredYear}</span>
									</div>
								</div>
							</div>
						</div>
						<div
							className={`relative ${card === 'back' ? 'block' : 'hidden'}`}
							key='back'
							// transition classes removed for simplicity
						>
							<Image className='w-full h-auto' src={cartBack} alt='cartBack' />
							<div className='bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8 sm:bottom-24 right-0 sm:px-12'>
								<div className='border border-white w-16 h-9 flex justify-center items-center'>
									<p>{securityCode !== '' ? securityCode : 'code'}</p>
								</div>
							</div>
						</div>
						<ul className='flex'>
							<li className='mx-2'>
								<img
									className='w-16'
									src='https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png'
									alt=''
								/>
							</li>
							<li className='mx-2'>
								<img
									className='w-14'
									src='https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png'
									alt=''
								/>
							</li>
							<li className='ml-5'>
								<img
									className='w-7'
									src='https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png'
									alt=''
								/>
							</li>
						</ul>
					</header>
					<main className='mt-4 p-4'>
						<h1 className='text-xl font-semibold text-gray-700 text-center capitalize'>card payment</h1>
						<div>
							<div className='my-3'>
								<input
									type='text'
									className='block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none'
									placeholder='Card holder'
									maxLength={22}
									value={cardholder}
									onChange={(e) => setCardholder(e.target.value)}
								/>
							</div>
							<div className='my-3'>
								<input
									type='text'
									className='block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none'
									placeholder='Card number'
									value={cardNumber}
									onChange={(e) => formatCardNumber(e.target.value)}
									maxLength={19}
								/>
							</div>
							<div className='my-3 flex flex-col'>
								<div className='mb-2'>
									<label htmlFor='' className='text-gray-700'>
										Expired
									</label>
								</div>
								<div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
									<select
										name=''
										id=''
										className='form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none'
										value={expiredMonth}
										onChange={(e) => setExpiredMonth(e.target.value)}
									>
										<option value='' disabled>
											MM
										</option>
										<option value='01'>01</option>
										<option value='02'>02</option>
										<option value='03'>03</option>
										<option value='04'>04</option>
										<option value='05'>05</option>
										<option value='06'>06</option>
										<option value='07'>07</option>
										<option value='08'>08</option>
										<option value='09'>09</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
									</select>
									<select
										name=''
										id=''
										className='form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none'
										value={expiredYear}
										onChange={(e) => setExpiredYear(e.target.value)}
									>
										<option value='' disabled>
											YY
										</option>
										{Array.from({ length: 11 }, (_, index) => (
											<option key={currentYear + index} value={currentYear + index}>
												{currentYear + index}
											</option>
										))}
									</select>
									<input
										type='text'
										className='block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none'
										placeholder='Security code'
										maxLength={3}
										value={securityCode}
										onChange={(e) => setSecurityCode(e.target.value)}
										onFocus={() => setCard('back')}
										onBlur={() => setCard('front')}
									/>
								</div>
							</div>
						</div>
					</main>
					<footer className='mt-6 p-4'>
						<button
							className='submit-button px-4 py-3 rounded-full bg-base-dark text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors'
							disabled={!isValid()}
							onClick={onSubmit}
						>
							Pay now
						</button>
					</footer>
				</div>
			</div>
		</section>
	);
};

export default Payment;
