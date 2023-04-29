import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

//Step 1: Collect all the files from blogdata directory
//Step 2: Iterate through them end display them

const blog = () => {
  return (
    <div className={styles.blogPage}>
      <h1 className="font-bold">Latest Blogs</h1>
      <div className={styles.blogItem}>
        <Link href={"/blogpost/learn-javascript"}>
          <h2>How to learn HTML in 2023</h2>
        </Link>
        <p>JavaSript is the language used to design the logic for the web</p>
      </div>
      <div className="blogItem">
        <h2>How to learn CSS in 2023</h2>
        <p>JavaSript is the language used to design the logic for the web</p>
      </div>
      <div className="blogItem">
        <h2>How to learn Javascript in 2023</h2>
        <p>JavaSript is the language used to design the logic for the web</p>
      </div>
    </div>
  );
};

export default blog;
