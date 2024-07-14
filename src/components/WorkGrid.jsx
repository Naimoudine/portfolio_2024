import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { elementVariants } from "../transition";
import styles from "./WorkGrid.module.css";

export default function WorkGrid({ data }) {
  const applyStyle = (e) => {
    const currentProject = e.currentTarget;
    currentProject.childNodes[0].style.display = "flex";
  };

  const deleteStyle = (e) => {
    const currentProject = e.currentTarget;
    currentProject.childNodes[0].style.display = "none";
  };

  return (
    <motion.div
      className={styles.gridContainer}
      variants={elementVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.75 }}
    >
      {data[0]?.projects.map((el) => (
        <Link
          key={el.id}
          className={styles.gridCell}
          style={
            el.space === 3
              ? {
                  gridColumn: "span 3",
                  background: `url(${el.img}) center/cover`,
                }
              : {
                  gridColumn: "span 2",
                  background: `url(${el.img}) center/cover`,
                }
          }
          onMouseEnter={(e) => applyStyle(e)}
          onMouseLeave={(e) => deleteStyle(e)}
          to={`/works/${el.id}`}
          state={{ data: el }}
        >
          <div className={styles.gridCellHover}>
            <div className={styles.hoverTopEl}>
              {el.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <span className={styles.projectName}>{el.name}</span>
          </div>
        </Link>
      ))}
    </motion.div>
  );
}

WorkGrid.propTypes = {
  data: PropTypes.array.isRequired,
};
