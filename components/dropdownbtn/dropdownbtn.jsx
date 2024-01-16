import styles from "./dropdownbtn.module.css";
import Link from "next/link";

export default function Dropdownbtn() {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>Асортимент НХНЛ</button>
      <div className={styles.dropdownContent}>
        <div className={styles.header}>АКСЕСУАРИ</div>
        <Link href="#">Годівниці</Link>
        <Link href="#">Монтажі</Link>

        <div className={styles.divider}></div>

        <div className={styles.header}>ПРИКОРМКИ</div>
        <Link href="#">Link 3</Link>
        <Link href="#">Link 4</Link>
        <div className={styles.divider}></div>

        <div className={styles.header}>НАЖИВКИ</div>
        <Link href="#">Link 3</Link>
        <Link href="#">Link 4</Link>
      </div>
    </div>
  );
}
