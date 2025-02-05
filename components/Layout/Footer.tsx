"use client";

import React, { useState } from "react";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import { useGlobalContext } from "@/context/GlobalContext";
import { Config } from "@/src/types/configuration";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { configuration } = useGlobalContext();

  return (
    <footer className="w-full bg-black text-white p-8 rounded-3xl mb-3">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Subscribe */}
        <div>
          <Link href="/">
            {Boolean(configuration?.website?.footer_logo || configuration?.website?.logo) && <Image src={"/images/logo/logo-white.svg"} style={{ maxHeight: "45px", objectFit: "cover" }} width={configuration.website.footer_logo ? 200 : 105} height={configuration.website.footer_logo ? 56 : 45} alt="logo" className="mb-5" />}
          </Link>
          {/* <h2 className="text-xl font-bold mb-4">IDX</h2> */}
          <div>
            
          </div>
        </div>

        {/* Discover */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Discover</h3>
          <ul className="space-y-2 text-sm">
            <CityList configuration={configuration} />
          </ul>
        </div>

        {/* Quick Links */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Blog", "Privacy Policy", "Terms & Conditions"].map((link) => (
              <li key={link}>
                <Link href="#" className="text-gray-400 hover:text-white">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            {configuration?.website?.email && <li>Email: <Link className="text-[14px] text-white" href={`mailto:${configuration.website.email}`}>{configuration.website.email}</Link></li>}
            {configuration?.website?.phone && <li>Phone: <Link className="text-[14px] text-white" href={`tel:${configuration.website.phone}`}>{configuration.website.phone}</Link></li>}
            {configuration?.website?.address && <li>Address: {configuration.website.address}</li>}
            {configuration?.website?.facebook_url && <Link target="_blank" className="text-[14px] text-white me-2" href={`${configuration.website.facebook_url}`}><FaFacebook size={20} /></Link>}
            {configuration?.website?.instagram_url && <Link target="_blank" className="text-[14px] text-white" href={`${configuration.website.instagram_url}`}><FaInstagram size={20} /></Link>}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm opacity-75">
        <p>
          © RE/MAX Millennium Real Estate Brokerage Independently Owned & Operated
          <br />
          Office: (855) 500-7656 | Fax: (855) 500-7656
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const CityList = ({ configuration }: { configuration: Config }) => {
  const [isLess, setIsLess] = useState(false);
  return (
    <>
      {configuration.popularCities.length > 0 && (isLess ? configuration.popularCities : configuration.popularCities.slice(0, 4)).map(
      (cityData) => (
        <li key={cityData.title}>
          <Link href={cityData.url} className="text-gray-400 hover:text-white">
            {cityData.title}
          </Link>
        </li>
      ))}
      {configuration.popularCities.length > 4 && <li key={"less-more"} className="underline underline-offset-4 cursor-pointer hover:text-gray-300" onClick={() => setIsLess(less => !less)}>Show {isLess ? 'Less' : 'More'}</li>}
    </>
  )
}