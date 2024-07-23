import "./App.css";
import { Routes, Route } from "react-router-dom";
// Apps:
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
// Feature Flag:
import FeatureFlagGlobalState from "./components/FeatureFlag/Context";
import FeatureFlag from "./components/FeatureFlag/FeatureFlag";
//
import {
  UseFetchHookTest,
  ClickOutsideHookTest,
  WindowSizeHookTest,
} from "./components/CustomHooks/test";
import ScrollJump from "./components/ScrollToTopOrBottom/ScrollJump";
import WeatherApp from "./components/WeatherApp/WeatherApp";
// Recipe App:
import Home from "./components/RecipeApp/Home/Home";
import Navbar from "./components/RecipeApp/Nav/Navbar";
import Favourites from "./components/RecipeApp/Fav/Favourites";
import Details from "./components/RecipeApp/Details/Details";
import { GlobalRecipeState } from "./components/RecipeApp/Context/Context";
//
function App() {
  return (
    <div className="app-container">
      <GlobalRecipeState>
        <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/item/:id" element={<Details />} />
          </Routes>
        </div>
      </GlobalRecipeState>
    </div>
  );
}

export default App;
