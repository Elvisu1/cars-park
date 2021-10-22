const url = `http://localhost:3000/car`

const getCars = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log('data', data)
};


const init = async () => {
await getCars();
};

init();
