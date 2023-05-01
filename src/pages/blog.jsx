import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

//Step 1: Collect all the files from blogdata directory
//Step 2: Iterate through them end display them

// http://localhost:3000/api/blogs

const blog = (props) => {
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

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default blog;
