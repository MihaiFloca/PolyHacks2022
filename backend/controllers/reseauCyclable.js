import reseauCyclable from '../services/reseauCyclable.js'

// Add API requests here

async function getAllPisteCyclable(req, res, next) {
    try {
        const result = await reseauCyclable.getAllPisteCyclable(req);
        if (result) {
            res.status(200).json(result);
            next();
        } else {
            res.status(404).json();
        }
    } catch (err) {
        if (err.statusCode === 404) {
            res.status(err.statusCode).send(err.message) && next(err);
            return;
        }
    }
}


export default { getAllPisteCyclable };