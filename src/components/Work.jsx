import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { elementVariants } from "../transition";
import PropTypes from "prop-types";
import WorkGrid from "./WorkGrid";
import styles from "./Work.module.css";

export default function Work({ data }) {
  return (
    <motion.section
      className={styles.workContent}
      variants={elementVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2>Latest Work</h2>
      <WorkGrid data={data} />
      <motion.div
        variants={elementVariants}
        style={{ margin: "0 auto" }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link to="/works" className={styles.button} state={{ data: data }}>
          All projects
        </Link>
      </motion.div>
    </motion.section>
  );
}

Work.propTypes = {
  data: PropTypes.array.isRequired,
};
