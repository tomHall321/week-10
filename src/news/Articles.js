import { Component } from "react";
import axios from "../axios";

class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: {},
            loaded: false,
        }
    }

    componentDidMount() {
        axios.get("/articles").then(({ data })=>{
            let articles = data.data;
            this.setState({
                articles: articles,
                loaded: true
            })
        })
    }

    render() {
        let { articles, loaded } = this.state;

        return !loaded ? <p>Loading...</p> :(
            <>
                <h2>Articles</h2>
                    <ul>
                        { articles.map(article => (
                            <li key={ article.id }>
                               <p>{ article.title }</p> 
                               <p>{ article.tags }</p>
                            </li>
                        )) }
                    </ul>
            </>
        );
    }

}

export default Articles;