/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var Picker = mui.TimePicker;
var DatePicker = mui.DatePicker;
var Dialog = mui.Dialog;
var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var Header = require('./header.jsx');
var Navbar = require('./navbar.jsx');
var Content = require('./content.jsx');
var DEBUG = require('../js/debug');
var Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getInitialState: function () {
      return {
          displayHeader : false,
          displayNavbar : false,  
          debug         : DEBUG
      };
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

  componentDidMount: function () {
      this._clientInit();  
  },

  componentWillUpdate: function (nextProps, nextState) {
    if (this.state.debug) {
      console.group('main-component will update');
      console.log('props changes:');
      console.dir(this.props);
      console.dir(nextProps);
      console.log('states changes:');  
      console.dir(this.state);
      console.dir(nextState);
      console.groupEnd();
    }
  },

  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.debug) {
      console.group('main-component did update');
      console.log('props changes:');
      console.dir(prevProps);
      console.dir(this.props);
      console.log('states changes:');  
      console.dir(prevState);
      console.dir(this.state);
      console.groupEnd();
    }
  },

  _clientInit : function() {
      this.setState({  //預期在這load local storage data
          displayHeader : true,
          displayNavbar : true
      }); 

      console.log('client init...');
  },

  _toggleHeader : function() { this.setState({ displayHeader: !this.state.displayHeader }); },
  _toggleNavbar : function() { this.setState({ displayNavbar: !this.state.displayNavbar }); },
  _lightbox : function(option) {
      var lb = {
          lightboxTitle  :  option.title   || '',
          lightboxContent:  option.content || '',
          lightboxAction :  option.action  || []
      }
    this.setState(lb);
  },
  render: function() {

    if (this.state.debug) {
      console.group('main-component render');
      console.log('props:');
      console.dir(this.props);
      console.log('state:');  
      console.dir(this.state);
      console.groupEnd();
    }

    var className = (this.state.displayHeader ? 'header-on ' : 'header-off ')
                   +(this.state.displayNavbar ? 'navbar-on'  : 'navbar-off' );

    return (
      <main                                     className={className} id="main">
        <Header  ref="header" user="Liang Yeh" />
        <Navbar  ref="navbar"                  />
        <Content ref="content"                 className="content-area">
          <h2>example project</h2>
          <h1>material-ui</h1>
          <DatePicker hintText="DatePicker" mode="landscape" />
          <Picker format="24hr" hintText="測試啦" />
          <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
        </Content>
        <Dialog
          title={this.state.lightboxTitle}
          ref="lightbox"
          modal={false}
          action={this.state.lightboxAction}
        >
          {this.state.lightboxContent}
        </Dialog>
      </main>
    );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }
  
});

module.exports = Main;
