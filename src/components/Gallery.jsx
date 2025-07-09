import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import gallery7 from '../assets/gallery7.jpg';
import gallery8 from '../assets/gallery8.jpg';

function Gallery() {
	const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

	return (
		<section className="py-16 px-6 bg-white">
			<h2 className="text-3xl font-semibold text-center mb-12">Наш автопарк</h2>
			<div className="max-w-4xl mx-auto">
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={20}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
					}}
				>
					{images.map((img, i) => (
						<SwiperSlide key={i}>
							<img
								src={img}
								alt={`Зображення ${i + 1}`}
								className="w-full aspect-video object-cover rounded-lg"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Gallery;
