import "./App.css";
import Accordian from "./components/Accordian";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";
function App() {
  return (
    <div className="app-container">
      <StarRating stars={5} />
    </div>
  );
}

export default App;
