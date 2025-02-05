import React from "react";
import styles from "@/styles/BlogDetailCard.module.scss";
import Link from "next/link";
import { BlogData } from "@/src/types/blog";
import moment from "moment";

const BlogDetailCard = ({ blog }: { blog: BlogData }) => {
  return (
    <Link className="w-full" href={`/blog/${blog.slug}`}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={blog.thumbnail} alt={`Image ${blog.slug}`} className={styles.image} />
        </div>
        <div className={`px-2 py-3 ${styles.details}`}>
            <p className={styles.title}>{blog.title}</p>
            <p className={styles.date}>{moment(blog.created_at).format("MMMM DD, YYYY")}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogDetailCard;