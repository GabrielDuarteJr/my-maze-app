import React from 'react';
import Router from '~/routes/Router';
import { SeriesProvider } from '~/contexts/Series/SeriesContext';

const App = () => (
  <SeriesProvider>
    <Router />
  </SeriesProvider>
);

export default App;
