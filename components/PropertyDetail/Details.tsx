'use client';

import Link from 'next/link';
import { FaCity, FaRuler, FaBed, FaBath, FaCheckCircle,
  // FaWalking, FaBicycle, FaCheckCircle
} from 'react-icons/fa';
import styles from '@/styles/PropertyDetail/Detail.module.scss';
// import HomeDetailCard from '../Homepage/HomeDetailCard';
// import ReviewForm from './ReviewForm';
// import Rating from '../Rating';
// import { Divider, Input } from '@nextui-org/react';
// import Nearby from './Nearby';
// import ChartList from "@/components/chart/ChartList"
// import VideoPopup from '../VideoPopup';
// import FloorDetails from './FloorDetails';
import { GrLocation } from 'react-icons/gr';
import moment from "moment";
import { HomeDataRes } from '@/src/types/propertyCard';
import { useMemo } from 'react';
import FavouriteButton from '../FavouriteButton';
import { useGlobalContext } from '@/context/GlobalContext';


// const energyClass = [
//   { label: 'Energetic class', value: 'A+' },
//   { label: 'Global Energy Performance Index', value: '92.42 kWh / m²a' },
//   { label: 'Renewable energy performance index', value: '00.00 kWh / m²a' },
//   { label: 'Energy performance of the building', value: '50' },
//   { label: 'EPC Current Rating', value: '92' },
//   { label: 'EPC Potential Rating', value: '80' }
// ]

// const description =
//   'Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining room. Remodeled kitchen with granite countertops, white cabinetry, and stainless appliances. Lovely master bedroom has updated bath, beautiful view of the pool. Guest bedrooms have walk-in, cedar closets. Delightful backyard; majestic oaks surround the free form pool and expansive patio, wet bar, and grill.';

// const homesData = [
//   {
//     id: '1',
//     images: ["/images/house/home-1.jpg", "/images/house/home-2.jpg", "/images/house/home-3.jpg"],
//     title: "Villa One Hyde Park",
//     price: "815,000",
//     address: "148-37 88th Ave, Jamaica, NY 11435",
//     beds: 4,
//     baths: 3,
//     sqft: 2660,
//   },
//   {
//     id: '2',
//     images: ["/images/house/home-1.jpg", "/images/house/home-2.jpg", "/images/house/home-3.jpg"],
//     title: "Home Pitt Street",
//     price: "815,000",
//     address: "148-37 88th Ave, Jamaica, NY 11435",
//     beds: 4,
//     baths: 3,
//     sqft: 2660,
//   }
// ]

// const reviewData = [
//   {
//     id: "1",
//     image: "/images/author/author-5.png",
//     name: "Jane Cooper",
//     date: "April 06, 2024 at 7:55 pm",
//     reviewText: "Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!"
//   },
//   {
//     id: "2",
//     image: "/images/author/author-6.png",
//     name: "Jane Cooper",
//     date: "April 06, 2024 at 7:55 pm",
//     reviewText: "Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!"
//   }
// ]

// const featureGroups = [
//   {
//     title: "Interior Details",
//     features: ["Equipped Kitchen", "Gym", "Laundry", "Media Room"],
//   },
//   {
//     title: "Outdoor Details",
//     features: [
//       "Back yard",
//       "Basketball court",
//       "Front yard",
//       "Garage Attached",
//       "Hot Bath",
//       "Pool",
//     ],
//   },
//   {
//     title: "Utilities Central",
//     features: [
//       "Central Air",
//       "Electricity",
//       "Heating",
//       "Natural Gas",
//       "Ventilation",
//       "Water",
//     ],
//   },
//   {
//     title: "Other Features",
//     features: [
//       "Chair Accessible",
//       "Elevator",
//       "Fireplace",
//       "Smoke detectors",
//       "Washer and dryer",
//       "WiFi",
//     ],
//   },
// ];

