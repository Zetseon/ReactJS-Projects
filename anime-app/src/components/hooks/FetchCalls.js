import { MEDIA_QUERY, MEDIA_QUERY_id } from "./Queries";
export const url = "https://graphql.anilist.co/";
export const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        query: MEDIA_QUERY,
    }),
};

export async function fetchMediaDetails(mediaId) {
    const query = MEDIA_QUERY_id;

    const variables = { id: mediaId, language: 'JAPANESE', role:'MAIN' };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const { data } = await response.json();

    return data?.Media || null;
}

export async function FetchMediaSearch(searchTerm) {
    const query = MEDIA_QUERY;

    const variables = {perPage: 10, type:"Anime", search:searchTerm};

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const { data } = await response.json();

    return data?.Media || null;
}

