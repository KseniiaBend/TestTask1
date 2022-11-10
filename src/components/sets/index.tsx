import React from 'react';
import Set from './Set';
import './styles.css';
import { Sets } from './types';

const SetsComponent = ({ sets }: Sets) => (
  <div className="setContainer flex">
    {sets.map((set) => (
      <Set {...set} key={set.code} />
    ))}
  </div>
);

export default SetsComponent;
