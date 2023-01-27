import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Card, CardBody } from "reactstrap";



export default function User({ user }) {
    const navigate = useNavigate();

    return (
        <Card className="m-4">
            <CardBody>
                <p>{user.id}</p>
                <h5>{user.fullName}</h5>
                <p>{user.displayName}</p>
                <p>{user.userType.name}</p>
            </CardBody>
        </Card>
    );
}
