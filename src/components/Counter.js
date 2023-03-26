import React from "react";
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: props.initialValue,
      };
    }
  
    decrementCount = () => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    };
  
    incrementCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };
  
    render() {
      return React.createElement(
        "div",
        {},
        React.createElement("h2", {}, "Counter: " + this.state.count),
        React.createElement(
          "button",
          { onClick: this.decrementCount },
          "Decrement"
        ),
        React.createElement(
          "button",
          { onClick: this.incrementCount },
          "Increment"
        )
      );
    }
  }
  
  export default Counter;