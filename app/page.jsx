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
    </main>
  );
}
