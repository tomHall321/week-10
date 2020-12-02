import { Component } from "react";
import axios from "../axios";

class CreateComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            comment: "",
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(e) {
        this.setState({ email: e.currentTarget.value });
    }

    handleComment(e) {
        this.setState({ comment: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        let {email, comment} = this.state;
        let { id } = this.props;

        axios.post(`/articles/${id}/comments`, {
                email: email,  
                comment: comment,
            });
        }
    
    render() {

        let { email, comment } = this.state;

        return (
            <form onSubmit={ this.handleSubmit }>
                <p>Email</p>
                <input 
                    onChange={ this.handleEmail } 
                    value={ email } 
                 />
                <p>Comment</p>
                <input 
                    onChange={ this.handleComment } 
                    value={ comment } 
                 />
                <button>Add comment</button>
            </form>
        );
    }

}

export default CreateComment;