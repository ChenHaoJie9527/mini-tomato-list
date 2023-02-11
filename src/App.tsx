import Home from "./Pages/Home";
import "./App.css";
import useDarkMode from "./utils/useDarkMode";

function App() {
  const [mode, setMode] = useDarkMode();
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
