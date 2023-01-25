import { getAllPosts } from "../../modules/PostManager";
import React, { useEffect, useState } from "react";
import { Card } from "reactstrap";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const getAll = () => {
        getAllPosts().then(posts => setPosts(posts));
    } 

    useEffect(() => {
        getAll();
    }, []);

    return (
        <div className="post-container">
            <div className="post_list_header"><div className="post-left">Author</div><div className="post-center">Title</div><div className="post-right">Category</div></div>
            <div className="row justify-content-center">
            {posts.map((post) => { return <Card><div className="post-list-container">
                <div className="post_elements post-left">{post.userProfile.fullName}</div>
            <div className="post_elements post-center"> {post.title}</div>
            <div className="post_elements post-right"> {post.categoryId} </div>
            </div></Card> })}
            </div>
        </div>
    )
}

export default PostList;