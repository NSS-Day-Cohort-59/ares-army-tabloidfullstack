import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { getAllUsers } from "../modules/userManager";
import User from "./User";

export const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(setUsers)
    }, []);

    return (<section>
        <h2>All Users</h2>
        {
            users.map((u) => (
                <>
                    <User key={u.id} user={u} />
                </>

            ))
        }

    </section>);
}