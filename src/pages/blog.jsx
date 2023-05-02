import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

import InfiniteScroll from "react-infinite-scroll-component";

import * as fs from "node:fs";
//Step 1: Collect all the files from blogdata directory
//Step 2: Iterate through them end display them

// http://localhost:3000/api/blogs

const Blog = (props) => {
  console.log(props);
  const [blogs, setblogs] = useState(props.allBlogs);

  const [count, setcount] = useState(7);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs?count=${count + 2}`);
    setcount(count + 2);
    let data = await d.json();
    setblogs(data);
  };
  return (
    <div className={styles.blogPage}>
      <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.allCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
      >
        <h1 className="font-bold">Latest Blogs</h1>
        {blogs.map((blogItem) => {
          return (
            <div className={styles.blogItem} key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h2>{blogItem.title}</h2>
              </Link>
              <p>{blogItem.metadesc.substr(0, 200)}...</p>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let i = 0; i < 7; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  };
}

export default Blog;
