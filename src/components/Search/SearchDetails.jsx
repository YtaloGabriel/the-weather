import React from 'react';
import Styles from '../css/Search-css/SearchDetails.module.css';

const SearchDetails = ({ data }) => {
  if (data) {
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
            <span className={Styles.cardInfo}>{data.current.humidity}%</span>
            <span className={Styles.cardTit}>Umidade</span>
          </div>

          {/* Card de Vento */}
          <div className={Styles.card}>
            <img
              src="../../assets/icons/Wind.svg"
              alt="Ícone com representação de vento"
            />
            <span className={Styles.cardInfo}>
              {data.current.wind_kph} <small>Km/h</small>
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
              {data.current.precip_mm} <small>mm</small>
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
              {data.current.vis_km} <small>Km</small>
            </span>
            <span className={Styles.cardTit}>Visibilidade</span>
          </div>

          {/* Card de UV */}
          <div className={Styles.card}>
            <img
              src="../../assets/icons/Sun.svg"
              alt="Ícone em formato de sol"
            />
            <span className={Styles.cardInfo}>{data.current.uv}%</span>
            <span className={Styles.cardTit}>Índice UV</span>
          </div>
        </section>
      </section>
    );
  } else {
    return '';
  }
};

export default SearchDetails;
