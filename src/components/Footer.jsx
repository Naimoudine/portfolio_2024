import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { elementVariants } from "../transition";
import styles from "./Footer.module.css";
import "../App.css";

export default function Footer() {
  const [hoveredLn, setHoveredLn] = useState(false);
  const [hoveredGh, setHoveredGh] = useState(false);
  const [hoverdContact, setHoveredContact] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.footerContent}>
          <motion.h2
            variants={elementVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.25 }}
          >
            Project in mind ?
          </motion.h2>
          <motion.p
            variants={elementVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
          >
            Let&apos;s connect and discuss it
          </motion.p>
          <Link to="/contact" className={styles.contact}>
            <motion.div
              variants={elementVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.75 }}
              onMouseEnter={() => setHoveredContact(true)}
              onMouseLeave={() => setHoveredContact(false)}
            >
              <p>Contact</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                style={
                  hoverdContact
                    ? {
                        transform: "translateX(20px)",
                        transition: "0.2s ease-in-out all",
                      }
                    : {
                        transform: "translateX(0px)",
                        transition: "0.2s ease-in-out all",
                      }
                }
              >
                <path
                  fill="currentColor"
                  d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                />
              </svg>
            </motion.div>
          </Link>
        </div>
        <motion.div
          variants={elementVariants}
          className={styles.linkContainer}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 1 }}
        >
          <div>
            <Link to="https://github.com/Naimoudine">
              <div className={styles.link}>
                <div
                  className={styles.linkName}
                  style={
                    hoveredGh
                      ? {
                          transform: "translateY(-100%)",
                          transition: "0.2s ease-in-out all",
                        }
                      : {}
                  }
                >
                  <p
                    className={styles.letter}
                    onMouseEnter={() => setHoveredGh(true)}
                    onMouseLeave={() => setHoveredGh(false)}
                  >
                    Github
                  </p>
                </div>
                <div
                  className={styles.linkName}
                  style={
                    hoveredGh
                      ? {
                          transform: "translateY(-100%)",
                          transition: "0.2s ease-in-out all",
                        }
                      : {}
                  }
                >
                  <p className={styles.letter}>Github</p>
                </div>
                <div className={styles.embeded}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link to="https://www.linkedin.com/in/naimoudine-saidi">
              <div className={styles.link}>
                <div
                  className={styles.linkName}
                  style={
                    hoveredLn
                      ? {
                          transform: "translateY(-100%)",
                          transition: "0.2s ease-in-out all",
                        }
                      : {}
                  }
                >
                  <p
                    className={styles.letter}
                    onMouseEnter={() => setHoveredLn(true)}
                    onMouseLeave={() => setHoveredLn(false)}
                  >
                    Linkedin
                  </p>
                </div>
                <div
                  className={styles.linkName}
                  style={
                    hoveredLn
                      ? {
                          transform: "translateY(-100%)",
                          transition: "0.2s ease-in-out all",
                        }
                      : {}
                  }
                >
                  <p className={styles.letter}>Linkedin</p>
                </div>
                <div className={styles.embeded}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <p>© 2024 Naïmoudine SAIDI</p>
        </motion.div>
      </div>
    </footer>
  );
}
