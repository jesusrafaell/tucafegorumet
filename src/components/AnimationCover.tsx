import { FC, ReactNode, useContext, useEffect } from 'react';
import gsap from 'gsap';
import { AnimationCoverContext } from '@/context/AnimationCoverContext';

interface Props {
	children: ReactNode;
	title: string;
}

const AnimationCover: FC<Props> = ({ children, title }) => {
	const { setCompletedAnimation, isLoading } = useContext(AnimationCoverContext);
	useEffect(() => {
		const t1 = gsap.timeline();
		const t2 = gsap.timeline();
		t1.fromTo(
			'.imsrk',
			{
				opacity: 0,
				xPercent: -100,
			},
			{
				opacity: 1,
				xPercent: 0,
				duration: 1,
				ease: 'power1.in',
				yoyo: true,
			}
		);

		t2.fromTo(
			'.dot',
			{
				opacity: 0,
				yPercent: 100,
			},
			{
				opacity: 1,
				yPercent: 0,
				duration: 1,
				ease: 'power1.in',
				yoyo: true,
			}
		);

		if (!isLoading) {
			console.log('Ready loading');
			t1.to('.dot', {
				x: 20,
				duration: 1,
				ease: 'power1.out',
			});

			t1.to('.dot', {
				x: -10,
				duration: 0.5,
				ease: 'power1.out',
			});

			//when loading render this [3312]

			t1.to('.imsrk', {
				opacity: 0,
				xPercent: -100,
				duration: 1,
				ease: 'power1.out',
				yoyo: true,
			});

			t1.to(
				'.dot',
				{
					opacity: 0,
					duration: 1,
					ease: 'expo.out',
				},
				3
			);

			t1.to('.cover', {
				xPercent: -100,
				duration: 1,
				ease: 'power1.out',
			});

			t1.to(
				'.cover-1',
				{
					xPercent: -100,
					duration: 1,
					opacity: 1,
					ease: 'power1.out',
				},
				3.4
			);

			t1.to('.main-cover', {
				opacity: 0,
				display: 'none',
				xPercent: -100,
				duration: 0.1,
				ease: 'power1.out',
				onComplete: () => {
					setCompletedAnimation(true);
				},
			});

			t1.to('.pageCover', {
				opacity: 1,
				// height: '100%',
				// with: '100vw',
			});

			t1.to('.main-cover', {
				display: 'none',
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);

	return (
		<>
			<div className='main-cover overflow-hidden h-[100vh] w-[100vw]'>
				<div className='cover opacity-1 absolute bg-[#000000] w-full h-[100vh]'>
					<div className='cover-heading absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
						<h1 className='imsrk opacity-0 text-white text-5xl lg:text-[72px] inline-block font-gravity-bold'>
							{title}
						</h1>
						<span className='dot opacity-0 text-white text-5xl lg:text-[72px] font-gravity-bold inline-block'>
							{'.'}
						</span>
					</div>
				</div>
				<div className='cover-1 opacity-0 bg-[#0f0f0f] absolute w-full h-[100vh]'></div>
			</div>
			<div className='pageCover opacity-0'>{children}</div>
		</>
	);
};

export default AnimationCover;
