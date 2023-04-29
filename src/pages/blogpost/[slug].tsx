//slug will be whatever url you give......

import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

//Step 1: Find the file corresponding to the slug
//Step 2: Populate them inside the page

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed illum
          repudiandae quasi, nostrum enim laboriosam eaque, debitis nobis nulla
          aspernatur voluptate laudantium fugit aut amet architecto suscipit
          incidunt est odit animi alias quam ea accusamus veniam excepturi!
          Tenetur, tempora. Accusamus laudantium adipisci ipsa!
        </p>
      </main>
    </div>
  );
};

export default slug;
