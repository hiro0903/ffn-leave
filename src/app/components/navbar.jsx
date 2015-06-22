var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var Navbar = React.createClass({

  render: function() {
    var containerStyle = {
        width    : '100%',
        height   : '100%',
        display  : 'block',
        padding  : '90px 24px 0 24px',
    };
    return (
      <nav className="side-nav">
          <Paper zDepth={1} style={containerStyle}>
            <ul>
                <li>HOME</li>
                <li>Notice</li>
                <li>Calendar</li>
                <li>Leaves</li>
                <li>Search</li>
                <li>Tools</li>
            </ul>
          </Paper>
      </nav>
    );
  },

  
});


module.exports = Navbar;