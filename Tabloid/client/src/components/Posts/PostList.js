import { getAllPosts } from "../../modules/postManager";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <div className="post_list_header"><div className="post-left">Title</div><div className="post-center">Author</div><div className="post-right">Category</div></div>
            <div className="row justify-content-center">
            {posts.map((post) => { return <Card key={post.id}><div className="post-list-container">
                <div className="post_elements post-left">
                <Link to={`/post/${post.id}`}>{post.title}</Link></div>
            <div className="post_elements post-center">{post.userProfile.fullName}</div>
            <div className="post_elements post-right">{post.categoryId} </div>
            </div></Card> })}
            </div>
        </div>
    )
}

export default PostList;