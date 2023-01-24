const _apiUrl = "/api/post";

export const getAllPosts = () => {
    return fetch(baseUrl)
    .then((res) => res.json())
};