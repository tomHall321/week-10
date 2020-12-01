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
          selected={ this.state.selected === 1 }
          handleClick={ () => this.setState({ selected: 1 }) }
          colour={ this.props.colour }
        />

        <Square
          selected={ this.state.selected === 2227 }
          handleClick={ () => this.setState({ selected: 2227 }) }
          colour={ this.props.colour }
        />
      </>
    );
  }
}

export default Squares;