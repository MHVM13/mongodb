import {API_URL} from "./config";

export const state = {
    data: {},
}

export const loadDocuments = async function (collection) {
    try {
        const res = await fetch(`${API_URL}${collection}`);
        state.data = await res.json();
    } catch (err) {
        console.log(`🔥 Error!!! ${err.message}`)
        throw new Error(err);
    }
}

// export const updateDocument = async function(collection, id) {
//     try {
//         const res = await fetch('htt')
//     }
// }