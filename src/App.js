import React from 'react';
import Button from 'react-bootstrap/Button';
import AudioVisualizer from './AudioVisualizer.jsx'

function App() {
  return (
    <div className="app" style={styles.app}>
      <div
        className="audioVisualizerContainer"
        style={styles.audioVisualizerContainer}
      >
        <AudioVisualizer />
      </div>
      <div
        className="playbackContainer"
        style={styles.playbackContainer}>
        <Button
          className="btn-secondary"
          style={styles.playbackButton}
        >Back
        </Button>
        <Button
          className="btn-secondary"
          style={styles.playbacButton}
        >Play
        </Button>
        <Button
          className="btn-secondary"
          style={styles.playbackButton}
        >Next
        </Button>
      </div>
      <Button
        className="btn-primery"
        style={styles.exportButton}
      >Export
      </Button>
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
}

export default App;
