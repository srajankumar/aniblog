//slug will be whatever url you give......

import React, { useEffect, useState } from "react";
import styles from "../../styles/BlogPost.module.css";

import * as fs from "node:fs";
//Step 1: Find the file corresponding to the slug
//Step 2: Populate them inside the page

const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }
  const [blog, setblog] = useState(props.myBlog);
  return (
    <div>
      <main className={styles.main}>
        <h1 className="text-center">{blog && blog.title}</h1>
        <br />
        {blog && (
          <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
        )}
        <h2>Author</h2>
        <a href={blog && blog.social} target="_blank">
          {blog && blog.author}
        </a>
        <div>{blog && blog.date}</div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  let allb = await fs.promises.readdir("blogdata");
  allb = allb.map((item) => {
    return {
      params: {
        slug: item.split(".")[0],
      },
    };
  });
  console.log(allb);
  return {
    paths: allb,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

export default Slug;
