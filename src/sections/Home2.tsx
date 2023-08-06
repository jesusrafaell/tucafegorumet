import { explainAnimation, textVariant } from '@/utils/motion';
import { motion } from 'framer-motion';
import Link from 'next/link';
import splash1 from '@/images/home/splash1.png';
import manCoffe from '@/images/home/mancoffe.png';
import Image from 'next/image';
import logo from '@/images/logo_tucafe.png';
import lang from '@/LANG/eng.json';
import bgHome from '@/images/home/bgHome2.png';
import { useContext, useEffect } from 'react';
import machine from '@/images/machine.png';
import coffe_old from '@/images/coffe_old.png';
import { BackGroundColorContext } from '@/context/BackgorundColorContext';

export const Home = () => {
	const { setItemColor } = useContext(BackGroundColorContext);
	useEffect(() => {
		setItemColor(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<section id='home' className='overflow-hidden flex flex-row h-screen w-screen relative'>
			<div className='w-screen absolute'>
				<Image src={bgHome} alt='bghome' className='w-full h-full' />
			</div>
			<div className='flex lg:flex-row flex-col w-full h-full justify-center items-center'>
				<div className='container mx-auto flex flex-col justify-center items-center text-black w-full lg:pb-[100px] relative'>
					<div className='relative hidden lg:flex h-full w-full justify-center items-center'>
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
					<motion.div
						variants={explainAnimation}
						initial='hidden'
						animate='show'
						className='flex flex-col justify-center items-center z-20 w-full pt-10'
					>
						<div className='flex flex-col relative'>
							<h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize text-base-dark font-lemonMilk-bold font-bold whitespace-nowrap'>
								{lang.title_home}
							</h1>
							<p className='text-[14px] md:text-[15px] lg:text-[25px] font-bold text-gray-400 text-center pt-5'>
								{lang.text_home}
							</p>
							<p className='text-[14px] md:text-[15px] lg:text-[25px] font-bold text-gray-400  text-center'>
								{lang.text_home2}
							</p>
						</div>
					</motion.div>
				</div>
			</div>
			<Image src={machine} alt='machine' className='absolute right-10 bottom-0 w-[200px]' />
			<Image src={coffe_old} alt='coffe-old' className='absolute left-10 bottom-10 w-[150px] hidden lg:flex' />
		</section>
	);
};

export default Home;
