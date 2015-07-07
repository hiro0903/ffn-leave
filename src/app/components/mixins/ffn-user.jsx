var React = require('react');

var DEFAULT_VALUES = require('../../config/config-user').DEFAULT_VALUES;

module.exports = {
  childContextTypes: {
      User : React.PropTypes.object
  },

  getChildContext: function() {

    var user = {
        isLogin : this._isLogin,
        getName : this._getName,
        getLang : this._getLang
    }

    return {
        User : user
    };
  },

  getInitialState: function () {
      var ffn = window.FFN || {},
          user = ffn.user  || {};

      return {
          user :  user
      };
  },

  _isLogin : function() {
      return (this.state.user.id > 0);
  },

  _getName : function() {
      return (this.state.user.name || DEFAULT_VALUES.name);
  },

  _getLang : function() {
      return (this.state.user.lang || DEFAULT_VALUES.lang);
  }

};

/**
  pseudo code:

    React.createClass({
        contextTypes : {
            User : React.PropTypes.object.isRequired
        },

        _anyFunc : function() {
            var username = this.context.User.getName();
        }

    })

*/
