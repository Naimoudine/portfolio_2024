import { useRouteLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { elementVariants } from "../transition";
import Work from "../components/Work";
import About from "../components/About";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const loaderData = useRouteLoaderData("app");
  return (
    <div className={styles.mainContent}>
      <section>
        <motion.h1
          variants={elementVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 1 }}
        >
          I’m Naïm - a{" "}
          <span className={styles.animation}> fullstack developer </span>
          from Valence France, focusing on building functional website that are
          modern and easy to use.
        </motion.h1>
      </section>
      <Work data={loaderData} />
      <About />
    </div>
  );
}
