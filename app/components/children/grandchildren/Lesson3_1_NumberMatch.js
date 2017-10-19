var React = require("react");
var Lesson3_1_NumberMatch = React.createClass({
  
  handleButton1: function(event) {
    var buttonClick = event.target.value;
    this.props.getButtonValue(buttonClick)
    var btn = this.refs.btn;
    this.props.getButtonName1(btn);
  },

  handleButtonOne: function(event) {
    var buttonClick = event.target.value;
    this.props.getNumWord(buttonClick)
    var btn = this.refs.btnOne;
    this.props.getButtonName2(btn);
  },

    handleButton2: function(event) {
    var buttonClick = event.target.value;
    this.props.getButtonValue(buttonClick)
    var btn = this.refs.btn2;
    this.props.getButtonName2(btn);
  },

  handleButtonTwo: function(event) {
    var buttonClick = event.target.value;
    this.props.getNumWord(buttonClick)
    var btn = this.refs.btnTwo;
    this.props.getButtonNameTwo(btn);
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
              <button ref="btn" name="1" value="one" className="btn btn-lg btn-success numeral" onClick={this.handleButton1}>1</button>
              <button ref="btn2" name="2" value="two" className="btn btn-lg btn-success numeral" onClick={this.handleButton1}>2</button>
              <button value="three" className="btn btn-lg btn-success numeral">3</button>
              <button value="four" className="btn btn-lg btn-success numeral">4</button>
              <button value="five" className="btn btn-lg btn-success numeral">5</button>
              <button value="six" className="btn btn-lg btn-success numeral">6</button>
              <button value="seven" className="btn btn-lg btn-success numeral">7</button>
              <button value="eight" className="btn btn-lg btn-success numeral">8</button>
              <button value="nine" className="btn btn-lg btn-success numeral">9</button>
              <button value="ten"  className="btn btn-lg btn-success numeral">10</button>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <button ref="btnOne" name="one" value="one" className="btn btn-lg btn-light numWord" onClick={this.handleButtonOne}>one</button>
              <button ref="btnTwo" name="two" value="two" className="btn btn-lg btn-light numWord" onClick={this.handleButtonOne}>two</button>
              <button value="three" className="btn btn-lg btn-light numWord">three</button>
              <button value="four" className="btn btn-lg btn-light numWord">four</button>
              <button value="five" className="btn btn-lg btn-light numWord">five</button>
              <button value="six" className="btn btn-lg btn-light numWord">six</button>
              <button value="seven" className="btn btn-lg btn-light numWord">seven</button>
              <button value="eight" className="btn btn-lg btn-light numWord">eight</button>
              <button value="nine" className="btn btn-lg btn-light numWord">nine</button>
              <button value="ten" className="btn btn-lg btn-light numWord">ten</button>
            </div>
              
          </div>
        </div>
      </div>
    );
  }
});

module.exports =  Lesson3_1_NumberMatch;