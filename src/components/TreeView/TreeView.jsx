import "./tree-view.css";
import menu from "./Data.js";
import MenuList from "./MenuList";

function TreeView() {
  return (
    <div className="tree-view-container">
      {menu ? <MenuList list={menu} /> : <div>No Menu</div>}
    </div>
  );
}

export default TreeView;
