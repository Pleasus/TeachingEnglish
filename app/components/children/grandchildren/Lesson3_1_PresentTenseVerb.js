var React = require("react");
var verbsarray = require("../../../api/verbsarray");


var Lesson3_1_PresentTenseVerb = React.createClass({
	render: function() {
		return(
				<div>	
				{this.props.present}
				</div>
		);
	}
});

module.exports = Lesson3_1_PresentTenseVerb;