(function () {
  var React = require('react/addons');
  var injectTapEventPlugin = require('react-tap-event-plugin');

  //import React Router
  var Router   = require('react-router');
  var Route    = Router.Route;
  var Redirect = Router.Redirect;

  //import custom views
  var Main     = require('./components/main.jsx'),
      Home     = require('./components/home/home.jsx'),
      Notice   = require('./components/notice/notice.jsx'),
      Calendar = require('./components/calendar/calendar.jsx'),
      Leaves   = require('./components/leaves/leaves.jsx'),
      Search   = require('./components/search/search.jsx'),
      Tools    = require('./components/tools/tools.jsx');

  //DBUG FLAG
  var DEBUG = require('./js/debug');

  //Needed for React Developer Tools
  if (DEBUG) window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();


  var routes = (
    <Route path="/" handler={Main}>

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