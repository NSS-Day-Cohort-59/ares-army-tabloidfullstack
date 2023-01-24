import React from "react";
import { Card } from "reactstrap";

const Tag = ({ tag }) => {
    return (
        <Card >
            <div>
                <strong>{tag.name}</strong>
            </div>
        </Card>
    );
};

export default Tag;