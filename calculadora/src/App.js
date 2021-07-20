import './css/index.css'
import React from 'react';

import Button from './componentes/Button';
import ScreenNumbers from './componentes/ScreenNumbers';

export default function App() {
  return (
    
    <div className="carcaca">
      <h1>Calculadora</h1>
      <div className="btns">
        <Button className="ac">AC</Button>
        <div className="numbers">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>0</Button>
        </div>
        <Button>/</Button>
        <Button>*</Button>
        <Button>=</Button>
        <Button>+</Button>
        <Button>-</Button>
      </div>
    </div>     
  );
}

