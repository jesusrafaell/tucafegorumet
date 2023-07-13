import { textVariant } from '@/utils/monition';
import { motion } from 'framer-motion';
import Link from 'next/link';
import cartCoffe from '@/images/home/carritocoffe.png';
import splash1 from '@/images/home/splash1.png';
import manCoffe from '@/images/home/mancoffe.png';
import Image from 'next/image';
import logo from '@/images/logo_tucafe.png';
import { useEffect, useRef, useState } from 'react';
import { scroller } from 'react-scroll';

export const Home = () => {
	const componentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = (event: WheelEvent) => {
			if (event.deltaY > 0) {
				// Se ha hecho scroll hacia abajo mientras esté sobre el componente
				const section = document.getElementById('shopHome');
				if (section) {
					window.scrollTo({
						top: section.offsetTop,
						behavior: 'smooth',
					});
				}
			}
		};

		const componentElement = componentRef.current;

		if (componentElement) {
			componentElement.addEventListener('wheel', handleScroll);
		}

		return () => {
			if (componentElement) {
				componentElement.removeEventListener('wheel', handleScroll);
			}
		};
	}, []);

	return (
		<section
			ref={componentRef}
			id='home'
			className='home overflow-hidden flex flex-row h-screen w-screen relative'
		>
			<div className='bgHome hidden lg:flex absolute h-full w-full bg-no-repeat bg-cover'></div>
			<div className='flex w-screen h-screen relative justify-start items-start'>
				<div className='hidden lg:flex absolute w-[500px] h-[500px] right-40 top-1/2 transform -translate-y-1/2 '>
					<div className='relative flex h-full w-full justify-center items-start'>
						<motion.div
							initial={{
								scale: 0,
								opacity: 0,
							}}
							animate={{
								scale: 1,
								opacity: 1,
							}}
							exit={{
								scale: 0,
								opacity: 0,
							}}
							transition={{
								duration: 0.5,
								delay: 0.2,
							}}
						>
							<Image src={logo} alt='coffe' className='w-[300px] h-[300px]' />
						</motion.div>
						<div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
							<div className='w-[500px]'>
								<Image src={manCoffe} alt='coffe' />
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col h-full justify-center items-center mt-10 lg:mt-20 text-black w-full lg:w-[48%] px-10'>
					<div className='flex flex-col w-full justify-center items-center '>
						<h1 className='text-4xl lg:text-6xl capitalize font-bold font-bebas-neue tracking-widest text-base-dark '>
							tu cafe gourmet
						</h1>
						<p className='text-[16px] py-5'>
							We are coffee gourmet experts dedicated to providing an exceptional experience that complements your
							lifestyle.
						</p>
						<motion.div
							variants={textVariant(0.5, -20)}
							initial='hidden'
							whileInView='show'
							viewport={{ once: false, amount: 0.7 }}
							className='flex justify-center'
						>
							<Link
								href={'reserve'}
								className='relative inline-flex items-center 
							w-[150px]
							h-[40px]
							justify-start 
							px-4
							py-2
							 overflow-hidden font-medium 
							transition-all 
							bg-base-dark
							group'
							>
								<span className='w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
								<span className='relative font-gravity-regular text-[15px] flex justify-center items-center w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black'>
									Booking Now!
								</span>
							</Link>
						</motion.div>
					</div>
					<div className='flex lg:w-[350px] lg:h-[350px] p-5 lg:p-0'>
						<div className='relative flex h-full w-justify-center items-start '>
							<motion.div
								initial={{
									scale: 0,
									opacity: 0,
								}}
								animate={{
									scale: 1,
									opacity: 1,
								}}
								exit={{
									scale: 0,
									opacity: 0,
								}}
								transition={{
									duration: 0.5,
									delay: 0.2,
								}}
							>
								<Image src={splash1} alt='coffe' />
							</motion.div>
							<div className='absolute w-full h-full flex justify-center items-center animate-cartHome'>
								<div className='w-[200px] lg:w-[250px]'>
									<Image src={cartCoffe} alt='coffe' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
