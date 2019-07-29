import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component{
    state = {
        isFinished: true,
        activeQuestion: 0,
        answerState: null, //{[id]:'success' 'error'}
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
                question: 'When was Kyiv based ?',
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
        if(this.state.answerState)
        {
            const key = Object.keys(this.state.answerState)[0];

            if(this.state.answerState[key] === 'success')
            {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if(question.rightAnswerId === answerId)
        {

            this.setState({
                answerState: {[answerId]: 'success'}
            });

            const timeout = window.setTimeout(()=>{
                if(this.isQuzFinished()){
                   console.log('Finished');
                   this.setState({
                       isFinished: true
                   })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }

                window.clearTimeout(timeout);
            }, 1000)
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }
    }


    isQuzFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    render(){

        console.log(68 , this.state.quiz[this.state.activeQuestion].answers)
        return (
            <div className = {classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer the questions</h1>
                    {
                        this.state.isFinished
                        ? <FinishedQuiz

                            />
                        : <ActiveQuiz 
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick = {this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;