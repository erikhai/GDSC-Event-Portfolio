import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Project 6: Keyboard Logger"} description={"This project showcases how important it is to check what you download off of the internet. The purpose of this project was to show how you can create a simple script that captures all of the users keyboard inputs without the users consent."}/>
      <p>Click the icon below to be redirected to the GitHub Repository</p>
      <Link className="button" href="https://github.com/erikhai/Keyboard-logger" target="_blank"><Image width={100} height={100} src="/github-mark.png" alt="Project" /></Link>
      <Link className="button" href="/">Go back</Link>
    </main>
  );
}
