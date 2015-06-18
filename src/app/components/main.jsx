/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var Picker = mui.TimePicker;
var DatePicker = mui.DatePicker;
var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var Header = require('./header.jsx');
var Navbar = require('./navbar.jsx');
var Content = require('./content.jsx');
var Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount: function() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  render: function() {

    var containerStyle = {
        width           : '100vw',
        height          : '100vh',
        overflow        : 'hidden',
        backgroundColor : '#DFDBD8',
        paddingTop      : '70px',
        paddingLeft     : '180px',
        position        : 'relative',
        boxSizing       : 'border-box'
    };

    return (
      <div style={containerStyle}>
        <Header ref="header" user="Liang Yeh" />
        <Navbar ref="navbar" />
        <Content ref="content">
          <h2>example project</h2>
          <h1>material-ui</h1>
          <DatePicker hintText="DatePicker" mode="landscape" />
          <Picker format="24hr" hintText="測試啦" />
          <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
        </Content>
      </div>
    );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }
  
});

module.exports = Main;
