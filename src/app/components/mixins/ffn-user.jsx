var React = require('react');

var DEFAULT_VALUES = require('../../config/config-user').DEFAULT_VALUES;

var user;
module.exports = {
  childContextTypes: {
      User : React.PropTypes.object
  },

  componentWillMount: function () {
      user = {  //React 提示說這邊已經auto bind this
          isLogin   : this._isLogin, //.bind(this),
          getId     : this._getId,   //.bind(this),
          getName   : this._getName, //.bind(this),
          getLang   : this._getLang, //.bind(this)
      };
  },

  getChildContext: function() {
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

  _getId : function() {
      return (this.state.user.id);
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
