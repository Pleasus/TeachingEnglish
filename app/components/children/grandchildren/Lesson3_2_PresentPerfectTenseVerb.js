var React = require("react");
var presperfverbsarray = require("../../../api/presperfverbsarray");


var Lesson3_2_PresentPerfectTenseVerb = React.createClass({
	render: function() {
		return(
				<div>	
				{this.props.present}
				</div>
		);
	}
});

module.exports = Lesson3_2_PresentPerfectTenseVerb;