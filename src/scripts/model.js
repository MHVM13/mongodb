(async () => {
    const res = await fetch('http://127.0.0.1:8181/api/v1/users');
    const data = await res.json();
    console.log(data)
})();