var React = require('react');
var mui = require('material-ui');
var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardTitle = mui.CardTitle;
var CardText = mui.CardText;
var List = mui.List;
var ListItem = mui.ListItem;
var Avatar = mui.Avatar;

//用來確認css動畫結束後才換頁
var CssEvent = mui.Utils.CssEvent;


var Icon = require('../ffn-icon.jsx');

module.exports = React.createClass({
  contextTypes : {
      router : React.PropTypes.func.isRequired,
  },
  _onClick : function(type, id, event) { //直接導向內容 #type/:id
    var path = {
          'event'     : 'calendar',
          'notice'    : 'notice',
          'away'      : 'leaves',
          'leaves'    : 'leaves'
        }[type],
        domNode = event.currentTarget;  //currentTarget => 整個ListItem   target => 有可能會是avatar圖示之類沒有css效果的, 造成不觸發

    return CssEvent.onTransitionEnd( domNode, this.context.router.transitionTo.bind(this, path) );
  },
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
                  <ListItem leftIcon={<Icon type="home" />} secondaryText="All day"                            onTouchTap={this._onClick.bind(this, 'event', 0)}>My Birthday</ListItem>
                  <ListItem leftIcon={<Icon type="shit" />} secondaryText="10:00 ~ 12:00 in Mtg Room A"        onTouchTap={this._onClick.bind(this, 'event', 1)}>Week Status Mtg(SOC-2168 MKTG-7015 Affiliate Banner & Lander Farm Projects</ListItem>
                  <ListItem leftIcon={<Icon type="shit" />} secondaryText="13:00 ~ 14:00 in Second Floor Cafe" onTouchTap={this._onClick.bind(this, 'event', 2)}>Lunch with Nia, Miki and Dorian</ListItem>
                  <ListItem leftIcon={<Icon type="shit" />} secondaryText="15:00 ~ 17:00"                      onTouchTap={this._onClick.bind(this, 'event', 3)}>Meeting: News Letter</ListItem>
                  <ListItem leftIcon={<Icon type="shit" />} secondaryText="18:00 ~ 19:00"                      onTouchTap={this._onClick.bind(this, 'event', 4)}>Mtg SOC-1234</ListItem>
                  <ListItem leftIcon={<Icon type="shit" />} secondaryText="19:00 ~ 20:00"                      onTouchTap={this._onClick.bind(this, 'event', 5)}>Dinner with Family</ListItem>
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
                  <ListItem secondaryText="Posted on 2015/11/13 by HR" onTouchTap={this._onClick.bind(this, 'notice', 0)}>今日午休時間提前為 12:00 ~ 13:00 </ListItem>
                  <ListItem secondaryText="Posted on 2015/11/10 by HR" onTouchTap={this._onClick.bind(this, 'notice', 1)}>福委改選</ListItem>
                </List>
              </CardText>
            </Card>
        </div>
        
        <div style={secondColumnStyle}>
            <Card style={itemStyle} className="dashboard-item">
              <CardHeader
                style={headerStyle}
                title="今日請假概況 (5)"
                avatar={<Icon type="logout" />}/>
              <CardText>
                <List>
                  <ListItem secondaryText="10:00 ~ 19:00 (1 Day)"    leftAvatar={<Avatar>A</Avatar>} onTouchTap={this._onClick.bind(this, 'away', 0)}>Ailly Wu</ListItem>
                  <ListItem secondaryText="10:00 ~ 12:00 (0.25 Day)" leftAvatar={<Avatar>K</Avatar>} onTouchTap={this._onClick.bind(this, 'away', 1)}>Ken Chang</ListItem>
                  <ListItem secondaryText="10:00 ~ 19:00 (1 Day)"    leftAvatar={<Avatar>C</Avatar>} onTouchTap={this._onClick.bind(this, 'away', 2)}>Chris Chu</ListItem>
                  <ListItem secondaryText="11/12 ~ 11/14 (3 Day)"    leftAvatar={<Avatar>G</Avatar>} onTouchTap={this._onClick.bind(this, 'away', 3)}>Grass Liao</ListItem>
                  <ListItem secondaryText="10:00 ~ 19:00 (1 Day)"    leftAvatar={<Avatar>P</Avatar>} onTouchTap={this._onClick.bind(this, 'away', 4)}>Peter Lee</ListItem>
                </List>
              </CardText>
            </Card>

            <Card style={itemStyle} className="dashboard-item">
              <CardHeader
                style={headerStyle}
                title="假單 (3)"
                avatar={<Icon type="rocket" />}/>
              <CardText>
                <List>
                  <ListItem secondaryText={<div style={ { backgroundColor: '#CCF' } }>Approved</div>}  onTouchTap={this._onClick.bind(this, 'leaves', 0)}>我 的 年假: 2015/12/16 ~ 2015/12/19</ListItem>
                  <ListItem secondaryText={<div style={ { backgroundColor: '#FCA' } }>Pending</div>}   onTouchTap={this._onClick.bind(this, 'leaves', 1)}>Dorian 的 病假: 2015/11/12</ListItem>
                  <ListItem secondaryText={<div style={ { backgroundColor: '#F99' } }>Denied</div>}    onTouchTap={this._onClick.bind(this, 'leaves', 2)}>我 的 年假: 2015/12/18</ListItem>
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