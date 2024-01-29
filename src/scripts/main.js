import '../styles/style.css';

const selectCollection = document.querySelector('.select-collection');
const btnCreateNew = document.querySelector('.btn--create-new');
const documentContainer = document.querySelector('.documents-container');


selectCollection.addEventListener('change', async function () {
    const value = selectCollection.value;
    selectCollection[0].disabled = true;
    btnCreateNew.disabled = false;
    const data = await loadDocuments(value);
    console.log(data)

    data.data[value].forEach(item => {
        renderDocument(item);
    });

    const documents = document.querySelectorAll('.document');
    documents.forEach(doc => doc.addEventListener('click', function (e) {
        if (e.target.classList.contains('document__save')) {
            const json = JSON.parse(e.target.closest('.document').querySelector('.document__json').innerText);
            updateDocument(value, json);
        }
        if (e.target.classList.contains('document__delete')) {
            const json = JSON.parse(e.target.closest('.document').querySelector('.document__json').innerText);
            deleteDocument(value, json._id);
            e.target.closest('.document').remove();
        }
    }));
})

const renderDocument = function (doc) {
    const prettyJson = JSON.stringify(doc, null, 4);
    const markup = `
        <div class="document">
            <pre contenteditable="true" class="document__json">${prettyJson}</pre>
            <button class="document__save">Save</button>
            <button class="document__delete">Delete</button>
        </div>
    `;

    documentContainer.insertAdjacentHTML('afterbegin', markup);
}

btnCreateNew.addEventListener('click', function () {
    console.log(123);
});

const loadDocuments = async function (collection) {
    try {
        const res = await fetch(`http://127.0.0.1:8181/api/v1/${collection}`);
        return await res.json();
    } catch (err) {
        console.log(`❌ Error: ${err.message}`);
    }
};

const updateDocument = async function (collection, doc) {
    const id = doc._id;
    console.log(doc)
    try {
        await fetch(`http://127.0.0.1:8181/api/v1/${collection}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(doc),
        });
    } catch (err) {
        console.log(`❌ Error: ${err.message}`);
    }
}

const deleteDocument = async function (collection, id) {
    try {
        await fetch(`http://127.0.0.1:8181/api/v1/${collection}/${id}`, {
            method: 'DELETE',
        });
    } catch (err) {
        console.log(`❌ Error: ${err.message}`);
    }
}
