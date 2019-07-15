import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component{
    state ={
        quiz: [
            {
                answers: [
                    {
                        text: 'Qistion 1'
                    },
                    {
                        text: 'Qistion 2'
                    },
                    {
                        text: 'Qistion 3'
                    },
                    {
                        text: 'Qistion 4'
                    }
                ]
            }
        ]
    }

    render(){
        return (
            <div className = {classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer the questions</h1>
                    <ActiveQuiz 
                    answers={this.state.quiz[0].answers}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;