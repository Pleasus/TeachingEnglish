import React, {Component} from 'react';
import verbsarray from "../../../api/verbsarray";

class Lesson2_2_EnteredVerb_refactor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            streak: 0,
            randomVerb: verbsarray[Math.floor(Math.random() * verbsarray.length)],
            enteredVerb: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
        handleSubmit(event) {
            event.preventDefault();
            this.props.setVerb(this.state.enteredVerb);
            this.setState({
                enteredVerb: ""
            })
        }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.enteredVerb}
                       type="text"
                       placeholder="Past Tense"
                       onChange={event => this.setState({enteredVerb: event.target.value})}
                />
                <button type="submit">enter</button>
            </form>
        );
    }
}

export default Lesson2_2_EnteredVerb_refactor;


