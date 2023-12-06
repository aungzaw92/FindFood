import MenuItem from '../MenuItem/MenuItem';
import './Menu.scss';

const Menu = ({ menu, highLights }) => {
  return (
    <div className="menu">
      {menu &&
        menu.map((menuObj) => {
          return (
            <MenuItem
              menuObj={menuObj}
              highLights={highLights}
              key={menuObj.idMeal}
            />
          );
        })}
    </div>
  );
};
export default Menu;
