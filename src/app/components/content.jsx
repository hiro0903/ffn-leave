/**
 * 主要顯示資料view的 container
 * @module content.jsx
 */

var React = require('react');
var Content = React.createClass({

render: function() {

    return (
      <section className="content-area">
          {this.props.children}
      </section>
    );
  },

  
});


module.exports = Content;