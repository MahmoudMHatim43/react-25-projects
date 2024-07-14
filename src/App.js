import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import TreeView from "./components/TreeView/TreeView";
import QrCodeGenerator from "./components/QrCode/QrCode";

function App() {
  return (
    <div className="app-container">
      <QrCodeGenerator />
    </div>
  );
}

export default App;
