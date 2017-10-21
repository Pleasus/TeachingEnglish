var React = require("react");
var flashcards = require("../../api/flashcards");
var greatGrandFlashcards = require("./grandchildren/greatGrandChildren/greatGrandFlashcards");

var Lesson1_1 = React.createClass({

	getInitialState: function() {
		return{
			flashcardSets: flashcards,
			showResults: false,
			solution: ""	
		}
	},

	showHideBtn: function(element) {
		this.setState({showResults: true});
		this.setState({solution: element.solution});
	},

	render: function() {
		
		return(
			<div className="row">
				{this.state.flashcardSets.map((function(element,i) {

				 	return (
						<div key={i+1} className="col col-md-6">

							<div>
								<img src={element.image} width="300px" height="300px" className="img-thumbnail"/>
							</div>

							<div>
								<button type="button" className="flashcardButton btn btn-success btn-sm btn-block" value="Show" 
									onClick={(function() {
										this.showHideBtn(element);
										}).bind(this)}>
									Show
								</button>
							</div>

								{this.state.showResults === false ? "" : <greatGrandFlashcards solution={this.state.solution}/>}

						</div>
					);
				}).bind(this))}
			</div>
		);
	}
	
});


module.exports = Lesson1_1;