import { useState } from "react";
import MenuList from "./MenuList";
import { FaArrowAltCircleDown } from "react-icons/fa";
const MenuItem = ({ item }) => {
  const condition = item.submenu && item.submenu.length > 0;
  const [display, setDisplay] = useState(false);
  return (
    <li className="tree-view-li">
      <p>
        {item.label}{" "}
        {condition ? (
          <small>
            <FaArrowAltCircleDown
              style={{ fontSize: `10px`, transform: display ? `rotate(180deg)` : "" }}
              onClick={() => {
                setDisplay(!display);
              }}
            />
          </small>
        ) : null}
      </p>
      {condition & display ? <MenuList list={item.submenu} /> : null}
    </li>
  );
};

export default MenuItem;
