import React from 'react';
import image from './egg-error.png';
import './styles.css';

const ErrorComponent = ({ status }: { status: string }) => (
  <div className="errorContainer">
    <p>ERROR</p>
    <p className="errorStatus">{status}</p>
    <img src={image} alt="error" />
  </div>
);

export default ErrorComponent;
