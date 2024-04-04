import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Project 1: Portfolio"} description={"I developed this website at a GDSC event which taught me the basics of React, Node.js and typescript. This event was a eye opener for me to understand these languages and understand how they can be used to build dynamic and interactive web applications. Through hands-on experience and guidance from mentors, I gained valuable insights into the principles of front-end development. This event sparked my passion for coding and opened up a world of possibilities in the realm of web development. I am grateful for the opportunity to learn and grow, and I look forward to applying my newfound skills to future projects."}/>
      <p>Click the icon below to be redirected to the GitHub Repoistory</p>
      <Link className="button" href="https://github.com/erikhai/GDSC-Event-Portfolio" target="_blank"><Image width={100} height={100} src="/github-mark.png" alt="Project" /></Link>
      <Link className="button" href="/">Go back</Link>

    </main>
  );
}
