import React from 'react';
import './App.css';
import Car from './Car/Car';


class App extends React.Component {
  state = {
    cars: [{
      name: 'Ford',
      year: 2018
    },{
      name: 'Audi',
      year: 2016
    },{
      name: 'Mazda',
      year: 2010
    }],
    pageTitle: 'React components'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event)=>{
    this.setState({pageTitle: event.target.value})
  }
  
  render () {
    console.log('Render')
    const divStyle = {
      textAlign:'center'
    }

    const cars = this.state.cars;
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        
        <button 
        onClick={this.changeTitleHandler.bind(this, 'Changed!')}
        >Change title</button>

        { this.state.cars.map((car, index)=>{
          return (
            <Car 
              key={index}
              name={car.name}
              year={car.year}
              onchangeTitle={() => this.changeTitleHandler(car.name)}
            />
          )

        }) }

      </div>   
  );
  }
}


export default App;
