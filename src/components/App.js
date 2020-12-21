import React, { Component } from "react";

import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        {/* when we render this, we need to provide a 'value' prop 
        the provider gives you access to change the default value*/}

        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value={"red"}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
