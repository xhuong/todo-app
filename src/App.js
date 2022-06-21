import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Todo app",
      todo: "",
      todos: []
    };
  }

  delete(index) {
    this.state.todos.splice(index, 1);
    this.setState({ ...this.state, todos: this.state.todos });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      todos: [...this.state.todos, this.state.todo]
    });
    this.setState({ todo: "" });
  }

  handleClearAll() {
    this.setState({ ...this.state, todos: [] });
  }

  render() {
    return (
      <div
        className="app"
        style={{
          margin: "18px"
        }}
      >
        <h2>{this.state.title}</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            placeholder="Typing todos..."
            value={this.state.todo}
            onChange={(e) =>
              this.setState({ ...this.state, todo: e.target.value })
            }
          />
          <button type="submit">Add</button>
          <button type="button" onClick={() => this.handleClearAll()}>
            Clear All !!!
          </button>
        </form>
        <ul>
          {this.state.todos.map((item, index) => (
            <li key={index}>
              {item}
              <span
                style={{ margin: "0 6px", color: "red" }}
                onClick={() => this.delete(index)}
              >
                Delete
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
