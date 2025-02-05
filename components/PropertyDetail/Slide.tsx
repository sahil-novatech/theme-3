"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const sliderProperty = {
	modules: [Navigation],
  slidesPerView: 2.07,
	spaceBetween: 10,
	observer: true,
	observeParents: true,
  rewind: true,
  navigation: {
    enabled: true,
    prevEl: '.custom-prev-button',
    nextEl: '.custom-next-button'
  },
  breakpoints: {
		0: {
			slidesPerView: 1.07,
		},
		767: {
			slidesPerView: 2.07,
		},
	}
}

export default function Slide({ images }: { images: { Order: number, image_url: string }[] }) {
  return (
    <div className='relative'>
      <Swiper
        {...sliderProperty}
      >
        {images?.length > 0 && images.map((imageData) => (
          <SwiperSlide key={imageData.image_url+imageData.Order}>
            <div className="swiper-item">
              <div className="image-group relative">
                <img src={imageData.image_url} width="100%" style={{ objectFit: 'cover', height: '75vh', borderRadius: '16px' }} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${images?.length > 0 ? 'visible' : 'invisible' } absolute flex justify-between w-full z-[11] top-[calc(50%-35px)]`}>
        <button className='custom-prev-button'>
          <FaAngleLeft className='cursor-pointer' size={70} color="#007aff" />
        </button>
        <button className='custom-next-button'>
          <FaAngleRight className='cursor-pointer' size={70} color="#007aff" />
        </button>
      </div>
    </div>
  )
}