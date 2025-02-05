"use client"
import styles from "@/styles/Property/PropertyHead.module.scss"
import Link from "next/link";
import FilterBar from "../Homepage/FilterBar";

export default function PropertyHead() {
  return (
    <div className={styles.headContainer}>
      <h3 className="text-3xl font-bold wow animate__animated animate__fadeInUp mb-3">Real Estate &amp; Homes For Sale</h3>
      <ul className="breadcrumbs">
        <li><Link href="/">Home</Link>
        </li><li>/</li>
        <li>Property List</li>
      </ul>
      <div className="mt-10">
        <FilterBar />
      </div>
    </div>
  )
}