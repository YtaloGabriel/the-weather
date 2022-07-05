import React from 'react';
import Styles from '../css/Header-css/Header.module.css';
import SearchOptions from './SearchOptions';

const Header = () => {
  const [info, setInfo] = React.useState(null);
  const [json, setJson] = React.useState(null);

  // handle the info into textbox
  const handleText = ({ target }) => {
    setInfo(target.value);
    getInfos(info);
  };

  // Fetch to API and insert values to 'json' state.
  const getInfos = async (info) => {
    if (info.length > 1) {
      const api = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=63df498aefa44c7bb9952751220307&q=${info}`,
      );
      const json = await api.json();
      setJson(json);
    }
  };

  return (
    <header className={Styles.header}>
      <h1 className={Styles.title}>The Weather</h1>
      <label className={Styles.label}>
        <img
          className={Styles.searchIcon}
          src="../../../assets/icons/Search.svg"
          alt="Search icon"
        />
        <input
          className={`${Styles.search} ${
            info.length > 3 && Styles.boxSearchActive
          }`}
          type="text"
          placeholder="Pesquise uma cidade (sem acentuação)"
          onChange={handleText}
        />
      </label>
      {info && info.length > 3 && <SearchOptions json={json} />}
    </header>
  );
};

export default Header;
