import React from 'react';
import Button from 'react-bootstrap/Button';

const AudioVisualizer = () => {
  return (
    <div
      className="audioVisualizerContainer"
      style={styles.audioVisualizerContainer}
    >
      <div
        className="audioVisualizer"
        style={styles.audioVisualizer}
      >
        <h1 style={styles.h1}>Drop file here</h1>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app" style={styles.app}>
      {AudioVisualizer()}
      <div className="playbackContainer" style={styles.playbackContainer}>
        <Button className="btn-secondary" style={styles.playbackButton}>Back</Button>
        <Button className="btn-secondary" style={styles.playbacButton}>Play</Button>
        <Button className="btn-secondary" style={styles.playbackButton}>Next</Button>
      </div>
      <Button className="btn-primery" style={styles.exportButton}>Export</Button>
    </div>
  );
}

const styles = {
  audioVisualizerContainer: {
    width: '98%',
    height: '35%',
    margin: 'auto',
    marginTop: '6%',
  },
  audioVisualizer: {
    background: 'rgb(236, 237, 238)',
    width: '100%',
    height: '90%',
    borderRadius: '1vmin',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  app: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playbackContainer: {
    margin: 'auto',
  },
  playbackButton: {
    margin: '10vmin',
  },
  exportButton: {
    margin: 'auto',
  },
  h1: {
    fontFamily: 'sans-serif',
    color: '#777',
  },
}

export default App;
