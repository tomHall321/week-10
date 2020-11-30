import { Component } from 'react';
import Password from "./Password";

class SignUp extends Component {

	constructor(props) {
		super(props);
		this.state = {
            password: "",
            confirm: "",
		}

		this.validate = this.validate.bind(this);

	}

	validate() {
        let {password, confirm} = this.state;
        return password === confirm && password.length >= this.props.minimumLength  
        
	}

    render() {
        let valid = this.validate();
        return (
            <form>
                <Password 
                    label="Password" 
                    value={this.state.password} 
                    onChange={(e) => {
                            this.setState({password : e.target.value})
                        }
                    } 
                    valid={valid}
                    
                />
                <Password 
                    label="Confirm password" 
                    value={this.state.confirm} 
                    onChange={(e) => {
                        this.setState({confirm : e.target.value})
                        }
                    }  
                    valid={valid}
                />
            </form>
        );
    }
}


export default SignUp;