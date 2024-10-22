import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Div from "./components/layout/div/Div";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Div />
      <Footer />
    </div>
  );
}

export default App;
