ilimport Heading from "@/components/Heading";
import styles from "./page.module.css";
import PortfolioEntryCardGroup from "@/components/PortfolioEntryCardGroup";
import Image from "next/image";
import Link from "next/link";



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <br>
      </br>
      <Link className="footer-button" href="mailto:erikh4558@gmail.com" target="_blank">
        <Image width={100} height={100} src="/mail (1).png" alt="Email" />
      </Link>
      <Link className="footer-button" href="https://www.linkedin.com/in/erik-hai/" target="_blank">
        <Image width={100} height={100} src="/linkedin.png" alt="LinkedIn" />
      </Link>
      <Link className="footer-button" href="https://www.chess.com/member/Erik_Hai" target="_blank">
        <Image width={100} height={100} src="/strategy.png" alt="Chess" />
      </Link>
      <Link className="footer-button" href="https://github.com/erikhai" target="_blank">
        <Image width={100} height={100} src="/github.png" alt="Github" />
      </Link>
      <Link className="footer-button" href="/Erik'sResume (1).pdf" target="_blank">
        <Image width={100} height={100} src="/cv.png" alt="Resume" />
      </Link>
    
    </footer>
  );
};




export default function Home() {
  return (
    <main className={styles.main}>
      <Heading title={"My Portfolio"} description={"Hi, my name is Erik Hai and I am a student studying software engineering at the University Of Sydney. I created this website at a GDSC Event where I learnt how to use typescript, node.js and React. Go ahead and look around this website and check out my project repositories. Feel free to reach out by emailing me or conecting with me on LinkedIn. You can also play a match of chess with me and view my resume."}/>
      <PortfolioEntryCardGroup entries={
        [
          {
            title: "Project 1: Portfolio",
            description: "This website is a portfolio of my work, and a demonstration of my skills from the GDSC Event.",
            image: "/react.webp",
            skills: ["React", "Next.js", "CSS", "HTML", "JavaScript"],
            href: "project",
          },
          {
            title: "Project 2: Java Bank Replica",
            description: "This project replicates all functions done at a bank through the terminal.",
            image: "/bank-logo.jpeg",
            skills: ["Java", "Git", "GitHub", "Debugging", "ORMLite", "SQL", "Planning"],
            href: "project-2",
          },
          {
            title: "Project 3: Python Tic Tac Toe",
            description: "This project explores how to create games such as Tic Tac Toe using tkinter and pygame.",
            image: "/tictactoe.png",
            skills: ["Python", "Debugging", "Planning", "PEP 8", "Git", "Github",],
            href: "project-3",
          },
          {
            title: "Project 4: Discord Bot",
            description: "This project explores how to make a discord bot and use API's",
            image: "/discord.png",
            skills: ["Python", "Debugging", "Planning", "PEP 8", "Git", "Github", "API", "JSON"],
            href: "project-4",
          },
          {
            title: "Project 5: Portfolio Website",
            description: "This project showcases my personal website that I developed myself",
            image: "/website.png",
            skills: ["HTML", "CSS", "Javascript", "Planning", "Designing", "Debugging", "GitHub"],
            href: "project-5",
          },
          {
            title: "Project 6: Keyboard Logger",
            description: "This project captures all keys inputted on an M1 Chip Macbook Air",
            image: "/keyboard.jpeg",
            skills: ["Python", "Debugging", "GitHub", "PEP 8", "Planning"],
            href: "project-6",
          },
          {
            title: "Project 7: Python Scripts",
            description: "This sorts out all contents in a folder and puts them in relevant folders.",
            image: "/scripts.jpeg",
            skills: ["Python", "Debugging", "GitHub", "PEP 8", "Planning"],
            href: "project-7",
          },
        ]
      } />
      <Footer />
    </main>
  );
}
