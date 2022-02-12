import APIService from '../services/APIService.js'

// Add API requests here

async function getCoordinates(req, res, next) {
    try {
        const result = await APIService.getCoordinates(req);
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

async function postRoute(req, res, next) {
    try {
        const result = await APIService.postRoute(req);
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
export default { 
    getCoordinates, postRoute 
};