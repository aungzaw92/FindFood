import TryForm from '../../components/TryForm/TryForm';
import './TryItPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TryItPage = () => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    axios.get('http://localhost:8888/menu').then((response) => {
      // console.log(response.data);
      setMenu(response.data);
    });
  }, []);

  return (
    <div className="tryPage">
      <div className="container">
        <TryForm menu={menu} />
      </div>
    </div>
  );
};
export default TryItPage;
