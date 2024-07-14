import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { elementVariants } from "../transition";
import emailjs from "@emailjs/browser";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  const [msgSent, setMsgSent] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [mailMsg, setMailMsg] = useState("");

  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    const regexMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!regexMail.test(form.current.email.value)) {
      setMailMsg("Email is Invalid");
    } else {
      emailjs
        .sendForm(
          `${import.meta.env.VITE_SERVICE_ID}`,
          `${import.meta.env.VITE_TEMPLATE_ID}`,
          form.current,
          {
            publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
          }
        )
        .then(
          () => {
            setSuccessMsg("Email sent successfuly");
          },
          (error) => {
            console.info("FAILED...", error.text);
          }
        );
      setMsgSent(true);
    }
  };

  const handleRedirect = () => {
    setMsgSent(false);
    navigate("/");
  };

  useEffect(() => {
    setMsgSent(false);
  }, []);

  return (
    <>
      <section className={styles.page}>
        <motion.h1
          variants={elementVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
        >
          Contact
        </motion.h1>
        {!msgSent ? (
          <motion.form
            ref={form}
            onSubmit={(e) => sendEmail(e)}
            variants={elementVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.75 }}
          >
            <div className={styles.name}>
              <label htmlFor="firstname">
                Firstname *
                <input type="text" name="firstname" required />
              </label>
              <label htmlFor="lastname">
                Lastname *
                <input type="text" name="lastname" required />
              </label>
            </div>
            <label className={styles.email} htmlFor="email">
              Email * {mailMsg ? mailMsg : ""}
              <input type="email" name="email" id="" required />
            </label>
            <label htmlFor="message">
              Message *<textarea name="message" id="" required></textarea>
            </label>
            <motion.button
              type="submit"
              className={styles.formBtn}
              variants={elementVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 1 }}
            >
              Send
            </motion.button>
          </motion.form>
        ) : (
          <div className={styles.msgSuccess}>
            <motion.p
              variants={elementVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5, duration: 1 }}
            >
              {successMsg}
            </motion.p>
            <motion.button
              className={styles.successBtn}
              onClick={handleRedirect}
              variants={elementVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.75, duration: 1 }}
            >
              {" "}
              Go to home page
            </motion.button>
          </div>
        )}
      </section>
    </>
  );
}
