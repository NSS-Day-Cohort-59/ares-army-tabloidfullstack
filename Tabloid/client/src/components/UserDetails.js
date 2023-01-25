import { useEffect, useState } from "react"
import { getUserById } from "../modules/userManager";

export const ViewUserDetails = (Id) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserById(Id).then(setUser)
    }, []);
    return (<section>
        <h4>{user.id}</h4>

    </section>)
}