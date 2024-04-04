import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Project 5: Portfolio"} description={"This project showcases my front end development skills where I created my own portfolio website. Using HTML, CSS and Javascipt, I have created my own functional website that showcases who I am and my experiences so far. From this experience, I have grown an appreciation to those who have coded out the designs of website as it is a very delicate task to do."}/>
      <p>Click the icon below to be redirected to the Website (The website is hosted by github pages)</p>
      <Link className="button" href="https://erikhai.github.io" target="_blank"><Image width={100} height={100} src="/html.webp" alt="Project" /></Link>
      <Link className="button" href="/">Go back</Link>
    </main>
  );
}
