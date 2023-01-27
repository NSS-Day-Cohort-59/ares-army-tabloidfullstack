import React, { useEffect, useState } from "react";
import { getAllTags } from "../modules/TagManager";
import Tag from './Tag';

const TagList = () => {
    const [tags, setTags] = useState([]);

    const getTags = () => {
        getAllTags().then(tags => setTags(tags));
    };

    useEffect(() => {
        getTags();
    }, []);

    return (
        <div className="container">
            <a href="/tagform" class="btn btn-dark active mb-3" role="button">Create Tag</a>
            <div className="row justify-content-center">
                {tags.map((tag) => (
                    <Tag tag={tag} key={tag.id} />
                ))}
            </div>
        </div>
    );
}

export default TagList;