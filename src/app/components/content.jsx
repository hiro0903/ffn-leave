var React = require('react');
var Content = React.createClass({

render: function() {

    var containerStyle = {
        overflow: 'scroll-Y',
        display: 'block',
        right : '0px',
        bottom: '0px'
    };

    return (
      <div className="content" style={containerStyle}>
          {this.props.children}
      </div>
    );
  },

  
});


module.exports = Content;