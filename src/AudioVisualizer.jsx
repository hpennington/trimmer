import React from 'react'

class AudioVisualizer extends React.Component {
  handleFile(file) {
    let reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = function() {

      const AudioContext = window.AudioContext || window.webkitAudioContext
      const context = new AudioContext()

      context.decodeAudioData(reader.result, function(buffer) {
        console.log(buffer)
      });
    }
  }

  render() {
    return (
      <div
        className="audioVisualizer"
        style={styles.audioVisualizer}
        onDragStart={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault()
          const file = e.dataTransfer.files[0]
          this.handleFile(file)
        }}
      >
        <h1 style={styles.h1}>Drop file here</h1>
      </div>
    )
  }
}

const styles = {
  audioVisualizer: {
    background: 'rgb(236, 237, 238)',
    width: '100%',
    height: '90%',
    borderRadius: '1vmin',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default AudioVisualizer
