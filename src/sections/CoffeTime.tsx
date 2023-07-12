/* eslint-disable @next/next/no-img-element */
import Card from '@/components/Card';
import HeroCoffeTime from '@/components/Hero-CoffeTime';
import CupItems, { CupItem } from '@/utils/cardItems';
import { textVariant } from '@/utils/monition';
import { motion, useAnimation } from 'framer-motion';
import { title } from 'process';
import { useEffect, useState } from 'react';
import coffeTime_img from '@/images/coffe_time_rotate.png';
import Image from 'next/image';
import coffeTimeBg1 from '@/images/coffeTime/bg-coffetime.png';
import Hero from '@/components/Hero';

export const CoffeTime = () => {
	const [selectCup, setSelectCup] = useState<CupItem>(CupItems[0]);

	const controlInfo = useAnimation();
	const controlCoffeTime = useAnimation();
	const controlBg = useAnimation();

	const transitionCoffes = {
		transition: { duration: 0.3, ease: 'easeInOut' },
	};

	useEffect(() => {
		const handleAnimationInit = async () => {
			handleRotateCoffe(selectCup.id);
		};
		handleAnimationInit();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleRotateCoffe = async (id: number) => {
		switch (id) {
			case 1:
				return await controlCoffeTime.start({ rotate: -130, ...transitionCoffes });
			case 2:
				return await controlCoffeTime.start({ rotate: -220, ...transitionCoffes });
			case 3:
				return await controlCoffeTime.start({ rotate: -310, ...transitionCoffes });
			case 4:
				return await controlCoffeTime.start({ rotate: -400, ...transitionCoffes });
		}
	};

	const [waiting, setWaiting] = useState(false);

	const handleSelectCup = async (cup: CupItem) => {
		await Promise.all([
			await controlInfo.start({ opacity: 0, y: -20 }),
			controlBg.start({ x: -5, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }),
			controlInfo.start({ y: 20, transition: { duration: 0, delay: 0 } }),
		]);
		setSelectCup(cup);
		await Promise.all([
			await handleRotateCoffe(cup.id),
			controlInfo.start({ y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeIn' } }),
			controlBg.start({ x: 0, opacity: 0.2, transition: { duration: 0.2, ease: 'easeIn', delay: 0 } }),
		]);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (selectCup.id === 4) {
				handleSelectCup(CupItems[0]);
			} else {
				handleSelectCup(CupItems[selectCup.id]);
			}
		}, 5000);
		return () => {
			// Esto se ejecuta cuando el componente se desmonta
			clearTimeout(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectCup]);

	const easing = [0.6, -0.05, 0.01, 0.99];

	const stagger = {
		animate: {
			transition: {
				staggerChildren: 0.05,
			},
		},
	};

	const fadeInUp = {
		initial: {
			y: 60,
			opacity: 0,
			transition: { duration: 0.6, ease: easing },
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: easing,
			},
		},
	};

	return (
		<section id='home' className='overflow-hidden flex flex-row h-screen w-screen relative '>
			<Hero />
		</section>
	);
};

export default CoffeTime;
