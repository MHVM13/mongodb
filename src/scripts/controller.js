'use strict'

import "../styles/style.css";
import DocumentView from "./documentView";
import documentView from "./documentView";
import * as model from './model';

const selectItemChanged = async function () {
    try {
        const collection = DocumentView._selectCollection.value;
        DocumentView._selectCollection[0].disabled = true;
        DocumentView.clearParentElement();
        DocumentView.makeButtonActive();
        await model.loadDocuments(collection);
        model.state.data.data[collection].forEach(item => documentView.renderDocument(item, 'afterbegin'));
    } catch (err) {
        console.log(`🔥 Error: ${err.message}`);
    }
};

const createNewDocument = function () {
    console.log('Creating new document');
}

const controlSaveDocument = function () {
    // 1. Get data from text field
    // 2. Save data through model
};

const controlDeleteDocument = function () {
    const data = documentView.getDocumentData();
};

// Event handlers
const init = function () {
    DocumentView.addHandlerSelect(selectItemChanged);
    DocumentView.addHandlerCreateNew(createNewDocument);
    DocumentView.addHandlerSaveDocument(controlSaveDocument);
    DocumentView.addHandlerDeleteDocument(controlDeleteDocument);
};
init();