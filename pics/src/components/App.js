import React from "react";
import SearchBar from "./SearchBar";

export default class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmitProps={this.onSearchSubmit} />
        </div>
      </>
    );
  }
}

// const App = () => {
//   return (
//     <div className="ui container" style={{ marginTop: "10px" }}>
//       <SearchBar />
//     </div>
//   );
// };
// export default App;
