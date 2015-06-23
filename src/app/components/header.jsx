var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var RaisedButton = mui.RaisedButton;
var Menu = mui.Menu;
var User = require('./user.jsx');
var Logo = require('./logo.jsx');
var HeaderButton = require('./header_button.jsx');
var Header = React.createClass({

  render: function() {

    var containerStyle = {
        width    : '100%',
        height   : '100%',
        padding  : '12px 20px',
    };

    return (
      <header className="top-header">
        <Paper style={containerStyle} zDepth={1} >
          <div className="left header-block"><Logo /></div>
          <div className="right header-block">
            <HeaderButton />
            <User user="Liang Yeh" />
          </div>
        </Paper>
      </header>
    );
  },

  
});


module.exports = Header;