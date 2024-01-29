class DocumentView {
    _parentElement = document.querySelector('.documents-container');
    _selectCollection = document.querySelector('.select-collection');

    renderDocument(data) {
        const prettyDocument = JSON.stringify(data, null, 2);
        console.log(prettyDocument);

        const markup = `
            <div class="document">
                <pre class="document__json">${prettyDocument}</pre>
                <button class="document__save">Save</button>
                <button class="document__delete">Delete</button>
            </div>
        `;

        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    clearParentElement() {
        this._parentElement.innerHTML = '';
    }

    // Для обработки событий, вся логика выносится в controller
    addHandlerRender = function (handler) {
        ['change'].forEach(ev => {
            window.addEventListener(ev, handler);
        });
    }
}

export default new DocumentView();

