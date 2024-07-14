import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { elementVariants } from "../transition";
import WorkGrid from "../components/WorkGrid";
import styles from "./WorksPage.module.css";

export default function WorksPage() {
  const { state } = useLocation();
  return (
    <>
      <section className={styles.page}>
        <motion.h1
          variants={elementVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
        >
          Work
        </motion.h1>
        <WorkGrid data={state.data} />
      </section>
    </>
  );
}
