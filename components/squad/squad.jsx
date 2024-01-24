import styles from "./squad.module.css";
import Image from "next/image";
/*
/**|======================================
/**| pics
/**|======================================
*/
import person from "@/public/team_anaiko.jpg";

export default function Squad() {
  return (
    <div>
      <div>
        <Image src={person} />
        <h3>NAME NAME</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero in laborum
          adipisci necessitatibus eum, dolor
        </p>
      </div>
    </div>
  );
}
