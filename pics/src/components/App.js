import React from "react";
// import axios from "axios";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

export default class App extends React.Component {
  // state
  state = { image: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ image: response.data.results });
  };

  render() {
    return (
      <>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmitProps={this.onSearchSubmit} />
          found: {this.state.image.length}
        </div>
      </>
    );
  }
}
