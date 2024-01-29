/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/scripts/controller.js ***!
  \***********************************/
// 'use strict'
//
// const API_URL = 'http://127.0.0.1:8181/api/v1/'
//
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmY4NzhkMmZmNjk5OWNmMzE1ODZjLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxlQUFlO0FBQ2xGO0FBQ0EsU0FBUztBQUNULHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSSIsInNvdXJjZXMiOlsid2VicGFjazovL21vbmdvZGIvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICd1c2Ugc3RyaWN0J1xyXG4vL1xyXG4vLyBjb25zdCBBUElfVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODE4MS9hcGkvdjEvJ1xyXG4vL1xyXG4vLyBsZXQgc2VsZWN0VmFsdWU7XHJcbi8vXHJcbi8vIGNvbnN0IGRvY3VtZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2N1bWVudHMtY29udGFpbmVyJyk7XHJcbi8vIGNvbnN0IHNlbGVjdENvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWNvbGxlY3Rpb24nKTtcclxuLy9cclxuLy8gc2VsZWN0Q29sbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgc2VsZWN0VmFsdWUgPSBzZWxlY3RDb2xsZWN0aW9uLnZhbHVlO1xyXG4vLyAgICAgc2VsZWN0Q29sbGVjdGlvbi5vcHRpb25zWzBdLmRpc2FibGVkID0gdHJ1ZTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHNlbGVjdFZhbHVlKTtcclxuLy8gICAgIGNsZWFyRG9jdW1lbnRzQ29udGFpbmVyKCk7XHJcbi8vICAgICByZW5kZXJEb2N1bWVudHMoc2VsZWN0VmFsdWUpO1xyXG4vLyB9KTtcclxuLy9cclxuLy8gY29uc3QgcmVuZGVyRG9jdW1lbnQgPSBmdW5jdGlvbiAob2JqKSB7XHJcbi8vICAgICBjb25zdCBmb3JtYXR0ZWRPYmogPSBKU09OLnN0cmluZ2lmeShvYmosIG51bGwsIDQpO1xyXG4vLyAgICAgY29uc29sZS5sb2coZm9ybWF0dGVkT2JqKVxyXG4vL1xyXG4vLyAgICAgY29uc3QgbWFya3VwID0gYFxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJkb2N1bWVudFwiPlxyXG4vLyAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImRvY3VtZW50X19qc29uXCI+JHtmb3JtYXR0ZWRPYmp9PC9jb2RlPlxyXG4vLyAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZG9jdW1lbnRfX3NhdmVcIj5TYXZlPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkb2N1bWVudF9fZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICBgO1xyXG4vL1xyXG4vLyAgICAgZG9jdW1lbnRzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG1hcmt1cCk7XHJcbi8vIH07XHJcbi8vXHJcbi8vIGNvbnN0IGdldERvY3VtZW50cyA9IGFzeW5jIGZ1bmN0aW9uIChjb2xsZWN0aW9uTmFtZSkge1xyXG4vLyAgICAgbGV0IGRhdGE7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjgxODEvYXBpL3YxLyR7Y29sbGVjdGlvbk5hbWV9YCk7XHJcbi8vICAgICAgICAgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbi8vICAgICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhg8J+UpSBFcnJvciEhISAke2Vyci5tZXNzYWdlfWApXHJcbi8vICAgICB9XHJcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4vLyAgICAgcmV0dXJuIGRhdGE7XHJcbi8vIH1cclxuLy9cclxuLy8gY29uc3QgcmVuZGVyRG9jdW1lbnRzID0gYXN5bmMgZnVuY3Rpb24gKGNvbGxlY3Rpb25OYW1lKSB7XHJcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RG9jdW1lbnRzKGNvbGxlY3Rpb25OYW1lKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGRhdGFbJ2RhdGEnXVsndXNlcnMnXSk7XHJcbi8vICAgICBkYXRhWydkYXRhJ11bJ3VzZXJzJ10uZm9yRWFjaChpdGVtID0+IHJlbmRlckRvY3VtZW50KGl0ZW0pKTtcclxuLy8gfVxyXG4vL1xyXG4vLyBjb25zdCBjbGVhckRvY3VtZW50c0NvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIGRvY3VtZW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuLy8gfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==