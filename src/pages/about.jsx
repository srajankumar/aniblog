import React from "react";
import styles from "../styles/About.module.css";

const about = () => {
  return (
    <div className={styles.container}>
      <h1>About AniBlog</h1>
      <h2>Introduction</h2>
      <p>
        Welcome to our AniBlog, where we bring you the latest and greatest news,
        reviews, and insights into the wonderful world of anime. Here, we share
        our passion for this incredible medium and offer a gateway for newcomers
        to explore the vast and varied landscape of Japanese animation.
      </p>
      <br />
      <p>
        Anime has become a cultural phenomenon, capturing the hearts and
        imaginations of millions of fans around the world. With its unique blend
        of stunning visuals, compelling stories, and dynamic characters, anime
        has become a cornerstone of modern entertainment. From the heartfelt
        dramas to the action-packed adventures, there&apos;s something for
        everyone to enjoy.
      </p>
      <h2>Services offered</h2>
      <p>
        Our blog is dedicated to showcasing some of the most popular and beloved
        anime series of all time, including both classic and contemporary
        titles. Whether you&apos;re a long-time fan or a curious newcomer,
        we&apos;ve got you covered with reviews, analysis, and deep dives into
        the stories, characters, and themes that make anime so captivating.
      </p>
      <br />
      <p>
        Here, you&apos;ll find blogs on some of the most popular anime series,
        including Naruto, Attack on Titan, One Piece, Demon Slayer, and many
        more. We&apos;ll explore the epic battles, emotional moments, and
        unforgettable characters that have made these series enduring favorites
        among fans.
      </p>
      <br />
      <p>
        But we don&apos;t just stop at the classics - we also delve into newer
        series that are sure to become future favorites. From the sci-fi
        adventures of Steins;Gate to the supernatural thrills of Jujutsu Kaisen,
        we keep our fingers on the pulse of the anime world and bring you the
        latest and greatest shows.
      </p>
      <br />
      <p>
        Through our blog, we aim to inspire a deeper appreciation for anime and
        help newcomers discover the joy and excitement of this incredible
        medium. We believe that anime has the power to entertain, educate, and
        inspire, and we&apos;re passionate about sharing that message with the
        world.
      </p>
      <br />
      <p>
        So, whether you&apos;re a seasoned otaku or just dipping your toes into
        the anime waters, we invite you to join us on this amazing journey
        through the world of anime. Get ready to immerse yourself in epic
        battles, explore new worlds, and fall in love with unforgettable
        characters – all through the magic of anime.
      </p>
      {/* <h2>Contact us</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ab
        quibusdam, aspernatur autem eligendi illo doloremque quis voluptas
        voluptatum architecto delectus voluptatem fugit sint maiores officiis.
        Ipsam repellat recusandae aut unde eos, consequatur veritatis sunt. Quam
        eos nostrum consequuntur, illum voluptatem porro atque dignissimos ea
        quia facilis at consequatur nobis ipsa enim mollitia. Quisquam, pariatur
        dicta.
      </p> */}
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
