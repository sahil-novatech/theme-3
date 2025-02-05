'use client'
import Heading from "../Heading"
import VideoPopup from "../VideoPopup";
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import styles from '@/styles/Homepage/BestProperties.module.scss';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";

const BestProperties: React.FC = () => {
  return (
    <section className={`idx-container`}>
      <div className="idx-section">
        {/* Section Title */}
        <Heading title="Best Properties" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-6">
          {/* First Image */}
          <div className="col-span-2">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/images/slider/slider-properties-1.jpg"
                    alt="Living Room"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/images/slider/slider-properties-2.jpg"
                    alt="Living Room"
                    className="object-cover"
                  />
                </div>
                {/* <img
                  src="/images/slider/slider-properties-2.jpg"
                  alt="Living Room"
                /> */}
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={`col-span-2 row-span-2 rounded-lg overflow-hidden ${styles.imageContainer}`}>
            <img
              src="/images/house/best-properties-1.jpg"
              alt="Living Room"
              className={`w-full h-full object-cover`}
            />
            <div className="absolute bottom-0 text-white p-[30px] w-full z-10">
              <Link className="text-2xl font-bold" href="/city-1">Luxury Condo</Link>
              <p className="mt-2 mb-3"><GrLocation className="inline-block" size={24} /> 148-37 88th Ave, Jamaica, NY 11435</p>
              <p>
                <span className="font-bold">$815,000</span>
                <span className="ms-[50px]">🏠 4 Beds | 🛁 3 Baths | 📏 2660 sq ft</span>
              </p>
            </div>
          </div>
          {/* <div className="rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/500"
              alt="Living Room"
              className="w-full h-full object-cover"
            />
          </div> */}

          {/* Property Details */}
          <div className="flex flex-col justify-center items-start bg-black text-white rounded-lg p-6">
            <h3 className="text-4xl font-bold mb-4">260+</h3>
            <p className="mb-6">
              Explore our wide variety of properties to find your dream home
              today.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition">
              →
            </button>
          </div>

          {/* Video Thumbnail */}
          <div className="relative rounded-lg overflow-hidden">
            <img src="/images/image-box/video-1.jpg" alt="video" />
            <VideoPopup />
          </div>
        </div>

      </div>
    </section>
  )
}

export default BestProperties;