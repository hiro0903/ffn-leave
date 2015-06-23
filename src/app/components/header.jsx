var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var RaisedButton = mui.RaisedButton;
var User = require('./user.jsx');
var Header = React.createClass({

  _handleTouchTap : function(e) {
    console.log('clicked');
  },
  render: function() {

    var containerStyle = {
        width    : '100%',
        height   : '100%',
        padding  : '12px 20px',
    };

    return (
      <header className="top-header">
        <Paper style={containerStyle} zDepth={1} >
          <div className="left">Friendfinder logo</div>
          <div className="right">
            <RaisedButton label="Create New" primary={true} onTouchTap={this._handleTouchTap} />
            <User user="Liang Yeh" />
          </div>
        </Paper>
      </header>
    );
  },

  
});


module.exports = Header;