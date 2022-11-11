import React from 'react';
import loader from './loader.gif';
import './styles.css';

const LoaderComponent = () => (
  <div className="loaderContainer">
    <img src={loader} alt="loader" />
  </div>
);

export default LoaderComponent;
