import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class EasySteps extends Component {
  static childContextTypes = {
    goTo: PropTypes.func,
    goToNext: PropTypes.func,
    goToPrev: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      currentSlideIndex: 0
    }

    this.goTo = this.goTo.bind(this)
    this.goToNext = this.goToNext.bind(this)
    this.goToPrev = this.goToPrev.bind(this)
  }

  getChildContext() {
    return {
      goTo: this.goTo,
      goToNext: this.goToNext,
      goToPrev: this.goToPrev
    }
  }

  goTo(slideNumber) {
    this.setState({
      currentSlideIndex: slideNumber
    })
  }

  goToNext() {
    this.goTo(this.state.currentSlideIndex + 1)
  }

  goToPrev() {
    this.goTo(this.state.currentSlideIndex - 1)
  }

  render() {
    const { children } = this.props

    return (
      <div>
        {
          React.cloneElement(
            children[this.state.currentSlideIndex]
          )
        }
      </div>
    )
  }
}
