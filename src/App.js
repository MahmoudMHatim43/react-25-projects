import "./App.css";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
import TicTacToe from "./components/TicTacToe/TicTacToe";
import FeatureFlagGlobalState from "./components/FeatureFlag/Context";
import FeatureFlag from "./components/FeatureFlag/FeatureFlag";
import {
  UseFetchHookTest,
  ClickOutsideHookTest,
  WindowSizeHookTest,
} from "./components/CustomHooks/test";
import ScrollJump from "./components/ScrollToTopOrBottom/ScrollJump";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function App() {
  return (
    <div className="app-container">
      <ScrollJump />
    </div>
  );
}

export default App;
