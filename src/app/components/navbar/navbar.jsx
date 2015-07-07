var React = require('react');
var mui = require('material-ui');
var LeftNav = mui.LeftNav;

var FFNIcon = require('../ffn-icon.jsx');

var CONFIG = require('../../config').Navbar;
var routes = CONFIG.DEFAULT_ROUTERS;

var Navbar = React.createClass({
  getDefaultProps: function () {
      return {
            docked : true
      };
  },
  getInitialState: function () {
      var lang = this.context.lang.navbar;
      var navbarItems = routes.map( (value) => ({ route : value, text : lang[value], iconClassName: 'ffn-icon ' + value }) );
      return {
            navbarItems : navbarItems
      };
  },

  contextTypes : {
      router : React.PropTypes.func.isRequired,
      lang   : React.PropTypes.object.isRequired
  },

  _getRouteIndex: function(route) {
      var i = 0;
      routes.forEach( function(str, idx) { if (str===route) i = idx; } ); 
      return i;
  },  

  _onChange: function(e, index, item) {
      this.context.router.transitionTo(item.route);
  },

  render: function() {
    var routeName = this.context.router.getCurrentRoutes()[1].name,
        index = this._getRouteIndex(routeName);

    var navStyle = {
        width      : '180px',
        height     : '100%',
        paddingTop : '90px',
        position   : 'absolute',
//        transform  : this.context.displayNavbar ? 'translate3d(-190px, 0px, 0px)' : 'translate3d(0px, 0px, 0px)',
        zIndex     : '9'
    };


    return (<LeftNav 
                ref="leftnav" 
                menuItems={this.state.navbarItems} 
                selectedIndex={index} 
                onChange={this._onChange} 
                style={navStyle} 
                docked={this.props.docked}

            />);

  },

  
});


module.exports = Navbar;