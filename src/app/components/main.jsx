var React = require('react');
// var Backbone = require('backbone');

//import React Router
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Navigation = Router.Navigation;

//import Material UI
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var Dialog = mui.Dialog;

//import system ui
var Header = require('./header.jsx');
var Navbar = require('./navbar.jsx');
var Content = require('./content.jsx');

//DBUG FLAG
var DEBUG = require('../js/debug');

//main entry
var Main = React.createClass({

  mixins: [Navigation],

  getInitialState: function () {
      return {
          displayNavbar : false,  
          debug         : DEBUG
      };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object,
    displayNavbar: React.PropTypes.bool,
    lightbox : React.PropTypes.func,
    navigate : React.PropTypes.func
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
      displayNavbar: this.state.displayNavbar,
      lightbox: this._lightbox,
      navigate: this._navigate
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
          displayNavbar : true
      }); 
      if (this.state.debug) console.log('client init...'); 
  },

  _toggleNavbar : function() { this.setState({ displayNavbar: !this.state.displayNavbar }); },
  _lightbox : function(option) {
      var lb = {
          lightboxTitle  :  option.title   || '',
          lightboxContent:  option.content || '',
          lightboxAction :  option.action  || []
      }
    this.setState(lb);
    this.refs.lightbox.show();
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

    var className = (this.state.displayNavbar ? 'navbar-on'  : 'navbar-off' );

    return (
      <main                                     className={className} id="main">
        <Header  ref="header" user="Liang Yeh" />
        <Navbar  ref="navbar"                  />
        <Content ref="content"                 className="content-area">

          <RouteHandler/>

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
  }
});

module.exports = Main;
