/**
 * Header 上的公司logo
 * @module logo.jsx
 */

var React = require('react');
var mui = require('material-ui');
var Logo = React.createClass({

  render: function() {
    return (
        <img className="logo" src="../img/ffn_logo_2014_site.jpg" alt="FriendFinder Network" />
    );
  },

  
});

module.exports = Logo;