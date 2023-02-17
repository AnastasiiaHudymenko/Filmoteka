import { useState } from 'react';
import { Header } from './Header/Header';
import { GlobalStyles } from './GlobalStyles';

export const App = () => {
  const [query, setQuery] = useState('');
  const handleSearchForm = query => {
    setQuery(query);
  };
  return (
    <div>
      <Header onSearch={handleSearchForm} />
      <GlobalStyles />
    </div>
  );
};
