import { Component } from "react";
import axios from "../axios";

class CreateArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            tags: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleTags = this.handleTags.bind(this);
    }

    handleTitle(e) {
        this.setState({ title: e.currentTarget.value });
    }

    handleContent(e) {
        this.setState({ content: e.currentTarget.value });
    }

    handleTags(e) {
        this.setState({ tags: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        let {title, content, tags} = this.state;
        axios.post("/articles/", {
                title: title,  
                content: content,
                tags: tags.split(" , "),
            });
        }
    
    render() {

        let { title, content, tags } = this.state;

        return (
            <form onSubmit={ this.handleSubmit }>
                <p>Title</p>
                <input 
                    onChange={ this.handleTitle } 
                    value={ title } 
                 />
                <p>Content</p>
                <input 
                    onChange={ this.handleContent } 
                    value={ content } 
                 />
                <p>Tags</p>
                <input 
                    onChange={ this.handleTags } 
                    value={ tags } 
               />
                <button>Create</button>
            </form>
        );
    }

}

export default CreateArticle;