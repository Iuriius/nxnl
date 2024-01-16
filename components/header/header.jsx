import styles from "./header.module.css";
import Image from "next/image";
import Logo from "@/public/nxnl_logo.png";
import Dropdownbtn from "@/components/dropdownbtn/dropdownbtn";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className="profilepic" src={Logo} width={128} alt="profile picture" />

      <Dropdownbtn />
    </header>
  );
}
