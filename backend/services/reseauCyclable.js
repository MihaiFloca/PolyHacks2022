// Code used for api requests here
import IntersectionActivityModel from '../models/intersectionActivity.js'
import { firstLoad } from '../models/intersectionActivity.js';
import PisteCyclableModel from '../models/pisteCyclable.js';

async function getAllPisteCyclable(req) {
    firstLoad();
    console.log('done')
    PisteCyclableModel.findOne().then((data) => {
        console.log(data)
    })
    IntersectionActivityModel.findOne().then((data) => {
        console.log(data)
    })
    return "daddy?"//JSON.stringify(require("../notDatabase/reseauCyclableSmoll.json"))""
}

export default { 
    getAllPisteCyclable,
};
