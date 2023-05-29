import React from 'react';
import { TOO_MANY_REQUESTS } from 'src/utils/constants';
import image from './egg-error.png';
import './styles.css';

interface IErrorComponent {
  status: string;
}

const ErrorComponent = ({ status }: IErrorComponent) => (
  <div className="errorContainer">
    <p>ERROR</p>
    <p className="errorStatus">{status}</p>
    {status === TOO_MANY_REQUESTS && <p>Sorry, request is throttled!</p>}
    <img src={image} alt="error" />
  </div>
);

export default ErrorComponent;
