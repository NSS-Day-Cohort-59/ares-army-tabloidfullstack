import { getToken } from "./authManager";

const apiUrl = "/api/UserProfile";

export const getAllUsers = () => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error(
                    "Unknown Error occured when trying to fetch users",
                );
            }
        });
    });
};

export const getUserById = (Id) => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/${Id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error(
                    "An error has occured while trying to fetch this user."
                );
            }
        });
    });
};