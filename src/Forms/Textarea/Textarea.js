import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';
import styles from './Textarea.css';

export default class Textarea extends Component {
  render() {
    return (
      <div className={`${styles.Textarea} ${this.props.isDisabled === true ? styles.Disabled : ''} ${this.props.isError === true ? styles.Error : ''}`}>
        <div className={styles.Label}>
          {this.props.label}                
        </div>
        <div className={styles.Field}>
        <textarea name="xyz" id="form" placeholder="" />
        </div>
        <div className={`${styles.Desc} ${styles.isRed} `}>
          {this.props.desc}                
        </div>
      </div>
    );
  }
}
