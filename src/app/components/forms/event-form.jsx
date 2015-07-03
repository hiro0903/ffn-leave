var React = require('react');
var mui = require('material-ui');
var TextField = mui.TextField;
var SelectField = mui.SelectField;
var DatePicker = mui.DatePicker;
var TimePicker = mui.TimePicker;

var LeaveForm = React.createClass({
  getInitialState: function () {
      return {
          form : {
              type : ''
          }
      };
  },

  contextTypes : {
      leaveTypes : React.PropTypes.array
  },

  componentWillMount: function () {
        
  },

  toJSON : function() {
    return {};
  },

  _handleChange : function(type, ref ) {
      var field = this.refs[ref];
      console.dir(arguments);
      debugger;
  },

  _parseLeaveItems : function(items) {

      return items;
  },

  render: function() {
    var styleDatePicker = {
        float : 'left',
        width : '50%'
    }

    return (
      <div className="leave-form">
        <SelectField
          ref="leaveType"
          floatingLabelText = '假別'
          value={this.state.form.type}
          onChange={this._handleChange.bind(this, 'leave-type', 'leaveType')}
          menuItems={this._parseLeaveItems(this.context.leaveTypes)}
          fullWidth={true}
        />
        <TextField 
          floatingLabelText = '理由'
          multiLine = {true}
          fullWidth={true}
        />

        <DatePicker ref="date1" hintText="開始日期" mode="landscape" style={styleDatePicker} />
        <TimePicker ref="time1" hintText="開始時間" />
        <DatePicker ref="date2" hintText="結束日期" mode="landscape" style={styleDatePicker} />
        <TimePicker ref="time2" hintText="結束時間" />

      </div>
    );
  },

  
});


module.exports = LeaveForm;