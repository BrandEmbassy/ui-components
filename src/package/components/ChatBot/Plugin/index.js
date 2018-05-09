import React, { Component } from 'react'
import ComposedElement from './Element/ComposedElement'
import Element from './Element'
import ElementType from './Element/ElementType'
import styles from './index.css'
import classname from 'classnames'

class Plugin extends Component {

  static defaultProps = {
    elements: [],
    hidePostbackControls: false
  }

  scroller = null
  requestAnimationFrameId = null

  SCROLL_DIRECTION_RIGHT = 1
  SCROLL_DIRECTION_LEFT = -1

  scrollTo = (direction) => {
    if (this.scroller !== null) {
      this.scroller.scrollLeft += (direction * 10)
    }
    this.requestAnimationFrameId = requestAnimationFrame(() => this.scrollTo(direction))
  }

  stopScroll = () => {
    cancelAnimationFrame(this.requestAnimationFrameId)
  }

  startScroll = (direction) => {
    if (this.requestAnimationFrameId !== null) {
      cancelAnimationFrame(this.requestAnimationFrameId)
    }
    this.requestAnimationFrameId = requestAnimationFrame(() => this.scrollTo(direction))
  }

  handleLeftArrowClick = () => {
    this.startScroll(this.SCROLL_DIRECTION_LEFT)
  }

  handleRightArrowClick = () => {
    this.startScroll(this.SCROLL_DIRECTION_RIGHT)
  }

  renderCarusel(elements, onClick) {
    return (
      <div className={styles.PluginFrameWrapper}>
        <div className={styles.ArrowWrapper}>
          {<div className={styles.LeftRow} onMouseLeave={this.stopScroll} onMouseUp={this.stopScroll} onMouseDown={this.handleLeftArrowClick} />}
        </div>
        <div className={styles.PluginFrame} ref={(el) => this.scroller = el}>
          <div className={styles.Carusel}>
            {elements.map(element => (<div className={styles.Plugin}>
              {this.renderRawElement(element.elements, onClick)}
            </div>))}
          </div>
        </div>
        <div className={styles.ArrowWrapper}>
          {<div className={styles.RightRow} onMouseLeave={this.stopScroll} onMouseUp={this.stopScroll} onMouseDown={this.handleRightArrowClick} />}
        </div>
      </div>
    );
  }

  renderPlugin(elements, onClick) {
    return (
      <div className={styles.PluginFrameWrapper}>
        <div className={styles.PluginFrame}>
          <div className={styles.Plugin}>
            {this.renderRawElement(elements, onClick)}
          </div>
        </div>
      </div>
    );
  }

  renderRawElement(elements, onClick) {
    const { hideButtons } = this.props;
    return (<ComposedElement elements={elements} onClick={onClick} hideButtons={hideButtons} />);
  }

  isPluginWithoutWrapper(element) {
    return element && element.type === ElementType.QUICK_REPLIES
  }

  render () {
    const { elements, onClick } = this.props;
    if (elements.length > 1) {
      return this.renderCarusel(elements, onClick);
    } else if (this.isPluginWithoutWrapper(elements[0])) {
      return this.renderRawElement(elements, onClick)
    } else {
      return this.renderPlugin(elements, onClick)
    }
  }
}

export default Plugin