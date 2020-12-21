import React, { createContext, Component } from "react";

//this create a context object

//english will be the default value for the context object
const Context = createContext("english");

export class LanguageStore extends Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
