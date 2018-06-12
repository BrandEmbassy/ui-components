// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Notification.css'

const cx = classNames.bind(styles)

type Props = {
  text: string,
  Fixed: boolean,
  type: string,
  styleName: string
}

export default class Notification extends React.Component<Props> {
  renderText () {
    const { text, type } = this.props

    if (!text) {
      return (`${type}`)
    } else {
      return (`${text}`)
    }
  };

  render () {
    const { Fixed, type, styleName } = this.props

    const className = cx(styles.Notification, styleName, {
      Fixed,
      isWarning: type === 'warning',
      isError: type === 'error',
      isSuccess: type === 'success',
      isInfo: type === 'info',
      isDefault: type === 'default'
    })

    return (
      <div className={className}>
        <span>{this.renderText()}</span>
      </div>
    )
  }
}
