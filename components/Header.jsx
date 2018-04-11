import Link from 'next/link';
import React from 'react';
import { linkStyle } from './SharedStyles';

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/settings">
      <a style={linkStyle}>Settings</a>
    </Link>
  </div>
);

export default Header;
