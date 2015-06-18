var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var Navbar = React.createClass({

  render: function() {

    var containerStyle = {
        width      : '180px',
        height     : '100%',
        display    : 'block',
        position   : 'absolute',
        top        : '0px',
        left       : '0px',
        paddingTop : '180px',
        zIndex     : 8
    };

    return (
      <Paper style={containerStyle} zDepth={1}>
        <div>HOME</div>
        <div>Notice</div>
        <div>Calendar</div>
        <div>Leaves</div>
        <div>Search</div>
        <div>Tools</div>
      </Paper>
    );
  },

  
});


module.exports = Navbar;