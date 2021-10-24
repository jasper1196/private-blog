import React from "react";
import PostData from "../data/posts.json";
import {Link, useParams} from "react-router-dom";

function Blogpost() {
    const { id } = useParams();
    const post = PostData.find((post) => post.id === id);
    let title = post.title.charAt(0).toUpperCase() + post.title.slice(1);
    let content = post.content.charAt(0).toUpperCase() + post.content.slice(1);

    return (
        <div className="general-content-container">
            <div className="blogpost-container">
                <h2>{title}</h2>
                <h3>{post.date}</h3>
                <p>{content}</p>
            </div>
            <div id="back-container">
                <p id="back-to-overview">Back to <Link to="/blog-overview">overview</Link></p>
            </div>
        </div>
    );
}

export default Blogpost;