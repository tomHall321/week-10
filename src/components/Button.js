import { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.click = this.click.bind(this);
    }

    click() {
        let { count } = this.state;
        let value = count + 1;
        this.setState({ count: value });
        this.props.handleUpdate(value);
    }

    render() {
        return (
            <button 
                onClick={ this.click }>
                Click
            </button>
        );
    }
}

export default Button;