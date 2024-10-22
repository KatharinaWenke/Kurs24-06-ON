import styles from "./Div.module.css";

function Div() {
  return (
    <div className={styles.div}>
      <div className="content">Hello from Homepage</div>
    </div>
  );
}

export default Div;