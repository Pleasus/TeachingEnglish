var React = require("react");
var greatGrandFlashcards = require("./greatGrandChildren/greatGrandFlashcards");

var Flashcard_Set = React.createClass({

	showHideBtn: function(event) {
		var showButton = event.target.value;
		this.props.getShowValue(showButton);
	},

	solution: function(event) {
		var solutionValue = event.target.value;
		this.props.getSolValue(solutionValue);
		console.log(solutionValue)
	},

	render: function() {
		var self=this;
		
		return(
			<div className="row">
				{this.props.flashcardSets.map((function(element,i) {
				 	this.setState.bind({solution:element.solution})

				 	return (
						<div className="col col-md-6">

							<div>
								<img src={element.image} width="300px" height="300px" className="img-thumbnail"/>
							</div>

							<div>
								<button type="button" className="btn btn-success btn-sm btn-block" value="Show" onClick={this.showHideBtn}>Show</button>

							</div>
							<br/>

							<greatGrandFlashcards value={this.solution}/>
						</div>

					);
				}).bind(this))}
			</div>
		);
	}
});


module.exports = Flashcard_Set;