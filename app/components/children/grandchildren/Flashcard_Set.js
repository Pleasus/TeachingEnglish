var React = require("react");

var Flashcard_Set = React.createClass({

	showHideBtn: function(event) {
		var showButton = event.target.value;
		this.props.getShowValue(showButton);
	},

	render: function() {
		var self=this;
		var divStyle={
			visibility: "hidden"
		};
		return(
			<div className="row">
				{this.props.flashcardSets.map((function(element,i) {
				 	return (
						<div className="col col-md-6">

							<div>
								<img src={element.image} width="350px" height="350px" className="img-thumbnail"/>
							</div>

							<div>
								<button type="button" className="btn btn-success btn-sm btn-block" value="Show" onClick={self.showHideBtn}>Show/Hide Definition</button>
							</div>

							<div input className="form-control form-control-lg" type="text" style={divStyle}>
								{element.solution}
							</div>
						</div>

					);
				}).bind(this))}
			</div>
		);
	}
});


module.exports = Flashcard_Set;