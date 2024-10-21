
import './App.css';

function App() {

  let begruessung = "Herzlich Willkommen!"
  return (
    // <> </> = Fragment
    <>
      <h1>Willkommen zu meiner ersten React-App</h1>
      <h2>{begruessung} Dies ist meine erste React-App.</h2>
      <h3>Berechnung: {2+5-3+7-1}</h3>
    </>
  );
}

export default App;
