"use client"
import styles from "@/styles/Property/PropertyHead.module.scss"
import Link from "next/link";

export default function BlogHead() {
  return (
    <div className={styles.headContainer}>
      <h3 className="text-3xl font-bold wow animate__animated animate__fadeInUp mb-3">Blogs</h3>
      <ul className="breadcrumbs">
        <li><Link href="/">Home</Link>
        </li><li>/</li>
        <li>Blog List</li>
      </ul>
    </div>
  )
}