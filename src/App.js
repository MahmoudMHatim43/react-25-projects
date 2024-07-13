import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";
import ImageSlider from "./components/ImageSlider/ImageSlider";
function App() {
  return (
    <div className="app-container">
      <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit="} limit={"10"} />
    </div>
  );
}

export default App;
