class DocumentView {
    _parentElement = document.querySelector('.documents-container');
    _selectCollection = document.querySelector('.select-collection');
    _createNewBtn = document.querySelector('.btn--create-new');
    _btnSaveDocument = document.querySelector('.document__save');
    _btnDeleteDocument = document.querySelector('.document__delete');

    renderDocument(data, position) {
        const prettyDocument = JSON.stringify(data, null, 2);

        const markup = `
            <div class="document">
                <pre contenteditable="true" class="document__json">${prettyDocument}</pre>
                <button class="document__save">Save</button>
                <button class="document__delete">Delete</button>
            </div>
        `;

        this._parentElement.insertAdjacentHTML(position, markup);
    }

    clearParentElement() {
        this._parentElement.innerHTML = '';
    }

    makeButtonActive() {
        this._createNewBtn.disabled = false;
    }

    getDocumentData() {

    }



    addHandlerSelect(handler) {
        this._selectCollection.addEventListener('change', handler);
    }

    addHandlerCreateNew(handler) {
        this._createNewBtn.addEventListener('click', handler);
    }

    addHandlerSaveDocument(handler) {
        this._btnSaveDocument.addEventListener('click', function (e) {
            console.log(e.target);
        })
    }

    addHandlerDeleteDocument(handler) {
        this._btnDeleteDocument.addEventListener('click', handler);
    }
}

export default new DocumentView();

