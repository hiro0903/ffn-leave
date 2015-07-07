/**
 * Header 上的公司logo
 * @module logo.jsx
 */

var React = require('react');
var mui = require('material-ui');

var Config = require('../../config/config-header').logo;

var Logo = React.createClass({
  getDefaultProps: function () {
      return {
          src   : Config.src,
          alt   : Config.alt,
          title : Config.title
      };
  },

  render: function() {
    return (
        <img className="logo" src={this.props.src} alt={this.props.alt} title={this.props.title} />
    );
  },

  
});

module.exports = Logo;