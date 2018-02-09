import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Selectbox.css';

const cx = classNames.bind(styles);

export default class Selectbox extends Component {
  render() {
    const { Wide } = this.props;

    const className = cx(styles.Selectbox, {
      Wide
    });

    return (
      <div className={className}>
        <select>
          <option value="volvo">Volvo</option>
          <option value="mercedes">Mercedes</option>
        </select>
      </div>
    );
  }
}
