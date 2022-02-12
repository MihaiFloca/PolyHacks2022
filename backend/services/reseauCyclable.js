
// Code used for api requests here

async function getAllPisteCyclable(req) {
    return JSON.stringify(require("../notDatabase/reseauCyclable.json"))
}


export default { 
    getAllPisteCyclable,
};
