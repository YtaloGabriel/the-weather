import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import Styles from '../css/Header-css/SearchOptions.module.css';
import { Link } from 'react-router-dom';

const SearchOptions = ({ json, isActive }) => {
  const context = React.useContext(GlobalContext);
  const [active, setActive] = React.useState(isActive);

  const handleOptionClick = ({ target }) => {
    const value = target.children[0].innerText;
    setActive(false);
    getTextJson(value);
  };

  const getTextJson = async (value) => {
    try {
      const api = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=63df498aefa44c7bb9952751220307&q=${value}&aqi=no`,
      );
      const json = await api.json();
      await context.setName(json.location.name);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {active && (
        <div className={Styles.searchBox}>
          {json && json.length ? (
            json.map((item) => {
              return (
                <Link
                  to={'/search'}
                  className={Styles.option}
                  key={item.id}
                  onClick={handleOptionClick}
                  onSubmit={handleOptionClick}
                >
                  <p>{item.name}</p>
                  <span>
                    <img
                      src="../../../../assets/icons/Chevron.svg"
                      alt="Ícone de link"
                    />
                  </span>
                </Link>
              );
            })
          ) : (
            <p>Sem resultados</p>
          )}
        </div>
      )}
    </>
  );
};

export default SearchOptions;
