/* eslint-disable @next/next/no-img-element */
import React from 'react';
import lodingCoffe from '@/images/coffe_loading.gif';

const CoffeLoading = () => {
	return (
		<div className='wrapper'>
			<main className='main'>
				<h1 className='title'>
					<span>---</span>
				</h1>
				<div className='cup'>
					<img className='cup__img' src={lodingCoffe.src} alt='cup of coffee' />
				</div>
				<div className='progress'>
					<div className='progress__area'>
						<div className='progress__line'></div>
					</div>
					<div className='progress__sub'>loading...</div>
				</div>
			</main>
		</div>
	);
};

export default CoffeLoading;
