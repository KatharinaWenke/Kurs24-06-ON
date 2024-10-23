import CustomTextField from "../../common/custom-text-field/CustomTextField";
import StandardBtn from "../../common/standard-btn/StandardBtn";
import styles from "./Navbar.module.css";

function Navbar() {
  const btnTitle = "Home"
  return (
    <div className={styles.navbar}>
      {/*<button onClick={() => alert("Hallo von Home!")}>Home</button>*/}
      <CustomTextField text="Das ist ein Textfeld und gleichzeitig die Überschrift"/>
      <StandardBtn text="Hi"/>
      <StandardBtn text={btnTitle}/>
    </div>
  );
}

export default Navbar;
