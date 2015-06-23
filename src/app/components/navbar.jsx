var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var List = mui.List;
var ListItem = mui.ListItem;
var Navbar = React.createClass({

  contextTypes: {
    displayNavbar: React.PropTypes.bool,
    displayHeader: React.PropTypes.bool
  },

  render: function() {
    var containerStyle = {
        width      : '100%',
        height     : '100%',
        display    : 'block',
        paddingTop : this.context.displayHeader ? '90px' : '20px'
    };

    var navbarStyle = {
        left : this.context.displayNavbar ? '0' : '-100%' 
    };

    console.dir(this.context);

    return (
      <nav className="side-nav" style={navbarStyle}>
          <Paper zDepth={1} style={containerStyle}>
            <List>
                <ListItem>HOME</ListItem>
                <ListItem>Notice</ListItem>
                <ListItem>Calendar</ListItem>
                <ListItem>Leaves</ListItem>
                <ListItem>Search</ListItem>
                <ListItem>Tools</ListItem>
            </List>
          </Paper>
      </nav>
    );
  },

  
});


module.exports = Navbar;