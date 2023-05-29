import React from 'react';
import { Link } from 'react-router-dom';
import { CARDS } from 'src/utils/constants';
import { Set } from './types';

const SetComponent = ({
  logoUrl,
  code,
  ptcgoCode,
  name,
  releaseDate,
  standardLegal,
  expandedLegal,
  symbolUrl
}: Set) => (
  <Link to={`/${CARDS}/${code}`} className="link set flex">
    <div className="mainImageContainer">
      <img alt="Set" className="mainImage" src={logoUrl} />
    </div>
    <div className="content">
      <div className="releaseAndLogo flex">
        <div className="logo">
          <img alt="symbol" className="logoImage" key={ptcgoCode} src={symbolUrl} />
        </div>
        <div className="releaseInfo">
          <p>{name}</p>
          Released {releaseDate}
        </div>
      </div>
      <div className="listContent">
        <ul>
          {standardLegal && <li>Standard Legal</li>}
          {expandedLegal && <li>Expanded Legal</li>}
        </ul>
      </div>
    </div>
  </Link>
);

export default SetComponent;
