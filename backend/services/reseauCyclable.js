
// Code used for api requests here
import fs from 'fs'
import path from 'path';
// path.join(__dirname, '..', 'docker-compose.override.yml.template')


async function getAllPisteCyclable(req) {
    // console.log(path.join(__dirname, '.', 'reseauCyclableSmoll.json'))
    console.log("test2")
    // let rawdata = fs.readFileSync(path.join(__dirname, '.', 'reseauCyclableSmoll.json'));
    // console.log(rawdata)
    // let piste = JSON.parse(rawdata);
    // console.log(piste);
    // await fetch('./reseauCyclableSmoll.json')
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => console.log(data));
    console.log("test")
    return "daddy?"//JSON.stringify(require("../notDatabase/reseauCyclableSmoll.json"))""
}


export default { 
    getAllPisteCyclable,
};
