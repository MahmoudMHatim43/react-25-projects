import { useState } from "react";

const Tabs = ({ tabsData }) => {
  const [currTab, setCurrTab] = useState(0);
  function changeCurrTab(idx) {
    setCurrTab(idx);
  }
  return (
    <>
      <div className="tabs-header">
        {tabsData.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => {
              changeCurrTab(index);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">{tabsData[currTab].content}</div>
    </>
  );
};

export default Tabs;
