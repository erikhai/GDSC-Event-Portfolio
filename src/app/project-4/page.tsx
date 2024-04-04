import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Project 4: Discord Bot"} description={"This project explores how to create bots for personal use/severs. The bot I devloped is for my personal use and it is used to generate memes, recommend anime/manga and tell jokes. I use various API's to get the data and present it to the user. This project has given me a solid foundation on how API's work and allowed me to envision the possiblities of my bot."}/>
      <p>Click the icon below to be redirected to the GitHub Repoistory</p>
      <Link className="button" href="https://github.com/erikhai/Discord-Bot" target="_blank"><Image width={100} height={100} src="/github-mark.png" alt="Project" /></Link>
      <Link className="button" href="/">Go back</Link>
    </main>
  );
}
