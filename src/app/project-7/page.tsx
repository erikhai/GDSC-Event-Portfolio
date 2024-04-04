import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Project 7: Python Scripts"} description={"This project is a quick script I made using python that sorts out all the files I download into appropriate folders. Whilst during assignments, I often download a lot of files but never end up sorting them into the relevant folders, so I automated the entire process so I never have to manually sort it out. Doing so helped enhance my skills in python as well as accessing, moving and creating new files on the user desktop. I have also made it such that it is compatible on any OS."}/>
      <p>Click the icon below to be redirected to the GitHub Repository</p>
      <Link className="button" href="https://github.com/erikhai/PythonScripts" target="_blank"><Image width={100} height={100} src="/github-mark.png" alt="Project" /></Link>
      <Link className="button" href="/">Go back</Link>
    </main>
  );
}
