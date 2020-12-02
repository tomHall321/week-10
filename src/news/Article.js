import { Component } from "react";
import axios from "../axios";
import Comments from "./Comments.js";
import CreateComment from "./CreateComment.js";

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: {},
            loaded: false,
        }
    }

    componentDidMount() {
        let { id } = this.props;
        axios.get(`/articles/${id}`).then(({ data }) =>{
            let article = data.data;
            this.setState({
                article:article,  
                loaded: true,
            })
        })
    }

    render() {
        let { article, loaded } = this.state;
        let { id } = this.props;
        return(
            <>
                <h2>{ article.title }</h2>
                <p>{ article.content }</p>
                <p>{ article.tags }</p>
                <CreateComment id={ id }/>
                <Comments id={ id } />
            </>
        )

    }

}

export default Article;