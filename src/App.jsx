import React from 'react';
import './style/main.sass';
import Inputs from './components/Inputs';
import Timers from './components/Timers';
import Title from './components/Title';

export default function App() {
  return (
    <div className="container">
      <Title />
      <Inputs />
      <Timers />
    </div>
  );
}
