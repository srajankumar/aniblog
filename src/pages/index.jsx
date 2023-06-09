import styles from "../styles/Main.module.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={styles.container}>
      <div className="pt-28">
        <div>
          <div className={styles.headermain}>
            <h1 className="text-5xl font-mono font-bold">AniBlog</h1>
            <p>A blog for Anime lovers ~ (•̀⁠ᴗ⁠-)</p>
          </div>
        </div>{" "}
        <div>
          <h2 className="font-bold px-5 mx-auto">Top Anime Series</h2>
          <section className="text-gray-400 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-0 bg-[#212121] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://media.comicbook.com/2017/02/attack-on-titan-opening-230355.jpg"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                        1. Shingeki no Kyojin
                      </h2>
                      <h1 className="title-font text-md font-medium pt-3 text-gray-300 mb-3">
                        Shounen, Action, Drama, Suspense, Gore, Military,
                        Survival
                      </h1>
                      <p className="leading-relaxed mb-3 ">
                        After his hometown is destroyed and his mother is
                        killed, young Eren Jaeger vows to cleanse the earth of
                        the giant humanoid Titans that have brought humanity to
                        the brink of extinction.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          target="_blank"
                          href="https://myanimelist.net/anime/16498/Shingeki_no_Kyojin"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"
                            />
                          </svg>
                          8.54
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142a.75.75 0 1 1-1.498.07a4.5 4.5 0 0 0-8.99 0a.75.75 0 0 1-1.498-.07a6.004 6.004 0 0 1 3.431-5.142a3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0Z"
                            />
                          </svg>
                          3,733,878
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-0 bg-[#212121] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://www.themarysue.com/wp-content/uploads/2023/01/Feature-All-Death-Note-Characters-Ranked.jpg?fit=1200%2C675"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                        2. Death Note
                      </h2>
                      <h1 className="title-font text-md font-medium pt-3 text-gray-300 mb-3">
                        Shounen, Supernatural, Suspense, Detective,
                        Psychological
                      </h1>
                      <p className="leading-relaxed mb-3 ">
                        An intelligent high school student goes on a secret
                        crusade to eliminate criminals from the world after
                        discovering a notebook capable of killing anyone whose
                        name is written into it.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="https://myanimelist.net/anime/1535/Death_Note"
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"
                            />
                          </svg>
                          8.62
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142a.75.75 0 1 1-1.498.07a4.5 4.5 0 0 0-8.99 0a.75.75 0 0 1-1.498-.07a6.004 6.004 0 0 1 3.431-5.142a3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0Z"
                            />
                          </svg>
                          3,702,799
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-0 bg-[#212121] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://wallpapers.com/images/featured/0tvvnvos36llm4yx.jpg"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                        3. Fullmetal Alchemist
                      </h2>
                      <h1 className="title-font text-md font-medium pt-3 text-gray-300 mb-3">
                        Shounen, Action, Adventure, Drama, Fantasy, Military
                      </h1>
                      <p className="leading-relaxed mb-3 ">
                        Two brothers search for a Philosopher&apos;s Stone after
                        an attempt to revive their deceased mother goes awry and
                        leaves them in damaged physical forms.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"
                            />
                          </svg>
                          9.10
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142a.75.75 0 1 1-1.498.07a4.5 4.5 0 0 0-8.99 0a.75.75 0 0 1-1.498-.07a6.004 6.004 0 0 1 3.431-5.142a3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0Z"
                            />
                          </svg>
                          3,167,541
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-0 bg-[#212121] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://occ-0-64-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYM9KvP-bpz9dnTQP1O7OhpXl-Vs21ImIUtsfrrwF34WX36c4S7ceysPRTiFe4MamL8AKhiCvsPsS_ON75eGeuJfhSEmUp4l6bM0.jpg?r=0e5"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                        4. One Punch Man
                      </h2>
                      <h1 className="title-font text-md font-medium pt-3 text-gray-300 mb-3">
                        Seinen, Action, Comedy, Adult Cast, Parody, Super Power
                      </h1>
                      <p className="leading-relaxed mb-3 ">
                        The story of Saitama, a hero that does it just for fun &
                        can defeat his enemies with a single punch.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="https://myanimelist.net/anime/30276/One_Punch_Man"
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"
                            />
                          </svg>
                          8.50
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142a.75.75 0 1 1-1.498.07a4.5 4.5 0 0 0-8.99 0a.75.75 0 0 1-1.498-.07a6.004 6.004 0 0 1 3.431-5.142a3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0Z"
                            />
                          </svg>
                          3,049,978
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-0 bg-[#212121] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://saop-anime.com/assets/scherzo/img/top/kv.jpg"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                        5. Sword Art Online
                      </h2>
                      <h1 className="title-font text-md font-medium pt-3 text-gray-300 mb-3">
                        Shounen, Action, Drama, Suspense, Gore, Military,
                        Survival
                      </h1>
                      <p className="leading-relaxed mb-3 ">
                        In the year 2022, thousands of people get trapped in a
                        new virtual MMORPG and the lone wolf player, Kirito,
                        works to escape.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="https://myanimelist.net/anime/11757/Sword_Art_Online"
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"
                            />
                          </svg>
                          7.20
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142a.75.75 0 1 1-1.498.07a4.5 4.5 0 0 0-8.99 0a.75.75 0 0 1-1.498-.07a6.004 6.004 0 0 1 3.431-5.142a3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0Z"
                            />
                          </svg>
                          2,945,226
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-0 bg-[#212121] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://assets1.ignimgs.com/2016/04/11/my-hero-academia-poster-ajpg-6d9b63.jpg"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                        6. Boku no Hero Academia
                      </h2>
                      <h1 className="title-font text-md font-medium pt-3 text-gray-300 mb-3">
                        Shounen, Action, School, Super Power
                      </h1>
                      <p className="leading-relaxed mb-3 ">
                        A superhero-loving boy without any powers is determined
                        to enroll in a prestigious hero academy and learn what
                        it really means to be a hero.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="https://myanimelist.net/anime/31964/Boku_no_Hero_Academia"
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"
                            />
                          </svg>
                          7.89
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142a.75.75 0 1 1-1.498.07a4.5 4.5 0 0 0-8.99 0a.75.75 0 0 1-1.498-.07a6.004 6.004 0 0 1 3.431-5.142a3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0Z"
                            />
                          </svg>
                          2,874,605
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <h2 className="font-bold px-5 mx-auto">Top Rated Anime Episodes</h2>
          <section className="text-gray-400 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-0 bg-[#212121] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.gfycat.com%2FElasticEmptyDairycow-size_restricted.gif&f=1&nofb=1&ipt=871d2387791b6e3620ba6443e9ca1f6aa6849be71245cbc96c99e237be215eec&ipo=images"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                        1. Shingeki no Kyojin
                      </h2>
                      <h1 className="title-font text-lg font-medium pt-3 text-gray-300 mb-3">
                        Hero
                      </h1>
                      <p className="leading-relaxed mb-3">
                        As Erwin&apos;s heroic charge buys Levi time to confront
                        the Beast Titan, Armin comes up with a plan of his own
                        that lays it all on the line.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="https://attackontitan.fandom.com/wiki/Hero_(Episode)"
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"
                            />
                          </svg>
                          9.9
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-0 bg-[#212121] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgifsec.com%2Fwp-content%2Fuploads%2F2022%2F09%2Fdemon-slayer-gif-30.gif&f=1&nofb=1&ipt=8efbfa29dcfda8e1b88152eccce5d0e6732614596afd42c46c100c57b3782536&ipo=images"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                        2. Kimetsu no Yaiba
                      </h2>
                      <h1 className="title-font text-lg font-medium pt-3 text-gray-300 mb-3">
                        I Will Never Give Up
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Tanjiro wakes up to find himself surrounded by burning
                        debris, with Gyutaro laughing delightedly at his plight.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="https://www.imdb.com/title/tt17521746/ratings/"
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"
                            />
                          </svg>
                          9.8
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-0 bg-[#212121] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cinepremiere.com.mx%2Fwp-content%2Fuploads%2F2020%2F01%2FVinland-Saga.gif&f=1&nofb=1&ipt=57ba07921ffaeb7d5b93877ad48a8952c9dba40b6cd1572302494c3885dc21b9&ipo=images"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                        3. Vinland Saga
                      </h2>
                      <h1 className="title-font text-lg font-medium pt-3 text-gray-300 mb-3">
                        End of The Prologue
                      </h1>
                      <p className="leading-relaxed mb-3">
                        As the Imperial Council proceeds, Askeladd is shocked by
                        the news of Wales. As he gets called by the king, he
                        makes a last stand.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="https://vinlandsaga.fandom.com/wiki/Chapter_54"
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"
                            />
                          </svg>
                          9.9
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-0 bg-[#212121] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://i0.wp.com/hoshiru.net/wp-content/uploads/2009/03/ezgif-3-dc314cbdee.gif?resize=500%2C281"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                        4. Code Geass
                      </h2>
                      <h1 className="title-font text-lg font-medium pt-3 text-gray-300 mb-3">
                        Re ;
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Lelouch tries to persuade Nunnally into giving him the
                        key of Damocles as the battle concludes.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="https://www.imdb.com/title/tt1310121/ratings/?ref_=tt_ov_rt"
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"
                            />
                          </svg>
                          9.9
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-0 bg-[#212121] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://media.tenor.com/kv42EMReo4wAAAAd/all-migth-one-for-all.gif"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                        5. My Hero Academia
                      </h2>
                      <h1 className="title-font text-lg font-medium pt-3 text-gray-300 mb-3">
                        One For All
                      </h1>
                      <p className="leading-relaxed mb-3">
                        All Might and One for All go all out, pushing their
                        limits in a high-stakes battle. With his ultimate move,
                        United States of Smash, All Might emerges victorious.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="https://myheroacademia.fandom.com/wiki/Episode_49"
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"
                            />
                          </svg>
                          9.8
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-0 bg-[#212121] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://qph.cf2.quoracdn.net/main-qimg-83d891dd5456a40de4ea76b5c089f7d3"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                        6. Boruto
                      </h2>
                      <h1 className="title-font text-lg font-medium pt-3 text-gray-300 mb-3">
                        Aibo
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Kurama sacrifices themselves to save Boruto and his
                        friends from the Otsutsuki Isshiki
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="https://www.imdb.com/title/tt15498166/ratings/?ref_=tt_ov_rt"
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"
                            />
                          </svg>
                          9.8
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
