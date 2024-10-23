import CustomTextField from "../../common/custom-text-field/CustomTextField";
import StandardBtn from "../../common/standard-btn/StandardBtn";
import styles from "./Div.module.css";

function Div() {

  return (
    <div className={styles.div}>
      <div className="content">Hello from Homepage</div>
      <StandardBtn text="Hello"/>
      <CustomTextField text="Das ist noch ein Textfeld"/>
    </div>
  );
}

export default Div;