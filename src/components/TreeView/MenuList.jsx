import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  const condition = list && list.length;
  return (
    <ul className="tree-view-ul">
      {condition ? list.map((item) => <MenuItem item={item} />) : <div>No List</div>}
    </ul>
  );
};

export default MenuList;
