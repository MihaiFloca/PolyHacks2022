import meteoService from '../services/MeteoService.js'

// Add API requests here

async function GET(req, res, next) {
    try {
        const result = await meteoService.getTemperatureData(req);
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


export default { GET };