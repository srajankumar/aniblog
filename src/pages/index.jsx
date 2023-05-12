import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Main.module.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>AniBlog</title>
      </Head>
      <div>
        <div className="relative drop-shadow-[0_0_0.3rem_#ffffff70] ">
          <div className={styles.headermain}>
            <h1 className="text-5xl font-mono font-bold">AniBlog</h1>
            <p>A blog for Anime lovers ~ (•̀⁠ᴗ⁠-)⁠</p>
          </div>
        </div>
        <div className={styles.blogPage}>
          <h2 className="font-bold">
            Highest Rated Anime Episodes of All Time
          </h2>
          <div className={styles.blogItem}>
            <h3>1. Attack on Titan</h3>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.gfycat.com%2FElasticEmptyDairycow-size_restricted.gif&f=1&nofb=1&ipt=871d2387791b6e3620ba6443e9ca1f6aa6849be71245cbc96c99e237be215eec&ipo=images" />
            <div>
              <h4>Episode: Hero</h4>
              <h5>9.9</h5>
            </div>
            <p>
              As Erwin&apos;s heroic charge buys Levi time to confront the Beast
              Titan, Armin comes up with a plan of his own that lays it all on
              the line.
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>2. Demon Slayer: Kimetsu no Yaiba</h3>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgifsec.com%2Fwp-content%2Fuploads%2F2022%2F09%2Fdemon-slayer-gif-30.gif&f=1&nofb=1&ipt=8efbfa29dcfda8e1b88152eccce5d0e6732614596afd42c46c100c57b3782536&ipo=images" />
            <div>
              <h4>Episode: I Will Never Give Up</h4>
              <h5>9.8</h5>
            </div>
            <p>
              Tanjiro wakes up to find himself surrounded by burning debris,
              with Gyutaro laughing delightedly at his plight.
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>3. Vinland Saga</h3>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cinepremiere.com.mx%2Fwp-content%2Fuploads%2F2020%2F01%2FVinland-Saga.gif&f=1&nofb=1&ipt=57ba07921ffaeb7d5b93877ad48a8952c9dba40b6cd1572302494c3885dc21b9&ipo=images" />
            <div>
              <h4>Episode: End of The Prologue</h4>
              <h5>9.9</h5>
            </div>
            <p>
              As the Imperial Council proceeds, Askeladd is shocked by the news
              of Wales. As he gets called by the king, he makes a last stand.
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>4. Code Geass</h3>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_M2N3IPRmG4%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=7acde9893fa7799352118ab387c1c198515c6ecf7f95212eca38ff9b268901f5&ipo=images" />
            <div>
              <h4>Episode: Re;</h4>
              <h5>9.9</h5>
            </div>
            <p>
              Lelouch tries to persuade Nunnally into giving him the key of
              Damocles as the battle concludes.
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>5. Hunter x Hunter</h3>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyzgeneration.com%2Fwp-content%2Fuploads%2F2014%2F04%2FHunter-X-Hunter-%25C3%2589pisode-126-Cover.png&f=1&nofb=1&ipt=0db4293f5618dfab87cdbcbd8439cf7fb05ba74da33c1f30985a34432d4d14eb&ipo=images" />
            <div>
              <h4>Episode: Zero x and x Rose</h4>
              <h5>9.9</h5>
            </div>
            <p>
              Netero and the King&apos;s fierce battle continues. The King feels
              fear for the first time and Netero demonstrates the zenith of nen
              mastery.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
