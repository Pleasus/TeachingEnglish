var React = require("react");
var flashcards = require("../../api/flashcards");
var FlashcardSet = require("./grandchildren/Flashcard_Set");


var Lesson1_1 = React.createClass({


	render: function() {
		var flashcardSets = [[flashcards[0], flashcards[1]],[flashcards[2], flashcards[3]],[flashcards[4], flashcards[5]]];
		return(
			<div className="container-fluid">
				{flashcardSets.map(function(element,i) {
				 		return (
							<FlashcardSet flashcardSet={element}/>
						);
				 	})
				}
			</div>
		);
	}
});


module.exports = Lesson1_1;