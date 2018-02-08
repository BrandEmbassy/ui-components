import React, { Component } from 'react';
import styles from './../../Controls/Button/Button.css';

export default class Submit extends Component {
  render() {
    return (
      <input className={styles.Button} type="submit" value={this.props.value} />
    );
  }
}
