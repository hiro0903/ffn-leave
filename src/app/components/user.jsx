var React = require('react');
var mui = require('material-ui');
var Ava = mui.Avatar;
var Flat = mui.FlatButton;
var User = React.createClass({

  render: function() {
    var containerStyle = {
        display : 'inline-block'
    };

    return (
      <div style={containerStyle}>
        <Ava>L</Ava>
        <Flat label="Liang" />
      </div>
    );
  }
  
});


module.exports = User;