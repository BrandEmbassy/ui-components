import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.css';

const cx = classNames.bind(styles);

export default class Input extends Component {
  render() {
    const { isDisabled, isError } = this.props;

    const className = cx(styles.Input, {
      Disabled: isDisabled,
      Error: isError
    });

    return (
      <div className={className}>
        <div className={styles.Label}>
          {this.props.label}                
        </div>
        <div className={styles.Field}>
          <input type="text" name={this.props.name} placeholder={this.props.placeholder} disabled={this.props.isDisabled} />
        </div>
        <div className={styles.Desc}>
          {this.props.desc}                
        </div>
      </div>
    );
  }
}