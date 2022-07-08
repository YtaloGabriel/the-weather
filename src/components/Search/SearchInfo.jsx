import React from 'react';
import Styles from '../css/Search-css/SearchInfo.module.css';

const SearchInfo = ({ data }) => {
  if (data) {
    return (
      <section className={Styles.container}>
        <div className={Styles.temperature}>
          {data.current.temp_c} <span>º C</span>
        </div>
        <div className={Styles.localInfo}>
          {data.location.name} <span>{data.location.region}</span>
        </div>
        <div className={Styles.weather}>{data.current.condition.text}</div>
      </section>
    );
  } else {
    return '';
  }
};

export default SearchInfo;
