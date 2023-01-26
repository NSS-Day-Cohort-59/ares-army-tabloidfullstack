import React from "react";
import { Card } from "reactstrap";

const Tag = ({ tag }) => {
    return (
        <>
            <div className="mb-3">
                <strong>{tag.name}</strong>
            </div>
        </>
    );
};

export default Tag;