import React from "react";
import PostData from "../data/posts.json";
import {Link} from "react-router-dom";

function Overview() {
    return (
        <div className="general-content-container">
            <h2>Blogposts</h2>
            <ul className="post-list">
                {PostData.map((post) => {
                    let title = post.title.charAt(0).toUpperCase() + post.title.slice(1);
                    return (
                        <li key={post.id}>
                            <Link to={"/blogpost/" + post.id}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Overview;