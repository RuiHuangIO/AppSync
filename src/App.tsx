import React, { Component } from "react";
import "./App.css";
import { CreateAuctionForm } from "./CreateAuctionForm";
import { Auctions } from "./Auctions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateAuctionForm />
        <Auctions />
      </div>
    );
  }
}

export default App;
