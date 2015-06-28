(function () {
  var React = require('react/addons');
  var injectTapEventPlugin = require('react-tap-event-plugin');

  //import React Router
  var Router   = require('react-router');
  var Route    = Router.Route;
  var Redirect = Router.Redirect;

  //import custom views
  var components = require('./components');

  var Main     = components.Main,
      Home     = components.Home,
      Notice   = components.Notice,
      Calendar = components.Calendar,
      Leaves   = components.Leaves,
      Search   = components.Search,
      Tools    = components.Tools;

  var routes   = (
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

  //DBUG FLAG
  var DEBUG = require('./components/debug/debug.jsx');

  if (DEBUG) { 
    //Needed for React Developer Tools
    window.React = React;
    var DebugPage = components.DebugPage,
        DefaultRoute = Router.DefaultRoute;

    
    routes   = ( //增加debug頁, 拔除redirect方便檢查path是否給錯
      <Route path="/" handler={Main}>

          <DefaultRoute          name="home"     handler={Home} />
          <Route path="notice"   name="notice"   handler={Notice} />
          <Route path="calendar" name="calendar" handler={Calendar} />
          <Route path="leaves"   name="leaves"   handler={Leaves} />
          <Route path="search"   name="search"   handler={Search}>
            <Route path="result/:resultId" handle={Search} />
          </Route>
          <Route path="tools"    name="tools"    handler={Tools} />
          <Route path="debug"    name="debug"    handler={DebugPage} />
      </Route>
    );
  }

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root />, document.body);
  });

})();