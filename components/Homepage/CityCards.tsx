"use client";

import React from "react";
import styles from "@/styles/Homepage/CityCards.module.scss";
import { Card } from "@nextui-org/react";
import Heading from "../Heading";
import Link from "next/link";
import { RightIcon } from "../Icons/Icons";
// import { globalServices } from "@/services/global.services";
// import { useQuery } from "@tanstack/react-query";

interface City {
  name: string;
  count: number;
  thumbnail: null | string;
}

// const cityData: City[] = [
//   { id: 1, name: "Ajax", properties: 13, image: "/images/image-box/cities-1.jpg", size: 6, link: '/city-1' },
//   { id: 2, name: "Whitby", properties: 55, image: "/images/image-box/cities-2.jpg", size: 3, link: '/city-2' },
//   { id: 3, name: "Vaughan", properties: 37, image: "/images/image-box/cities-3.jpg", size: 3, link: '/city-3' },
//   { id: 4, name: "Uxbridge", properties: 26, image: "/images/image-box/cities-4.jpg", size: 3, link: '/city-4' },
//   { id: 5, name: "Scugog", properties: 93, image: "/images/image-box/cities-5.jpg", size: 3, link: '/city-5' },
//   { id: 6, name: "Richmond Hill", properties: 84, image: "/images/image-box/cities-6.jpg", size: 6, link: '/city-6' },
// ];

const images: string[] = [
  "/images/image-box/cities-1.jpg",
  // "/images/image-box/cities-2.jpg",
  // "/images/image-box/cities-3.jpg",
  // "/images/image-box/cities-4.jpg",
  // "/images/image-box/cities-5.jpg",
  "/images/image-box/cities-6.jpg",
]

// async function fetchPopularCities() {
  // const res = await globalServices.getAll(`/top-cities`)
//   let data = [
// ]
// return data;
  // if (res.status === 200) {
  //   return res.data;
  // } else {
  //   return []
  // }
// }

const CityCards: React.FC = () => {
  // const cities = useQuery({
  //   queryKey: ['Popular Cities'],
  //   queryFn: fetchPopularCities,
  //   staleTime: 1000 * 60 * 5,
  // })

  const cityData = [
    {
      "name": "Toronto",
      "thumbnail": null,
      "count": 42981
    },
    {
        "name": "Mississauga",
        "thumbnail": null,
        "count": 8875
    },
    {
        "name": "Brampton",
        "thumbnail": null,
        "count": 6523
    },
    {
        "name": "Hamilton",
        "thumbnail": null,
        "count": 5074
    },
    {
        "name": "Vaughan",
        "thumbnail": null,
        "count": 4560
    },
    {
        "name": "Markham",
        "thumbnail": null,
        "count": 4127
    },
    {
        "name": "Oakville",
        "thumbnail": null,
        "count": 3994
    },
    {
        "name": "London",
        "thumbnail": null,
        "count": 3712
    },
    {
        "name": "Richmond Hill",
        "thumbnail": null,
        "count": 2916
    },
    {
        "name": "Barrie",
        "thumbnail": null,
        "count": 2428
    }
  ]

  return (
    <section className="idx-container">
      <div className="py-12 px-6 idx-section">
        {/* Section Title */}
        <Heading title="Find Properties in These Cities" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."  />

        <div className={styles.cityGrid}>
          {cityData.map((city: City, index: number) => (
            <div
              key={city.name}
              className={`${styles.card} wow animate__animated animate__fadeInUp col-span-2`}
              data-wow-delay={`${(index + 1) * 0.2}s`}
            >
              <Card>
                <img
                  src={images[index % 2]}
                  alt={city.name}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <p className={styles.cardSubtitle}>{city.count} Properties</p>
                  <h3 className={styles.cardTitle}>{city.name}</h3>
                </div>
                <Link href={`/property?city=${city.name}`} className={styles.cityLink}><RightIcon /></Link>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityCards;