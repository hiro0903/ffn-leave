var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

module.exports = React.createClass({
  
  render : function() {
    var containerStyle = {
        width    : '100%',
        height   : '100%',
        padding  : '20px'
    };

    return (
        <Paper style={containerStyle} zDepth={1} className="leaves">
          <div>休假囉~~~</div>
        </Paper>
    );
  }
});