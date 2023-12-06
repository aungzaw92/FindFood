import Menu from '../../components/Menu/Menu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './MenuPage.scss';

const MenuPage = () => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    axios.get('http://localhost:8888/menu').then((response) => {
      setMenu(response.data);
    });
  }, []);

  return (
    <div className="menuPage container">
      <h2 className="menuPage__h">MENU</h2>
      {menu && <Menu menu={menu} />}
    </div>
  );
};
export default MenuPage;
