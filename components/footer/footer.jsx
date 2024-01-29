import styles from "./footer.module.css";
import Image from "next/image";
import Logo from "@/public/nxnl_logo.png";
import Clublogo from "@/public/nxnl_club_logo.png";
/*
/**|======================================
/**| icons
/**|======================================
*/
import {
  FaYoutube,
  FaFacebookSquare,
  FaTiktok,
  FaInstagram,
  FaPhoneSquareAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <Image className="logo" src={Logo} width={128} alt="profile picture" />
        <div>
          <p className={styles.contacts}>Ми в соцмережах:</p>
          <a
            href="https://www.youtube.com/@strashnaya_ribalka/videos"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <FaYoutube className={styles.social} />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100080126141227"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebookSquare className={styles.social} />
          </a>

          <a
            href="https://www.tiktok.com/@strashnyifishing"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
          >
            <FaTiktok className={styles.social} />
          </a>

          <a
            href="https://www.instagram.com/nhnl.com.ua"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram className={styles.social} />
          </a>
        </div>
      </div>

      <div className={styles.copyrights}>
        © НХНЛ - ні хвоста ні луски. 2024 Всі права захищені
      </div>
      <div className={styles.links}>
        <a className={styles.link} href="tel:+380679981718">
          <FaPhoneSquareAlt />
          тел.: +380679981718
        </a>
        <a
          className={styles.link}
          href="http://shop259825.horoshop.ua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Перейти в магазин
          <Image className={styles.logo} src={Logo} width={64} alt="club logo" />
        </a>
        <a
          className={styles.link}
          href="http://nhnl.com.ua"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cайт риболовного клубу
          <Image className={styles.logo} src={Clublogo} width={64} alt="club logo" />
        </a>
      </div>
    </footer>
  );
}
