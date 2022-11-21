import React from 'react';
import LoaderComponent from './components/loader';
import ErrorComponent from './components/error';
import SetsContainer from './containers/sets';
import CardsContainer from './containers/cards';
import CardContainer from './containers/card';
import { selectErrorStatus, selectHasError, selectIsLoading } from './redux/selectors/app';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const hasError = useSelector(selectHasError);
  const errorStatus = useSelector(selectErrorStatus);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/sets" />} replace />
          <Route path="/sets" element={<SetsContainer />} />
          <Route path="/cards/:setCode" element={<CardsContainer />} />
          <Route path="/cards/card/:id" element={<CardContainer />} />
        </Routes>
      </BrowserRouter>
      {isLoading && <LoaderComponent />}
      {hasError && <ErrorComponent status={errorStatus} />}
    </div>
  );
};

export default App;
