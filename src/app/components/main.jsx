var React = require('react');

/*
var Backbone = require('backbone');
var Model = Backbone.Model;
*/

//import React Router
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Navigation = Router.Navigation;

//import Material UI
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;

//import system ui
var Header = require('./header/header.jsx');
var Navbar = require('./navbar/navbar.jsx');
var Content = require('./content.jsx');
var Lightbox = require('./lightbox.jsx');

//Data Model
var FFNData     = require('./mixins/ffn-data.jsx');
var Permissions = require('./mixins/ffn-permission.jsx');  //撿查權限, 提供  this.context.hasPermission (name) 
var User        = require('./mixins/ffn-user.jsx');
var Lang        = require('./mixins/ffn-lang.jsx');

//DBUG FLAG
var DEBUG = require('./debug/debug.jsx');

//main entry
var Main = React.createClass({

  mixins: [Navigation, FFNData, Permissions, User, Lang],

  getInitialState: function () {
      var ffn        = window.FFN            || {},
          leaveTypes = window.FFN.leaveTypes || [];

      return {
          displayNavbar   : true,
          debug           : DEBUG
      };
  },

  childContextTypes: {
    muiTheme      : React.PropTypes.object,
    lightbox      : React.PropTypes.func,
    navigate      : React.PropTypes.func,   //換頁func
    leaveTypes    : React.PropTypes.array,
  },

  getChildContext: function() {
    return {
      muiTheme      : ThemeManager.getCurrentTheme(),
      lightbox      : this._lightbox,
      navigate      : this._navigate,
      leaveTypes    : window.FFN.leaveTypes,
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
      // this.setState({  //預期在這load local storage data
      //     displayNavbar : true
      // }); 
      if (this.state.debug) console.log('client init...'); 
  },

  _toggleNavbar : function() { this.setState({ displayNavbar: !this.state.displayNavbar }); },

  _lightbox : function(option) {
      return this.refs.lightbox.show(option);
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

    var className = (this.state.displayNavbar ? 'navbar-on'  : '' );
    var LightboxContent = this.state.lightboxContent;
    return (
      <main                                     className={className} id="main">
        <Header  ref="header" user="Liang Yeh" />
        <Navbar  ref="navbar"                  />
        <Content ref="content"                 className="content-area">

          <RouteHandler/>

        </Content>
        <Lightbox ref="lightbox" />
      </main>
    );
  }
});

module.exports = Main;
