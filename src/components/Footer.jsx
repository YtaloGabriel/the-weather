import React from 'react';
import Styles from './css/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <p className={Styles.footerTit}>
        The Weather - Projeto de Estudo 2022 - Criado por Ytalo Gabriel
      </p>
      <small className={Styles.footerSub}>
        Dados resgatados via
        <a href="https://www.weatherapi.com/" target="_blank">
          WeatherAPI
        </a>
      </small>
    </footer>
  );
};

export default Footer;
