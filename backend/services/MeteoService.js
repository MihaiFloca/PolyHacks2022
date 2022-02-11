
// Code used for api requests here

async function getTemperatureData(req) {
    const { n } = req.params;
    if (n > 0) {
        return temperatureList.slice(0, n);
    }
    return temperatureList[0];
}


export default { 
    getTemperatureData,
};
