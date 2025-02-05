'use client';
import Link from "next/link";
import React, { useState } from "react";
import styles from "@/styles/Homepage/PropertyOptions.module.scss";
import { useGlobalContext } from "@/context/GlobalContext";

const PropertyOptions = () => {
	const { configuration } = useGlobalContext();
	// console.log(configuration,"configuration")
	const [propertyType, setPropertyType] = useState("Buy");

	return (
		<section className="idx-container">
			<div className="idx-section">
        <h3 className="text-3xl font-bold">Property Options</h3>
        <div className={styles.footerBtn}>
					{Object.entries(configuration.preDefinedSearches).length > 0 && Object.entries(configuration.preDefinedSearches).map((predefinedSearches) => (
						<button
							key={predefinedSearches[1].title}
							className={`${styles.button} ${propertyType === predefinedSearches[1].title ? styles.active : ""}`}
							onClick={() => setPropertyType(predefinedSearches[1].title)}
						>
							{predefinedSearches[1].title}
						</button>
					))}
        </div>
        <div className="flex justify-between">
					{Object.entries(configuration.preDefinedSearches).length > 0 && Object.entries(configuration.preDefinedSearches).filter((predefinedSearches) => predefinedSearches[1].title === propertyType).map((predefinedSearches) => (
						<React.Fragment key={predefinedSearches[0]}>
							{predefinedSearches.length > 0 && Object.entries(predefinedSearches[1].searches).map((searched) => (
								<div className="flex flex-col" key={searched[0]}>
									<h4 className="text-2xl font-bold capitalize">{searched[0]?.replace(/([a-z])([A-Z])/g, '$1 $2')}</h4>
									{Array.isArray(searched[1]) && searched[1].map((linkData) => (
										<Link className={styles.link} href={linkData.url} key={linkData.title}>
											{linkData.title}
										</Link>
									))}
								</div>
							))}
						</React.Fragment>
					))}
        </div>
      </div>
		</section>
	);
};

export default PropertyOptions;