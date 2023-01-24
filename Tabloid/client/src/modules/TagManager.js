const baseUrl = '/api/tag';

export const getAllTags = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
};