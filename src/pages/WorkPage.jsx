import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./WorkPage.module.css";

function WorkPage() {
  const { state } = useLocation();

  console.log(state);

  return (
    <>
      <section className={styles.page}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {state?.data.name}
        </motion.h1>
        <div
          className={styles.banner}
          style={{
            background: `url('${state.data.img}') center/cover`,
          }}
        />
        <div className={styles.tagsContainer}>
          {state?.data.stack.map((techno, i) => (
            <span className={styles.tag} key={i}>
              {techno}
            </span>
          ))}
        </div>
        <div className={styles.mainContent}>
          <article className={styles.descContainer}>
            <h4>Description</h4>
            <p>{state?.data.description}</p>
          </article>
        </div>
        <div className={styles.ctaContainer}>
          {state?.data.links.map((link, i) => (
            <Link key={i} to={link.url} target="_blank">
              {link.to}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default WorkPage;
