import {API_URL} from "./config";

export const state = {
    data: {},
}

export const loadDocuments = async function (collection) {
    try {
        const res = await fetch(`${API_URL}${collection}`);
        state.data = await res.json();
    } catch (err) {
        throw new Error(err);
    }
}