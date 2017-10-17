var React = require("react");
var presperfverbsarray = require("../../api/presperfverbsarray");
var Lesson3_2_PresentPerfectTenseVerb = require("./grandchildren/Lesson3_2_PresentPerfectTenseVerb");
var Lesson3_2_EnteredVerb = require("./grandchildren/Lesson3_2_EnteredVerb");

var Lesson3_2 = React.createClass({

	setVerb: function(verb) {
    	if(this.state.randomVerb.presentPerfect === verb){
    		this.setState({
    			score: this.state.score + 1,
    			streak: this.state.streak + 1,
    			randomVerb: presperfverbsarray[Math.floor(Math.random() * presperfverbsarray.length)]
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
            randomVerb: presperfverbsarray[Math.floor(Math.random() * presperfverbsarray.length)],
            enteredVerb: ""
        };

    },


	render: function() {
		return(
	    	<div className="grammarBanger">
		        <div className="instructions">
		            <h1>Test Your Knowledge of Present Perfect Tense Verbs</h1>
		            <h3>Answer in third person singular</h3>
		        </div>
		        <div className="presentTenseVerb">
		          	<Lesson3_2_PresentPerfectTenseVerb
		          		present = {this.state.randomVerb.present}/>
		        </div>
		        <div className="header">
		            <Lesson3_2_EnteredVerb setVerb={this.setVerb}/>

		        </div>
		        <div className="score">
		            Score: {this.state.score}<br/><br/>
		            Streak: {this.state.streak}
		        </div>
		    </div>
		);
	}
});

module.exports = Lesson3_2;
