var React = require('react');
var mui = require('material-ui');
var LeftNav = mui.LeftNav;


var Navbar = React.createClass({
  getDefaultProps: function () {
      return {
            navbarItems : [
              { route: 'home',     text: 'HOME'  },
              { route: 'notice',   text: '公告'   },
              { route: 'calendar', text: '行事曆' },
              { route: 'leaves',   text: 'Leaves' },
              { route: 'search',   text: '搜尋'   },
              { route: 'tools',    text: 'Tools'  }
            ],
            docked : true,
            hide   : false
      };
  },
  getInitialState: function () {
      return {
            selected : this.context.route ? this._getRouteIndex(this.context.route) : 0,
            hide : this.props.hide
      };
  },

  contextTypes : {
      route : React.PropTypes.string  //這邊還不確定backbone的route做法
  },

  _getRouteIndex: function(route) {
      var i = 0;
      this.props.navbarItems.forEach(function(item, idx) { i = (item.route === route ? idx : i); });
      return i;
  },  

  _onChange: function(e, index, item) {
      console.log(item.route + ' selected:');
  },

  render: function() {
    var navStyle = {
        width      : '180px',
        height     : '100%',
        paddingTop : '90px',
        position   : 'absolute',
        transform  : this.state.hide ? 'translate3d(-190px, 0px, 0px)' : 'translate3d(0px, 0px, 0px)',
        zIndex     : '9'
    };

    return (<LeftNav 
                ref="leftnav" 
                menuItems={this.props.navbarItems} 
                selectedIndex={this.state.selected} 
                onChange={this._onChange} 
                style={navStyle} 
                docked={this.props.docked}

            />);

/*

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

*/
  },

  
});


module.exports = Navbar;