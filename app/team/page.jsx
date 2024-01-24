import styles from "./page.module.css";
import Image from "next/image";
import Squad from "@/components/squad/squad";
import { FaHandshake, FaMedal, FaPeopleGroup } from "react-icons/fa6";
/*
/**|======================================
/**| pics
/**|======================================
*/
import team1 from "@/public/team1.png";
import team2 from "@/public/team2.png";

export default function Team() {
  return (
    <>
      <section className={styles.whoarewe}>
        <Image className={styles.team1pic} src={team1} />
        <h2 className={styles.h2}>ХТО МИ ? </h2>
        <p className={styles.p1}>
          Колектив НХНЛ - це команда, що прагне перемагати, зі стратегічними цілями,
          довгостроковими планами, бездоганною репутацією, екологічними та благодійними
          ініціативами, високими спортивними результатами на українському та світовому
          рівні!
        </p>
      </section>

      <section className={styles.partnership}>
        <div>
          <FaHandshake className={styles.icon} />
          <FaMedal className={styles.icon} />
          <FaPeopleGroup className={styles.icon} />
        </div>
        <h2 className={styles.h2}>РЕЗУЛЬТАТ ПАРТНЕРСТВА ТА СПІВПРАЦІ</h2>
        <ol className={styles.ol}>
          <li>
            Медійна інтеграція з найкращою командою України у фідерній дисципліні та її
            спортсменами.
          </li>
          <li>
            Підписання угоди про партнерство та співпрацю з визначенням зобов’язань сторін
            у сфері реклами та рекламних відображень.
          </li>
          <li>Статус генерального спонсора команди.</li>
          <li>
            Виготовлення спортивної форми команди з інтеграція логотипу генерального
            спонсора.
          </li>
          <li>
            Проведення прямих ефірів з підготовки до змагань та змагань для української та
            європейської аудиторії.
          </li>
          <li>Прес конференція представника команди за результатами анонсу співпраці.</li>
          <li>
            Прес конференція команди за результатами виступу команди на чемпіонаті світу.
          </li>
          <li>Публікації спортсменів та тренерського штабу команди.</li>
          <li>
            Проведення благодійного збору для військових, що є учасниками Риболовного
            клубу НХНЛ за наявними потребами.
          </li>
          <li>
            Виокремлення члена тренерського штабу для здійснення медійного супроводження
            підготовки та участі команди у ЧС (контактної особи у медійній сфері).
          </li>
          <li>
            ублікація відео сюжетів на каналах учасників команди про перебіг змагань.
          </li>
          <li>Отримання статусу Генерального партнеру клубу у 2024 році.</li>
          <li>
            Статус Партнера в екологічних акціях клубу та щорічному зарибленні
            (проводиться восени).
          </li>
          <li>
            Сукупне орієнтовне охоплення –протягом 2024 року цільової аудиторії – 3 000
            000.
          </li>
          <li>Участь представника/представників спонсора у змаганнях.</li>
        </ol>
      </section>

      <section className={styles.ourteam}>
        <Image className={styles.team1pic} src={team2} />
        <h2 className={styles.h2}>НАША КОМАНДА</h2>
        <p className={styles.p2}>
          До складу команди входять досвідчені та титуловані спортсмени, розробники нових
          та унікальних риболовних продуктів, професіонали своєї справи
        </p>
      </section>

      <section className={styles.oursquad}>
        <h2 className={styles.h2}>СКЛАД</h2>
        <Squad />
      </section>

      <section className={styles.trust}>
        <h2 className={styles.h2}>TITLE МЕТА</h2>
        <p className={styles.p2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, explicabo aut.
          Ut impedit aliquam, sequi aperiam ab dolorum, iure sint natus quam optio quaerat
          harum. Officiis eaque cumque id porro.
        </p>
      </section>

      <section className={styles.trust}>
        <h2 className={styles.h2}>TITLE МЕТА</h2>
        <p className={styles.p2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, explicabo aut.
          Ut impedit aliquam, sequi aperiam ab dolorum, iure sint natus quam optio quaerat
          harum. Officiis eaque cumque id porro.
        </p>
      </section>
    </>
  );
}
