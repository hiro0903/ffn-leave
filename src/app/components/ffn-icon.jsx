/** 
 * 完全從material ui 拔過來用, 未來再調整
 */

var React = require('react');
var mui = require('material-ui');
var StylePropable = mui.Mixins.StylePropable;
var Spacing = mui.Styles.Spacing;
var Transitions = mui.Styles.Transitions;

var FFNIcon = React.createClass({

  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    className: React.PropTypes.string,
    hoverColor: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      hovered: false,
    };
  },

  getStyles: function() {
    var theme = this.context.muiTheme.palette;
    var styles = {
      position: 'relative',
      fontSize: Spacing.iconSize + 'px',
      display: 'inline-block',
      userSelect: 'none',
      transition: Transitions.easeOut()
    };

    if (!styles.color && !this.props.className) {
      styles.color = theme.textColor;
    }

    return styles;
  },

  render: function() {
    var {
      onMouseOut,
      onMouseOver,
      style,
      className,
      ...other
    } = this.props;
    var cn = 'ffn-icon ' + (this.props.type || ''); 
    var hoverStyle = this.props.hoverColor ? {color: this.props.hoverColor} : {};

    return (
      <span
        {...other}
        className={cn}
        onMouseOut={this._handleMouseOut}
        onMouseOver={this._handleMouseOver}
        style={this.mergeAndPrefix(
          this.getStyles(),
          this.props.style,
          this.state.hovered && hoverStyle)} />
    );
  },

  _handleMouseOut: function(e) {
    this.setState({hovered: false});
    if (this.props.onMouseOut) {
      this.props.onMouseOut(e);
    }
  },

  _handleMouseOver: function(e) {
    this.setState({hovered: true});
    if (this.props.onMouseOver) {
      this.props.onMouseOver(e);
    }
  }
});

module.exports = FFNIcon;
