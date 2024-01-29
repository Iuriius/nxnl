import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
/*
/**|======================================
/**| pics
/**|======================================
*/
import Club from "@/public/nxnl_club_logo.png";
import Store from "@/public/nxnl_logo.png";
import Feed from "@/public/feed.jpg";
import Pasta from "@/public/pasta.jpg";
import Grunt from "@/public/grunt.jpg";
import { FaYoutube, FaFacebookSquare, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.ceo}>
        <h1 className={styles.herotext}>
          Вітаю Вас на сторінці НХНЛ!
          <br />
          НХНЛ - це дещо більше,
          <br />
          ніж об'єднання риболовів.
        </h1>
      </div>

      <div className={styles.section2}>
        <h2 className={styles.h2}>НХНЛ це:</h2>
        <div className={styles.flexcontainer}>
          <div>
            <a
              className={styles.linktores}
              href="http://nhnl.com.ua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Club} className={styles.fishclub} />
              <br />
              Риболовний клуб
            </a>
          </div>

          <div>
            <a
              className={styles.linktores}
              href="http://shop259825.horoshop.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Store} className={styles.fishclub} />
              <br />
              Інтернет магазин
            </a>
          </div>

          <div>
            <Link
              className={styles.linktores}
              href="/team"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Store} className={styles.fishteam} />
              <br />
              Спортивна команда
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.section3}>
        <h2>НАШІ ОСТАННІ НОВИНКИ:</h2>
        <div className={styles.newestcontainer}>
          <div>
            <Image src={Feed} className={styles.newest} />
            <h3>ГОДІВНИЦІ</h3>
          </div>

          <div>
            <Image src={Pasta} className={styles.newest} />
            <h3>ПЕЧИВО</h3>
          </div>

          <div>
            <Image src={Grunt} className={styles.newest} />
            <h3>ГРУНТИ</h3>
          </div>
        </div>
      </div>

      <div className={styles.section4}>
        <h2>МИ В СОЦМЕРЕЖАХ:</h2>
        <div className={styles.oursocials}>
          <a
            className={styles.sociallink}
            href="https://www.youtube.com/@strashnaya_ribalka/videos"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <FaYoutube className={styles.socialpic} />
            <p className={styles.socialdesc}>Канал Страшна Рибалка</p>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100080126141227"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebookSquare className={styles.socialpic} />
            <p>Facebook</p>
          </a>

          <a
            href="https://www.tiktok.com/@strashnyifishing"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
          >
            <FaTiktok className={styles.socialpic} />
            <p>TikTok</p>
          </a>

          <a
            href="https://www.instagram.com/nhnl.com.ua"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram className={styles.socialpic} />
            <p>Instagram</p>
          </a>
        </div>
      </div>
    </main>
  );
}
