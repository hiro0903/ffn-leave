var React = require('react');
var mui = require('material-ui');

var RaisedButton = mui.RaisedButton;
var Menu = mui.Menu;

var config = require('../../config/config-header').createMenuList;

var HeaderButton = React.createClass({

  getInitialState: function () {
      var lang = this.context.lang;
      var menuItems = config.map( function(obj) {
              return {
                text          : (lang.forms[obj.type + '-form']),
                iconClassName : ('ffn-icon ' + obj.type),
              }; 
          }); //{ type : 'leave',  permission : 'CREATE_LEAVE_FORM' }, 

      return {
          menuItems  : menuItems,
          showMenu : false
      };
  },

  getDefaultProps: function () {
  },

  contextTypes : {
      lightbox    : React.PropTypes.func,
      permissions : React.PropTypes.object,
      lang        : React.PropTypes.object.isRequired
  },

  _toggleMenu : function(e) {
      this.setState({ showMenu : !this.state.showMenu })
  },

  _menuItemOnClick : function(e, index, item) {
      this.context.lightbox({ title: 'xxxCreate a Leave', type : 'leave', action: [  { text: 'Cancel' },  { text: 'Submit', onTouchTap: this._toggleMenu, ref: 'submit-icon' } ] });
      this._toggleMenu();
  },

  render: function() {
    var containerStyle = { 
            position : 'relative',
            minWidth : '150px'  //需要多點空間讓下面Menu展開
        },
        menuStyle = {
            top : '100%',
            transform : 'translate3d( 0, 5px, 0)'
        };


    return (
      <div className="menu-btn" style={containerStyle} >
          <RaisedButton label="Create New" primary={true} onTouchTap={this._toggleMenu} />
          <Menu 
            menuItems={this.state.menuItems} 
            autoWidth={false} 
            hideable={true} 
            visible={this.state.showMenu} 
            style={menuStyle} 
            onItemTap={this._menuItemOnClick}
          />
      </div>
    );
  },

  
});


module.exports = HeaderButton;