import { globalServices } from '@/services/global.services';
import { HomeData, HomeDataRes } from '@/src/types/propertyCard';
import styles from '@/styles/Homepage/FavoriteProperty.module.scss';
import { Tooltip } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { BsCopy } from 'react-icons/bs';
import { MdOutlineBathtub } from 'react-icons/md';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';
import { TbBed } from 'react-icons/tb';
import Swal from 'sweetalert2';
import { FullPageLoader } from '../Loader';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

async function fetchFavoriteProperties() {
  const res = await globalServices.getAll(`/customers/favorites`);
  if (res.status === 200 && res.data.data) {
    const propertyData = res.data.data.length > 0 ? res.data.data.map((data: HomeDataRes) => ({
      title: data.CityRegion ?? data.City ?? "",
      sqft: data.LivingAreaRange ?? 0,
      beds: data.BedroomsTotal ?? 0,
      baths: data.BathroomsTotalInteger ?? 0,
      images: data.images?.length > 0 ? data.images.map((image: { order: number; image_url: string}) => image.image_url) : [],
      address: data.UnparsedAddress,
      price: (data.ListPrice ?? 0).toLocaleString("en-US"),
      listingKey: data.ListingKey,
      transactionType: data.TransactionType ?? "",
      isFavorite: data.is_favorite ?? false,
    })) : []
    return propertyData;
  } else {
    return []
  }
}

export default function FavoriteProperty() {
  const router = useRouter();
  const propertyData = useQuery({
    queryKey: ['excludedQueryKey', 'favorite-property'],
    queryFn: () => fetchFavoriteProperties(),
    staleTime: 1000 * 60 * 5,
  })

  const [properties, setProperties] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setProperties(propertyData.data);
  }, [propertyData.data])

  const handleDelete = (listingKey: string) => {
    Swal.fire({
      text: "Are you sure you want to remove this property from favorite?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove"
    }).then((result) => {
      if(result.isConfirmed){
        setIsLoader(true);
        globalServices.post(`/customers/favorites/toggle`, { propertyListingKey: listingKey })
        .then((res) => {
          if(res.status === 200){
            setProperties((properties) => properties.filter((property: HomeData) => property.listingKey !== listingKey))
          }
        })
        .finally(() => {
          setIsLoader(false);
        })
      }
    })
  }

  const handleProperty = (listingKey: string) => {
    router.push(`/property-detail/${listingKey}`);
  }

  return (
    <div className="p-[39px] rounded-[24px] border border-[#ebebeb]">
      {(isLoader || propertyData.isLoading) && <FullPageLoader />}
      <div className={styles.gridFavoritesItem}>
        {properties && Array.isArray(properties) && 
          properties.length > 0 ? properties.map((property: HomeData) => (
            <div className={styles.favoriteBox} onClick={() => handleProperty(property.listingKey)} key={property.listingKey}>
              <div className={styles.deleteContainer} onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleDelete(property.listingKey)
              }}>
                <RiDeleteBin2Line className='!text-black' />
              </div>
              <div className={styles.imageContainer}>
                {property.transactionType && <div className='inline-block top-[20px] z-[11] left-[20px] absolute text-white py-[9px] px-[15px] text-[13px] leading-[15px] rounded-full bg-[#1f4b43]'>{property.transactionType}</div>}
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
                  {property.images?.length !== 0 ? property.images.map((img, index) => (
                    <SwiperSlide key={img+index}>
                      <Link href={`/property-detail/${property.listingKey}`}>
                        <img src={img} alt={`Image ${index + 1}`} className='w-full object-cover' />
                      </Link>
                    </SwiperSlide>
                  )) :
                  <SwiperSlide key={"static"}>
                    <Link href={`/property-detail/${property.listingKey}`}>
                      <img src={"/images/slider/slider-properties-2.jpg"} alt={`Image`} className='w-full object-contain' />
                    </Link>
                  </SwiperSlide>}
                </Swiper>
                {/* <img className='w-full object-cover' src={"https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11947400/thumbnail/061a90a7-e90b-412b-9792-42b1acdbabb7-t.jpg"} /> */}
              </div>
              <div className={styles.textContent}>
                <div className="flex justify-between items-center mb-2">
                  <p className={styles.price}>${property.price}</p>
                  <p className="text-[#3d3e3f] text-[12px] font-semibold">MLS ID&reg; {property.listingKey}</p>
                </div>
                <Tooltip content={property.address ?? "NA"} showArrow={true}>
                  <div className="flex gap-[4px] items-center">
                    <SlLocationPin className={styles.locationIcon} size={14} />
                    <p className={`${styles.address} truncate`}>{property.address ?? "NA"}</p>
                  </div>
                </Tooltip>
                <div className={styles.meta}>
                  <span><TbBed size={18} /> {property.beds} Beds</span>
                  <span><MdOutlineBathtub size={18} />{property.baths} Baths</span>
                  <span><BsCopy size={18} />{property.sqft} Sqft</span>
                </div>
              </div>
            </div>
          ))
          : propertyData.isLoading ? null : <div className='font-semibold text-[20px]'>No Property Found</div>
        }
      </div>
    </div>
  )
}