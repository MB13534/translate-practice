import React, { Component } from "react";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import UserCreate from "./UserCreate";

class App extends Component {
  state = {
    language: "english",
  };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
            style={{ cursor: "pointer" }}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
            style={{ cursor: "pointer" }}
          />
        </div>
        {/* when we render this, we need to provide a 'value' prop 
        the provider gives you access to change the default value*/}
        <ColorContext.Provider value={"red"}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
