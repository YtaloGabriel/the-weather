import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import Styles from '../css/Header-css/SearchOptions.module.css';
import { Link } from 'react-router-dom';
import LocalLoading from '../Loading/LocalLoading';

const SearchOptions = ({ json, isActive, loading }) => {
  const context = React.useContext(GlobalContext);
  const [active, setActive] = React.useState(isActive);

  const handleOptionClick = ({ target }) => {
    const value = target.children[0].innerText;
    setActive(false);
    context.setName(value);
  };

  return (
    <>
      {active && (
        <div className={Styles.searchBox}>
          {loading && <LocalLoading />}
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
