const URL = `http://localhost:3000/car`

//html elements
const carsListEl = document.querySelector('.cars-list')

const getCars = async () => {
    const resp = await fetch(URL);
    const data = await resp.json();
    console.log('data', data)
    return data.result;
};

const renderCars = (arr, dest) => {
const generatedCars = arr.map(carItem =>{
    return `
    <div class="card" style="width: 18rem;">
            <img src="${carItem.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${carItem.title}</h5>
                <p class="card-text">${carItem.price} € </p>
                <button class="btn btn-primary">View</button>
            </div>
        </div>
    `

});
    dest.innerHTML = generatedCars;
}
const init = async () => {
const cars = await getCars();
renderCars(cars, carsListEl);
};

init();


