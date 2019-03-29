import React, { Component } from "react";
import "./App.css";
import { chunk } from "./request";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chunkData: "",
      proxyData: ""
    };
    this.init();
  }
  init() {
    chunk(
      {
        url: "/proxy",
        headers: {
          Accept: "*/*"
        }
      },
      text => {
        this.setState({ proxyData: text });
      }
    );
    chunk(
      {
        url: "http://localhost:7000/chunk",
        headers: {
          Accept: "*/*"
        }
      },
      text => {
        this.setState({ chunkData: text });
      }
    );
  }
  render() {
    return (
      <div className="App">
        <div>Chunk Data:</div>
        <div className="message">
          <pre>{this.state.chunkData}</pre>
        </div>
        <div>Proxy Data:</div>
        <div className="message">
          <pre>{this.state.proxyData}</pre>
        </div>
      </div>
    );
  }
}

export default App;
