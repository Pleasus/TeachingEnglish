var React = require("react");
var TestQuestions = require("../../api/TestQuestions.js");
var Test = require("./grandchildren/Test.js");
var Result = require("./grandchildren/Result.js");

var Lesson4_1 = React.createClass(
{
    getInitialState: function()
    {
        return {
            testQuestions: TestQuestions,
            testAnswers: [],
            answersCount: {
                corrects: 0,
                wrongs: 0,
                unanswers: 0
            },
            result: ""
        };
    },
    setResults: function(result, answersCount)
    {
        this.setState({ result: result });
        this.setState({ answersCount: answersCount });
    },
    renderTest: function()
    {
        return (
            <Test 
                testQuestions={this.state.testQuestions}
                setResults={this.setResults}
            />
        );
    },
    renderResult: function()
    {
        return (
            <Result 
                answersCount={this.state.answersCount}
                setResults={this.setResults}
            />
        );
    },
    render: function()
    {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="wideBox well">
                      <h1>1.4 Multiple Choice Questions</h1>
                      <h4>Click the correct word</h4>          
                    </div>
                    <div className="whiteBox">
                        {this.state.result !== "" ? this.renderResult() : this.renderTest()}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Lesson4_1;