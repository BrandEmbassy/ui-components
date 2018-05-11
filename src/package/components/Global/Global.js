// @flow

import * as React from 'react'
import '!style-loader!css-loader!./../styles/Base.css' //eslint-disable-line

type Props = {
  children?: React.Node
}

export default class Global extends React.PureComponent<Props> {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
