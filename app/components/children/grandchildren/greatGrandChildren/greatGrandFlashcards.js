var React = require("react");
var flashcards = require("../../../../api/flashcards");

var greatGrandFlashcards = React.createClass({

	render: function() {
		
		return(
			
			<div className="form-control form-control-lg" type="text" >
				hello, please work.
				{this.props.solution}
			</div>
		);
	}
});						

module.exports = greatGrandFlashcards;