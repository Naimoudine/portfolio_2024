import { useRouteLoaderData } from "react-router-dom";
import { data } from "../db";
import { motion } from "framer-motion";
import { elementVariants } from "../transition";
import styles from "./InfoPage.module.css";
import cv from "../assets/files/current-cv-06-2024.pdf";

export default function InfoPage() {
  const loaderData = useRouteLoaderData("app");

  return (
    <>
      <section className={styles.page}>
        <motion.h1
          variants={elementVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25, duration: 1 }}
        >
          {loaderData[1].page}
        </motion.h1>
        <motion.div
          className={styles.desc}
          variants={elementVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 1 }}
        >
          <section>
            <h2>{loaderData[1].jobTitle}</h2>
            <p>{loaderData[1].description}</p>
          </section>
        </motion.div>
        <section className={styles.stack}>
          <motion.h2
            className={styles.desc}
            variants={elementVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.75, duration: 1 }}
          >
            stack
          </motion.h2>
          <div>
            <article>
              <motion.h3
                variants={elementVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1, duration: 1 }}
              >
                frontend
              </motion.h3>
              <ul>
                {data[1].stack.frontend.map((techno, i) => (
                  <motion.li
                    key={i}
                    variants={elementVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 + i * 0.3, duration: 1 }}
                  >
                    {techno}
                  </motion.li>
                ))}
              </ul>
            </article>
            <article>
              <motion.h3
                variants={elementVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1, duration: 1 }}
              >
                backend
              </motion.h3>
              <ul>
                {data[1].stack.backend.map((techno, i) => (
                  <motion.li
                    variants={elementVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 + i * 0.3, duration: 1 }}
                    key={i}
                  >
                    {techno}
                  </motion.li>
                ))}
              </ul>
            </article>
          </div>
        </section>
        <motion.a
          className="button"
          style={{ textDecoration: "none" }}
          href={cv}
          download
          variants={elementVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, duration: 1 }}
        >
          download resume
        </motion.a>
      </section>
    </>
  );
}
