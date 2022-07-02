import "./App.css";
import { Component } from "react";

/**
 * life cycle method
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
      searchField: "",
    };
  }

  // coomponentDidMount only invoke once
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState((state, props) => {
          // console.log(state, props);
          return { monsters: users };
        })
      );
  }

  render() {
    // filter
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => ({ searchField }));
          }}
        />

        {filteredMonsters.map((monster) => {
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
