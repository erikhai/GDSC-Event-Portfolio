import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Project 3: Tic Tac Toe"} description={"This project explores how simple games like tic tac toe can be created through GUI's and pygame. Version 1 showcases how to create GUI's through tkinter and how to design simple games through the use of buttons and labels. Version 2 (which is still under development) explores how to use pygame to create a GUI. Further, I am adding more functionalites to the game such as being able to play on a local network. Working on this project has improved my overall python skills and debugging, helped me improve my planning and designing skills, improve working in PEP 8 style and made me appreciate how tough it is to make games."}/>
      <p>Click the icon below to be redirected to the GitHub Repoistory</p>
      <Link className="button" href="https://github.com/erikhai/PythonTicTacToe" target="_blank"><Image width={100} height={100} src="/github-mark.png" alt="Project" /></Link>
      <Link className="button" href="/">Go back</Link>
    </main>
  );
}
