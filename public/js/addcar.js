const URL = `http://localhost:3000/car`


//html elements
const formEl = document.querySelector(`.add-car`);

formEl.addEventListener('submit', async (e)=>{
    e.preventDefault();
    console.log('siusti forma');
    const formData = new FormData(formEl);
    console.log('formData', FormData)
    const formDataJson = JSON.stringify(Object.fromEntries(formData));
    const resp = await fetch(`${URL}/add`, {
        method: "POST",
        body: formDataJson,
        headers:{
            "Content-type": "application/json",
        },
    });
    const data = await resp.json();
    console.log('data', data);
});

const init = async () => {

};

init();
