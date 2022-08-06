import { useState } from 'react';
import './App.css';
import Display from './Display';
import History from './History';

function App(){

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const [allClicks, setAllClicks] = useState([])

  const increaseLeft = () => {
    setLeft(left + 1)
    setAllClicks(allClicks.concat('L'))
  }

  const increaseRight = () => {
    setRight(right + 1)
    setAllClicks(allClicks.concat('R'))
  }

  return (
    <div>
      <Display message = {"Number of Left Clicks"} value = {left}></Display>
      <Display message = {"Number of Right Clicks"} value = {right}></Display>
      <button onClick = {increaseLeft}>Left Click</button>
      <button onClick = {increaseRight}>Right Click</button>
      <History allClicks = {allClicks}></History>
    </div>
  )
}

export default App;
