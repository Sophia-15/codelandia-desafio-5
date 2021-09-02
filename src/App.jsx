import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './styles/globals.scss';
import ReactAudioPlayer from 'react-audio-player';
import soundtrack from './assets/audio/soundtrack.mp3';

function App() {
  return (
    <div>
      <ReactAudioPlayer src={soundtrack} autoPlay className="audio" />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
