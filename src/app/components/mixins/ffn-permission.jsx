/**
 *
 * Mixin Component - this.state.permissions 
 *
 * Child Component - this.context.Permission
 */

var React = require('react');

var permissionList = require('../../config/config-permission');
module.exports = {
  childContextTypes: {
      Permission : React.PropTypes.object
  },

  getChildContext: function() {
    permissionList.hasPermission = this._checkPermission;
    return {
        Permission : permissionList
    };
  },

  getInitialState: function () {
      var ffn = window.FFN || {},
          permissions = ffn.permissions || {};
      return {
          permissions :  permissions
      };
  },

  _checkPermission : function(name) {
      return this.state.permissions[name] === 1;
  },

};

/**
  pseudo code:

    React.createClass({
        contextTypes : {
            Permission : React.PropTypes.object.isRequired
        },

        _anyFunc : function() {
            var create_leave = this.context.Permission.CREATE_LEAVE_FORM;         //CREATE_LEAVE_FORM, CREATE_EVENT_FORM, CREATE_NOTICE  

            var can_create = this.context.Permission.hasPermission(create_leave); //Boolean

        }

    })

*/
