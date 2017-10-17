var React = require("react");
var presperfverbsarray = require("../../../api/presperfverbsarray");

var Lesson3_2_EnteredVerb = React.createClass({

	getInitialState() {
		return {
            score: 0,
            streak: 0,
            randomVerb: presperfverbsarray[Math.floor(Math.random() * presperfverbsarray.length)],
            enteredVerb: ""
		}
	},

	handleSubmit: function(event) {
		event.preventDefault();
		this.props.setVerb(this.state.enteredVerb);
		this.setState({
				enteredVerb: ""
			})
		},

	render: function() {
		return(
			<form onSubmit={this.handleSubmit}>
		       <input value={this.state.enteredVerb} 
		       type="text"
		       placeholder="Present Perfect Tense"
		       onChange={e => this.setState({enteredVerb: e.target.value})}
		       />
		        <button type="submit">enter</button>
		    </form>

		);
	}
});

module.exports = Lesson3_2_EnteredVerb;
