"use client";

import React from "react";
import { Tab, Tabs } from "@nextui-org/react";
import { FaBed, FaBath, FaRulerCombined, FaTag } from "react-icons/fa";

const FloorDetails = () => {

  const floorData = [
    { label: "Bedrooms", value: "4", icon: <FaBed size={24} /> },
    { label: "Bathrooms", value: "2", icon: <FaBath size={24} /> },
    { label: "Size", value: "200 SqFt", icon: <FaRulerCombined size={24} /> },
    { label: "Price", value: "$12,000", icon: <FaTag size={24} /> },
  ];

  return (
    <>
      <Tabs radius={"full"}>
          <Tab title="First Floor">
            <div className="mt-5">
              <div className="flex gap-5">
                {floorData.map((item, index) => (
                  <div key={index} className="p-4 border-1 border-[#ebebeb] rounded-lg min-w-[150px]">
                    <div className="mb-2">{item.icon}</div>
                    <div className="font-medium text-lg">{item.label}</div>
                    <div className="text-sm text-gray-500">{item.value}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit
                voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem
                torquatos deseruisse te eum commodo.
              </p>
            </div>
          </Tab>
          <Tab title="Second Floor">
            <div className="mt-5">
              {/* Content for the second floor */}
              <p className="text-gray-600 text-sm">Details for the second floor.</p>
            </div>
          </Tab>
          <Tab title="Third Floor">
            <div className="mt-5">
              {/* Content for the third floor */}
              <p className="text-gray-600 text-sm">Details for the third floor.</p>
            </div>
          </Tab>
      </Tabs>
      <div className="mt-5">
        <img src="/images/section/blueprint-1.png" alt=""></img>
      </div>
    </>
  );
};

export default FloorDetails;