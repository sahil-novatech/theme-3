import { useState } from "react";
import styles from "@/styles/PropertyDetail/Nearby.module.scss";

const tabs = ["Schools", "Food", "Health & Medical"];

const schools = [
  {
    rating: 9,
    name: "Ps 95 Eastwood",
    grades: "K-5",
    distance: "0.3 mi",
  },
  {
    rating: 5,
    name: "Is 238 Susan B Anthony",
    grades: "K-5",
    distance: "0.3 mi",
  },
  {
    rating: 3,
    name: "Cambria Heights Academy",
    grades: "K-5",
    distance: "0.3 mi",
  },
];

const Nearby = () => {
  const [activeTab, setActiveTab] = useState("Schools");

  return (
    <div>
      <div className={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={
              activeTab === tab ? styles.activeTab : styles.inactiveTab
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* {activeTab === "Schools" && ( */}
        <div className={styles.schoolList}>
          {schools.map((school, index) => (
            <div key={index} className={styles.schoolItem}>
              <div className={styles.schoolRating}>{school.rating}<span className="font-normal text-sm">/10</span></div>
              <div className={styles.schoolDetails}>
                <div className={styles.schoolName}>{school.name}</div>
                <div className={styles.schoolInfo}>
                  Grades: <span className="font-semibold text-black me-5">{school.grades}</span> Distance: <span className="font-semibold text-black">{school.distance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      {/* )} */}

      {/* Add similar structures for "Food" and "Health & Medical" if necessary */}
    </div>
  );
};

export default Nearby;