
import React,{Component} from 'react';
// import verbsarray from "../../api/verbsarray";
// import Lesson2_2_PresentTenseVerb from "./grandchildren/Lesson2_2_PresentTenseVerb";
// import Lesson2_2_EnteredVerb from "./grandchildren/Lesson2_2_EnteredVerb";
import styled from 'styled-components';
import PropTypes from 'prop-types';
const GrammarBanger = styled.div` 
    
`;

const LessonHeader = styled.div`
    clear: both;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
    background: rgba(231,199,239,1);
    font-size: 2em;
    min-height: 20px;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
`;


class Lesson2_2_refactor extends Component {

    render() {
        return(
            <GrammarBanger>
                <LessonHeader>
                    <h1>2.2 Past Tense Verbs</h1>
                    <h4>Test Your Knowledge</h4>
                </LessonHeader>
            </GrammarBanger>
        )
    }


}
export default Lesson2_2_refactor;
