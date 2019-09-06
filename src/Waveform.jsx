import React from 'react'

class Waveform extends React.Component {
  constructor(props) {
    super(props)

    this.state = {playheadPosition: 0.0}

    this.clickPadding = 5

    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    this.draw()
  }

  componentDidUpdate() {
    this.draw()
  }

  draw() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    const w = this.props.width
    const h = this.props.height

    if (ctx !== null) {
      ctx.clearRect(0, 0, w, h)
      ctx.beginPath()
      ctx.strokeStyle = 'rgb(40, 43, 96)'
      ctx.lineWidth = 2

      const waveformHeight = h * 0.65
      const waveformWidth = w * 0.95
      this.drawWaveform(ctx, waveformWidth, waveformHeight)
      ctx.closePath()
      ctx.stroke()

      ctx.beginPath()
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 4

      this.drawPlayhead(ctx)

      ctx.closePath()
      ctx.stroke()
    }
  }

  drawWaveform(ctx, w, h) {
    const pixelsPerLine = w / this.props.data.length
    for (var i = 0; i < this.props.data.length; i += 1) {
      const datum = this.props.data[i]
      const yCenter = this.props.height / 2

      const x = i * pixelsPerLine + (w * 0.025)
      const y = yCenter - (h * datum)
      ctx.moveTo(x, y)
      ctx.lineTo(x, y + (2 * h * datum))
    }
  }

  drawPlayhead(ctx) {
    const x = this.playheadX()
    console.log({x})
    ctx.moveTo(x, 0)
    ctx.lineTo(x, this.props.height)
  }

  playheadX() {
    const w = this.props.width
    return (w * 0.025) + (this.state.playheadPosition * w)
  }

  onClick(e) {
    this.detectPlayheadHit(e.clientX)
  }

  detectPlayheadHit(x) {
    if (x === this.playheadX()) {
      console.log('hit')
    } else if (x < this.playheadX() && x + this.clickPadding >= this.playheadX()) {
      console.log('hit')
    } else if (x > this.playheadX() && x - this.clickPadding <= this.playheadX()) {
      console.log('hit')
    }
  }

  render() {
    return (
      <canvas
        onClick={this.onClick}
        width={this.props.width}
        height={this.props.height}
        ref="canvas"
      >
      </canvas>
    )
  }
}

export default Waveform
