import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

//Step 1: Collect all the files from blogdata directory
//Step 2: Iterate through them end display them

// http://localhost:3000/api/blogs

const blog = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    console.log("useeffect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      }) //fetches jsondata
      .then((parsed) => {
        console.log(parsed); //parse json file
        setblogs(parsed);
      });
  }, []);
  return (
    <div className={styles.blogPage}>
      <h1 className="font-bold">Latest Blogs</h1>
      {blogs.map((blogItem) => {
        return (
          <div className={styles.blogItem} key={blogItem.slug}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h2>{blogItem.title}</h2>
            </Link>
            <p>{blogItem.content.substr(0, 200)}...</p>
          </div>
        );
      })}
    </div>
  );
};

export default blog;
