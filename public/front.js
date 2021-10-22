const url = 'http://localhost:3000/car'

const getCars =async () =>{
    const resp = await fetch(url);
    const data = resp.json();
    console.log('data', data)
};
getCars();

const init = async () => {

}
