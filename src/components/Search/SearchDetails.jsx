import React from 'react';
import Styles from '../css/Search-css/SearchDetails.module.css';

const SearchDetails = () => {
  return (
    <section className={Styles.detailsContainer}>
      <p className={Styles.moreInfo}>Mais Informações</p>
      <section className={Styles.cards}>
        {/* Card de Umidade */}
        <div className={Styles.card}>
          <img
            src="../../assets/icons/Raindrops.svg"
            alt="Ícone em formato de gotas d'água"
          />
          <span className={Styles.cardInfo}>10%</span>
          <span className={Styles.cardTit}>Umidade</span>
        </div>

        {/* Card de Vento */}
        <div className={Styles.card}>
          <img
            src="../../assets/icons/Wind.svg"
            alt="Ícone com representação de vento"
          />
          <span className={Styles.cardInfo}>
            12 <small>Km/h</small>
          </span>
          <span className={Styles.cardTit}>Vento</span>
        </div>

        {/* Card de Precipitação */}
        <div className={Styles.card}>
          <img
            src="../../assets/icons/Precipitation.svg"
            alt="Ícone em formato de tubo de ensaio"
          />
          <span className={Styles.cardInfo}>
            1.5 <small>mm</small>
          </span>
          <span className={Styles.cardTit}>Precipitação</span>
        </div>

        {/* Card de Visibilidade */}
        <div className={Styles.card}>
          <img
            src="../../assets/icons/Visibility.svg"
            alt="Ícone em formato de olho"
          />
          <span className={Styles.cardInfo}>
            10 <small>Km</small>
          </span>
          <span className={Styles.cardTit}>Visibilidade</span>
        </div>

        {/* Card de UV */}
        <div className={Styles.card}>
          <img src="../../assets/icons/Sun.svg" alt="Ícone em formato de sol" />
          <span className={Styles.cardInfo}>1%</span>
          <span className={Styles.cardTit}>Índice UV</span>
        </div>
      </section>
    </section>
  );
};

export default SearchDetails;
