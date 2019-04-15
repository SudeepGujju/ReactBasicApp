import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { id, value } = this.props.counter;

    return (
      <div>
        {this.formatCount(value)}
        <button
          type="button"
          className="btn btn-sm m-2"
          onClick={() => {
            this.props.onIncrement(id);
          }}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => {
            this.props.onDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount(count) {
    if (count === 0) return <span className="badge badge-warning">Zero</span>;
    else return <span className="badge badge-primary">{count}</span>;
  }
}

export default Counter;
