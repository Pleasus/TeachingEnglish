var React = require("react");
var verbsarray = require("../../../api/verbsarray");


var Lesson2_2_PresentTenseVerb = React.createClass({
	render: function() {
		return(
				<div>	
				{this.props.present}
				</div>
		);
	}
});

module.exports = Lesson2_2_PresentTenseVerb;