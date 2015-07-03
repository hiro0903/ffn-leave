var React = require('react');
var mui = require('material-ui');
var TextField = mui.TextField;

var LoginForm = React.createClass({

  render: function() {

    return (
      <div className="login-form">

        <TextField 
          floatingLabelText = '帳號'
          multiLine = {false}
          fullWidth={true}
        />

        <TextField 
          floatingLabelText = '密碼'
          multiLine = {false}
          fullWidth={true}
        />

      </div>
    );
  }

  
});


module.exports = LoginForm;