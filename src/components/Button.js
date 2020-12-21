import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

//creating a contextType links the nexted child (button component) with the context object
//this.context will reference the actual values in the context object

//links context object to a class component
//static contextType adds a property to the class itself
//contexttype is only required when we want to use this.context
class Button extends Component {
  // static contextType = LanguageContext;

  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(colorValue) {
    return (
      <button className={`ui button ${colorValue}`}>
        {/* {text} */}
        {/* whenever we use the consumer we always pass one child function
    this always gets called by the consumer with whatever value is in the pipe */}
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <ColorContext.Consumer>
        {(colorValue) => this.renderButton(colorValue)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
