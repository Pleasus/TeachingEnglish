var React = require("react");

var greatGrandFlashcards = React.createClass({

	solution: function(event){
		var solutionValue = event.target.value;
		this.props.getSolValue(solutionValue);
		console.log(solutionValue)
	},

	render: function() {
		var divStyle={
			visibility: "hidden"
		};

		return(
			
			<div input className="form-control form-control-lg" type="text" style={divStyle}>
				{this.props.solution}
			</div>
		);
	}
});						

module.exports=greatGrandFlashcards;