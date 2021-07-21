import './css/index.css'
import React from 'react';

import Button from './componentes/Button';
import ScreenNumbers from './componentes/ScreenNumbers';

export default function App() {
  return (
    <div className="carcaca">
      <h1>Calculadora</h1>
        <div className="btns-space">
          <Button className="btn-ac" label="AC" />
          <Button label="/" />
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="*" />
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="-" />
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="+" />
          <Button label="0" />
          <Button label="." />
          <Button label="=" />
        </div>
    </div>     
  );
}

