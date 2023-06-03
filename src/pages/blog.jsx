import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

import InfiniteScroll from "react-infinite-scroll-component";

import * as fs from "node:fs";
//Step 1: Collect all the files from blogdata directory
//Step 2: Iterate through them end display them

// http://localhost:3000/api/blogs

const Blog = (props) => {
  const [blogs, setblogs] = useState(props.allBlogs);

  const [count, setcount] = useState(8);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs?count=${count + 2}`);
    setcount(count + 2);
    let data = await d.json();
    setblogs(data);
  };
  return (
    <div className={styles.container}>
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
        <h2 className="text-2xl font-bold px-5 mx-auto">Latest Blogs</h2>
        <div className="container text-gray-400 py-10 mx-auto flex flex-wrap -m-4">
          {blogs.map((blogItem) => {
            return (
              <div key={blogItem.slug} className="w-1/3 p-5">
                <Link href={`/blogpost/${blogItem.slug}`} className=" md:w-1/3">
                  <div className="h-full border-0 bg-[#212121] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={blogItem.img} // Updated line
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xl title-font font-bold text-white mb-1">
                        {blogItem.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed mb-3 ">
                        {blogItem.metadesc.substr(0, 200)} . . .
                      </p>
                      <div className="flex items-center flex-wrap ">
                        {blogItem.genres}

                        <span className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-gray-200"></span>
                        <span className="inline-flex items-center leading-none text-sm">
                          {blogItem.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
      {/* <div className={styles.blogPage}>
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
      </div> */}
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  };
}

export default Blog;
