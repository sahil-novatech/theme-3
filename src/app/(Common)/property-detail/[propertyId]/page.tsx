'use client';
// import { FullPageLoader } from "@/components/Loader";
import ContactInformation from "@/components/PropertyDetail/ContactInformation";
import Details from "@/components/PropertyDetail/Details";
// import ScheduleTour from "@/components/PropertyDetail/ScheduleTour";
import Slide from "@/components/PropertyDetail/Slide";
// import { useGlobalContext } from "@/context/GlobalContext";
// import { useLoginModalContext } from "@/context/LoginModalContext";
// import { globalServices } from "@/services/global.services";
// import { useQuery } from "@tanstack/react-query";
// import { useParams } from 'next/navigation'
import React from "react";
// import { RiLockFill } from "react-icons/ri";

// async function fetchPropertyDetail() {
  // const res = await globalServices.getAll(`/properties/${id}`)
  // if (res.status === 200) {
  //   console.log("hello world",res.data.data)
  //   return res.data.data;
  // } else {
  //   return res
  // }
//   const data = {
    
//   };
// return data;
// }

export default function PropertyDetailPage() {
//   const params = useParams<{ propertyId: string }>();
  const propertyDetail = {
    CityRegion: "Carlisle",
    City: "Hamilton",
    LivingAreaRange: "3000-3500",
    BedroomsTotal: "6",
    BathroomsTotalInteger: "4",
    images: [
      {
        Order: 0,
        image_url: "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11957765/large/9973354f-8f4b-4071-a8a6-706ad17d479d-l.jpg",
        ImageSizeDescription: "Large"
      },
      {
        Order: 39,
        image_url: "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11957765/large/5e59324a-44cb-49d9-8845-184974373ad3-l.jpg",
        ImageSizeDescription: "Large"
      }
    ],
    UnparsedAddress: "6 Iris Court, Hamilton, ON L0R 1H3",
    ListPrice: "2499000",
    ListingKey: "X11957765",
    TransactionType: "For Sale",
    PropertyType: "Residential Freehold",
    TaxYear: "2024",
    GarageParkingSpaces: null,
    PostalCode: "L0R 1H3",
    CountyOrParish: "Hamilton",
    Country: "CA",
    OriginalEntryTimestamp: "2025-02-05T17:16:21.000000Z",
    ModificationTimestamp: "2025-02-05T17:16:22.000000Z",
    TaxAnnualAmount: 8948.37,
    ListOfficeName: "RE/MAX REAL ESTATE CENTRE INC.",
    PublicRemarks: "Stunning Custom Home On Private Approx. 2 Acre Lot...",
    DirectionFaces: "South",
    HeatType: "Forced Air",
    HeatSource: "Gas",
    KitchensTotal: 2,
    Cooling: ["Central Air"],
    WaterSource: ["Drilled Well"],
    Sewer: ["Septic"],
    RoomsTotal: 10,
    ParkingSpaces: 10,
    ParkingTotal: 12,
    CoveredSpaces: 3,
    GarageType: "Attached",
    CrossStreet: "Carlisle Road and Progreston Road",
    OtherStructures: ["Garden Shed"],
    Topography: [],
    PoolFeatures: ["Inground"],
    Waterfront: [],
    Basement: ["Finished with Walk-Out", "Separate Entrance"],
    LotSizeRangeAcres: ".50-1.99",
    LotSizeSource: "Other",
    PropertyFeatures: ["Campground", "Golf", "Park", "Ravine"],
    SpecialDesignation: ["Unknown"],
    OccupantType: "Owner",
    PossessionDetails: "60-90 Days",
    DenFamilyroomYN: true,
    FireplaceYN: true,
    is_favorite: false
  }
  // const { user, hasToken } = useGlobalContext();
  // const { onOpen } = useLoginModalContext();
//   const { data: propertyDetail } = useQuery({
//     queryKey: ["propertyDetail", params.propertyId],
//     queryFn: () => fetchPropertyDetail(),
//     staleTime: 1000 * 60 * 5,
//     enabled: true,
//   })

  return (
    <div className="relative">
      {/*hasToken !== true && 
        (hasToken === '' ? <FullPageLoader /> : 
        <div onClick={onOpen} className="absolute z-[11] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3 items-center text-white bg-black px-7 py-2 rounded-full cursor-pointer">
          <RiLockFill size={20} /> Login Required
        </div>
      )*/}
      <div>
        <Slide images={propertyDetail?.images ?? []} />
        <div className="grid grid-cols-12 gap-6 p-6">
          <div className="col-span-12 md:col-span-8">
            <Details propertyDetail={propertyDetail} />
          </div>
          <div className="col-span-12 md:col-span-4">
            {/* <ScheduleTour /> */}
            <ContactInformation />
          </div>
        </div>
      </div>
    </div>
  );
}