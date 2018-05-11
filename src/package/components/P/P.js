// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './P.css'

const cx = classNames.bind(styles)

type Props = {
  children?: React.Node,
  styleName: string
}

export default class P extends React.Component<Props> {

  render () {
    const { styleName } = this.props

    const className = cx(styles.P, styleName)

    return (
      <p className={className}>
        {this.props.children}
      </p>
    )
  }
}
