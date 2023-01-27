import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getUserById } from "../modules/userManager";

export const UserDetails = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();


    useEffect(() => {
        getUserById(id).then(user => setUser(user))
    }, [id]);

    return (<section>

        <p>{user.fullName}</p>
        <img src={user.imageLocation}></img>
        <p>{user.displayName}</p>
        <p>{user.email}</p>
        <p>{user.createDateTime}</p>
        <p>{user?.userType?.name}</p>

    </section >)
}