export default function Details({ propertyDetail }: { propertyDetail: HomeDataRes }) {
  moment.locale();
  const { user } = useGlobalContext();

  const overview = [
    { icon: <FaCity />, text: propertyDetail?.PropertyType ?? "" },
    // { icon: <FaHammer />, text: `Built in ${propertyDetail?.TaxYear ?? ""}` },
    { icon: <FaRuler />, text: `${propertyDetail?.LivingAreaRange ?? 0} Sq Ft` },
    { icon: <FaBed />, text: `${propertyDetail?.BedroomsTotal ?? 0} Bedrooms` },
    { icon: <FaBath />, text: `${propertyDetail?.BathroomsTotalInteger ?? 0} Bathrooms` },
    // { icon: <FaCar />, text: `${propertyDetail?.GarageParkingSpaces ?? 0} Garage` },
  ];

  const address = [
    // { label: 'Address', value: '10425 Tabor St' },
    { label: 'Zip/Postal Code', value: propertyDetail?.PostalCode ?? 'NA' },
    { label: 'City', value: propertyDetail?.City ?? "NA" },
    { label: 'Community', value: propertyDetail?.CityRegion ?? "NA"},
    // { label: 'Area', value: 'Brookside' },
    { label: 'State/County', value: propertyDetail?.CountyOrParish ?? 'NA' },
    { label: 'Country', value: propertyDetail?.Country ?? 'NA' },
  ];

  const listingDetails = [
    { label: 'MLS ID', value: propertyDetail?.ListingKey ?? "NA" },
    { label: 'Listed By', value: propertyDetail?.ListOfficeName ?? "NA"},
    { label: 'List', value: `$${(propertyDetail?.ListPrice ?? 0).toLocaleString("en-US")}` },
    { label: 'Original List', value: `$${(propertyDetail?.ListPrice ?? 0).toLocaleString("en-US")}` },
    { label: 'Contract Date', value: propertyDetail?.OriginalEntryTimestamp ? moment(propertyDetail?.OriginalEntryTimestamp).format("YYYY-MM-DD") : "NA" },
    { label: 'Expiry Date', value: 'NA' },
    { label: 'Last Updated', value: propertyDetail?.ModificationTimestamp ? moment(propertyDetail?.ModificationTimestamp).format("YYYY-MM-DD") : "NA" },
    { label: 'Taxes', value: `$${(propertyDetail?.TaxAnnualAmount ?? 0)?.toLocaleString("en-US")}` },
    { label: 'Tax Year', value: propertyDetail?.TaxYear ?? "NA" },
    { label: 'PIN#', value: 'NA' },
    { label: 'Seller/Landlord Name', value: 'NA' },
    { label: 'Seller Property Info Statement', value: 'NA' },
    { label: 'Commission Co-Op Brokerage', value: 'NA' },
    { label: 'Contact After Expired', value: 'NA' },
    { label: 'Holdover', value: 'NA' },
    { label: 'Legal Description', value: 'NA' },
    { label: 'Status', value: 'NA' },
    { label: 'Possession Remarks', value: propertyDetail?.PossessionDetails ?? "NA" },
    { label: 'Occupancy', value: propertyDetail?.OccupantType ?? "NA" },
    { label: 'Permission To Advertise', value: 'NA' },
  ]

  const details = [
    // { label: 'Added', value: propertyDetail?.OriginalEntryTimestamp ? moment(propertyDetail?.OriginalEntryTimestamp).format("YYYY-MM-DD") : "NA" },
    // { label: 'Updated', value: propertyDetail?.ModificationTimestamp ? moment(propertyDetail?.ModificationTimestamp).format("YYYY-MM-DD") : "NA" },
    // { label: 'Taxes', value: `${propertyDetail?.TaxAnnualAmount?.toFixed(2)} per year`},
    // { label: 'Tax Year', value: propertyDetail?.TaxYear ?? "NA", },
    // { label: 'Garage', value: propertyDetail?.GarageParkingSpaces ?? 0 },
    // { label: 'Price', value: `$${(propertyDetail?.ListPrice ?? 0).toLocaleString("en-US")}` },
    // { label: 'Garage Size', value: '0 Sq Ft' },
    { label: 'Property Size', value: `${propertyDetail?.LivingAreaRange ?? 0} Sq Ft` },
    // { label: 'Year Built', value: propertyDetail?.TaxYear ?? 'NA' },
    { label: 'Bedrooms', value: propertyDetail?.BedroomsTotal ?? 0 },
    { label: 'Property Type', value: propertyDetail?.PropertyType ?? "NA" },
    { label: 'Bathrooms', value: propertyDetail?.BathroomsTotalInteger ?? 0 },
    { label: 'Property Status', value: propertyDetail?.TransactionType ?? "NA" },
    { label: 'Kitchens', value: propertyDetail?.KitchensTotal ?? "NA" },
    { label: 'Fronting On', value: propertyDetail?.DirectionFaces ?? "NA"},
    { label: 'Rooms', value: propertyDetail?.RoomsTotal ?? "NA" },
    { label: 'A/C', value: propertyDetail?.Cooling?.join(", ") ?? "NA"},
    { label: 'Water Source', value: propertyDetail?.WaterSource?.join(", ") ?? "NA"},
    { label: 'Sewers', value: propertyDetail?.Sewer?.join(", ") ?? "NA"},
    { label: 'Heating Type', value: propertyDetail?.HeatType ?? "NA"},
    { label: 'Heating Source', value: propertyDetail?.HeatSource ?? "NA"},
    { label: 'Parking Drive Spaces', value: propertyDetail?.ParkingSpaces ?? "NA"},
    { label: 'Total Parking Spaces', value: propertyDetail?.ParkingTotal ?? "NA"},
    { label: 'Garage Type', value: propertyDetail?.GarageType ?? "NA"},
    { label: 'Garage Parking Spaces', value: propertyDetail?.CoveredSpaces ?? "NA"},
    { label: 'Other Structures', value: propertyDetail?.OtherStructures?.join(", ") ?? "NA"},
    { label: 'Dir/Cross St', value: propertyDetail?.CrossStreet ?? "NA"},
    { label: 'Acres', value: propertyDetail?.LotSizeRangeAcres ?? "NA"},
    { label: 'Pool', value: propertyDetail?.PoolFeatures?.join(", ") ?? "NA"},
    { label: 'Basement', value: propertyDetail?.Basement?.join(", ") ?? "NA"},
    { label: 'Lot Size Source', value: propertyDetail?.LotSizeSource ?? "NA"},
    { label: 'Utilities-Cable', value: "NA"},
    { label: 'Utilities-Hydro', value: "NA"},
    { label: 'Utilities-Telephone', value: "NA"},
    { label: 'Utilities-Gas', value: "NA"},
    { label: 'Lot Size', value: "NA"},
    { label: 'Water', value: "NA"},
    { label: 'Exterior', value: "NA"},
    { label: 'Drive', value: "NA"},
    { label: 'Parking/Drive', value: "NA"},

    // Utilities-Cable ->  CableYNA 
    // Utilities-Hydro -> "" 
    // Utilities-Telephone -> ""
    // Utilities-Gas -> HeatingYN
    // Lot Size -> ""
    // Water -> ""
    // Exterior -> ""
    // Drive -> ParkingFeatures
    // Parking/Drive -> ParkingFeatures
  ];

  const additionalFeatures = useMemo(() => {
    const features = [];
    if(propertyDetail?.DenFamilyroomYN){
      features.push('Family Room');
    }
    if(propertyDetail?.FireplaceYN){
      features.push('Fireplace/Stove');
    }
    if(propertyDetail?.PropertyFeatures && propertyDetail.PropertyFeatures?.length > 0){
      features.push(...propertyDetail.PropertyFeatures);
    }
    return features;
  }, [propertyDetail])

  const waterFrontDetails = [
    { label: 'Topography', value: propertyDetail?.Topography?.join(", ") ?? "NA"},
    { label: 'Waterfront', value: propertyDetail?.Waterfront?.join(", ") ?? "NA"},
  ]
  return (
    <>
      <div className={styles.section}>
        <div className={styles.headTitle}>
          <div>
            <div className="list-tags position-unset mb-1">
              <span className="forSale">{propertyDetail?.TransactionType}</span>
              {/* <Link href="/#" className="featured">FEATURED</Link> */}
            </div>
            <h3 className='text-3xl font-bold mb-2'>{propertyDetail?.CityRegion}</h3>
            <div className="location flex gap-1 items-center">
              <GrLocation />
              <div className="text-content">{propertyDetail?.UnparsedAddress}</div>
            </div>
          </div>
          <div>
            {/* <div className="list-icons-page flex gap-2 style-white mb-8">
              <div>
                <FaRegHeart size={20} />
              </div>
              <div>
                <MdOutlineDoorSliding size={20} />
              </div>
              <div>
                <PiDownload size={20} />
              </div>
              <div>
                <MdOutlinePrint size={20} />
              </div>
            </div> */}
            {/* <div className="square">$ {(price/sqft).toFixed(2)} /sq ft</div> */}
            {user && <div className='flex justify-end mb-1'>
              <FavouriteButton listingKey={propertyDetail?.ListingKey ?? ""} isFavorite={Boolean(propertyDetail?.is_favorite)} />
            </div>}
            <div className="price !text-[30px]">${(propertyDetail?.ListPrice ?? 0).toLocaleString("en-US")}</div>
          </div>
        </div>
      </div>
      {/* Overview Section */}
      <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">Overview</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {overview.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-gray-100 p-4 rounded"
            >
              <div className="icon text-2xl">{item.icon}</div>
              <div className="text-content text-gray-700">{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">Description</h4>
        <p className="text-gray-600 leading-relaxed">{propertyDetail?.PublicRemarks}</p>
      </div>

      {/* Address Section */}
      <div className={styles.section}>
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-semibold">Address</h4>
          <Link
            href={`https://maps.google.com?q=${propertyDetail?.UnparsedAddress ? encodeURIComponent(propertyDetail?.UnparsedAddress) : ""}`}
            target='_blank'
            className="bg-green-900 flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-black transition"
          >
            <GrLocation className='inline-block' size={20} /> Open on Google Maps
          </Link>
        </div>
        {/* <div className="flex justify-between p-2 border-solid border-b-1 border-b-[#ebebeb]">
          <div className="text-sm text-black font-semibold">Address</div>
          <p className="text-gray-700 font-medium">{propertyDetail?.UnparsedAddress ?? "NA"}</p>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {address.map((item, index) => (
            <div key={index} className="flex justify-between p-2 border-solid border-b-1 border-b-[#ebebeb]">
              <div className="text-sm text-black font-semibold">{item.label}</div>
              <p className="text-gray-700 font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Property Attachments Section */}
      {/* <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">Property Attachments</h4>
        <div className={`${styles.wrapFile} wow fadeInUp"`}>
          <Link className="file-item" href="/#">
            <div className="icon">
              <img src="/images/image-box/file-pdf.svg" alt="" />
            </div>
            <div>
              <div className="name">Ultra-Demo-PDF File</div>
              <div className="size">140.56 kb</div>
            </div>
          </Link>
          <Link className="file-item" href="/#">
            <div className="icon">
              <img src="/images/image-box/file-pdf.svg" alt="" />
            </div>
            <div>
              <div className="name">Ultra-Demo-PDF File</div>
              <div className="size">140.56 kb</div>
            </div>
          </Link>
        </div>
      </div> */}

      {/* Listing Information Section */}
      <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">Listing Information</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {listingDetails.map((item, index) => (
            <div key={index} className="flex justify-between p-2 border-solid border-b-1 border-b-[#ebebeb]">
              <div className="text-sm text-black font-semibold">{item.label}</div>
              <p className="text-gray-700 font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">Property Information</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {details.map((item, index) => (
            <div key={index} className="flex justify-between p-2 border-solid border-b-1 border-b-[#ebebeb]">
              <div className="text-sm text-black font-semibold">{item.label}</div>
              <p className="text-gray-700 font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      {additionalFeatures?.length > 0 && <div className={styles.section}>
        <h4 className="text-xl font-semibold">Features</h4>
        <div>
          <ul className="gap-3 grid grid-cols-3 mt-4 mb-3">
            {additionalFeatures.map((feature) => (
              <li key={feature} className="!m-0 flex items-center text-sm">
                <FaCheckCircle className="text-black mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>}

      {/* Special Designation */}
      {propertyDetail?.SpecialDesignation && propertyDetail?.SpecialDesignation.length > 0 && <div className={styles.section}>
        <h4 className="text-xl font-semibold">Features</h4>
        <div>
          <ul className="gap-3 grid grid-cols-3 mt-4 mb-3">
            {propertyDetail?.SpecialDesignation.map((feature) => (
              <li key={feature} className="!m-0 flex items-center text-sm">
                <FaCheckCircle className="text-black mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>}

      {/* WaterFront Section */}
      <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">Waterfront</h4>
        <div className="grid grid-cols-1 gap-x-8">
          {waterFrontDetails.map((item, index) => (
            <div key={index} className="flex justify-between p-2 border-solid border-b-1 border-b-[#ebebeb]">
              <div className="text-sm text-black font-semibold">{item.label}</div>
              <p className="text-gray-700 font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Energy Class Section */}
      {/* <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">Energy Class</h4>
        <div className={styles.energyList}>
          {energyClass.map((item, index) => (
            <div key={index} className='flex justify-between p-2'>
              <div className="text-sm text-black font-semibold">{item.label}:</div>
              <p className="text-gray-700 font-medium">{item.value}</p>
            </div>
          ))}
        </div>
        <img src="/images/image-box/energy.png" alt="" />
      </div> */}

      {/* Floor Plans Section */}
      {/* <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">Floor Plans</h4>
        <FloorDetails />
      </div> */}

      {/* Mortgage Calculator Section */}
      {/* <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">Mortgage Calculator</h4>
        <div className={styles.pieChart}>
          <ChartList style={2} />
          <div className={styles.wrapNote}>
            <div className={styles.item}>
              <div className={styles.text}>Principal and Interes</div>
              <p>$37,800.00</p>
            </div>
            <div className="item">
              <div className={styles.text}>Property Tax</div>
              <p>$214,200.00</p>
            </div>
            <div className="item">
              <div className={styles.text}>HOA fee</div>
              <p>$252.00</p>
            </div>
          </div>
        </div>
        <div>
          <div className='grid grid-cols-3 gap-4'>
            <Input
              fullWidth
              label="Total Amount"
              variant="bordered"
            />

            <Input
              fullWidth
              label="Down Payment"
              variant="bordered"
            />

            <Input
              fullWidth
              label="Interest Rate"
              variant="bordered"
            />

            <Input
              fullWidth
              label="Loan Terms (Years)"
              variant="bordered"
            />

            <Input
              fullWidth
              label="Property Tax"
              variant="bordered"
            />

            <Input
              fullWidth
              label="Home Insurance"
              variant="bordered"
            />

            <Input
              fullWidth
              label="Monthly HOA Fees"
              variant="bordered"
            />

            <Input
              fullWidth
              label="PMI"
              variant="bordered"
            />
          </div>
        </div>
      </div> */}

      {/* Video Secction */}
      {/* <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">Video</h4>
        <div className="relative rounded-lg overflow-hidden">
          <img src="/images/image-box/video-2.jpg" alt="video" />
          <VideoPopup />
        </div>
      </div> */}

      {/* Map Section */}
      {propertyDetail?.UnparsedAddress && 
        <div className={styles.section}>
          <h4 className="text-xl font-semibold mb-4">Map</h4>
          <iframe
            className="gmap_iframe"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=990&height=400&hl=en&q=toronto&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            title="Google Map"
          ></iframe>
        </div>
      }

      {/* Virtual Tour Section */}
      {/* <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">360° Virtual Tour</h4>
        <img src="/images/image-box/img-virtual-1.jpg" alt=""></img>
      </div> */}

      {/* Property Views Section */}
      {/* <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">Property Views</h4>
        <ChartList style={1} />
      </div> */}

      {/* Walk Score Section */}
      {/* <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">Walk Score</h4>
        <div className="flex gap-12">
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-20 h-20 bg-[#fff8f6] border-1 border-black rounded-full text-black">
              <FaWalking size={32} />
            </div>
            <div className="mt-2">
              <h4 className="font-medium">Walk Score®</h4>
              <p className="text-sm text-gray-600">96 / 100</p>
              <p className="text-sm text-gray-600">Walker&apos;s Paradise</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-20 h-20 bg-[#fff8f6] border-1 border-black rounded-full text-black">
              <FaBicycle size={32} />
            </div>
            <div className="mt-2">
              <h4 className="font-medium">Bike Score®</h4>
              <p className="text-sm text-gray-600">96 / 100</p>
              <p className="text-sm text-gray-600">Bikeable</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Nearby Section */}
      {/* <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">What&apos;s Nearby?</h4>
        <Nearby />
      </div> */}

      {/* Leave a Review Section */}
      {/* <div className={styles.section}>
        <div className='flex justify-between items-center'>
          <h4 className="text-xl font-semibold mb-4">4 Reviews</h4>
          <Link
            href={googleMapsLink}
            className="bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-black transition"
          >
            Leave a Review
          </Link>
        </div>
        {reviewData.map((review, index) => (
          <div key={review.id}>
            <div className='flex items-start gap-6'>
              <img src={review.image} alt={review.name} />
              <div>
                <Rating />
                <div className='mt-2 mb-2'>
                  <Link className='text-lg font-bold' href={review.name}>{review.name}</Link>
                </div>
                <div className='text-sm'>{review.date}</div>
                <div className='mt-8'>{review.reviewText}</div>
              </div>
            </div>
            {reviewData.length - 1 !== index && <Divider className="my-5" />}
          </div>
        ))}
      </div> */}

      {/* Leave a Review Section */}
      {/* <div className={styles.section}>
        <h4 className="text-xl font-semibold mb-4">Leave A Review</h4>
        <ReviewForm />
      </div> */}

      {/* Similar Home Section */}
      {/* <div className={`${styles.section}`}>
        <h4 className='text-xl font-bold mb-10'>Similar Homes</h4>
        <div className='grid grid-cols-2 gap-8'>
          {homesData.map((home: any) => <HomeDetailCard key={home.id} {...home} />)}
        </div>
      </div> */}
    </>
  );
}