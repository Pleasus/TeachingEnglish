var React = require("react");
var Lesson3_1_NumberMatch = require("./grandchildren/Lesson3_1_NumberMatch");

var Lesson3_1 = React.createClass({
	
	getInitialState: function() {
		return{
			num1: "",
			button1Name: "",
			numWordOne: "",			
			buttonOneName: ""
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
			{/*this.state.button1Name.attr("disable");
			this.state.buttonOneName.attr("disable");*/}
			this.state.button1Name.setAttribute("disabled", "disabled");
			this.state.buttonOneName.setAttribute("disabled", "disabled");
			alert("it's a match!");
		}
	},

	getButtonName1: function(name){
		this.setState({
			button1Name:name
		});
	},

	getButtonName2: function(name){		
		this.setState({
			buttonOneName:name
		});
	},

	render: function()
	{
		return(
	    	<Lesson3_1_NumberMatch 
	    		getButtonValue={this.getButtonValue}
	    		getNumWord={this.getNumWord}
	    		getButtonName1={this.getButtonName1}
	    		getButtonName2={this.getButtonName2}
	    	/>
	    );
	}
});



module.exports = Lesson3_1;