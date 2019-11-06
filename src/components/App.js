import React from "react";

import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit = value => {
    const term = value;
    console.log(`this is from App ${term}`);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
