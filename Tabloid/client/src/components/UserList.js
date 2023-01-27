import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { getAllUsers } from "../modules/userManager";
import User from "./User";


export const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers().then(setUsers)
    }, []);


    return (<section>
        <h2>All Users</h2>
        {
            users.map((u) => (
                <div>

                    <User key={u.id} user={u} />
                    <Link to={`/Details/${u.id}`}>Details</Link>
                </div>

            ))
        }

    </section >);
}