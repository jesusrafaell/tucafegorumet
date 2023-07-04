import { useEffect, useContext, useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';
import { AnimationProductContext } from '@/context/AnimationProductContext';
import { motion } from 'framer-motion';

import HomePage from '@/sections/Home';
import ShopPage from '@/sections/Shop';
import AboutPage from '@/sections/About';
import CoffeTimePage from '@/sections/CoffeTime';
import Footer from '@/components/Footer';
import CupLoading from '@/components/CupLoading';

export default function Reserve() {
	const router = useRouter();

	const { setColor } = useContext(BackGroundColorContext);
	const [loading, setLoading] = useState(false);

	const { isActive, handleToProduct } = useContext(AnimationProductContext);

	useEffect(() => {
		import('./product/[name]');
	}, []);

	useLayoutEffect(() => {
		import('./product/[name]');

		const handlePrimary = () => {
			const handleRouteChangeStart = () => {
				console.log('El navegador está cargando la página');
				setLoading(true);
			};

			const handleRouteChangeComplete = () => {
				console.log('El navegador ha terminado de cargar la página');
				setLoading(false);
			};

			router.events.on('routeChangeStart', handleRouteChangeStart);
			router.events.on('routeChangeComplete', handleRouteChangeComplete);

			return () => {
				router.events.off('routeChangeStart', handleRouteChangeStart);
				router.events.off('routeChangeComplete', handleRouteChangeComplete);
			};
		};
		const cachedData = localStorage.getItem('cachedData');
		if (!cachedData) {
			localStorage.setItem('cachedData', 'true');
			handlePrimary();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (router && router.asPath) {
			router.push(router.asPath, undefined, { scroll: true }).catch((error) => {
				console.error('Error al redirigir la ruta:', error);
			});
		}
		setColor('bg-base-dark');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useLayoutEffect(() => {
		if (localStorage.getItem('loadingShown') === 'true') {
			setLoading(false);
		} else {
			localStorage.setItem('loadingShown', 'true'); //
			setLoading(false);
		}
	}, []);

	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={isActive ? 'active' : 'inactive'}
			variants={{
				active: {
					opacity: 0,
					transition: {
						duration: 0.5,
						ease: 'easeOut',
					},
				},
				inactive: {
					opacity: 1,
					transition: {
						duration: 0.5,
						ease: 'easeIn',
					},
				},
			}}
			exit={{ opacity: 0 }}
			className='overflow-hidden bg-white'
		>
			<section id='reserve' className='w-screen h-screen overflow-hidden flex items-center justify-center p-12'>
				<div className='mx-auto w-full max-w-[550px]'>
					<form action='https://formbold.com/s/FORM_ID' method='POST'>
						<div className='-mx-3 flex flex-wrap'>
							<div className='w-full px-3 sm:w-1/2'>
								<div className='mb-5'>
									<label className='mb-3 block text-base font-medium text-[#07074D]'>First Name</label>
									<input
										type='text'
										name='fName'
										id='fName'
										placeholder='First Name'
										className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
									/>
								</div>
							</div>
							<div className='w-full px-3 sm:w-1/2'>
								<div className='mb-5'>
									<label className='mb-3 block text-base font-medium text-[#07074D]'>Last Name</label>
									<input
										type='text'
										name='lName'
										id='lName'
										placeholder='Last Name'
										className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
									/>
								</div>
							</div>
						</div>
						<div className='mb-5'>
							<label className='mb-3 block text-base font-medium text-[#07074D]'>
								How many guest are you bringing?
							</label>
							<input
								type='number'
								name='guest'
								id='guest'
								placeholder='5'
								min='0'
								className='w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
							/>
						</div>

						<div className='-mx-3 flex flex-wrap'>
							<div className='w-full px-3 sm:w-1/2'>
								<div className='mb-5'>
									<label className='mb-3 block text-base font-medium text-[#07074D]'>Date</label>
									<input
										type='date'
										name='date'
										id='date'
										className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
									/>
								</div>
							</div>
							<div className='w-full px-3 sm:w-1/2'>
								<div className='mb-5'>
									<label className='mb-3 block text-base font-medium text-[#07074D]'>Time</label>
									<input
										type='time'
										name='time'
										id='time'
										className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
									/>
								</div>
							</div>
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
							<button className='hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</section>
			<Footer />
		</motion.div>
	);
}
