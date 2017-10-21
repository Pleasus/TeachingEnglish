var React = require("react");

var GreatGrandFlashcards = React.createClass({

	render: function() {
        console.log(this.props.solution);
		return(

			<div className="flashcardButton form-control form-control-lg text-center" type="text">
				{this.props.solution}
			</div>
		);
	}
});

module.exports = GreatGrandFlashcards;
