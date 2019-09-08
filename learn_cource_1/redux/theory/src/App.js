import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import Counter from "./Counter";
import {
  add,
  sub,
  addNumberFromInput,
  subNumberFromInput,
  asyncAdd
} from "./redux/actions/actions";

class App extends Component {
  state = {
    counter: 0,
    numberInInput: 0
  };

  updateCounter(value) {}

  render() {
    return (
      <div className={"App"}>
        <h1>
          Счетчик <strong>{this.props.counter}</strong>
        </h1>

        <hr />

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button
            onClick={() =>
              this.props.onAddFromInput(Number(this.state.numberInInput))
            }
          >
            Добавить число из инпута
          </button>
        </div>

        <hr />

        <input
          onChange={event => {
            this.setState({
              numberInInput: event.target.value
            });
          }}
        />
        <br />
        <div className="Actions">
          <button
            onClick={() =>
              this.props.onAddFromInput(Number(this.state.numberInInput))
            }
          >
            Добавить число из инпута
          </button>
          <button
            onClick={() =>
              this.props.onSubFromInput(Number(this.state.numberInInput))
            }
          >
            Вычесть число из инпута
          </button>
        </div>

        <div>
          <button
            onClick={() =>
              this.props.onAsyncAdd(100)
            }
          >
            Асинхронно добавить 100
          </button>
        </div>

        <Counter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddFromInput: number => dispatch(addNumberFromInput(number)),
    onSubFromInput: number => dispatch(subNumberFromInput(number)),
    onAsyncAdd: number => dispatch(asyncAdd(number))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
