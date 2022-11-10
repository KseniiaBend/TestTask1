import React from 'react';
import SetComponent from './SetComponent';
import './styles.css';
import { Sets } from './types';

const SetsComponent = ({ sets }: Sets) => (
  <div className="setContainer flex">
    {sets.map((set) => (
      <SetComponent {...set} key={set.code} />
    ))}
  </div>
);

export default SetsComponent;
