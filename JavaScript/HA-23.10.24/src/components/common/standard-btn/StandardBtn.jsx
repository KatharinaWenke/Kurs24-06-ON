import styles from "./StandardBtn.module.css";

function StandardBtn({text}) {
  return <button className={styles.btnContainer}>{text}</button>;
}

export default StandardBtn;
