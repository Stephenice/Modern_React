import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => ({ searchField }));
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // filter
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title"> monsters Rolodex</h1>
        <SearchBox
          onChangeHandle={onSearchChange}
          className="search-box"
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
