import '../styles/style.css';

const selectCollection = document.querySelector('.select-collection');
const btnCreateNew = document.querySelector('.btn--create-new');
const documentContainer = document.querySelector('.documents-container');
const menu = document.querySelector('.menu');
const btnTransaction = document.querySelector('.btn--transaction');

let value = '';

selectCollection.addEventListener('change', async function () {
    value = selectCollection.value;
    selectCollection[0].disabled = true;
    btnCreateNew.disabled = false;
    btnTransaction.disabled = false;
    const data = await loadDocuments(value);
    console.log(data)

    data.data[value].forEach(item => {
        renderDocument(item);
    });
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
}

const createFormForNewDocument = function () {
    const markup = `
        <div class="document document-new">
            <pre contenteditable="true" class="document__json"></pre>
            <button class="document__save">Save</button>
            <button class="document__delete">Delete</button>
        </div>
    `;

    menu.insertAdjacentHTML('afterend', markup);

    const newDoc = document.querySelector('.document-new');
    newDoc.querySelectorAll('button').forEach(item => item.addEventListener('click', async function (e) {
        if (e.target.classList.contains('document__save')) {
            const json = JSON.parse(e.target.closest('.document').querySelector('.document__json').innerText);
            await fetch(`http://127.0.0.1:8181/api/v1/${value}`, {
                method: 'POST',
                body: JSON.stringify(json),
            })
            newDoc.remove();
            renderDocument(json);
        }
        if (e.target.classList.contains('document__delete')) {
            newDoc.remove();
        }
    }))
}

btnCreateNew.addEventListener('click', function () {
    createFormForNewDocument();
});

btnTransaction.addEventListener('click', async function (e) {
    const res = await fetch(`http://127.0.0.1:8181/api/v1/transaction`, {
        method: 'POST',
    })
    const data = await res.json();
    alert(JSON.stringify(data));
})

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
