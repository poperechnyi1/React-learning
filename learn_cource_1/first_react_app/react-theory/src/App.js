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
    pageTitle: 'React components',
    showCars: false
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  changeShowCars = ()=>{
    if(this.state.showCars)
    {
      this.setState({
        showCars: false
      })
    } else {
      this.setState({
        showCars: true
      })
    }
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

        <button 
        onClick={this.changeShowCars.bind(this)}
        >Toggle Show Cars</button>
        

        {          
          this.state.cars.map((car, index)=>{
            if(this.state.showCars){
              return (
                <Car 
                  key={index}
                  name={car.name}
                  year={car.year}
                  onchangeTitle={() => this.changeTitleHandler(car.name)}
                />
              )
            }
          

        }) }

      </div>   
  );
  }
}


export default App;
