var React = require("react");
var verbsarray = require("../../api/verbsarray");
var Lesson2_2_PresentTenseVerb = require("./grandchildren/Lesson2_2_PresentTenseVerb");
var Lesson2_2_EnteredVerb = require("./grandchildren/Lesson2_2_EnteredVerb");

var Lesson2_2 = React.createClass({

    setVerb: function(verb) {
    	if(this.state.randomVerb.past === verb){
    		this.setState({
    			score: this.state.score + 1,
    			streak: this.state.streak + 1,
    			randomVerb: verbsarray[Math.floor(Math.random() * verbsarray.length)]
    		})
    	} else {
    		this.setState({
    			streak: 0	
    		})
    		alert("Incorrect. Try Again!");
    	}
    },

    getInitialState: function() { 	
        return {
            score: 0,
            streak: 0,
            randomVerb: verbsarray[Math.floor(Math.random() * verbsarray.length)],
            enteredVerb: ""
        };

    },

	render: function() {
        	return(
	        	<div className="grammarBanger">
		          	<div className="instructions">
		              	<h1>Test Your Knowledge of Past Tense Verbs</h1>
		          	</div>
		          	<div className="presentTenseVerb">
		          		<Lesson2_2_PresentTenseVerb
		          		    present = {this.state.randomVerb.present}/>
		          	</div>
		          	<div className="header">
		              <Lesson2_2_EnteredVerb setVerb={this.setVerb}/>

		            </div>
		            <div className="score">
		                Score: {this.state.score}<br/><br/>
		                Streak: {this.state.streak}
		            </div>
		       </div>
        	);
		}  
	});



module.exports = Lesson2_2;
