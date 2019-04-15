import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: Date.now(), value: 0 }, { id: Date.now() + 1, value: 0 }]
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  divStyle = {
    width: "50%",
    border: "0.05px solid grey",
    float: "right",
    padding: "5px"
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters: counters });
  };

  handleIncrement(id) {
    const counters = [...this.state.counters];
    const idx = counters.findIndex(counter => counter.id === id);
    let counter = counters[idx];
    counter.value++;
    this.setState({ counters });
  }

  addCounter() {
    this.setState({
      counters: this.state.counters.concat({ id: Date.now(), value: 0 })
    });
  }

  render() {
    return (
      <div style={this.divStyle}>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            this.addCounter();
          }}
        >
          Add Counter{" "}
          <span className="badge badge-pill badge-light">
            #{this.state.counters.length}
          </span>
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          >
            {counter}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
