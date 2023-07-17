import { textVariant } from '@/utils/monition';
import { motion } from 'framer-motion';
import Link from 'next/link';
import splash1 from '@/images/home/splash1.png';
import manCoffe from '@/images/home/mancoffe.png';
import Image from 'next/image';
import logo from '@/images/logo_tucafe.png';
import * as lang from '@/LANG/eng.json';
import bgCoffe from '@/images/bg_coffe2.png';

export const Home = () => {
	return (
		<section id='home' className='home overflow-hidden flex flex-row h-screen w-screen relative'>
			<motion.div
				initial={{
					x: '50%',
				}}
				whileInView={{
					x: 0,
					transition: {
						ease: 'easeIn',
						duration: 0.4,
					},
				}}
				className='bgHome hidden lg:flex absolute h-full w-full bg-no-repeat bg-cover'
			/>
			<div className='flex lg:flex-row flex-col w-full h-full justify-center items-center'>
				<div className='container mx-auto flex flex-col justify-center items-center mt-10 text-black w-full px-10 pb-40 md:pb-0'>
					<div className='absolute left-0 bottom-10 lg:bottom-0 b z-10 opacity-50 lg:opacity-40 w-full lg:w-[700px]'>
						<Image src={bgCoffe} alt='Coffe Back' />
					</div>
					<div className='flex flex-col w-full justify-center items-center z-20'>
						<motion.h1
							variants={textVariant(0.5, 20)}
							initial='hidden'
							whileInView='show'
							viewport={{ once: false, amount: 0.7 }}
							className='text-3xl lg:text-6xl capitalize text-base-dark font-lemonMilk-bold font-bold whitespace-nowrap'
						>
							{lang.title_home}
						</motion.h1>
						<p className='text-[14px] md:text-[15px] lg:text-[20px] py-5 text-center'>{lang.text_home}</p>
						<motion.div
							variants={textVariant(0.5, -20)}
							initial='hidden'
							whileInView='show'
							viewport={{ once: false, amount: 0.7 }}
							className='flex justify-center'
						>
							<Link
								href={'booking'}
								className='relative inline-flex items-center w-[150px] h-[40px] justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-black group'
							>
								<span className='w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
								<span className='relative font-gravity-regular text-[15px] flex justify-center items-center w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black'>
									{lang.home_button}
								</span>
							</Link>
						</motion.div>
					</div>
					{/* <div className='absolute flex w-full lg:w-[200px] h-full mt-5 lg:p-0 bottom-0'>
						<div className='relative flex h-full w-justify-center items-start'>
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
								className='animate-heart'
							>
								<Image src={splash1} alt='coffe' />
							</motion.div>
							<div className='w-full h-full flex justify-center items-center'>
								<div className='w-[200px] lg:w-[200px]'>
									<Image src={manCoffe} alt='coffe' />
								</div>
							</div>
						</div>
					</div> */}
				</div>
				<div className='relative hidden lg:flex h-full w-full justify-center items-center'>
					<motion.div
						initial={{
							scale: 0,
							opacity: 0,
						}}
						whileInView={{
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
						<Image src={logo} alt='coffe' className='w-[250px] h-[270px]' />
					</motion.div>
					{/* humano */}
					{/* <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
							<div className='w-[500px]'>
								<Image src={manCoffe} alt='coffe' />
							</div>
						</div> */}
				</div>
			</div>
		</section>
	);
};

export default Home;
