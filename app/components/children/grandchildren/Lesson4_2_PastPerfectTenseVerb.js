var React = require("react");
var pastperfverbsarray = require("../../../api/pastperfverbsarray");


var Lesson4_2_PastPerfectTenseVerb = React.createClass({
	render: function() {
		return(
				<div>	
				{this.props.present}
				</div>
		);
	}
});

module.exports = Lesson4_2_PastPerfectTenseVerb;