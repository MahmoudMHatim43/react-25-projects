import { FeatureFlagContext } from "./Context";
import { useContext } from "react";
////////////////////////////////////////////////////////////
// Components:
import Accordian from "../Accordian/Accordian";
import RandomColor from "../RandomColor/RandomColor";
import StarRating from "../StarRating/StarRating";
import QrCodeGenerator from "../QrCode/QrCode";
import LightDarkMode from "../LightDarkMode/LightDarkMode";
import ModalTest from "../Modal/ModalTest";
import TicTacToe from "../TicTacToe/TicTacToe";
////////////////////////////////////////////////////////////
const FeatureFlag = () => {
  const { loading, flags, errMsg } = useContext(FeatureFlagContext);
  const TargetComponents = [
    { key: "Accordian", component: <Accordian /> },
    { key: "RandomColor", component: <RandomColor /> },
    { key: "StarRating", component: <StarRating /> },
    { key: "QrCodeGenerator", component: <QrCodeGenerator /> },
    { key: "LightDarkMode", component: <LightDarkMode /> },
    { key: "ModalTest", component: <ModalTest /> },
    { key: "TicTacToe", component: <TicTacToe /> },
  ];
  function checkEnable(currKey) {
    return flags[currKey];
  }
  return (
    <>
      {loading ? (
        <h1>Loading Data ...</h1>
      ) : errMsg ? (
        <div>
          <h1>Error Occurd</h1>
          <p>{errMsg}</p>
        </div>
      ) : (
        <div>
          {TargetComponents.map((item) =>
            checkEnable(item.key) ? <div key={crypto.randomUUID()}>{item.component}</div> : null
          )}
        </div>
      )}
    </>
  );
};

export default FeatureFlag;
