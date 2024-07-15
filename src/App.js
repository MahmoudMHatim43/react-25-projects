import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import TreeView from "./components/TreeView/TreeView";
import QrCodeGenerator from "./components/QrCode/QrCode";
import LightDarkMode from "./components/LightDarkMode/LightDarkMode";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import Tab from "./components/TabsChanger/Tab";
import ModalTest from "./components/Modal/ModalTest";
import GithubUserFinder from "./components/GitHubUserFinder/GithubUserFinder";
import FilterSearch from "./components/FilterSearch/FilterSearch";
function App() {
  return (
    <div className="app-container">
      <FilterSearch url={"https://dummyjson.com/users"} />
    </div>
  );
}

export default App;
