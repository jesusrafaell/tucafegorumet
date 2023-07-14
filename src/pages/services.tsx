import React, { useContext, useLayoutEffect } from 'react';
import Image from 'next/image';
import booking from '@/images/services/booking.png';
import machine from '@/images/services/machine-expresso.png';
import maintenance from '@/images/services/Maintenance-machine.png';
import repair from '@/images/services/repair-machine.png';
import { motion } from 'framer-motion';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';
import Link from 'next/link';
import { Link as LinkS } from 'react-scroll';

const Services = () => {
	const { setItemColor } = useContext(BackGroundColorContext);

	useLayoutEffect(() => {
		setItemColor(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<section id='info' className='flex w-screen  h-full justify-center items-center bg-white'>
			<div className='flex w-full h-full flex-col justify-center items-center  py-20 gap-y-10 mt-10'>
				{/* title */}
				<h1 className='text-5xl font-bebas-neue font-bold tracking-widestx whitespace-nowrap'>Our Services</h1>
				{/* 1 img & text */}
				<div className='w-full h-full py-16'>
					<div className='px-3 lg:px-20 text-gray-500 '>
						<div className='mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
							<div className='bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8'>
								<div className='mb-12 space-y-4'>
									<h3 className='text-2xl font-semibold text-base-dark capitalize'>coffee stations</h3>
									<div className='mb-6 flex flex-col lg:flex-row'>
										<p>
											A coffee station is a specialized space where various types of coffee, such as espresso,
											cortado, café con leche, and iced coffee, are prepared and served. These stations offer a
											unique experience for coffee lovers, providing a cozy atmosphere and a wide selection of
											high-quality coffee options. They are ideal places to enjoy moments of delight and satisfy
											the passion for coffee in its various forms.
										</p>
										<div className='w-full flex justify-end items-end'>
											<div className='w-[250px]'>
												<Image src={booking} alt='reserve' />
											</div>
										</div>
									</div>
									<Link href='/booking' className='block font-medium text-purple-600'>
										Make a Reservation
									</Link>
								</div>
							</div>
							<div className='bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8'>
								<div className='mb-12 space-y-4'>
									<h3 className='text-2xl font-semibold text-base-dark capitalize'>espresso machine rental</h3>
									<div className='mb-6 flex flex-col lg:flex-row'>
										<p>
											We rent espresso machines, providing our customers with the opportunity to enjoy the
											convenience of brewing their own delicious espresso beverages. Our rental service offers
											high-quality espresso machines that are easy to use and maintain. Whether for a special
											event, office setting, or personal use, our espresso machine rentals ensure a seamless and
											enjoyable coffee experience. With our reliable and flexible rental options, you can indulge
											in the rich flavors and aromas of freshly brewed espresso at your convenience.
										</p>
										<div className='w-full flex justify-end items-end'>
											<div className='w-[250px]'>
												<Image src={machine} alt='reserve' />
											</div>
										</div>
									</div>
									<LinkS
										to={'footer'}
										spy
										smooth
										offset={0}
										duration={400}
										className='block font-medium text-purple-600 cursor-pointer'
									>
										Contact Me
									</LinkS>
								</div>
							</div>
							<div className='bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8'>
								<div className='mb-12 space-y-4'>
									<h3 className='text-2xl font-semibold text-base-dark capitalize'>
										Espresso Machine Maintenance Service
									</h3>
									<div className='mb-6 flex flex-col lg:flex-row'>
										<p>
											Our espresso machine maintenance service ensures the proper upkeep and smooth operation of
											your espresso machines. Our team of skilled technicians provides regular maintenance and
											servicing to keep your espresso machines in optimal condition. We conduct routine
											inspections, cleanings, and necessary repairs to ensure consistent performance and extend the
											lifespan of your machines. With our maintenance service, you can have peace of mind knowing
											that your espresso machines will receive the necessary care, allowing you to continue serving
											delightful espresso beverages without any interruptions.
										</p>
										<div className='w-full flex justify-end items-end'>
											<div className='w-[250px]'>
												<Image src={maintenance} alt='reserve' />
											</div>
										</div>
									</div>
									<LinkS
										to={'footer'}
										spy
										smooth
										offset={0}
										duration={400}
										className='block font-medium text-purple-600 cursor-pointer'
									>
										Contact Me
									</LinkS>
								</div>
							</div>
							<div className='bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8'>
								<div className='mb-12 space-y-4'>
									<h3 className='text-2xl font-semibold text-base-dark capitalize'>
										repair services for coffee machines and grinders
									</h3>
									<div className='mb-6 flex flex-col lg:flex-row'>
										<p>
											Our team of expert technicians is responsible for diagnosing and resolving any issues that
											your coffee equipment may have. We perform repairs to ensure optimal functionality and extend
											the lifespan of your machines and grinders. Our goal is to provide fast and efficient service
											to minimize any downtime. You can trust our repair service to keep your coffee equipment in
											excellent condition and ensure the production of high-quality coffee.
										</p>
										<div className='w-full flex justify-end items-end'>
											<div className='w-[250px]'>
												<Image src={repair} alt='reserve' />
											</div>
										</div>
									</div>
									<LinkS
										to={'footer'}
										spy
										smooth
										offset={0}
										duration={400}
										className='block font-medium text-purple-600 cursor-pointer'
									>
										Contact Me
									</LinkS>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
