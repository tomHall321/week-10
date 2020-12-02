import { Component } from "react";
import axios from "../axios";

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            loaded: false,
        }
    }

    componentDidMount() {
        let { id } = this.props;
        axios.get(`/articles/${id}/comments`).then(({ data }) =>{
            let comments = data.data;
            this.setState({
                comments: comments,  
                loaded: true,
            })
        })
    }

    render() {
        let { loaded, comments } = this.state;

        return !loaded ? <p>Loading...</p> : (
            <>
                <h3>Comments</h3>
                    <ul>
                        { comments.map(comment => (
                            <li key={ comment.id }>
                                <p>{comment.email}</p>
                                <p>{ comment.comment }</p>
                            </li>
                        )) }
                    </ul>
            </>
        );
    }

}

export default Comments;