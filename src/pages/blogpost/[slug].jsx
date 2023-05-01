//slug will be whatever url you give......

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

//Step 1: Find the file corresponding to the slug
//Step 2: Populate them inside the page

const slug = () => {
  const [blog, setblog] = useState();
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (!router.isReady) return;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setblog(parsed); //parse json file
      });
  }, [router.isReady]);
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

export default slug;
