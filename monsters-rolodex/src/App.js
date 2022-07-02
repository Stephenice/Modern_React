import "./App.css";
import { Component } from "react";

/**
 * life cycle
 * 1.constructor
 * 2.render- will alway render anytime the state change
 * 3. componentDidMount run once
 *
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: "",
    };
    // console.log("constructor");
  }

  // coomponentDidMount only invoke once
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log(this.state.searchValue);
    return (
      <div className="App">
        <input
          value={this.state.searchValue}
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={(event) => {
            this.setState({ searchValue: event.target.value });
            // console.log(this.state.searchValue);
          }}
        />

        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
