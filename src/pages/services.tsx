import React, { useContext, useLayoutEffect } from 'react';
import Image from 'next/image';
import booking from '@/images/services/booking.png';
import machine from '@/images/services/machine-expresso.png';
import maintenance from '@/images/services/Maintenance-machine.png';
import repair from '@/images/services/repair-machine.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Link as LinkS } from 'react-scroll';
import * as lang from '@/LANG/eng.json';

const Services = () => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				// x: '-100%',
				// clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
			}}
			animate={{
				opacity: 1,
				// x: '0',
				// clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
			}}
			exit={{
				opacity: 0,
				// x: '-100%',
				// clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
			}}
			transition={{
				duration: 0.4,
				ease: 'easeIn',
			}}
		>
			<section id='info' className='flex w-screen  h-full justify-center items-center bg-white'>
				<div className='flex w-full h-full flex-col justify-center items-center  py-20 gap-y-10 mt-10'>
					{/* title */}
					<motion.h1
						initial={{ opacity: 0, y: '20%' }}
						animate={{ opacity: 1, y: '0' }}
						exit={{ opacity: 0, y: '20%' }}
						transition={{ delay: 0.4, duration: 0.5, ease: 'easeIn' }}
						className='text-3xl lg:text-5xl 
						tracking-widestx whitespace-nowrap text-gray-700 font-lemonMilk-bold font-bold
						'
					>
						{lang.services_title}
					</motion.h1>
					{/* 1 img & text */}
					<div className='w-full h-full'>
						<div className=' px-3 lg:px-20 text-gray-500 flex justify-center items-center'>
							<div className='container max-auto grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
								<motion.div
									initial={{ opacity: 0, x: '-20%' }}
									animate={{ opacity: 1, x: '0' }}
									exit={{ opacity: 0, x: '-20%' }}
									transition={{ delay: 0.3, duration: 0.5, ease: 'easeIn' }}
									className='bg-gray-100 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8'
								>
									<div className='space-y-1'>
										<h3 className='text-2xl font-semibold text-base-dark capitalize'>{lang.services_title_1}</h3>
										<div className='mb-6 flex flex-col'>
											<p>{lang.services_text_1}</p>
											<div className='w-full flex justify-end items-end'>
												<div className='w-[200px]'>
													<Image src={booking} alt='reserve' />
												</div>
											</div>
										</div>
										<Link href='/booking' className='block font-medium text-purple-600'>
											{lang.header_Reserve}
										</Link>
									</div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: '20%' }}
									animate={{ opacity: 1, x: '0' }}
									exit={{ opacity: 0, x: '20%' }}
									transition={{ delay: 0.3, duration: 0.5, ease: 'easeIn' }}
									className='bg-gray-100 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8'
								>
									<div className='space-y-1'>
										<h3 className='text-2xl font-semibold text-base-dark capitalize'>{lang.services_title_2}</h3>
										<div className='mb-6 flex flex-col'>
											<p>{lang.services_text_2}</p>
											<div className='w-full flex justify-end items-end'>
												<div className='w-[200px]'>
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
											{lang.services_contact}
										</LinkS>
									</div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: '-20%' }}
									animate={{ opacity: 1, x: '0' }}
									exit={{ opacity: 0, x: '-20%' }}
									transition={{ delay: 0.3, duration: 0.5, ease: 'easeIn' }}
									className='bg-gray-100 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8'
								>
									<div className='space-y-1'>
										<h3 className='text-2xl font-semibold text-base-dark capitalize'>{lang.services_title_3}</h3>
										<div className='mb-6 flex flex-col'>
											<p>{lang.services_text_3}</p>
											<div className='w-full flex justify-end items-end'>
												<div className='w-[200px]'>
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
											{lang.services_contact}
										</LinkS>
									</div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: '20%' }}
									animate={{ opacity: 1, x: '0' }}
									exit={{ opacity: 0, x: '20%' }}
									transition={{ delay: 0.3, duration: 0.5, ease: 'easeIn' }}
									className='bg-gray-100 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8'
								>
									<div className='space-y-1'>
										<h3 className='text-2xl font-semibold text-base-dark capitalize'>{lang.services_title_4}</h3>
										<div className='mb-6 flex flex-col'>
											<p>{lang.services_text_4}</p>
											<div className='w-full flex justify-end items-end'>
												<div className='w-[200px]'>
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
											{lang.services_contact}
										</LinkS>
									</div>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</motion.div>
	);
};

export default Services;
