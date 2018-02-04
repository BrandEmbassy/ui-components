import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Checkbox from './../Forms/Checkbox/Checkbox';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class CheckboxComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Checkbox</h2>
          </div>
          <div className="col-xs-6 padding-20">
            <Checkbox id="xzx" label="" />
          </div>
          <div className="col-xs-12 ">
            <h3 className="h3">html</h3>
          </div>
        </div>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Checkbox__CheckboxContent">
  <div class="Checkbox__Checkbox">
    <input type="checkbox" name="name" id="xxx" />
    <label for="xxx" />
  </div>
</div>
`}
</SyntaxHighlighter> 
<div className="row padding-20">
  <div className="col-xs-12 ">
    <h4 className="h4">checkbox ID=" " must be same with laber FOR=" " </h4>
  </div>
</div>
<div className="row padding-20">
  <div className="col-xs-12 ">
    <h3 className="h3">usage with text </h3>
  </div>
</div>
<div className="row padding-20">
  <div className="col-xs-12 ">
    <Checkbox id="xzs" label="chose one" />
  </div>
</div>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Checkbox__CheckboxContent">
  <div class="Checkbox__Checkbox">
    <input type="checkbox" name="name" id="sss" />
    <label for="sss" ></label>
    <div class="Checkbox__Label" >chose one</div>
  </div>
</div>
`}
</SyntaxHighlighter> 


</div>
    );
  }
}

