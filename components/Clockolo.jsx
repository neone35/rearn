import React from 'react';
import scss from '../static/style.scss';

const pad = n => (n < 10 ? `0${n}` : n);
const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;

const Clockolo = ({ lastUpdate, light }) => (
  <div className={[scss.serverClock,
    light ? scss.frontClock : '']
    .join(' ')}
  >
    {format(new Date(lastUpdate))}
  </div>
);

export default Clockolo;
