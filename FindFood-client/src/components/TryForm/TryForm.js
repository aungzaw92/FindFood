import './TryForm.scss';
import { useState } from 'react';
import Menu from '../Menu/Menu';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TryForm = ({ menu }) => {
  const [filteredData, setFilteredData] = useState();
  const [activeTab, setActiveTab] = useState('prefer');
  const [inputContent, setInputContent] = useState('');
  const [preferContent, setPreferContent] = useState([]);
  const [avoidContent, setAvoidContent] = useState([]);
  const [highLights, setHighLights] = useState([]);
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAdd = () => {
    if (inputContent.trim() === '') {
      return;
    }

    if (activeTab === 'prefer') {
      setPreferContent([...preferContent, inputContent]);
    } else {
      setAvoidContent([...avoidContent, inputContent]);
    }

    setInputContent('');
  };

  const handleRemove = (itemToRemove) => {
    if (activeTab === 'prefer') {
      setPreferContent(preferContent.filter((item) => item !== itemToRemove));
    } else {
      setAvoidContent(avoidContent.filter((item) => item !== itemToRemove));
    }
  };

  const handleFilter = (event) => {
    event.preventDefault();

    if (preferContent.length === 0 && avoidContent.length === 0) {
      alert('you need to specify at least one field!');
      return;
    }

    if (preferContent.length !== 0) setHighLights(preferContent);

    const userDate = { preferContent, avoidContent };

    axios.post('http://localhost:8888/filteredMenu', userDate).then((res) => {
      setFilteredData(res.data);
    });
    // window.scroll({ top: 0 });
    setPreferContent([]);
    setAvoidContent([]);
  };

  return (
    <div className="tryPageback">
      <section className="tryForm">
        <div className="tryForm-list">
          <h2 className="tryForm-list-heading">Choose ingrediantes!</h2>
          <p className="tryForm-list-desc">
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating as you like today.
          </p>

          {/* ----------------------------------------- */}
          <form className="preferences">
            <button
              className="btn preferences__menuBtn"
              onClick={() => {
                navigate('/menu');
              }}
            >
              Menu
            </button>

            <h1 className="preferences__heading">Select Preferences</h1>

            <div className="preferences__form">
              <div className="preferences__form--lables">
                <label
                  className={`preferences__form--lables-label preferences__form--lables-label-prefer ${
                    activeTab === 'prefer' ? 'selected__tab' : ''
                  }`}
                  onClick={() => handleTabChange('prefer')}
                >
                  Prefer
                </label>
                <label
                  className={`preferences__form--lables-label preferences__form--lables-label-avoid ${
                    activeTab === 'avoid' ? 'selected__tab' : ''
                  }`}
                  onClick={() => handleTabChange('avoid')}
                >
                  Avoid
                </label>
              </div>
              <input
                className="preferences__form-input"
                placeholder="..."
                value={inputContent}
                onChange={(e) => setInputContent(e.target.value)}
              />
              <button
                className="btn preferences__form-addBtn"
                type="button"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>

            <div className="preferences__preferences">
              <ul className="preferences__preferences-list preferences__preferences-list-prefer">
                <h4 className="preferences__preferences-list-h">Prefer</h4>
                {preferContent.map((item, index) => (
                  <li
                    className="preferences__preferences-list-item"
                    key={index}
                  >
                    <button
                      className="preferences__preferences-list-item--clear"
                      type="button"
                      onClick={() => handleRemove(item)}
                    >
                      x
                    </button>
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="preferences__preferences-list preferences__preferences-list-avoid">
                <h4 className="preferences__preferences-list-h">Avoid</h4>
                {avoidContent.map((item, index) => (
                  <li
                    className="preferences__preferences-list-item "
                    key={index}
                  >
                    <button
                      className="preferences__preferences-list-item--clear"
                      type="button"
                      onClick={() => handleRemove(item)}
                    >
                      x
                    </button>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="preferences__filterBtnContainer">
              <button
                className="btn preferences__filterBtnContainer--filterBtn"
                type="submit"
                onClick={handleFilter}
              >
                Filter
              </button>
            </div>
          </form>

          {/*---------------------------------------- */}
        </div>
        <div className="tryForm-imgbox"></div>
      </section>

      <div className="filteredDataContainer">
        {filteredData &&
          (filteredData.length === 0 ? (
            <h1>No dish found!!</h1>
          ) : (
            <Menu menu={filteredData} highLights={highLights} />
          ))}
      </div>
    </div>
  );
};
export default TryForm;
