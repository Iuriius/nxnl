import styles from "./page.module.css";

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
    </main>
  );
}
