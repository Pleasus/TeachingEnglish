var React = require("react");

var Flashcard_Set = React.createClass({

	render: function() {
		return(
			<div className="row">
				{this.props.flashcardSet.map(function(element,i) {
				 		return (
							<div className="col col-md-6">

								<div>
									<img src={element.image} width="350px" height="350px" className="img-thumbnail"/>
								</div>

								<div>
									function(showHide)(
										console.log("showHide Working"));
									<button type="button" className="btn btn-primary btn-sm btn-block" value="Show" onclick={showHide}>Show/Hide Definition</button>
								</div>
									// click function here
								<div input className="form-control form-control-lg" type="text">
									{element.solution}
								</div>

							</div>
						);
				 	})
				}
			</div>
		);
	}
});


module.exports = Flashcard_Set;