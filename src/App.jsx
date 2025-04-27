import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import './App.css';

function App() {
  return (
    <div className='panes'>
      <LeftPane />
      <RightPane />
    </div>
  )
}

export default App;