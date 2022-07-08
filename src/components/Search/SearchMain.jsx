import React from 'react';
import SearchInfo from './SearchInfo';
import SearchDetails from './SearchDetails';
import { GlobalContext } from '../../GlobalContext';
import { Navigate } from 'react-router-dom';

const SearchMain = () => {
  const global = React.useContext(GlobalContext);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (global.name) {
      getData(global.name);
    }
  }, [global]);

  const getData = async (name) => {
    try {
      const api = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=63df498aefa44c7bb9952751220307&q=${name}&aqi=no`,
      );
      const json = await api.json();
      setData(json);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {global && global.name ? (
        <section>
          <SearchInfo data={data} />
          <SearchDetails data={data} />
        </section>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default SearchMain;
