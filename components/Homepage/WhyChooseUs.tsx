"use client";

import React from "react";
import styles from "@/styles/Homepage/WhyChooseUs.module.scss";
import { FaHome, FaUserTie, FaMoneyBillWave, FaRegEdit } from "react-icons/fa";
import Heading from "../Heading";

const features = [
  {
    id: 1,
    icon: <FaHome />,
    title: "Find Your Future Home",
    description:
      "We help you find a new home by offering a smart real estate experience.",
  },
  {
    id: 2,
    icon: <FaUserTie />,
    title: "Experienced Agents",
    description: "Find an experienced agent who knows your market best.",
  },
  {
    id: 3,
    icon: <FaMoneyBillWave />,
    title: "Buy Or Rent Homes",
    description:
      "Millions of houses and apartments in your favourite cities.",
  },
  {
    id: 4,
    icon: <FaRegEdit />,
    title: "List Your Own Property",
    description: "Sign up now and sell or rent your own properties.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className={`${styles.container} idx-container`}>
      <div className="idx-section">
        {/* Section Title */}
        <Heading title="Why Choose Us" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

        {/* Features Grid */}
        <div className={styles.gridContainer}>
          {features.map((feature) => (
            <div key={feature.id}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
      </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;