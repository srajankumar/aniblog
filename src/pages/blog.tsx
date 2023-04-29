import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const blog = () => {
  return (
    <div className={styles.blogPage}>
      <h2 className="font-bold">Latest Blogs</h2>
      <div className={styles.blogItem}>
        <Link href={"/blogpost/learn-javascript"}>
          <h3>How to learn javascript in 2022</h3>
        </Link>
        <p>JavaSript is the language used to design the logic for the web</p>
      </div>
      <div className="blogItem">
        <h3>How to learn javascript in 2022</h3>
        <p>JavaSript is the language used to design the logic for the web</p>
      </div>
      <div className="blogItem">
        <h3>How to learn javascript in 2022</h3>
        <p>JavaSript is the language used to design the logic for the web</p>
      </div>
      <div className="blogItem">
        <h3>How to learn javascript in 2022</h3>
        <p>JavaSript is the language used to design the logic for the web</p>
      </div>
      <div className="blogItem">
        <h3>How to learn javascript in 2022</h3>
        <p>JavaSript is the language used to design the logic for the web</p>
      </div>
    </div>
  );
};

export default blog;
