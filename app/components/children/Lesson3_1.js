var React = require("react");



var Lesson3_1 = React.createClass({
	
	getInitialState: function() {
		return{
			num: 0,
			buttonA: "",
			text: "",
			buttonB: "",
			disabledButton: []			
		};
	},

	handleNumButton: function(event) {
	    var buttonClick = event.target.value;
	    var btn = this.refs.btn;
	    this.setState({
	    	num: buttonClick
	    });
	    this.setState({
	    	buttonA: btn
	    });
	},

  	handleTextButton: function(event) {
	    var buttonClick = event.target.value;
	    var btn = this.refs.btn;
	    this.setState({
	    	text: buttonClick
	    });
	    this.setState({
	    	buttonB: btn
	    });
	},

	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.num === this.state.text) {
			alert("Match!");
			var newDisabledButtonArray = this.state.disabledButton;
			newDisabledButtonArray.push(this.state.text);			
			this.setState({
				disabledButton: newDisabledButtonArray
			});
			this.setState({
				num: 0
			});
			this.setState({
				text: ""
			});
			this.setState({
				buttonA: ""
			});
			this.setState({
				buttonB: ""
			});
		}
	},

	render: function() {
	    return (
	      
	      <div>
	        <div className="wideBox well">
	          <h1>1.3 Match the Numerals</h1>
	          <h4>Click the number and the correct word</h4>          
	        </div>

	        <div className="container-fluid whiteBox">
	          <div className="row" id="content">
	            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
	              <button ref="btn" name="1" value="one" className="btn btn-lg btn-success numeral" disabled={this.state.disabledButton.includes("one")} onClick={this.handleNumButton}>1</button>
	              <button ref="btn" name="2" value="two" className="btn btn-lg btn-success numeral" disabled={this.state.disabledButton.includes("two")} onClick={this.handleNumButton}>2</button>
	              <button ref="btn" name="3" value="three" className="btn btn-lg btn-success numeral" disabled={this.state.disabledButton.includes("three")} onClick={this.handleNumButton}>3</button>
	              <button ref="btn" name="4" value="four" className="btn btn-lg btn-success numeral" disabled={this.state.disabledButton.includes("four")} onClick={this.handleNumButton}>4</button>
	              <button ref="btn" name="5" value="five" className="btn btn-lg btn-success numeral" disabled={this.state.disabledButton.includes("five")} onClick={this.handleNumButton}>5</button>
	              <button ref="btn" name="6" value="six" className="btn btn-lg btn-success numeral" disabled={this.state.disabledButton.includes("six")} onClick={this.handleNumButton}>6</button>
	              <button ref="btn" name="7" value="seven" className="btn btn-lg btn-success numeral" disabled={this.state.disabledButton.includes("seven")} onClick={this.handleNumButton}>7</button>
	              <button ref="btn" name="8" value="eight" className="btn btn-lg btn-success numeral" disabled={this.state.disabledButton.includes("eight")} onClick={this.handleNumButton}>8</button>
	              <button ref="btn" name="9" value="nine" className="btn btn-lg btn-success numeral" disabled={this.state.disabledButton.includes("nine")} onClick={this.handleNumButton}>9</button>
	              <button ref="btn" name="10" value="ten"  className="btn btn-lg btn-success numeral" disabled={this.state.disabledButton.includes("ten")} onClick={this.handleNumButton}>10</button>
	            </div>
	            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
	              <button ref="btn" name="one" value="one" className="btn btn-lg btn-light numWord" disabled={this.state.disabledButton.includes("one")} onClick={this.handleTextButton}>one</button>
	              <button ref="btn" name="two" value="two" className="btn btn-lg btn-light numWord" disabled={this.state.disabledButton.includes("two")} onClick={this.handleTextButton}>two</button>
	              <button ref="btn" name="three" value="three" className="btn btn-lg btn-light numWord" disabled={this.state.disabledButton.includes("three")} onClick={this.handleTextButton}>three</button>
	              <button ref="btn" name="four" value="four" className="btn btn-lg btn-light numWord" disabled={this.state.disabledButton.includes("four")} onClick={this.handleTextButton}>four</button>
	              <button ref="btn" name="five" value="five" className="btn btn-lg btn-light numWord" disabled={this.state.disabledButton.includes("five")} onClick={this.handleTextButton}>five</button>
	              <button ref="btn" name="six" value="six" className="btn btn-lg btn-light numWord" disabled={this.state.disabledButton.includes("six")} onClick={this.handleTextButton}>six</button>
	              <button ref="btn" name="seven" value="seven" className="btn btn-lg btn-light numWord" disabled={this.state.disabledButton.includes("seven")} onClick={this.handleTextButton}>seven</button>
	              <button ref="btn" name="eight" value="eight" className="btn btn-lg btn-light numWord" disabled={this.state.disabledButton.includes("eight")} onClick={this.handleTextButton}>eight</button>
	              <button ref="btn" name="nine" value="nine" className="btn btn-lg btn-light numWord" disabled={this.state.disabledButton.includes("nine")} onClick={this.handleTextButton}>nine</button>
	              <button ref="btn" name="ten" value="ten" className="btn btn-lg btn-light numWord" disabled={this.state.disabledButton.includes("ten")} onClick={this.handleTextButton}>ten</button>
	            </div>	              
	          </div>
	        </div>
	      </div>
	    );
	}
});



module.exports = Lesson3_1;