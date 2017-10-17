var React = require("react");
var Lesson3_1_NumberMatch = require("./grandchildren/Lesson3_1_NumberMatch");

var Lesson3_1 = React.createClass({
	
	getInitialState() {
		return{
			num1: "",
			numWordOne: "",
		};
	},

	getButtonValue: function(num1){
		this.setState({num1:num1})
	},

	getNumWord: function(numWordOne){
		this.setState({numWordOne:numWordOne})
	},

	componentDidUpdate: function(prevProps, prevState) {
		console.log(prevProps, prevState);
		if(this.state.num1 === this.state.numWordOne){
			alert("it's a match!");
		}
	},

	render: function()
	{
		return(
	    	<Lesson3_1_NumberMatch 
	    		getButtonValue={this.getButtonValue}
	    		getNumWord={this.getNumWord}
	    	/>
	    );
	}
});



module.exports = Lesson3_1;