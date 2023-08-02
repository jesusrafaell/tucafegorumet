/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { motion } from 'framer-motion';
import lang from '@/LANG/eng.json';

const Hero = () => {
	return (
		<section className='flex justify-center h-full heroHome lg:bg-fixed bg-no-repeat bg-containt bg-cover bg-center '>
			<div className='w-full h-full flex flex-row justify-end items-center text-base-red '>
				{/* <div className='flex flex-col w-full h-full justify-center'>
					<div
						className='
							hidden
							lg:text-[60px] 
							lg:flex
							flex-col
							font-satoshi
							font-bold
							h1-hero
							justify-center
							items-end
							lg:px-40
							lg:whitespace-nowrap
							leading-[1.1] mb-5'
					>
						<motion.h1
							variants={textVariant(0.7, -30)}
							initial='hidden'
							whileInView='show'
							viewport={{ once: false, amount: 0.7 }}
						>
							Tu Café Gourmet
						</motion.h1>
					</div>
				</div> */}
				<motion.div
					initial={{
						x: '-10%',
						opacity: 0,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
						transition: {
							ease: 'easeIn',
							duration: 0.3,
						},
					}}
					viewport={{ once: false, amount: 0.7 }}
					className='flex bg-white bg-opacity-70 h-full w-full lg:w-[50%] p-7 lg:p-20 justify-center items-center'
				>
					<div className='flex flex-col justify-center items-center gap-y-5 text-black w-[450px] font-bold py-20'>
						<h1 className='flex text-3xl lg:text-4xl font-bebas-neue tracking-wider uppercase'>
							{lang.index_hero_title}
						</h1>
						<p className='text-justify font-gravity-light leading-[1.6] text-[17px] lg:text-xl'>
							{lang.index_hero_text}
						</p>
						{/* <Link
							href={'/booking'}
							className='uppercase font-gravity-bold border-b-2 relative px-5 py-3 overflow-hidden font-medium text-gray-100 bg-black border border-gray-700 rounded-lg shadow-inner group '
						>
							<span className='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease'></span>
							<span className='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease'></span>
							<span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease'></span>
							<span className='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease'></span>
							<span className='absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-200 opacity-0 group-hover:opacity-100'></span>
							<span className='relative transition-colors duration-300 delay-200 group-hover:text-black ease capitalize whitespace-nowrap'>
								{lang.home_button}
							</span>
						</Link> */}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
