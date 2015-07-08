var React = require('react');
var mui = require('material-ui');
var muiColors = mui.Styles.Colors;
var Avatar = mui.Avatar;
var FlatButton = mui.FlatButton;
var Menu = mui.Menu;
var CssEvent = mui.Utils.CssEvent;
var ClickAwayable = mui.Mixins.ClickAwayable;

var Config = require('../../config/config-header').userMenuList;

var getRandColor = (function getRandomMaterialUIColor(colors) {
    var arr = Object.keys(colors), 
        randomColorName = arr[(~~(Math.random()*arr.length))];
    return colors[randomColorName];
}).bind(null, muiColors);

var User = React.createClass({

  mixins: [ClickAwayable],

  contextTypes : {
      lang : React.PropTypes.object.isRequired,
      User : React.PropTypes.object.isRequired
  },

  getInitialState: function () {
      return {
          userName      : this.context.User.getName(),
          avatarColor   : getRandColor(),
          avatarBgColor : getRandColor(),
          showMenu      : false  
      };
  },

  componentWillUpdate: function (nextProps, nextState) {
      if (nextState.userName !== this.state.userName) this.setState({
          avatarColor   : getRandColor(),
          avatarBgColor : getRandColor()
      });  
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (prevState.showMenu !== this.state.showMenu) {
      if (this.state.showMenu) {
        //css 動畫結束才綁定
        CssEvent.onTransitionEnd(React.findDOMNode(this.refs.userMenu), function() {
          this._bindClickAway();
        }.bind(this));
      } else {
        this._unbindClickAway();
      }
    }
  },

  componentClickAway: function() { //trigger by ClickAwayable
    this.hideMenu();
  },

  _toggleMenu : function() {
      this.setState({ showMenu : !this.state.showMenu });
  },

  hideMenu : function() {
      this.setState({ showMenu : false });
  },

  render: function() {
    var containerStyle = {
          position : 'relative'
        },
        avatarStyle = {
          float : 'left',
          marginRight : '10px'
        },
        usernameStyle = {
          lineHeight : '40px',
          paddingRight : '10px'
        },
        menuStyle = {
          top : '100%',
          right : 0,
          transform : 'translate3d( 0, 5px, 0)'
        },
        menuItems = [
             { payload: '1', text: '設定', iconClassName: 'ffn-icon-setting' },
             { payload: '2', text: '登出', iconClassName: 'ffn-icon-logout' }
        ],
        firstLetter = this.state.userName.substr(0,1);
    return (
      <div className="user-info" style={containerStyle}>
        <FlatButton style={usernameStyle} onTouchTap={this._toggleMenu} >
          <Avatar style={avatarStyle} color={this.state.avatarColor} backgroundColor={this.state.avatarBgColor}>{firstLetter}</Avatar>
          {this.state.userName}
        </FlatButton>
        <Menu 
          ref="userMenu"
          menuItems={menuItems} 
          autoWidth={false} 
          hideable={true} 
          visible={this.state.showMenu} 
          style={menuStyle} 
          onItemTap={this._menuItemOnClick}
        />
      </div>
    );
  }
  
});


module.exports = User;