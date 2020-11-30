import { Component } from "react";
import Square from "./Square";

class Squares extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: 1 };
      }

  render() {
    return (
      <>
        <Square
          name="First"
          selected={ this.state.selected === 1 }
          handleClick={ () => this.setState({ selected: 1 }) }
        />

        <Square
          name="Second"
          selected={ this.state.selected === 2 }
          handleClick={ () => this.setState({ selected: 2 }) }
        />
      </>
    );
  }
}

export default Squares;