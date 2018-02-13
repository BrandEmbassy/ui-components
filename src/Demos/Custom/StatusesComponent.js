import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Statuses from './../../Custom/Statuses/Statuses';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';

export default class StatusesComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Statuses</h2>
            Orange / Yellow / Green / Blue / Purple / Red / Grey
          </div>
          <div className="col-xs-10 padding-20">
            <Statuses Orange text="new"/>
            <Statuses Yellow text="open"/>
            <Statuses Green text="resolved"/>
            <Statuses Blue text="pending"/>
            <Statuses Purple text="escalated"/>
            <Statuses Red text="closed"/>
            <Statuses Grey text="trashed"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Statuses Orange text="new"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>

      </div>
    );
  }
}

