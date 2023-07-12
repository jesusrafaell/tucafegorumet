import { ProductDto } from '@/utils/products';
import React, { FC } from 'react';

import Product from './Product';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

interface Props {
	data: ProductDto[];
}

const ProductSlider: FC<Props> = ({ data }) => {
	console.log(data);
	return (
		<Swiper
			modules={[Pagination, Navigation, Scrollbar, A11y]}
			loop={false}
			navigation
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1440: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			}}
			pagination={{
				clickable: true,
			}}
			className='productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]'
		>
			{data.map((product, index) => {
				return (
					<SwiperSlide key={index} className='pb-10'>
						<Product product={product} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default ProductSlider;
