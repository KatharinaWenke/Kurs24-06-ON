import styles from "./CustomTextField.module.css";

function CustomTextField({text}) {
    return <p className={styles.txtContainer}>{text}</p>;
  }
  
  export default CustomTextField;