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

  onchangeName(name, index){
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars
    })
  }

  deleteHandler (index){
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({
      cars
    })
    
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }
  
  render () {
    const divStyle = {
      textAlign:'center'
    }



    let cars = null;
    if(this.state.showCars)
    {
      cars = this.state.cars.map((car, index)=>{

        return (
          <Car 
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onchangeName={event => this.onchangeName(event.target.value, index)}
          />
        )

    })
    }
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        
        <button 
        onClick={this.toggleCarsHandler}
        >Toggle Cars</button>
       

        { cars }

      </div>   
  );
  }
}


export default App;
