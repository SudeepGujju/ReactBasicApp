import React, { Component } from "react";

class NotesList extends Component {
  state = { items: [], text: "" };

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  divStyle = {
    width: "50%",
    border: "0.05px solid grey",
    float: "left"
  };

  render() {
    return (
      <div style={this.divStyle}>
        <label htmlFor="new-todo">List</label>
        <input
          id="new-todo"
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button
          className="btn btn-sm btn-secondary m-2"
          onClick={this.handleClick}
        >
          Add #{this.state.items.length}
        </button>
        <div>
          <ul className="list-group">
            {this.state.items.map(data => (
              <li key={data} className="list-group-item">
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleClick(e) {
    if (!this.state.text.length || !this.state.items.indexOf(this.state.text)) {
      return;
    }
    this.setState({
      items: this.state.items.concat(this.state.text),
      text: ""
    });
  }
}

export default NotesList;
