var React = require('react');

var mui = require('material-ui');
var List = mui.List;
var ListItem = mui.ListItem;

var LeaveData = require('../mixins/ffn-data-leave.jsx');

var Icon = require('../ffn-icon.jsx');

module.exports = React.createClass({

  mixins : [LeaveData],

  contextTypes : {
      router : React.PropTypes.func.isRequired,
  },

  _onClick : function(leaveId, event) { //直接導向內容 #type/:id
    var log = this.getLeaveData({
      debug : true,
      debugOutput : '正在取得'+leaveId+'的資料'
    });

    return console.warn(log);
  },

  render : function() {

    return (
      <List>
        <ListItem leftIcon={<Icon type="home"   />} onTouchTap={this._onClick.bind(this, 123)}>123</ListItem>
        <ListItem leftIcon={<Icon type="leave"  />} onTouchTap={this._onClick.bind(this, 456)}>456</ListItem>
        <ListItem leftIcon={<Icon type="notice" />} onTouchTap={this._onClick.bind(this, 789)}>789</ListItem>
      </List>

    );
  }
});