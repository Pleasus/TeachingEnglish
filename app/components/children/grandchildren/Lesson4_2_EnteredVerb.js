var React = require("react");
var pastperfverbsarray = require("../../../api/pastperfverbsarray");

var Lesson4_2_EnteredVerb = React.createClass({

	getInitialState() {
		return {
            score: 0,
            streak: 0,
            randomVerb: pastperfverbsarray[Math.floor(Math.random() * pastperfverbsarray.length)],
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
		       placeholder="Past Perfect Tense"
		       onChange={e => this.setState({enteredVerb: e.target.value})}
		       />
		        <button type="submit">enter</button>
		    </form>

		);
	}
});

module.exports = Lesson4_2_EnteredVerb;
