var React = require("react");
var TestAnswer = require("../../../api/TestAnswers.js");

var Test = React.createClass(
{
    getInitialState: function()
    {
        return {
            selectedAnswer: ""
        }
    },
    handleAnswerChange: function(event)
    {
        console.log(event.currentTarget.value);
        this.setState({ selectedAnswer: event.currentTarget.value });
        console.log(this.state.selectedAnswer);
    },
    gradeTest: function(userAnswers, realAnswer, answersCntObj)
    {
        let correctFl = false;
        let unanswerFl = false;
        let wrongFl = false;
        for (let i = 0; i < userAnswers.length; i++)
        {
            let answer = userAnswers[i];
            console.log(answer);
            console.log(answer.checked);
            if (answer.checked)
            {
                console.log(answer.value);
                if (answer.value === realAnswer)
                {
                    console.log("Correct Answer!")
                    correctFl = true;
                    unanswerFl = false;
                    wrongFl = false;
                }
                else
                {
                    console.log("Wrong answer!");
                    wrongFl = true;
                    unanswerFl = false;
                    correctFl = false;
                }
                break;
            }
            else
            {
                console.log("Unselected!")
                unanswerFl = true;
                continue;
            }
        }
        if (correctFl === true)
        {
            answersCntObj.corrects++;
        }
        else if (wrongFl === true)
        {
            answersCntObj.wrongs++;
        }
        else if (unanswerFl === true)
        {
            answersCntObj.unanswers++;
        }
    },
    handleSubmit: function(event)
    {
        var answersCntObj = {
            corrects: 0,
            wrongs: 0,
            unanswers: 0
        };

        event.preventDefault();

        {this.props.testQuestions.map((function(testQuestion, i) {
            const question = `q${i+1}`;
            console.log(question);
            const answers = document.getElementsByName(question);
            console.log(answers.length);
            this.gradeTest(answers, TestAnswer[i], answersCntObj);
        }).bind(this))};

        let htmlStr = "<p className='show-text'>All Done!</p>";
        htmlStr += "<p className='show-text'>Correct Answers: " + answersCntObj.corrects + "</p>";
        htmlStr += "<p className='show-text'>Incorrect Answers: " + answersCntObj.wrongs + "</p>";
        htmlStr += "<p className='show-text'>Unanswered: " + answersCntObj.unanswers + "</p>";
        this.props.setResults(htmlStr, answersCntObj);
    },
    render: function()
    {
        return (
            <form>
                {this.props.testQuestions.map((function(testQuestion, i) {
                    return (
                        <div key={i+1} className="radio">
                            <p className="text-left"><strong>{i+1}.</strong> {testQuestion.question}</p>
                            {testQuestion.answers.map((function(testAnswer, j) {
                                const qStr = "q" + (i+1);
                                return (
                                    <label key={j+1} className="radio-inline">
                                        <input
                                            type="radio"
                                            value={testAnswer}
                                            name={qStr}
                                            onChange={this.handleAnswerChange}
                                        /> {testAnswer}
                                    </label>
                                );
                            }).bind(this))}
                        </div>
                    );
                }).bind(this))}
                <button type="submit" className="btn btn-primary btn-lg" id="runSubmit" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
});

module.exports = Test;
