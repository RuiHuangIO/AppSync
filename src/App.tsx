import React, { Component } from "react";
import "./App.css";
import { CreateAuctionForm } from "./CreateAuctionForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateAuctionForm />
      </div>
    );
  }
}

export default App;
