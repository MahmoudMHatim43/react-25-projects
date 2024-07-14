import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
function App() {
  return (
    <div className="app-container">
      <LoadMoreData url={"https://dummyjson.com/products?limit=15&"} />
    </div>
  );
}

export default App;
