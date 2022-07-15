import React from 'react';
import SearchInfo from './SearchInfo';
import SearchDetails from './SearchDetails';
import { GlobalContext } from '../../GlobalContext';
import { Navigate } from 'react-router-dom';
import ScreenLoading from '../Loading/ScreenLoading';

const SearchMain = () => {
  const global = React.useContext(GlobalContext);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (global.name) {
      getData(global.name);
    }
  }, [global]);

  const getData = async (name) => {
    try {
      setLoading(true);
      const api = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=63df498aefa44c7bb9952751220307&q=${name}&aqi=no&lang=pt`,
      );
      const json = await api.json();
      setData(json);
    } catch (err) {
      console.log(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ScreenLoading />;
  }
  if (global && global.name) {
    return (
      <section>
        <SearchInfo data={data} />
        <SearchDetails data={data} />
      </section>
    );
  }
  return <Navigate to="/the-weather" />;
};

export default SearchMain;
