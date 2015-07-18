var React = require('react');
var LeaveCollection = require('../../data/collections/collection-leave.jsx');

module.exports = {


  contextTypes : {
      ffnData : React.PropTypes.func.isRequired,
  },

  getLeaveData : function(option){
      return this.context.ffnData('leave', option)
  },

  getInitialState: function () {
      window.testCol = LeaveCollection;
      return {};
  },


};
