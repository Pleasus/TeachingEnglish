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
        var jumbotronStyle = {
            backgroundColor: "#20315A",
            color: "#FFF"
        };
        return (
            <div className="row">
                <div className="jumbotron" style={jumbotronStyle}>
                    <h2 className="text-center">
                        <strong>
                            <i className=""></i> Vocabulary Multiple Choice Questions
                        </strong>
                    </h2>
                </div>
                {this.state.result !== "" ? this.renderResult() : this.renderTest()}
            </div>
        );
    }
});

module.exports = Lesson4_1;