import styles from "./footer.module.css";
import Image from "next/image";
import Logo from "@/public/nxnl_logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image className="profilepic" src={Logo} width={128} alt="profile picture" />
    </footer>
  );
}
