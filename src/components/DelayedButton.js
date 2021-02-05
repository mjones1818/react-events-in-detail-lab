// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {

  handleOnClick = event => {
    event.persist()
    window.setTimeout(() => {
      this.props.onDelayedClick(event)
    },
      this.props.delay
    )
  }
  render() {
    // console.log(this.props.onDelayedClick)
    return (
      <button onClick={this.handleOnClick}>Delayed Button</button>
    )
  }
}