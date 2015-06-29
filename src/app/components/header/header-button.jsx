var React = require('react');
var mui = require('material-ui');

var RaisedButton = mui.RaisedButton;
var Menu = mui.Menu;

var HeaderButton = React.createClass({

  getInitialState: function () {
      return {
          showMenu : false  
      };
  },

  getDefaultProps: function () {
      return {
          menuItems : [
             { payload: '1', text: '請假單', iconClassName: 'muidocs-icon-communication-phone'   },
             { payload: '2', text: '事件', iconClassName: 'muidocs-icon-communication-voicemail' },
             { payload: '3', text: '公告', iconClassName: 'muidocs-icon-action-stars'            },
             { payload: '4', text: '三小', iconClassName: 'muidocs-icon-action-thumb-up'         }
          ]  
      };
  },

  contextTypes : {
      lightbox : React.PropTypes.func
  },

  _toggleMenu : function(e) {
      this.setState({ showMenu : !this.state.showMenu })
  },

  _menuItemOnClick : function(e, index, item) {
      this.context.lightbox({ title: index + 'ohohoh' });
      this._toggleMenu();
  },

  render: function() {
    var containerStyle = { 
            position : 'relative'
        },
        menuStyle = {
            top : '100%',
            transform : 'translate3d( 0, 5px, 0)'
        }

    return (
      <div className="menu-btn" style={containerStyle} >
          <RaisedButton label="Create New" primary={true} onTouchTap={this._toggleMenu} />
          <Menu 
            menuItems={this.props.menuItems} 
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