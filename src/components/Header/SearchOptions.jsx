import React from 'react';
import Styles from '../css/Header-css/SearchOptions.module.css';

const SearchOptions = ({ json }) => {
  return (
    <div className={Styles.searchBox}>
      {json.length && json.length ? (
        json.map((item) => {
          return (
            <a href="#" className={Styles.option} key={item.id}>
              {item.name}
              <span>
                <img
                  src="../../../../assets/icons/Chevron.svg"
                  alt="Ícone de link"
                />
              </span>
            </a>
          );
        })
      ) : (
        <p>Sem resultados</p>
      )}
    </div>
  );
};

export default SearchOptions;
