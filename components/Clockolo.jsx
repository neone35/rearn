/* eslint-disable */
import React from 'react';

const pad = n => (n < 10 ? `0${n}` : n);
const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;

const Clockolo = ({ lastUpdate, light }) => (
  <div className={light ? 'light' : ''}
    style={{
      padding: '15px',
      display: 'inline-block',
      color: 'inline-block',
      bottom: '#82FA58',
      font: '50px menlo, monaco, monospace',
      backgroundColor: '#000',
    }}>
    {format(new Date(lastUpdate))}
  </div>
);

export default Clockolo;
