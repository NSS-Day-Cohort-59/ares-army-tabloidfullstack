import React from "react";
import { Card, CardBody } from "reactstrap";

export default function User({ user }) {
    return (
        <Card className="m-4">
            <CardBody>
                <p>{user.fullName}</p>
                <p>{user.displayName}</p>
                <p>{user.userType.name}</p>
            </CardBody>
        </Card>
    );
}
