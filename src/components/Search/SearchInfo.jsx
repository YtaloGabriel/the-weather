import React from 'react';
import Styles from '../css/Search-css/SearchInfo.module.css';

const SearchInfo = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.temperature}>
        30 <span>º C</span>
      </div>
      <div className={Styles.localInfo}>
        Maceió <span>Alagoas</span>
      </div>
      <div className={Styles.weather}>Parcialmente Nublado</div>
    </section>
  );
};

export default SearchInfo;
