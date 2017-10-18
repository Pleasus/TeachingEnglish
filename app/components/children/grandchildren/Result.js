var React = require("react");

var Result = React.createClass(
{
    handleRestart: function()
    {
        var answersCountObj = {
            corrects: 0,
            wrongs: 0,
            unanswers: 0
        };
        this.props.setResults("", answersCountObj);
    },
    render: function()
    {
        return (
            <div className="text-center">
                <p className="show-text">All Done!</p>
                <p className="show-text">Correct Answers: {this.props.answersCount.corrects}</p>
                <p className="show-text">Incorrect Answers: {this.props.answersCount.wrongs}</p>
                <p className="show-text">Unanswered: {this.props.answersCount.unanswers}</p>
                <button type="restart" className="btn btn-primary btn-lg" id="restart" onClick={this.handleRestart}>Restart</button>
            </div>
        );
    }
});

module.exports = Result;