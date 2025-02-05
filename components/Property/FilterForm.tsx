'use client';

import { Input, Button, Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const saleOptions = [
  { label: "For Sale", value: "For Sale" },
  { label: "For Rent", value: "For Rent" },
  { label: "Sold", value: "Sold" }
];

const apartmentOptions = [
  { label: "Apartments", value: "Apartments" },
  { label: "Office", value: "Office" },
  { label: "Villa", value: "Villa" }
]

const countryOptions = [
  { label: "USA", value: "USA" },
  { label: "China", value: "China" },
  { label: "Canada", value: "Canada" }
]

const minPriceOptions = [
  { label: "100 $", value: "100 $" },
  { label: "150 $", value: "150 $" }
]

const maxPriceOptions = [
  { label: "1000 $", value: "1000 $" },
  { label: "1500 $", value: "1500 $" }
]

export default function FilterForm() {
  return (
    <div className="p-3 flex gap-2 max-h-fit bg-white border-gray-50 rounded-lg shadow-md w-full sticky top-[100px] z-[1000]">
      {/* Search Bar */}
      <Input
        className="flex-1 border-none focus:ring-0"
        placeholder="New York NY homes"
        type="search"
        startContent={<FaSearch />}
      />

      {/* Select Dropdowns */}
      <SelectSection label="For Sale" options={saleOptions} />
      <SelectSection label="Apartments" options={apartmentOptions} />
      <SelectSection label="USA" options={countryOptions} />

      {/* Area and Price */}
      {/* <div className="grid grid-cols-2 gap-2 w-[140px]"> */}
        <Input placeholder="Min. Area" className="bg-white w-[140px]" />
        <Input placeholder="Max. Area" className="bg-white w-[140px]" />
      {/* </div> */}
      {/* <div className="grid grid-cols-2 gap-2 w-[140px]"> */}
        <SelectSection label="Min. Price" options={minPriceOptions} />
        <SelectSection label="Max. Price" options={maxPriceOptions} />
      {/* </div> */}

      {/* Other Features */}
      {/* <div className="mt-4 flex items-center">
        <button className="text-sm text-gray-600 font-semibold flex items-center gap-1">
          <span>+</span> Other Features
        </button>
      </div> */}

      {/* Submit Button */}
      <div>
        <Button
          className="w-full bg-yellow-500 rounded-xl hover:bg-yellow-600 text-white font-semibold py-2 flex justify-center items-center gap-2"
        >
          Search
        </Button>
      </div>
    </div>
  );
}

type SelectProps = { label: string, options: { value: string, label: string }[] };

function SelectSection({ label, options }: SelectProps) {

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className='w-[140px]'>
      <Select
        aria-label={label}
        placeholder={label}
        className="w-full"
        selectedKeys={selected ? [selected] : []}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}