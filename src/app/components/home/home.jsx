var React = require('react');
var mui = require('material-ui');
var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardTitle = mui.CardTitle;
var CardText = mui.CardText;

var Paper = mui.Paper;
var List = mui.List;
var ListItem = mui.ListItem;
var ListDivider = mui.ListDivider;
var Icon = require('../ffn-icon.jsx');

module.exports = React.createClass({
  
  render : function() {
    var containerStyle = {
          width : '100%',
          height: '100%'
        },
        firstColumnStyle = {
          width       : '50%',
          height      : '100%',
          paddingRight: '10px',
          float       : 'left',
          boxSizing   : 'border-box'
        },
        secondColumnStyle = {
          width       : '50%',
          height      : '100%',
          paddingLeft : '10px',
          float       : 'left',
          boxSizing   : 'border-box'
        },
        itemStyle = { 
          marginBottom    : '20px',
          width           : '100%'
        },
        headerStyle = {
          backgroundColor : '#F5F5F5'
        };

    return (
      <div style={containerStyle}>

        <div style={firstColumnStyle}>
            <Card style={itemStyle} className="dashboard-item">
              <CardHeader
                style={headerStyle}
                title="Event (6)"
                avatar={<Icon type="calendar" />}/>
              <CardText>
                <List>
                  <ListItem leftIcon={<Icon type="home" />}>Inbox</ListItem>
                  <ListItem leftIcon={<Icon type="shit" />}>Starred</ListItem>
                  <ListItem leftIcon={<Icon type="shit" />}>Sent mail</ListItem>
                  <ListItem leftIcon={<Icon type="shit" />}>Drafts</ListItem>
                </List>
              </CardText>
            </Card>   
            <Card style={itemStyle} className="dashboard-item">
              <CardHeader
                style={headerStyle}
                title="Notice (2)"
                avatar={<Icon type="notice" />}/>
              <CardText>
                <List>
                  <ListItem secondaryText="Posted on 2015/11/13 by HR">今日午休時間提前為 12:00 ~ 13:00 </ListItem>
                  <ListItem secondaryText="Posted on 2015/11/10 by HR">福委改選</ListItem>
                </List>
              </CardText>
            </Card>
        </div>
        
        <div style={secondColumnStyle}>
            <Card style={itemStyle} className="dashboard-item">
              <CardHeader
                style={headerStyle}
                title="Notice (2)"
                avatar={<Icon type="notice" />}/>
              <CardText>
                <List>
                  <ListItem secondaryText="Posted on 2015/11/13 by HR">今日午休時間提前為 12:00 ~ 13:00 </ListItem>
                  <ListItem secondaryText="Posted on 2015/11/10 by HR">福委改選</ListItem>
                </List>
              </CardText>
            </Card>

            <Card style={itemStyle} className="dashboard-item">
              <CardHeader
                style={headerStyle}
                title="Notice (2)"
                avatar={<Icon type="notice" />}/>
              <CardText>
                <List>
                  <ListItem secondaryText="Posted on 2015/11/13 by HR">今日午休時間提前為 12:00 ~ 13:00 </ListItem>
                  <ListItem secondaryText="Posted on 2015/11/10 by HR">福委改選</ListItem>
                </List>
              </CardText>
            </Card>
        </div>

      </div>
      /**
      <Paper>
        <List subheader="Dashboard">
          <ListItem leftIcon={<Icon type="home" />}>Inbox</ListItem>
          <ListItem leftIcon={<Icon type="shit" />}>Starred</ListItem>
          <ListItem leftIcon={<Icon type="shit" />}>Sent mail</ListItem>
          <ListItem leftIcon={<Icon type="shit" />}>Drafts</ListItem>
        </List>

        <ListDivider inset={false} />

        <List>
          <ListItem secondaryText='hi'><Icon type="rocket" />All mail</ListItem>
          <ListItem secondaryText='hi'><Icon type="trash" />Trash</ListItem>
          <ListItem secondaryText='hi'><Icon type="lock" />Spam</ListItem>
          <ListItem secondaryText='hi'><Icon type="logout" />Follow up</ListItem>
        </List>
      </Paper>

      **/
    );
  }
});