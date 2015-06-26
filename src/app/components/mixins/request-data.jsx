var React = require('react');
var ajax = require('jquery').ajax;

module.exports = {
  childContextTypes: {
    requestData : React.PropTypes.func
  },

  getChildContext: function() {
    return {
      requestData: this._query
    };
  },

  componentDidMount: function() {
    //TODO: load local storage data
  },

  componentWillUnmount: function() {
    //TODO: stored unsaved data
  },

  _query : function(type, option) {

  },


};
