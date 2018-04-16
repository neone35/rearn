import Link from 'next/link';
import React from 'react';
import { linkStyle } from './SharedStyles';

const Header = () => (
  <ul className="nav nav-tabs bg-primary">
    <Link className="nav-item" href="/">
      <li className="nav-item">
        <a className="nav-link" style={linkStyle}>Home</a>
      </li>
    </Link>
    <Link className="nav-item" href="/settings">
      <li className="nav-item">
        <a className="nav-link" style={linkStyle}>Settings</a>
      </li>
    </Link>
    <div className="bmd-form-group bmd-collapse-inline pull-xs-left">
      <button className="btn bmd-btn-icon text-white" htmlFor="search" data-toggle="collapse" data-target="#collapse-search" aria-expanded="false" aria-controls="collapse-search">
        <i className="material-icons">search</i>
      </button>
      <span id="collapse-search" className="collapse">
        <input className="form-control" type="text" id="search" placeholder="Enter your query..." />
      </span>
    </div>
  </ul>
);

export default Header;
