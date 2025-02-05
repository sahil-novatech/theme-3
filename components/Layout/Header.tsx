'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link
} from '@nextui-org/react';

import { 
  FaRegUser,
  // FaRegUser,
  FaSearch
} from 'react-icons/fa';
import { LuPhone } from "react-icons/lu";
import '@/styles/Layout/header.scss';
import { useQuery } from '@tanstack/react-query';
import { globalServices } from '@/services/global.services';
import { MenuItem } from '@/src/types/configuration';
import Image from 'next/image';
import { AutoSuggestionData } from '@/src/types/suggestion';
import { useRouter, useSearchParams } from 'next/navigation';
import { useGlobalContext } from '@/context/GlobalContext';
import handleURL from '@/utils/common';
import { Loading } from '../Loading';
import SignPopup from '../SignPopup';
import { useLoginModalContext } from '@/context/LoginModalContext';
import AfterAfterSignPopup from '../AfterSignPopup';
import Head from 'next/head';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

async function fetchProperties(value: string) {
  const res = await globalServices.getAll(`/properties/auto-suggestion?query=${value}`)
  if (res.status === 200) {
    return res.data
  } else {
    return res
  }
}

// Define the Header component
const Header: React.FC = () => {
  const { onOpen } = useLoginModalContext();
  const { configuration, setIsDropdownOpen, user } = useGlobalContext();
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleParamsChange = () => {
      const searchValue = searchParams.get("searchValue");
      const city = searchParams.get("city");
      const neighborhood = searchParams.get("neighborhood");
      let searchInput = "";
      if (searchValue) {
        searchInput = searchValue;
      } else if(city) {
        searchInput=city
      } else if(neighborhood) {
        searchInput=neighborhood;
      }
      setInputValue(searchInput);
    };

    handleParamsChange();
  }, [searchParams]);

  useEffect(() => {
    const id = setTimeout(() => setSearchValue(inputValue), 500);
    return () => clearTimeout(id);
  }, [inputValue])

  const handleOptionClick = (title: string, url: string) => {
    setInputValue(title);
    router.push(handleURL(title, url));
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const properties = useQuery({
    queryKey: ['excludedQueryKey', searchValue],
    queryFn: () => searchValue && fetchProperties(searchValue),
    staleTime: 1000 * 60 * 5,
  })

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowDropdown(true);
    setInputValue(e.target.value);
  }

  return (
    <>
      {configuration?.website?.favicon && <Head>
        <link rel="icon" href={configuration.website.favicon} />
      </Head>}
      <Navbar height={100} isBlurred={false} className={`bg-black text-white custom-nav rounded-3xl`}>
        {/* Logo and Search */}
        <NavbarBrand>
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/">
              <Image style={{ maxHeight: '45px', objectFit: 'cover' }} src={"/images/logo/logo-white.svg"} width={105} height={45} alt="logo" />
            </Link>

            {/* Search Input */}
            <div className='relative' ref={dropdownRef}>
              <Input
                size="sm"
                startContent={<FaSearch />}
                placeholder="Enter a City, Neighborhood, Address, MLS"
                className="hidden md:flex w-80 text-black bg-white rounded-full"
                aria-label="Search input"
                value={inputValue}
                onChange={handleSearchInput}
                onClick={() => setShowDropdown(true)}
                endContent={properties.isLoading ? <Loading /> : null}
              />
              {showDropdown && properties?.data?.data && typeof properties.data.data === 'object' && !(Object.values(properties.data.data).every(arr => Array.isArray(arr) && arr.length === 0)) && (
                <ul className="absolute bg-white border border-gray-300 mt-2 w-full rounded shadow-lg z-10 overflow-auto max-h-[282px]">
                  {Object.entries(properties.data.data).filter((suggestions) => Array.isArray(suggestions[1]) && suggestions[1].length > 0).map((suggestionData) => (
                    <React.Fragment key={suggestionData[0]}>
                      <li
                        key={suggestionData[0]}
                        className="p-2 font-bold text-black"
                      >
                        {suggestionData[0]}
                      </li>
                      {Array.isArray(suggestionData[1]) && suggestionData[1].map((suggestedData: AutoSuggestionData) => (
                        <li
                          key={suggestedData.url}
                          onClick={() => handleOptionClick(suggestedData.title, suggestedData.url)}
                          className="p-2 py-0 hover:bg-gray-100 !text-black text-[12px] truncate cursor-pointer"
                        >
                          {suggestedData.title}
                        </li>
                      ))}
                    </React.Fragment>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </NavbarBrand>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-2 justify-center">
          {configuration?.header?.menu && Object.entries(configuration.header.menu).map(([key, item]) => {
            const menuItem = item as MenuItem;
            return (
            <NavbarItem key={key}>
              {menuItem.subMenu ? (
                // If the menu item has a subMenu, render a Dropdown
                <DropdownItems menuItem={menuItem} subKey={key} setIsDropdownOpen={setIsDropdownOpen} />
              ) : (
                // Otherwise, render a normal button
                <Button as={Link} href={`${menuItem.url}`} variant="light" className="!text-white hover:text-white">
                  {menuItem.title}
                </Button>
              )}
            </NavbarItem>
          )})}
        </div>

        {/* Contact Info and Controls */}
        <NavbarContent justify="end">
          <NavbarItem>
            {user ?
              <Link className='!text-white flex' href="/my-profile">{user?.avatar && <Image className='rounded-full me-4' width={40} height={40} src={user.avatar} alt="profile" />}{user.name}</Link> 
              : <div onClick={onOpen} className='rounded-full cursor-pointer p-2 border border-white'>
              <FaRegUser />
            </div>}
          </NavbarItem>
          {configuration?.website?.phone && <NavbarItem className="flex items-center gap-2">
            <LuPhone size={20} />
            <Link href={`tel:${configuration.website.phone}`} className="text-white">{configuration.website.phone}</Link>
          </NavbarItem>}
        </NavbarContent>
      </Navbar>
      <SignPopup />
      <AfterAfterSignPopup />
    </>
  );
};

const DropdownItems = ({ menuItem, subKey: keys, setIsDropdownOpen } : { menuItem: MenuItem, subKey: string, setIsDropdownOpen: SetState<boolean> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <div
      onMouseOver={() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true)
        setIsDropdownOpen(true)
      }}
      onMouseOut={() => {
        timeoutRef.current = setTimeout(() => {
          setIsOpen(false);
          setIsDropdownOpen(false);
        }, 50);
      }}
    >
      <Dropdown style={{ marginTop: '-6px' }} isOpen={isOpen}>
        <DropdownTrigger>
          <Button variant="light" className="text-white">
            {menuItem.title}
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          {menuItem?.subMenu ? menuItem?.subMenu?.map((subItem, subKey) => (
            <DropdownItem className='!text-black' href={`${subItem.url}&sort=reset`} as={Link} key={`${keys}-${subKey}`}>
              {subItem.title}
            </DropdownItem>
          )) : <></>}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default Header;