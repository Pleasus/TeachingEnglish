var React = require("react");
var verbsarray = require("../../api/verbsarray");


var Lesson3_1 = React.createClass({

    // getVerb() {
    //     {this.state.randomVerb.present}
    //     },

    getInitialState: function() { 	
        return {
            score: 0,
            streak: 0,
            randomVerb: verbsarray[Math.floor(Math.random() * verbsarray.length)],
        };

    },

	render: function() {
			console.log(this.state.randomVerb.present);
        	return(
	        	<div className="grammarBanger">
		          	<div className="instructions">
		              	<h1>Test Your Knowledge of Past Tense Verbs</h1>
		          	</div>
		          	<div className="go">
		              <button onClick={this.getVerb}>GO!</button>
		          	</div>
		          	<div className="presentTenseVerb">

		          	</div>
		          	<div className="header">
		              <form>
		                  <input placeholder="Past Tense">
		                  </input>
		                  <button type="submit">enter</button>
		              </form>
		            </div>
		            <div className="score">
		                Score:<br/><br/>
		                Streak:
		            </div>
		       </div>

        	);
		}  
	});

module.exports = Lesson3_1;