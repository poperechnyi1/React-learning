import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component{
    state ={
        activeQuestion: 1,
        quiz: [
            {
                question: 'What is the sky color?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {
                        text: 'Black',
                        id: 1
                    },
                    {
                        text: 'Blue',
                        id: 2
                    },
                    {
                        text: 'Red',
                        id: 3
                    },
                    {
                        text: 'Green',
                        id: 4
                    }
                ]
            },
            {
                question: 'What was Kyiv based ?',
                rightAnswerId: 2,
                id: 2,
                answers: [
                    {
                        text: '1994',
                        id: 1
                    },
                    {
                        text: '4991',
                        id: 2
                    },
                    {
                        text: '9419',
                        id: 3
                    },
                    {
                        text: '9941',
                        id: 4
                    }
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id: ',answerId);

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render(){
        return (
            <div className = {classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer the questions</h1>
                    <ActiveQuiz 
                    answers={this.state.quiz[this.state.activeQuestion].answers}
                    question={this.state.quiz[this.state.activeQuestion].question}
                    onAnswerClick = {this.onAnswerClickHandler}
                    quizLength={this.state.quiz.length}
                    answerNumber={this.state.activeQuestion}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;