//slug will be whatever url you give......

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

import * as fs from "node:fs";
//Step 1: Find the file corresponding to the slug
//Step 2: Populate them inside the page

const Slug = (props) => {
  const [blog, setblog] = useState(props.myBlog);
  return (
    <div>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <p>{blog && blog.content}</p>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-css" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-html" } },
      { params: { slug: "how-to-learn-react" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

export default Slug;
