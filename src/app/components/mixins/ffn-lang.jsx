var React = require('react');

var Config = require('../../config/config-lang');

var mLang = {};

module.exports = {

  childContextTypes: {
      lang : React.PropTypes.object
  },

  getChildContext: function() {
      return {
          lang : mLang
      };
  },

  getInitialState: function () {
      var ffn = window.FFN || {};
      mLang = ffn.lang  || {};

      return {};
  },

  componentWillUpdate: function (nextProps, nextState) {
      if (nextState.user.lang !== this.state.user.lang) this._updateLangPack();
  },

  _updateLangPack : function() {
      console.warn('還沒做更新語言包的部份!!!');
  }

};

/**
  pseudo code:

    React.createClass({
        contextTypes : {
            Lang : React.PropTypes.object.isRequired
        },

        _anyFunc : function() {
            var text_leave_form = this.context.Lang.forms['leave-form'];
        }

    })

*/
