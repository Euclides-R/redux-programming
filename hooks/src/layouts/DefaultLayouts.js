import React from 'react';

import Menu from './Menu';
import Content from './Content';

export default function DefaultLayout({ children }) {
  return (
    <div className="container">
      <Menu />
      <Content />
    </div>
  );
}
