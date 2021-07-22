import './css/index.css'
import React from 'react';

import Button from './componentes/Button';
import ScreenNumbers from './componentes/ScreenNumbers';

export default function App() {
  return (
    <div className="carcaca">
      <h1>Calculadora</h1>
        <div className="btns-space">
          <ScreenNumbers></ScreenNumbers>
          <Button className="btn-ac">AC</Button> 
          <Button>/</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button className="btn-plus">=</Button>
        </div>
    </div>     
  );
}

