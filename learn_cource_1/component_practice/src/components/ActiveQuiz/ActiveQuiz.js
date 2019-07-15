import React from 'react';
import classes from  './ActiveQuiz.css';
import AnswerList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>
                    2.
                </strong>&nbsp;
                How are you?
            </span>
            <small>4 из 12</small>
        </p>

        <ul>
            <AnswerList 
            answers={props.answers}/>
        </ul>
    </div>
)

export default ActiveQuiz;