"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  // Input,
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
// import { FiSearch } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { globalServices } from "@/services/global.services";
import { useQuery } from "@tanstack/react-query";
import { AutoSuggestionData, SuggestionSection } from "@/src/types/suggestion";
import { ParsedUrlQueryInput } from "querystring";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { MdClose } from "react-icons/md";
import { useGlobalContext } from "@/context/GlobalContext";

const FilterSelect = ({
  label,
  placeholder,
  options,
  selectionMode,
  value,
  setValue,
  disabled = false
}: {
  label: string;
  placeholder: string;
  options: { key: string; label: string }[];
  selectionMode?: 'multiple' | 'single'
  value: string | string[];
  setValue: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
}) => {
  const [isHover, setIsHover] = useState(false);
  const { isDropdownOpen } = useGlobalContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if(isDropdownOpen){
      setIsMenuOpen(false)
    }
  }, [isDropdownOpen])
  return (
  <div onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className="relative w-full max-w-[250px]">
    <Select
      scrollShadowProps={{
        isEnabled: false,
      }}
      label={label}
      placeholder={placeholder}
      className="w-full max-w-[250px]"
      aria-label={label}
      selectionMode={selectionMode ?? "single"}
      selectedKeys={typeof value === 'string' ? (selectionMode === "multiple" ? value.split(",") : [value]) : []}
      disabled={disabled}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setValue(event.target.value)}
      isOpen={isMenuOpen}
      onOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
      
    >
      {options.map((item) => (
        <SelectItem key={item.key} value={item.key}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
    {isHover && value && (
        <div
          onClick={() => setValue('')}
          style={{
            position: "absolute",
            right: "30px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
        >
          <MdClose size={16} />
        </div>
      )}
  </div>
    
)};

const statusOptions = [
  { key: "For Sale", label: "For Sale" },
  { key: "For Lease", label: "For Rent" }
];

const typeOptions = [
  { key: "commercial", label: "Commercial" },
  { key: "condo", label: "Condo" },
  { key: "detached", label: "Detached" },
  { key: "semi-detached", label: "Semi-Detached" },
  { key: "townhouse", label: "Townhouse" },
];

const numberOptions = [
  { key: "1", label: "1+" },
  { key: "2", label: "2+" },
  { key: "3", label: "3+" },
  { key: "4", label: "4+" },
  { key: "5", label: "5+" },
  { key: "6", label: "6+" },
];

const priceList: string[] = ["0", "25k", "35k", "45k", "75k", "100k", "150k", "200k", "250k", "300k", "350k", "400k", "450k", "500k", "550k",
  "600k", "650k", "700k", "750k", "800k", "850k", "900k", "950k", "1M", "1.5M", "2M", "2.5M", "3M", "3.5M", "4M", "4.5M",
  "5M", "5.5M", "6M", "6.5M", "7M", "7.5M", "8M", "8.5M", "9M", "9.5M", "10M", "12M", "13M", "15M", "20M", "25M", "30M", "40M"];

const convertToRealDigit = (value: string): number => {
  if (value.endsWith("k")) {
    return parseFloat(value.replace("k", "")) * 1000;
  }
  if (value.endsWith("M")) {
    return parseFloat(value.replace("M", "")) * 1000000;
  }
  return parseFloat(value);
};

const priceOptions = priceList.map((price) => ({ key: String(convertToRealDigit(price)), label: `$ ${price}` }));

async function fetchProperties(value: string) {
  const res = await globalServices.getAll(`/properties/auto-suggestion?query=${value}`)
  if (res.status === 200) {
    return res.data
  } else {
    return res
  }
}

const FilterBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("search");
  const [inputChanged, setInputChanged] = useState<boolean>(false);

  useEffect(() => {
    const id = setTimeout(() => setInputValue(searchValue), 500);
    return () => clearTimeout(id);
  }, [searchValue])

  useEffect(() => {
    const handleParamsChange = () => {
      const searchValue = searchParams.get("searchValue");
      const transactionType = searchParams.get("transactionType");
      const propertyType = searchParams.get("propertyType");
      const bedrooms = searchParams.get("bedrooms");
      const bathrooms = searchParams.get("bathrooms");
      const minPrice = searchParams.get("minPrice");
      const maxPrice = searchParams.get("maxPrice");
      const city = searchParams.get("city");
      const neighborhood = searchParams.get("neighborhood");
      const searchFieldValue = searchValue ?? city ?? neighborhood;

      if (searchFieldValue) setSearchValue(decodeURIComponent(searchFieldValue));
      setTransactionType(transactionType ? decodeURIComponent(transactionType) : "");
      setPropertyType(propertyType ? decodeURIComponent(propertyType) : "");
      setBedrooms(bedrooms ? decodeURIComponent(bedrooms) : "");
      setBathrooms(bathrooms ? decodeURIComponent(bathrooms) : "");
      setMinPrice(minPrice ? decodeURIComponent(minPrice) : "");
      setMaxPrice(maxPrice ? decodeURIComponent(maxPrice) : "");
    };

    handleParamsChange();
  }, [searchParams]);

  const properties = useQuery({
    queryKey: ['excludedQueryKey', inputValue],
    queryFn: () => inputValue && fetchProperties(inputValue),
    enabled: inputChanged,
    staleTime: 1000 * 60 * 5,
  })

  const toggleFilter = () => setIsFilterVisible(!isFilterVisible);

  const getFilters = () => {
    const query: ParsedUrlQueryInput = {};
    if (searchValue) {
      if(searchType === 'search'){
        query.searchValue = encodeURIComponent(searchValue);
      }else if(searchType === 'city'){
        query.city = encodeURIComponent(searchValue);
      }else if(searchType === 'neighborhood'){
        query.neighborhood = encodeURIComponent(searchValue);
      }
    }
    if (transactionType && transactionType !== 'all') query.transactionType = encodeURIComponent(transactionType);
    if (propertyType) query.propertyType = encodeURIComponent(propertyType.startsWith(",") ? propertyType.slice(1) : propertyType);
    if (bedrooms && bedrooms !== 'all') query.bedrooms = encodeURIComponent(bedrooms);
    if (bathrooms && bathrooms !== 'all') query.bathrooms = encodeURIComponent(bathrooms);
    if (minPrice) query.minPrice = encodeURIComponent(minPrice);
    if (maxPrice) query.maxPrice = encodeURIComponent(maxPrice);
    return query;
  }

  const getPropertyData = () => {
    const baseValue: SuggestionSection[] = [];
    // if(searchValue){
    //   baseValue.push({ ListingKey: 'asdf', City: searchValue, StateOrProvince: "", TransactionType: "", UnparsedAddress: "", id: "" })
    // }

    if(properties?.data?.data && typeof properties.data.data === "object"){
      const { Addresses, Cities, Neighborhoods } = properties.data.data;
      const MLS = properties.data.data['MLS#'];

      const addressItems = Addresses.map((address: AutoSuggestionData) => ({
        key: address.url,
        title: address.title,
        url: address.url,
        type: 'link'
      }));

      const cityItems = Cities.map((city: AutoSuggestionData) => ({
        key: city.url,
        title: city.title,
        url: city.url,
        type: 'city'
      }));

      const mlsItems = MLS.map((mlsId: AutoSuggestionData) => ({
        key: mlsId.url,
        title: mlsId.title,
        url: mlsId.url,
        type: 'link'
      }));

      const neighborhoodItems = Neighborhoods.map((neighborhood: AutoSuggestionData) => ({
        key: neighborhood.url,
        title: neighborhood.title,
        url: neighborhood.url,
        type: 'neighborhood'
      }));

      if(addressItems.length > 0) baseValue.push({ type: "Addresses", items: addressItems });
      if(cityItems.length > 0) baseValue.push({ type: "Cities", items: cityItems });
      if(mlsItems.length > 0) baseValue.push({ type: "MLS#", items: mlsItems });
      if(neighborhoodItems.length > 0) baseValue.push({ type: "Neighborhoods", items: neighborhoodItems });
    }
    return baseValue;
  }

  const handleSearch = (searchedItem: AutoSuggestionData) => {
    if(searchedItem.type === 'link'){
      router.push(searchedItem.url);
    }else{
      setSearchType(searchedItem.type);
      setSearchValue(searchedItem.title);
    }
  }

  const handleClear = () => {
    setInputValue("");
    setSearchValue("");
    setTransactionType("");
    setPropertyType("");
    setBedrooms("");
    setBathrooms("");
    setMinPrice("");
    setMaxPrice("");
    setSearchType("search");
  }

  return (
    <div className="flex flex-col items-center w-full mt-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
      {/* Main Filter Bar */}
      <div className="flex items-center bg-white p-4 rounded-lg shadow-lg w-full max-w-6xl gap-3 z-[1]">
        {/* <Input
          placeholder="Enter Keyword"
          label="Keyword"
          endContent={<FiSearch className="text-gray-400" />}
        /> */}

        <Autocomplete
          autoComplete="off"
          className="max-w-xs"
          inputValue={searchValue}
          selectedKey={searchValue}
          isLoading={properties.isLoading}
          items={getPropertyData()}
          label="Select City, Neighborhood, Address, MLS"
          placeholder="Type to search..."
          onInputChange={(value) => {
            setSearchType('search')
            setSearchValue(value);
            setTimeout(() => setInputChanged(true), 700);
          }}
          isClearable={false}
          listboxProps={{
            hideEmptyContent: true
          }}
          scrollShadowProps={{
            isEnabled: false,
          }}
        >
          {(section) => (
            <AutocompleteSection
              key={section.type}
              items={section.items}
              title={section.type}
            >
              {(item: AutoSuggestionData) => (
                <AutocompleteItem onPress={() => handleSearch(item)} key={item.title} title={item.title} className="capitalize">
                  <div className="!text-black text-[12px]">
                    {item.title}
                  </div>
                </AutocompleteItem>
              )}
            </AutocompleteSection>
          )}
        </Autocomplete>

        <FilterSelect value={transactionType} setValue={setTransactionType} placeholder="Transaction Type" label="Transaction Type" options={statusOptions} />
        <FilterSelect value={propertyType} setValue={setPropertyType} selectionMode="multiple" placeholder="Property Type" label="Property Type" options={typeOptions} />

        <Button variant="bordered" className="px-9" startContent={<VscSettings className="min-w-[14px]" size={14} />} onClick={toggleFilter}>
          Filter
        </Button>

        {/* <Button as={Link} href={{ pathname: "/property", query: getFilters() }} color="warning" className="!text-white px-12">
          Search
        </Button> */}
        <Button as={Link} href="/property" variant="bordered" className="px-9 text-black hover:text-black" onPress={handleClear}>Reset</Button>
        <Link className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-warning text-warning-foreground data-[hover=true]:opacity-hover !text-white px-9" href={{ pathname: "/property", query: getFilters() }}>Search</Link>
      </div>

      {/* Filter Dropdown Section */}
      {isFilterVisible && (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-4 w-full max-w-6xl">
          <div className="grid grid-cols-4 gap-4">
            {/* <FilterSelect placeholder="City" label="City" options={cityOptions} /> */}
            <FilterSelect value={bedrooms} setValue={setBedrooms} placeholder="Bedrooms" label="Bedrooms" options={numberOptions} />
            <FilterSelect value={bathrooms} setValue={setBathrooms} placeholder="Bathrooms" label="Bathrooms" options={numberOptions} />
            <FilterSelect value={minPrice} setValue={setMinPrice} placeholder="Min. Price" label="Min. Price" options={priceOptions.slice(0, -1)} />
            <FilterSelect value={maxPrice} setValue={setMaxPrice} placeholder="Max. Price" label="Max. Price" options={(minPrice && minPrice != priceOptions[0].key) ? priceOptions.slice(priceOptions.slice(1).findIndex((price) => price.key === minPrice) + 2) : priceOptions.slice(1)} />
          </div>
          {/* <div className="grid grid-cols-2 gap-4 mt-4"> */}
            {/* <Input placeholder="Min. Area" label="Min. Area" type="number" />
            <Input placeholder="Max. Area" label="Max. Area" type="number" /> */}
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default FilterBar;