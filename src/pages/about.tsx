import React from "react";
import styles from "../styles/About.module.css";

const about = () => {
  return (
    <div className={styles.container}>
      <h1>About AniBlog</h1>
      <h2>Introduction</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui excepturi
        sequi nihil delectus officiis, dolore, molestias, laboriosam possimus
        amet totam unde. Optio fugit doloribus aspernatur. Adipisci, commodi!
        Dolor, exercitationem incidunt commodi eos accusantium vero quo suscipit
        ut nam mollitia dignissimos quod cum doloremque. Autem amet quas
        asperiores, sed illum explicabo, repellendus non fuga atque, ea
        exercitationem voluptatum rem. Assumenda a ipsum, nam neque quaerat
        explicabo animi expedita, illo unde maxime asperiores blanditiis
        reprehenderit, fugiat iste dolor amet modi saepe totam iusto!
        Dignissimos porro, iure suscipit nemo sequi, tempore dolorum eum
        cupiditate et, iusto assumenda provident nesciunt nisi inventore facilis
        dolor?
      </p>
      <h2>Services offered</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum,
        tempore maiores vel architecto eligendi totam vero eveniet suscipit
        deserunt exercitationem maxime. Quam vitae autem dignissimos enim iusto?
        Iusto accusamus necessitatibus a eos porro ab voluptatum natus quas
        consequuntur voluptates. Placeat commodi quidem cum, ab vitae expedita
        totam illum sit, nisi suscipit numquam deleniti inventore sed.
      </p>
      <h2>Contact us</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ab
        quibusdam, aspernatur autem eligendi illo doloremque quis voluptas
        voluptatum architecto delectus voluptatem fugit sint maiores officiis.
        Ipsam repellat recusandae aut unde eos, consequatur veritatis sunt. Quam
        eos nostrum consequuntur, illum voluptatem porro atque dignissimos ea
        quia facilis at consequatur nobis ipsa enim mollitia. Quisquam, pariatur
        dicta.
      </p>
      <h2>Author</h2>
      <div className={styles.author}>
        <p>Srajan Kumar</p>
        <br />
        <a href="https://github.com/srajankumar" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default about;
