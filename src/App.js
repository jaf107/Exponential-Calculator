import "./App.css";
import MainComponent from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
