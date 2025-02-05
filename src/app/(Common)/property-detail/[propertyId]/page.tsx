'use client';
import { FullPageLoader } from "@/components/Loader";
import ContactInformation from "@/components/PropertyDetail/ContactInformation";
import Details from "@/components/PropertyDetail/Details";
// import ScheduleTour from "@/components/PropertyDetail/ScheduleTour";
import Slide from "@/components/PropertyDetail/Slide";
import { useGlobalContext } from "@/context/GlobalContext";
import { useLoginModalContext } from "@/context/LoginModalContext";
import { globalServices } from "@/services/global.services";
import { useQuery } from "@tanstack/react-query";
import { useParams } from 'next/navigation'
import React from "react";
import { RiLockFill } from "react-icons/ri";

async function fetchPropertyDetail(id: string) {
  // const res = await globalServices.getAll(`/properties/${id}`)
  // if (res.status === 200) {
  //   console.log("hello world",res.data.data)
  //   return res.data.data;
  // } else {
  //   return res
  // }
  const data = {
    "feed_type": "idx",
    "ListingKey": "X11957765",
    "AccessibilityFeatures": [],
    "AccessToProperty": [],
    "AdditionalMonthlyFee": null,
    "AdditionalMonthlyFeeFrequency": null,
    "AlternativePower": [],
    "Amps": null,
    "ApartmentNumber": null,
    "ApproximateAge": "31-50",
    "ArchitecturalStyle": [
        "2-Storey"
    ],
    "AssessmentYear": 2024,
    "AssociationAmenities": [],
    "AssociationFee": null,
    "AssociationFeeIncludes": [],
    "AssociationName": null,
    "AttachedGarageYN": false,
    "BalconyType": null,
    "Basement": [
        "Finished with Walk-Out",
        "Separate Entrance"
    ],
    "BasementYN": null,
    "BathroomsTotalInteger": 4,
    "BaySizeLengthFeet": null,
    "BaySizeLengthInches": null,
    "BaySizeWidthFeet": null,
    "BaySizeWidthInches": null,
    "BedroomsAboveGrade": 5,
    "BedroomsBelowGrade": 1,
    "BedroomsTotal": 6,
    "BoardPropertyType": "Free",
    "BuildingAreaTotal": null,
    "BuildingAreaUnits": null,
    "BuildingName": null,
    "BusinessName": null,
    "BusinessType": [],
    "CableYNA": null,
    "CentralVacuumYN": false,
    "ChannelName": null,
    "ChattelsYN": null,
    "City": "Hamilton",
    "CityRegion": "Carlisle",
    "ClearHeightFeet": null,
    "ClearHeightInches": null,
    "CommercialCondoFee": null,
    "CommercialCondoFeeFrequency": null,
    "CommonAreaUpcharge": null,
    "CommunityFeatures": [],
    "CondoCorpNumber": null,
    "ConstructionMaterials": [
        "Brick"
    ],
    "ContractStatus": "Available",
    "Cooling": [
        "Central Air"
    ],
    "CoolingYN": true,
    "Country": "CA",
    "CountyOrParish": "Hamilton",
    "CoveredSpaces": 3,
    "CraneYN": null,
    "CrossStreet": "Carlisle Road and Progreston Road",
    "DDFYN": true,
    "DenFamilyroomYN": true,
    "DevelopmentChargesPaid": [],
    "DirectionFaces": "South",
    "Disclosures": [],
    "DockingType": [],
    "DoubleManShippingDoors": null,
    "DoubleManShippingDoorsHeightFeet": null,
    "DoubleManShippingDoorsHeightInches": null,
    "DoubleManShippingDoorsWidthFeet": null,
    "DoubleManShippingDoorsWidthInches": null,
    "DriveInLevelShippingDoors": null,
    "DriveInLevelShippingDoorsHeightFeet": null,
    "DriveInLevelShippingDoorsHeightInches": null,
    "DriveInLevelShippingDoorsWidthFeet": null,
    "DriveInLevelShippingDoorsWidthInches": null,
    "ElectricExpense": null,
    "ElectricOnPropertyYN": null,
    "ElectricYNA": null,
    "ElevatorType": null,
    "ElevatorYN": false,
    "EnsuiteLaundryYN": false,
    "EstimatedInventoryValueAtCost": null,
    "Expenses": null,
    "Exposure": null,
    "ExteriorFeatures": [],
    "FarmType": null,
    "FinancialStatementAvailableYN": null,
    "FireplaceFeatures": [
        "Natural Gas",
        "Family Room"
    ],
    "FireplaceYN": true,
    "FoundationDetails": [
        "Poured Concrete"
    ],
    "FranchiseYN": null,
    "FreestandingYN": null,
    "FrontageLength": null,
    "Furnished": null,
    "GarageParkingSpaces": null,
    "GarageType": "Attached",
    "GarageYN": true,
    "GradeLevelShippingDoors": null,
    "GradeLevelShippingDoorsHeightFeet": null,
    "GradeLevelShippingDoorsHeightInches": null,
    "GradeLevelShippingDoorsWidthFeet": null,
    "GradeLevelShippingDoorsWidthInches": null,
    "HeatingExpenses": null,
    "HeatingYN": true,
    "HeatSource": "Gas",
    "HeatType": "Forced Air",
    "HoursDaysOfOperation": [],
    "HoursDaysOfOperationDescription": null,
    "HSTApplication": true,
    "IndustrialArea": null,
    "IndustrialAreaCode": null,
    "InsuranceExpense": null,
    "InteriorFeatures": [
        "Auto Garage Door Remote",
        "In-Law Suite",
        "Primary Bedroom - Main Floor",
        "Carpet Free"
    ],
    "InternetAddressDisplayYN": true,
    "InternetEntireListingDisplayYN": true,
    "KitchensAboveGrade": 2,
    "KitchensBelowGrade": null,
    "KitchensTotal": 2,
    "LaundryFeatures": [],
    "LeasedTerms": null,
    "LeaseToOwnEquipment": [],
    "LegalStories": null,
    "LinkProperty": null,
    "LinkYN": false,
    "ListOfficeKey": "079817",
    "ListOfficeName": "RE/MAX REAL ESTATE CENTRE INC.",
    "ListPrice": 2499000,
    "ListPriceUnit": null,
    "LivingAreaRange": "3000-3500",
    "Locker": null,
    "LockerLevel": null,
    "LockerNumber": null,
    "LockerUnit": null,
    "LotDepth": 200.48,
    "LotDimensionsSource": "Other",
    "LotFeatures": [
        "Irregular Lot"
    ],
    "LotIrregularities": "259.18 X 249.78 X 200.48 X320.56 X 91.08",
    "LotShape": "Rectangular",
    "LotSizeRangeAcres": ".50-1.99",
    "LotSizeSource": "Other",
    "LotSizeUnits": "Feet",
    "LotType": null,
    "MaximumRentalMonthsTerm": null,
    "MediaChangeTimestamp": "2025-02-05T17:16:22.000000Z",
    "MediaListingKey": null,
    "MinimumRentalTermMonths": null,
    "MlsStatus": "New",
    "ModificationTimestamp": "2025-02-05T17:16:22.000000Z",
    "NetOperatingIncome": null,
    "NewConstructionYN": null,
    "NumberOfFullTimeEmployees": null,
    "NumberOfKitchens": null,
    "OccupantType": "Owner",
    "OfficeApartmentArea": null,
    "OfficeApartmentAreaUnit": null,
    "OriginalEntryTimestamp": "2025-02-05T17:16:21.000000Z",
    "OriginatingSystemID": "A00001796",
    "OtherExpense": null,
    "OtherStructures": [
        "Garden Shed"
    ],
    "OutOfAreaMunicipality": null,
    "OutsideStorageYN": null,
    "ParcelNumber": "175210008",
    "ParcelOfTiedLand": "No",
    "ParkingFeatures": [
        "Circular Drive"
    ],
    "ParkingLevelUnit1": null,
    "ParkingLevelUnit2": null,
    "ParkingMonthlyCost": null,
    "ParkingSpaces": 10,
    "ParkingSpot1": null,
    "ParkingSpot2": null,
    "ParkingTotal": 12,
    "PercentBuilding": null,
    "PetsAllowed": [],
    "PhotosChangeTimestamp": "2025-02-05T17:16:22.000000Z",
    "PoolFeatures": [
        "Inground"
    ],
    "PossessionDetails": "60-90 Days",
    "PostalCode": "L0R 1H3",
    "ProfessionalManagementExpense": null,
    "PropertyAttachedYN": null,
    "PropertyFeatures": [
        "Campground",
        "Cul de Sac/Dead End",
        "Golf",
        "Greenbelt/Conservation",
        "Park",
        "Ravine"
    ],
    "PropertyManagementCompany": null,
    "PropertySubType": "Detached",
    "PropertyType": "Residential Freehold",
    "PropertyUse": null,
    "PublicRemarks": "Stunning Custom Home On Private Approx. 2 Acre Lot On A Quiet Court In Highly Desirable Carlisle. Fantastic Curb Appreal !! Enjoy Wildlife and Tranquility Of The Large Green Space. Meticulously Cared For, This Sun-Filled 3,200 Sq.Ft, 5+2 Beds, 4 Baths Home. Fully Renovated New Basement In-Law Suite. A Circular Driveway (Can Fit 10+ Cars) & Beautiful Perennial Gardens At Entrance, 3 Garages (Oversized Attached 2 Car Garage & Detached 1 Garage). Main Floor Bedroom & Laundry With Access to the Garage. Main Floor Features Hardwood Floorings In The Formal Living, Dining & Family Rooms. Great Views in Every Room. Gorgeous Newly Renovated Whitish Open Concept Eat-In Kitchen with Island, Quartz Countertops, Backsplash, Marble Floor, SS Appliance & Lights. Updated 2nd Floor Main Bath and Main floor 3 Pcs Bath. 2nd Floor Large Master Suite and A Bonus Studio/Office. Completely New Walk-out Basement In-Law Suite with Separate Entrance Contains Kitchen, Bedroom with 3 Pcs Ensuite & Walk-in Closet, Office, Living/Dining Room, Fire place. Less Than 10 Years for All Windows, Furnace/A/C and Roof Shingle, Fenced In-Ground Pool & New equipment (Sand Filter System/Pool Liner/Pool Cover/Pump-2023), Garden Shed.. THE MOST PITCTURESQUE SETTING. Truly A Gem!!Call For a private Showing.",
    "PublicRemarksExtras": null,
    "Rail": null,
    "RentIncludes": [],
    "RetailArea": null,
    "RetailAreaCode": null,
    "RollNumber": "251830381004030",
    "Roof": [
        "Asphalt Shingle"
    ],
    "RoomsAboveGrade": 13,
    "RoomsBelowGrade": null,
    "RoomsTotal": 10,
    "RoomType": [],
    "RuralUtilities": [],
    "SeatingCapacity": null,
    "SecurityFeatures": [],
    "SeniorCommunityYN": null,
    "Sewer": [
        "Septic"
    ],
    "Shoreline": [],
    "ShorelineAllowance": null,
    "ShowingRequirements": [
        "Showing System"
    ],
    "SoilTest": null,
    "SpaYN": null,
    "SpecialDesignation": [
        "Unknown"
    ],
    "SquareFootSource": null,
    "StandardStatus": "Active",
    "StateOrProvince": "ON",
    "StreetDirSuffix": null,
    "StreetName": "Iris",
    "StreetNumber": "6",
    "StreetSuffix": "Court",
    "StructureType": [],
    "SurveyAvailableYN": null,
    "TaxAnnualAmount": 8948.37,
    "TaxAssessedValue": 788000,
    "TaxType": null,
    "TaxYear": 2024,
    "TimestampSQL": null,
    "Topography": [],
    "TransactionType": "For Sale",
    "TruckLevelShippingDoors": null,
    "TruckLevelShippingDoorsHeightFeet": null,
    "TruckLevelShippingDoorsHeightInches": null,
    "TruckLevelShippingDoorsWidthFeet": null,
    "TruckLevelShippingDoorsWidthInches": null,
    "UFFI": true,
    "UnderContract": [],
    "UnitNumber": null,
    "UnparsedAddress": "6 Iris Court, Hamilton, ON L0R 1H3",
    "Utilities": [],
    "VacancyAllowance": null,
    "VendorPropertyInfoStatement": false,
    "View": [
        "Forest",
        "Hills",
        "Trees/Woods"
    ],
    "VirtualTourURLUnbranded": "https://viralrealestate.media/6-iris-court-1",
    "WashroomsType1": 1,
    "WashroomsType1Level": "Main",
    "WashroomsType1Pcs": 3,
    "WashroomsType2": 2,
    "WashroomsType2Level": "Second",
    "WashroomsType2Pcs": 4,
    "WashroomsType3": 1,
    "WashroomsType3Level": "Basement",
    "WashroomsType3Pcs": 3,
    "WashroomsType4": null,
    "WashroomsType4Level": null,
    "WashroomsType4Pcs": null,
    "WashroomsType5": null,
    "WashroomsType5Level": null,
    "WashroomsType5Pcs": null,
    "WaterBodyName": null,
    "WaterBodyType": null,
    "WaterDeliveryFeature": [],
    "WaterExpense": null,
    "Waterfront": [],
    "WaterfrontAccessory": [],
    "WaterFrontageFt": null,
    "WaterfrontFeatures": [],
    "WaterfrontYN": false,
    "WaterSource": [
        "Drilled Well"
    ],
    "WaterView": [],
    "ZoningDesignation": null,
    "updated_at": "2025-02-05T17:20:04.566000Z",
    "created_at": "2025-02-05T17:20:04.566000Z",
    "id": "67a39dc47daf956a910ba8b4",
    "is_favorite": false,
    "images": [
        {
            "Order": 0,
            "image_url": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11957765/large/9973354f-8f4b-4071-a8a6-706ad17d479d-l.jpg",
            "ImageSizeDescription": "Large"
        },
        {
            "Order": 39,
            "image_url": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11957765/large/5e59324a-44cb-49d9-8845-184974373ad3-l.jpg",
            "ImageSizeDescription": "Large"
        },
        {
            "Order": 1,
            "image_url": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11957765/large/8f051797-a0dd-4d9f-9d2d-1b91e1f15445-l.jpg",
            "ImageSizeDescription": "Large"
        },
        {
            "Order": 10,
            "image_url": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11957765/large/41cacd3d-897a-42ec-819e-0f8ca5e31fbb-l.jpg",
            "ImageSizeDescription": "Large"
        },
        {
            "Order": 13,
            "image_url": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11957765/medium/27c67bc7-b5bb-457c-933c-70b571eb1a0a-m.jpg",
            "ImageSizeDescription": "Medium"
        },
        {
            "Order": 5,
            "image_url": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11957765/large/b10cd770-2ce1-459d-8c04-e0428e56f2d6-l.jpg",
            "ImageSizeDescription": "Large"
        },
        {
            "Order": 9,
            "image_url": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11957765/medium/d699975b-f7ab-4c55-a80e-acc348951ff5-m.jpg",
            "ImageSizeDescription": "Medium"
        },
        {
            "Order": 7,
            "image_url": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11957765/medium/b62b1939-0abd-49dd-aa17-1d40035d4247-m.jpg",
            "ImageSizeDescription": "Medium"
        },
        {
            "Order": 21,
            "image_url": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11957765/medium/ca6d6f02-a2fe-400a-8b5e-c08c229ea07c-m.jpg",
            "ImageSizeDescription": "Medium"
        }
    ]
}
return data;
}

export default function PropertyDetailPage() {
  const params = useParams<{ propertyId: string }>();
  // const { user, hasToken } = useGlobalContext();
  // const { onOpen } = useLoginModalContext();
  const { data: propertyDetail } = useQuery({
    queryKey: ["propertyDetail", params.propertyId],
    queryFn: () => fetchPropertyDetail(params.propertyId),
    staleTime: 1000 * 60 * 5,
    enabled: true,
  })

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