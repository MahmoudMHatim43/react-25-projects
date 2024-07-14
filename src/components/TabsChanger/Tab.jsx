import Tabs from "./Tabs";
import "./tabs-changer.css";
const Tab = () => {
  const tabsData = [
    { label: "Tab 1", content: "Tab 1 Content", id: 0 },
    { label: "Tab 2", content: "Tab 2 Content", id: 1 },
    { label: "Tab 3", content: "Tab 3 Content", id: 2 },
    { label: "Tab 4", content: "Tab 4 Content", id: 3 },
  ];
  return (
    <div className="tabs-container">
      <Tabs tabsData={tabsData} />
    </div>
  );
};

export default Tab;
