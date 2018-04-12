import Link from 'next/link';
import React from 'react';
import { linkStyle } from './SharedStyles';

const Header = () => (
  <nav>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/settings">
      <a style={linkStyle}>Settings</a>
    </Link>
  </nav>
);

export default Header;
