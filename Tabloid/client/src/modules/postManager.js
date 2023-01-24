const baseUrl = "/api/post";

export const getAllPosts = () => {
    return fetch(baseUrl).then((res) => res.json())
};