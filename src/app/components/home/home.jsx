var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var List = mui.List;
var ListItem = mui.ListItem;
var ListDivider = mui.ListDivider;

module.exports = React.createClass({
  
  render : function() {
    return (
      <Paper>
        <List subheader="Dashboard">
          <ListItem>Inbox</ListItem>
          <ListItem>Starred</ListItem>
          <ListItem>Sent mail</ListItem>
          <ListItem>Drafts</ListItem>
        </List>

        <ListDivider inset={false} />

        <List>
          <ListItem secondaryText='hi'>All mail</ListItem>
          <ListItem>Trash</ListItem>
          <ListItem>Spam</ListItem>
          <ListItem>Follow up</ListItem>
        </List>
      </Paper>
    );
  }
});