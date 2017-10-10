// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Lesson1_1 = require("../components/children/Lesson1_1");
var Lesson2_1 = require("../components/children/Lesson2_1");
var Lesson3_1 = require("../components/children/Lesson3_1");
var Lesson4_1 = require("../components/children/Lesson4_1");
var Lesson1_2 = require("../components/children/Lesson1_2");
var Lesson2_2 = require("../components/children/Lesson2_2");
var Lesson3_2 = require("../components/children/Lesson3_2");
var Lesson4_2 = require("../components/children/Lesson4_2");
var Lesson1_3 = require("../components/children/Lesson1_3");
var Lesson2_3 = require("../components/children/Lesson2_3");
var Lesson3_3 = require("../components/children/Lesson3_3");
var Lesson4_3 = require("../components/children/Lesson4_3");
// var GrandChild1 = require("../components/children/grandchildren/GrandChild1");
// var GrandChild2 = require("../components/children/grandchildren/GrandChild2");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      {/* If user selects Lesson1_1 then show the appropriate component*/}
      <Route path="Lesson1_1" component={Lesson1_1} />
      {/* If user selects Lesson2_1 then show the appropriate component*/}
      <Route path="Lesson2_1" component={Lesson2_1} />
      {/* If user selects Lesson3_1 then show the appropriate component*/}
      <Route path="Lesson3_1" component={Lesson3_1} />
      {/* If user selects Lesson3_1 then show the appropriate component*/}
      <Route path="Lesson4_1" component={Lesson4_1} />
      {/* If user selects Lesson1_2 then show the appropriate component*/}
      <Route path="Lesson1_2" component={Lesson1_2} />
      {/* If user selects Lesson2_2 then show the appropriate component*/}
      <Route path="Lesson2_2" component={Lesson2_2} />
      {/* If user selects Lesson3_2 then show the appropriate component*/}
      <Route path="Lesson3_2" component={Lesson3_2} />
      {/* If user selects Lesson4_2 then show the appropriate component*/}
      <Route path="Lesson4_2" component={Lesson4_2} />
      {/* If user selects Lesson1_3 then show the appropriate component*/}
      <Route path="Lesson1_3" component={Lesson1_3} />
      {/* If user selects Lesson2_3 then show the appropriate component*/}
      <Route path="Lesson2_3" component={Lesson2_3} />
      {/* If user selects Lesson3_3 then show the appropriate component*/}
      <Route path="Lesson3_3" component={Lesson3_3} />
      {/* If user selects Lesson4_3 then show the appropriate component*/}
      <Route path="Lesson4_3" component={Lesson4_3} />
      {/* If user selects any other path... we get the Home Route */}
      {/*<IndexRoute component={Child1} />*/}

    </Route>
  </Router>
	
);