var React = require('react');

var ajax = require('jquery').ajax;

module.exports = {
  childContextTypes: {
    ffnData : React.PropTypes.func
  },

  getChildContext: function() {
    return {
      ffnData: this._query
    };
  },

  componentDidMount: function() {
    //TODO: load local storage data

    console.warn('ffnData - componentDidMount...');
  },

  componentWillUnmount: function() {
    //TODO: stored unsaved data

    console.warn('ffnData - componentWillUnmount...');
  },

  _query : function(type, option, callback) {
    ajax({
      url : '/debug_json',
      type: 'json',
      method: 'get',
      done : function() { console.log('ajax done') },
      success : function(d) { console.dir(d) },
      error : function(e) { console.error(e) }
    });

    if (option.debug) return option.debugOutput; 
  },


};
