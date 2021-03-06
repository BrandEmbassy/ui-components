// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Checkbox.module.css'

const cx = classNames.bind(styles)

type Props = {
  styleName: string,
  label: string,
  name: string,
  id: string,
  children?: React.Node,
  hasBorder: boolean
};

export default class Checkbox extends React.Component<Props> {
  render () {
    const { styleName, name, id, label, children, hasBorder } = this.props

    const className = cx(styles.CheckboxContent, styleName, {
      hasBorder
    })

    return (
      <div className={className}>
        <div className={styles.Checkbox}>
          <input type='checkbox' name={name} id={id} />
          <label for={id} />
        </div>
        {children}
        <div className={styles.Label}>{label}</div>
      </div>
    )
  }
}
