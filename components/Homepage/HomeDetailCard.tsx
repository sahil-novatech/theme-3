import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/styles/Homepage/HomeDetailCard.module.scss";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { TbBed } from "react-icons/tb";
import { MdOutlineBathtub } from "react-icons/md";
import { BsCopy } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import FavouriteButton from "../FavouriteButton";
import { useGlobalContext } from "@/context/GlobalContext";

interface CardProps {
  images: string[];
  title: string;
  price: string;
  address: string | null;
  beds: number;
  baths: number;
  sqft: number;
  featured?: boolean;
  listingKey: string;
  transactionType: string;
  isFavorite: boolean | null;
}

const HomeDetailCard: React.FC<CardProps> = ({
  images,
  // title,
  price,
  address,
  beds,
  baths,
  sqft,
  listingKey,
  transactionType,
  isFavorite
}) => {
  const [isHover, setIsHover] = useState(false);
  const { user } = useGlobalContext();

  return (
    <div onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className={styles.card}>
      {/* Swiper for Images */}
      <div className={styles.imageContainer}>
        <Swiper
          modules={[Navigation, Pagination]}
          observeParents={true}
          observer={true}
          navigation={{
            nextEl: ".homes-next",
            prevEl: ".homes-prev",
          }}
          pagination={{ clickable: true }}
          spaceBetween={10}
          className={styles.swiperContainer}
          // preventInteractionOnTransition={true}
          // onTouchStart={(e) => e.stopPropagation()}
        >
          {images?.length !== 0 ? images.map((img, index) => (
            <SwiperSlide key={img+index}>
              <Link href={`/property-detail/${listingKey}`}>
                <img src={img} alt={`Image ${index + 1}`} className={styles.image} />
              </Link>
            </SwiperSlide>
          )) :
          <SwiperSlide key={"static"}>
            <Link href={`/property-detail/${listingKey}`}>
              <img src={"/images/slider/slider-properties-2.jpg"} alt={`Image`} className={styles.image} />
            </Link>
          </SwiperSlide>}
        </Swiper>
        {transactionType && <div className={styles.status}>
          <span className={styles.forSell}>{transactionType}</span>
          {/* {featured && <span className={styles.featured}>FEATURED</span>} */}
        </div>}
        {user && <FavouriteButton isAbsolute={true} isFavorite={Boolean(isFavorite)} listingKey={listingKey} isHover={isHover} />}
      </div>

      {/* Card Details */}
      <Link href={`/property-detail/${listingKey}`}>
        <div className={`px-2 py-3 ${styles.details}`}>
          <div className="flex justify-between items-center mb-2">
            <p className={styles.price}>${price}</p>
            <p className="text-[#3d3e3f] text-[12px] font-semibold">MLS ID&reg; {listingKey}</p>
          </div>
          <Tooltip content={address ?? "NA"} showArrow={true}>
            <div className="flex gap-[4px] items-center">
              <SlLocationPin className={styles.locationIcon} size={14} />
              <p className={`${styles.address} truncate`}>{address ?? "NA"}</p>
            </div>
          </Tooltip>
          <div className={styles.meta}>
            <span><TbBed size={18} /> {beds} Beds</span>
            <span><MdOutlineBathtub size={18} />{baths} Baths</span>
            <span><BsCopy size={18} />{sqft} Sqft</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeDetailCard;