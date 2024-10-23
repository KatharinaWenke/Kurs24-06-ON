
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Div from "./components/layout/div/Div";
import CustomTextField from "./components/common/custom-text-field/CustomTextField";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Div />
      <CustomTextField text="Das ist ein Textfeld"/>
      <Footer />
    </div>
  );
}

export default App;
