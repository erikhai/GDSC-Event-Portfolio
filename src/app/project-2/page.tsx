import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Project 2: Java Replica"} description={"This project is a terminal based user interface which replicates all functions at a bank. Users can create new account or login to existing ones and deposit/withdraw/transfer money. Administrators can additionally set other accounts as admins and also modify/delete accounts. From this project I learnt OOP, java coding conventions & styles, how to create a database with SQL and learnt how to design a terminal UI."}/>
      <p>Click the icon below to be redirected to the GitHub Repoistory</p>
      <Link className="button" href="https://github.com/erikhai/Bank-Replica" target="_blank"><Image width={100} height={100} src="/github-mark.png" alt="Project" /></Link>
      <Link className="button" href="/">Go back</Link>
    </main>
  );
}
