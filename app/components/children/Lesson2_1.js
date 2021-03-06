var React = require("react");
var flashcards = require("../../api/flashcards");
var GreatGrandFlashcards = require("./grandchildren/greatGrandChildren/GreatGrandFlashcards.js");

var Lesson2_1 = React.createClass({

	getInitialState: function() {
		return {
			flashcardSets: flashcards,
			showResults: false,
			solution: "",
		};
	},

	showHideBtn: function(element) {
		var el = element;
		console.log(el);
		this.setState({showResults: true});
		this.setState({solution: el.solution});
	},

    displaySolution: function()
	{
		return (
	        <GreatGrandFlashcards
		        solution={this.state.solution}
            />
		);
	},

    componentDidUpdate:function()
	{
	},

	render: function() {

		return(
			<div className="row">
				<div className="wideBox well">
		          <h1>1.2 Reveal The Fruit</h1>
		          <h4>Click the button and reveal the word</h4>          
	        	</div>
				{this.state.flashcardSets.map((function(element,i) {

				 	return (
						<div key={i+1} className="col-md-6">
                            <div className="row">
							    <div>
								    <img src={element.image} width="300px" height="300px"
								    className="img-thumbnail"/>
							    </div>

							    <div>
								    <button
								        className="flashcardButton btn btn-success"
								    	onClick={(function() {
										    this.showHideBtn(element);
									    }).bind(this)}>Show
								    </button>
							    </div>
                                {this.state.showResults && this.state.solution === element.solution ? this.displaySolution() : ""}
							</div>
						</div>
					);
				}).bind(this))}
			</div>
		);
	}
});


module.exports = Lesson2_1;
