import React from 'react';
import Styles from '../css/Header-css/Header.module.css';
import SearchOptions from './SearchOptions';

const Header = () => {
  const [info, setInfo] = React.useState(null);
  const [json, setJson] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  // handle the info into textbox
  const handleText = ({ target }) => {
    setLoading(true);
    setInfo(target.value);
    getInfos(info);
  };

  // Fetch to API and insert values to 'json' state.
  const getInfos = async (info) => {
    if (info && info.length > 1) {
      try {
        setLoading(true);
        const api = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=63df498aefa44c7bb9952751220307&q=${info}&lang=pt`,
        );
        const json = await api.json();
        setJson(json);
      } catch (err) {
        setLoading(false);
        console.log(err);
      } finally {
        setLoading(false);
      }
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
            info && info.length > 2 && Styles.boxSearchActive
          }`}
          type="text"
          placeholder="Pesquise uma cidade (sem acentuação)"
          onChange={handleText}
        />
        {info && info.length > 2 && (
          <SearchOptions json={json} isActive={true} loading={loading} />
        )}
      </label>
    </header>
  );
};

export default Header;
