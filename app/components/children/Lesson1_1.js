var React = require("react");
var flashcards = require("../../api/flashcards");


var Lesson1_1 = React.createClass({
	
	// flashcards.forEach(
	// 	element => console.log(flashcards.solution);
	// );

	render: function() {
		return(
			<div>
				{flashcards.map(function(element,i) {
				 		return (
							<div key={i}>
								{element.image},
								{element.solution}
							</div>	
						);
				 	})
				}
			</div>
		);
	}
});


module.exports = Lesson1_1;