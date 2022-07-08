import React from 'react';
import SearchInfo from './SearchInfo';
import SearchDetails from './SearchDetails';
import { GlobalContext } from '../../GlobalContext';

const SearchMain = () => {
  const global = React.useContext(GlobalContext);

  return (
    <section>
      <SearchInfo />
      <SearchDetails />
    </section>
  );
};

export default SearchMain;
