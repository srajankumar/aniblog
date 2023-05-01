import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

import * as fs from "node:fs";
//Step 1: Collect all the files from blogdata directory
//Step 2: Iterate through them end display them

// http://localhost:3000/api/blogs

const Blog = (props) => {
  console.log(props);
  const [blogs, setblogs] = useState(props.allBlogs);
  // useEffect(() => {

  // }, []);
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

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
