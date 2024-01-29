'use strict'

import "../styles/style.css";
import DocumentView from "./documentView";
import * as model from './model';


const controlSelectedItem = async function () {
    try {
        const selectedItem = DocumentView._selectCollection.value;
        DocumentView._selectCollection[0].disabled = true;
        await model.loadDocuments(selectedItem);
        DocumentView.clearParentElement();

        DocumentView.renderDocument()
    } catch (err) {
        console.log(`🔥 Error: ${err.message}`);
    }


};

// Event handlers
const init = function () {
    DocumentView.addHandlerRender(controlSelectedItem);
};
init();


// let selectValue;
//
// const documentsContainer = document.querySelector('.documents-container');
// const selectCollection = document.querySelector('.select-collection');
//
// selectCollection.addEventListener('change', function (e) {
//     selectValue = selectCollection.value;
//     selectCollection.options[0].disabled = true;
//     console.log(selectValue);
//     clearDocumentsContainer();
//     renderDocuments(selectValue);
// });
//
// const renderDocument = function (obj) {
//     const formattedObj = JSON.stringify(obj, null, 4);
//     console.log(formattedObj)
//
//     const markup = `
//         <div class="document">
//             <code class="document__json">${formattedObj}</code>
//             <button class="document__save">Save</button>
//             <button class="document__delete">Delete</button>
//         </div>
//     `;
//
//     documentsContainer.insertAdjacentHTML('afterbegin', markup);
// };
//
// const getDocuments = async function (collectionName) {
//     let data;
//     try {
//         const res = await fetch(`http://127.0.0.1:8181/api/v1/${collectionName}`);
//         data = await res.json();
//     } catch (err) {
//         console.log(`🔥 Error!!! ${err.message}`)
//     }
//     console.log(data)
//     return data;
// }
//
// const renderDocuments = async function (collectionName) {
//     const data = await getDocuments(collectionName);
//     console.log(data['data']['users']);
//     data['data']['users'].forEach(item => renderDocument(item));
// }
//
// const clearDocumentsContainer = function () {
//     documentsContainer.innerHTML = '';
// }