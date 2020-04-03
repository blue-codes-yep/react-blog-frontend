import React, { Component } from "react";
import { Link } from "react-router-dom";

class postList extends Component {
    state = {
        posts: []
    };




    loadData = async () => {
        fetch("http://localhost:9001/all")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
    };

    async componentDidMount() {
        this.loadData();
    }


    render() {
        const { posts } = this.state;

        return (
            <>
                <h2>Blog Post</h2>
                <p className="App-intro">{this.state.apiResponse}</p>
                <ul>
                    {this.state.posts.map(post => {
                        return (
                            <li key={`post-${post.id}`}>
                                <Link to={`/post/${post.id}`}>{post.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }
};

export default postList;