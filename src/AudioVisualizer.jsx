import React from 'react'
import Waveform from './Waveform.jsx'

class AudioVisualizer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showWaveform: false,
      dataPoints: [],
    }

    this.maxPoints = 600
  }

  handleFile(file) {
    let reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = function() {

      const AudioContext = window.AudioContext || window.webkitAudioContext
      const context = new AudioContext()

      context.decodeAudioData(reader.result, function(buffer) {
        const data = buffer.getChannelData(0)
        console.log({data})
        // Calculate RMS value
        let dataPoints = []
        const maxPoints = this.maxPoints
        const windowSize = Math.ceil(data.length / maxPoints)
        console.log({windowSize})
        for (var i = 0; i < data.length; i += windowSize) {
          const dataWindow = data.slice(i, i + windowSize)
          const rmsValue = rms(dataWindow)
          dataPoints.push(rmsValue)
        }
        // Average RMS values from each channel
        // Add data to setState
        console.log(dataPoints)
        this.setState({
          showWaveform: true,
          dataPoints: dataPoints,
        })

      }.bind(this))
    }.bind(this)
  }

  render() {
    const w = this.props.width
    const h = this.props.height

    let component = (this.state.showWaveform === true)
      ? <Waveform data={this.state.dataPoints} width={w} height={h} />
      : <h1 style={styles.h1}>Drop file here</h1>

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
        {component}
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
  h1: {
    fontFamily: 'sans-serif',
    color: '#777',
  },
}

const rms = (data) => {
  const squares = data.map(e => e * e)
  const sum = squares.reduce((acum, val) => (acum + val))
  return Math.sqrt(sum / squares.length)
}

export default AudioVisualizer
