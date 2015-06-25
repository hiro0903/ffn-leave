(function () {
  var React = require('react/addons');
  var injectTapEventPlugin = require('react-tap-event-plugin');
  var Main = require('./components/main.jsx'); // Our custom react component


  //import React Router
  var Router = require('react-router');
  var Route = Router.Route;
  var RouteHandler = Router.RouteHandler;
  
  var Redirect = Router.Redirect;
  var Navigation = Router.Navigation;

//
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;

//import custom views
  var Home     = require('./components/home/home.jsx'),
      Notice   = require('./components/notice/notice.jsx'),
      Calendar = require('./components/calendar/calendar.jsx'),
      Leaves   = require('./components/leaves/leaves.jsx'),
      Search   = require('./components/search/search.jsx'),
      Tools    = require('./components/tools/tools.jsx');



  //Needed for React Developer Tools
  window.React = React;

  window.FFN = {};

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // Render the main app react component into the document body. 
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  
  var App = React.createClass({
      mixins: [Navigation],

      childContextTypes: {
        muiTheme: React.PropTypes.object,
      },

      getChildContext: function() {
        return {
          muiTheme: ThemeManager.getCurrentTheme(),
        };
      },

      componentWillMount: function() {
          ThemeManager.setPalette({
            accent1Color: Colors.deepOrange500
          });
      },

      render : function() {
        return (
            <Main>
                <RouteHandler/>
            </Main>
        );
      }
  });

  var routes = (
    <Route path="/" handler={App}>

        <Route path="home"     name="home"     handler={Home} />
        <Route path="notice"   name="notice"   handler={Notice} />
        <Route path="calendar" name="calendar" handler={Calendar} />
        <Route path="leaves"   name="leaves"   handler={Leaves} />
        <Route path="search"   name="search"   handler={Search}>
          <Route path="result/:resultId" handle={Search} />
        </Route>
        <Route path="tools"    name="tools"    handler={Tools} />

        <Redirect to="home" />
    </Route>
  );

  Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root />, document.body);
  });

})();