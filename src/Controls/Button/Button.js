import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.css';

const cx = classNames.bind(styles);

export default class Button extends Component {
  renderIcon() {
    if (this.props.Icon) {
      return (
        <div className={this.props.Icon}></div>
      );
    }

    return null;
  }

  render() {
    const { isDisabled, isReversed, isNegative, isCancel, Small, Wide } = this.props;

    const className = cx(styles.Button, {
      Disabled: isDisabled,
      Reversed: isReversed,
      Negative: isNegative,
      Cancel: isCancel,
      Small,
      Wide 
    });

    return (
      <button className={className} onClick={this.props.onClick}>
          {this.renderIcon()}
          {this.props.text} 
      </button>
    );
  }
}
