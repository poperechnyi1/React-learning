import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'

class App extends Component {
  state = {
    counter: 0,
    numberInInput: 0
  }

  updateCounter(value) {
    
  }

  render() {
    console.log('APP ', this.props)
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={() => this.props.onAddFromInput(Number(this.state.numberInInput))}>Добавить число из инпута</button>
        </div>

        <hr/>

        <input onChange={(event) => {
          this.setState({
            numberInInput: event.target.value
          })
        }}/>
        <br/>
        <div className="Actions">
          <button onClick={() => this.props.onAddFromInput(Number(this.state.numberInInput))}>Добавить число из инпута</button>
          <button onClick={() => this.props.onSubFromInput(Number(this.state.numberInInput))}>Вычесть число из инпута</button>
         
        </div>
        
        
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    counter: state.counter,
    numberInInput: state.numberInInput
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'}),
    onAddFromInput: (number) => dispatch({type: 'ADD_INPUT', payload: number}),
    onSubFromInput: (number) => dispatch({type: 'SUB_INPUT', payload: number}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
