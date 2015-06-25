/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var Backbone = require('backbone');

//import Material UI
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var Picker = mui.TimePicker;
var DatePicker = mui.DatePicker;
var Dialog = mui.Dialog;
var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;

//import system ui
var Header = require('./header.jsx');
var Navbar = require('./navbar.jsx');
var Content = require('./content.jsx');

//import custom views
var Home   = require('./home/home.jsx'),
    Leaves = require('./leaves/leaves.jsx'),
    Notice = require('./notice/notice.jsx'),
    Search = require('./search/search.jsx'),
    Tools  = require('./tools/tools.jsx');

//DBUG FLAG
var DEBUG = require('../js/debug');

//main entry
var Main = React.createClass({

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

  _route : function(route, param) {

    if (this.state.debug) {
      console.group('_route');
      console.dir(this);
      console.dir(route);
      console.dir(param);
      console.groupEnd();
    }
  },

  _navigate : function(page, trigger) {
      var tr = (trigger === false) ? false : true;
      this.route.navigate(page, { trigger : tr });
  },

  _clientInit : function() {
      this.setState({  //預期在這load local storage data
          displayNavbar : true
      }); 

      //backbone route

  var AppRouter = Backbone.Router.extend({
      routes : {
          'notice'          :  'notice',
          'notice/:id'      :  'notice',
          'calendar'        :  'calendar',
          'calendar/:date'  :  'calendar',
          'leave'           :  'leave',
          'leave/:id'       :  'leave',
          'search'          :  'search',
          'search/:key'     :  'search',
          'tools'           :  'tools',
          'tools/:key'      :  'tools',
          '*home'           :  'home',
      },

      home   : function() { 
          if (name !== 'home') this._navigate('home', false);
          return this._route('home');
      }.bind(this),
      notice   : this._route.bind(this,'notice'),
      calendar : this._route.bind(this,'calendar'),
      leave    : this._route.bind(this,'leave'),
      search   : this._route.bind(this,'search'),
      tools    : this._route.bind(this,'tools')

  });

      this.route = new AppRouter();
      Backbone.history.start({ });
      //this.route.on('route', this._route );

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

          <h2>Content </h2>

          <DatePicker hintText="DatePicker" mode="landscape" />
          <Picker format="24hr" hintText="測試啦" />

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
