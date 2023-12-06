import { useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/img/findfood-logo.png';
import menu from '../../assets/Icons/menu.png';
import { useState } from 'react';
import close from '../../assets/Icons/close-24px.svg';
import CartIcn from '../../assets/Icons/cart1.png';

const Header = () => {
  const [menuList, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenu = () => {
    setMenu(!menuList);
  };
  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          alt="Omnifood logo"
          src={logo}
          onClick={() => navigate(`/`)}
        />

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-list-link" onClick={() => navigate(`/`)}>
              Home
            </li>
            <li
              className="header__nav-list-link"
              onClick={() => navigate(`/how`)}
            >
              How it works
            </li>
            <li
              className="header__nav-list-link"
              onClick={() => navigate(`/menu`)}
            >
              Menu
            </li>
            <li className="btn" onClick={() => navigate(`/form`)}>
              TRY IT!
            </li>
            <li className="header__nav-list-cartLink">
              <span>Cart</span>
              <img
                src={CartIcn}
                alt="cart icon"
                className="header__nav-list-cartLink-cart"
              />
            </li>
          </ul>
        </nav>

        <button className="header__mobileIcn" onClick={handleMenu}>
          <img alt="menu icon" src={menu} className="header__mobileIcn-menu" />
        </button>

        {menuList && (
          <div className="stickyNAv">
            <img
              alt="close icon"
              src={close}
              className="stickyNAv__mobileIcn-close"
              onClick={handleMenu}
            />

            <ul className="stickyNAv-list">
              <li
                className="stickyNAv-list-link"
                onClick={() => {
                  navigate(`/`);
                  setMenu(!menuList);
                }}
              >
                Home
              </li>
              <li
                className="stickyNAv-list-link"
                onClick={() => {
                  navigate(`/how`);
                  setMenu(!menuList);
                }}
              >
                How it works
              </li>
              <li
                className="stickyNAv-list-link"
                onClick={() => {
                  navigate(`/menu`);
                  setMenu(!menuList);
                }}
              >
                Menu
              </li>
              <li
                className="btn"
                onClick={() => {
                  navigate(`/form`);
                  setMenu(!menuList);
                }}
              >
                TRY IT!
              </li>
              <li className="stickyNAv-list-cartLink">
                <span>Cart</span>
                <img
                  src={CartIcn}
                  alt="cart icon"
                  className="stickyNAv-list-cartLink-cart"
                />
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};
export default Header;
