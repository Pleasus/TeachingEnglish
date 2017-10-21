var React = require("react");
var flashcards = require("../../api/flashcards");
var FlashcardSet = require("./grandchildren/Flashcard_Set");


var Lesson1_1 = React.createClass({

	getInitialState: function () {
		return{
			showBtn: "",
			flashcardSets: flashcards,
			solValue: "",
		};
	},

	getShowValue: function(showButton){
		this.setState({showBtn:showButton})
	},

	getSolValue: function(solutionValue){
		this.setState({solValue:solutionValue})
	},

	render: function() {
		return(
			<div className="container-fluid">
				<FlashcardSet 
				flashcardSets={this.state.flashcardSets}
				getShowValue={this.getShowValue}
				/>
			</div>
		);
	}
	
});


module.exports = Lesson1_1;