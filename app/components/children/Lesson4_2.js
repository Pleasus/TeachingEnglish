var React = require("react");
var pastperfverbsarray = require("../../api/pastperfverbsarray");
var Lesson4_2_PastPerfectTenseVerb = require("./grandchildren/Lesson4_2_PastPerfectTenseVerb");
var Lesson4_2_EnteredVerb = require("./grandchildren/Lesson4_2_EnteredVerb");

var Lesson4_2 = React.createClass({

	setVerb: function(verb) {
    	if(this.state.randomVerb.pastPerfect === verb){
    		this.setState({
    			score: this.state.score + 1,
    			streak: this.state.streak + 1,
    			randomVerb: pastperfverbsarray[Math.floor(Math.random() * pastperfverbsarray.length)]
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
            randomVerb: pastperfverbsarray[Math.floor(Math.random() * pastperfverbsarray.length)],
            enteredVerb: ""
        };

    },


	render: function() {
	    return (
	    	<div className="grammarBanger">
		        <div className="instructions">
		            <h1>Test Your Knowledge of Past Perfect Tense Verbs</h1>
		            <h3>Answer in third person</h3>
		        </div>
		        <div className="presentTenseVerb">
		          	<Lesson4_2_PastPerfectTenseVerb
		          		present = {this.state.randomVerb.present}/>
		        </div>
		        <div className="header">
		            <Lesson4_2_EnteredVerb setVerb={this.setVerb}/>

		        </div>
		        <div className="score">
		            Score: {this.state.score}<br/><br/>
		            Streak: {this.state.streak}
		        </div>
		    </div>
	    );
	}
});

module.exports = Lesson4_2;
