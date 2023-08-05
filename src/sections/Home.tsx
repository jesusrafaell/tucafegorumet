import { explainAnimation, textVariant } from '@/utils/motion';
import { motion } from 'framer-motion';
import Link from 'next/link';
import splash1 from '@/images/home/splash1.png';
import manCoffe from '@/images/home/mancoffe.png';
import Image from 'next/image';
import logo from '@/images/logo_tucafe.png';
import lang from '@/LANG/eng.json';
// import bgCoffe from '@/images/bg_coffe2.png';
import groundI from '@/images/home/groundI.png';
import groundD from '@/images/home/groundD.png';

export const Home = () => {
	return (
		<section id='home' className='home overflow-hidden flex flex-row h-screen w-screen relative'>
			<motion.div
				initial={{
					clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
				}}
				animate={{
					clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 0 100%)',
					transition: {
						delay: 1,
						ease: 'easeIn',
						duration: 0.4,
					},
				}}
				className='bg-base-dark hidden lg:flex absolute h-screen w-screen'
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeIn',
					duration: 0.4,
					delay: 1,
				}}
				className='absolute bottom-0 lg:bottom-0 right-0'
			>
				<Image src={groundD} alt='ground-rop' />
			</motion.div>
			<div className='flex lg:flex-row flex-col w-full h-full justify-center items-center'>
				{/* <div className='absolute left-0 bottom-0 z-10 opacity-50 lg:opacity-70 w-full lg:w-[700px]'>
					<Image src={bgCoffe} alt='Coffe Back' />
				</div> */}
				<div className='container mx-auto flex flex-col justify-center items-center text-black w-full lg:pb-[100px] relative'>
					<motion.div
						variants={explainAnimation}
						initial='hidden'
						animate='show'
						className='flex flex-col justify-center items-center z-20 w-full '
					>
						<motion.h1
							// variants={textVariant(0.5, 20)}
							// initial='hidden'
							// animate='show'
							// viewport={{ once: false, amount: 0.7 }}
							className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize text-base-dark font-lemonMilk-bold font-bold whitespace-nowrap'
						>
							{lang.title_home}
						</motion.h1>
						<p className='text-[14px] md:text-[15px] lg:text-[25px] font-bold text-gray-400 text-center pt-5'>
							{lang.text_home}
						</p>
						<p className='text-[14px] md:text-[15px] lg:text-[25px] font-bold text-gray-400  text-center'>
							{lang.text_home2}
						</p>
					</motion.div>
				</div>
				<div className='relative hidden lg:flex h-full w-full justify-center items-center mt-40'>
					<motion.div
						initial={{
							scale: 0,
							opacity: 1,
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
							delay: 1.5,
						}}
					>
						<Image src={logo} alt='coffe' className='w-[350px] h-[370px]' />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Home;
