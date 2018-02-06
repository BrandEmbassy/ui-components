import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Channel from './../../Custom/Channel/Channel';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class ChannelPictureComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">ChanelPicture</h2>
          </div>
          <div className="col-xs-6">
            <h3 className="h3">Facebook</h3>
            <Channel Facebook/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Facebook"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6">
            <h3 className="h3">Size</h3>
            <h4 className="h4">for 60px use class Size60</h4>
            <h4 className="h4">for 40px use class Size40</h4>
            <h4 className="h4">24px is default</h4>
            <h4 className="h4">for 40px use class Size20</h4>
            <h4 className="h4">for 40px use class Size16</h4>
            <Channel Facebook Size60 />
            <Channel Facebook Size40 />
            <Channel Facebook />
            <Channel Facebook Size20 />
            <Channel Facebook Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`
<div class="Channel_Channel Channel_Facebook Channel__Size60"></div>

<div class="Channel_Channel Channel_Facebook Channel__Size40"></div>

<div class="Channel_Channel Channel_Facebook"></div>

<div class="Channel_Channel Channel_Facebook Channel__Size20"></div>

<div class="Channel_Channel Channel_Facebook Channel__Size16"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>

      <div className="row padding-20">
        <div className="col-xs-6">
            <h3 className="h3">DM</h3>
            <h4 className="h4"> add class DM</h4>
            <Channel Facebook Size60 DM/>
            <Channel Facebook Size40 DM/>
            <Channel Facebook DM/>
            <Channel Facebook Size20 DM/>
            <Channel Facebook Size16 DM/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`
<div class="Channel_Channel Channel_Facebook Channel__Size60 Channel__DM "></div>

<div class="Channel_Channel Channel_Facebook Channel__Size40 Channel__DM"></div>

<div class="Channel_Channel Channel_Facebook Channel__DM"></div>

<div class="Channel_Channel Channel_Facebook Channel__Size20 Channel__DM"></div>

<div class="Channel_Channel Channel_Facebook Channel__Size16 Channel__DM"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Twitter</h3>
            <Channel Twitter Size60 />
            <Channel Twitter Size40 />
            <Channel Twitter/>
            <Channel Twitter Size20 />
            <Channel Twitter Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Twitter"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Instagram</h3>
            <Channel Instagram Size60 />
            <Channel Instagram Size40 />
            <Channel Instagram/>
            <Channel Instagram Size20 />
            <Channel Instagram Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Instagram"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Google</h3>
            <Channel Google Size60 />
            <Channel Google Size40 />
            <Channel Google/>
            <Channel Google Size20 />
            <Channel Google Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Google"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Youtube</h3>
            <Channel Youtube Size60 />
            <Channel Youtube Size40 />
            <Channel Youtube/>
            <Channel Youtube Size20 />
            <Channel Youtube Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Youtube"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Linkedin</h3>
            <Channel Linkedin Size60 />
            <Channel Linkedin Size40 />
            <Channel Linkedin/>
            <Channel Linkedin Size20 />
            <Channel Linkedin Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Linkedin"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Livechat</h3>
            <Channel Livechat Size60 />
            <Channel Livechat Size40 />
            <Channel Livechat/>
            <Channel Livechat Size20 />
            <Channel Livechat Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Livechat"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Email</h3>
            <Channel Email Size60 />
            <Channel Email Size40 />
            <Channel Email/>
            <Channel Email Size20 />
            <Channel Email Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Email"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Forum</h3>
            <Channel Forum Size60 />
            <Channel Forum Size40 />
            <Channel Forum/>
            <Channel Forum Size20 />
            <Channel Forum Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Forum"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Vkontakte</h3>
            <Channel Vkontakte Size60 />
            <Channel Vkontakte Size40 />
            <Channel Vkontakte/>
            <Channel Vkontakte Size20 />
            <Channel Vkontakte Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Vkontakte"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Listening</h3>
            <Channel Listening Size60 />
            <Channel Listening Size40 />
            <Channel Listening/>
            <Channel Listening Size20 />
            <Channel Listening Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Listening"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
      </div>
    );
  }
}

