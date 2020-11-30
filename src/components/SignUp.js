import { Component } from 'react';
import Password from "./Password";

class SignUp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			passwords: [
				{password: ''},
				{password: ''},
			],
			match: false,
		}
		this.update = this.update.bind(this);
		this.validate = this.validate.bind(this);

	}

	update(e, index) {
        const passwordObjectsArray = {...this.state.passwords};
        //spread operator to obtain a list of password objects from the array
        passwordObjectsArray[index].password = e.target.value;
        //whichever password object is being update is the target
        this.setState({passwords: passwordObjectsArray});
        //updates it 
        this.validate();
        //then calls validate method to check if they are the same

	}

	validate() {
        //need both password object to be the same and also the length to be longer than or equal to 4
		if(this.state.passwords[0].password === this.state.passwords[1].password && this.state.passwords[0].password.length >= 4 ) {
			this.setState({match: true})
		} else {
			this.setState({match: false})
		}
	}

  render() {
  	return (
  		<form>
  			<Password 
                label="Password" 
                index={0}
                //this is the 0 indexed object in the array started with this.state
  				value={this.state.passwords[0].password} 
  				onChange={(e, index) => {
	  					this.update(e, index);
	  				}
  				} 
  				match={this.state.match}
  			/>
  			<Password 
                label="Confirm password" 
                index={1}
                //this is the 1 indexed object in the array started with this.state
  				value={this.state.passwords[1].password} 
  				onChange={(e, index) => {
	  					this.update(e, index);
	  				}
  				}  
  				match={this.state.match}
  			/>
  		</form>
  	);
  }
}


export default SignUp;