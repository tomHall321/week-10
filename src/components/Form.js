import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
        };
       
        this.nameUpdate = this.nameUpdate.bind(this);
        this.emailUpdate = this.emailUpdate.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        
    }

    nameUpdate(e) {
        this.setState({ name: e.currentTarget.value });
    };

    emailUpdate(e) {
        this.setState({ email: e.currentTarget.value });
    };

    formSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit({...this.state});
        //{}create new object literal, ...copies properties of whatever is being passed into new thing 
    }
    
    // When the form is submitted it should clear the <input>s and pass up an object containing both the name and email values

    render() {
        return (
            <form onSubmit={ this.formSubmit } >
                <div className="form-group">
                    <label 
                        htmlFor="name">
                        Name
                    </label>
                    <input 
                        className="form-control" 
                        id="name" 
                        type="text"
                        onChange={ this.nameUpdate }
                        value= {this.state.name} />
                </div>
                <div className="form-group">
                    <label 
                        htmlFor="name">
                        Email
                    </label>
                    <input 
                        className="form-control" 
                        id="email" 
                        type="text"
                        onChange={ this.emailUpdate }
                        value= {this.state.email} />
                </div>
                <button>
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;