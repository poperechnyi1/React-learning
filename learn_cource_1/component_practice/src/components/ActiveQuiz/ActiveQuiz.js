import React from 'react';
import classes from  './ActiveQuiz.css';
import AnswerList from './AnswersList/AnswersList';

const ActiveQuiz = props => {
    return (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>
                    {props.answerNumber}
                </strong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>

        <ul>
            <AnswerList 
                state={props.state}
                answers={props.answers}
                onAnswerClick = {props.onAnswerClick}
            />
        </ul>
    </div>
)
}

export default ActiveQuiz;