var React = require("react");
var verbsarray = require("../../../api/verbsarray");

var Lesson3_1_EnteredVerb = React.createClass({

	getInitialState() {
		return {
            score: 0,
            streak: 0,
            randomVerb: verbsarray[Math.floor(Math.random() * verbsarray.length)],
            enteredVerb: ""
		}
	},

	handleSubmit: function(event) {
		event.preventDefault();
		this.props.setVerb(this.state.enteredVerb);
		},

	render: function() {
		return(

			<form onCLick={this.handleSubmit}>
		       <input value={this.state.enteredVerb} type="text" placeholder="Past Tense">
		        </input>
		        <button type="submit">enter</button>
		    </form>

		);
	}
});

module.exports = Lesson3_1_EnteredVerb;
