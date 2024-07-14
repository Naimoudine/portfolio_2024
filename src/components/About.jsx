import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { elementVariants } from "../transition";
import styles from "./About.module.css";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className={styles.aboutContent}>
      <div>
        <motion.span
          variants={elementVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.25 }}
        >
          about me
        </motion.span>
        <motion.h2
          variants={elementVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
        >
          Fullstack developer
        </motion.h2>
        <motion.p
          variants={elementVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.75 }}
        >
          Hello, I&apos;m Naïmoudine SAIDI, a 24-year-old aspiring fullstack
          developer. Web development is my passion, and I love creating
          functional and modern websites. I&apos;m dedicated to becoming a
          reliable developer and continually improving my skills. Welcome to my
          portfolio!
        </motion.p>
        <motion.button
          className="button"
          variants={elementVariants}
          onClick={() => navigate("/info")}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 1 }}
        >
          Learn more
        </motion.button>
      </div>
    </section>
  );
}
