var React = require('react');

var mui = require('material-ui');
var Dialog = mui.Dialog;

//load configuations
var Configs = require('../config/config-form');
var supportFormTypes = Configs.types;                    //所有的Form Types
var defaultFormType = Object.keys(supportFormTypes)[0];  //Form Type 的第一個

//import custom modules
var Forms = require('./forms');


var Lightbox = React.createClass({
  getInitialState: function () {
      return {
          type : defaultFormType,
          lightboxTitle   : '',
          lightboxAction  : []
      };
  },

  show : function(option) {
      var lb = {
        type           :  option.type    || defaultFormType,
        lightboxTitle  :  option.title   || this.state.lightboxTitle,
      }
      this.setState(lb);
      this.refs.dialog.show();
  },

  render: function() {
      var type = (this.state.type in supportFormTypes) ? supportFormTypes[this.state.type] : supportFormTypes[defaultFormType] ;
      var Form = Forms[type];

      return (
        <Dialog className="lightbox" ref="dialog" title={this.state.lightboxTitle}>
            <Form />
        </Dialog>
      );
    },

    
  });

module.exports = Lightbox;

/**
        <Dialog
          title={this.state.lightboxTitle}
          ref="lightbox"
          modal={false}
          actions={this.state.lightboxAction}
        >
          <LightboxContent />
        </Dialog>

  _lightbox : function(option) {
      
  },


*/