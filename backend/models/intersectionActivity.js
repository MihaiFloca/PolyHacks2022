import mongoose from 'mongoose';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("../public/intersectionActivitySimple.json");

export const IntersectionActivitySchema = new mongoose.Schema({
    type: String,
    properties: {
        Id_Reference: Number,
        Id_Intersection: Number,
        Nom_Intersection: String,
        Date: Date,
        Periode: String,
        Heure: Number,
        Minute: Number,
        Seconde: Number,
        Code_Banque: Number,
        Description_Code_Banque: String,
        NBLT: Number,
        NBT: Number,
        NBRT: Number,
        SBLT: Number,
        SBT: Number,
        SBRT: Number,
        EBLT: Number,
        EBT: Number,
        EBRT: Number,
        WBLT: Number,
        WBT: Number,
        WBRT: Number,
        Approche_Nord: Number,
        Approche_Sud: Number,
        Approche_Est: Number,
        Approche_Ouest: Number,
        Localisation_X: Number,
        Localisation_Y: Number,
        Longitude: Number,
        Latitude: Number
    },
    geometry: {    
      type: String,
      coordinates: [Number, Number],
    },
})

const IntersectionActivityModel = mongoose.model('IntersectionActivity', IntersectionActivitySchema, 'IntersectionActivity');

export async function firstLoad(){
    console.log("here")
    IntersectionActivityModel.collection.insertMany(data.filter(d => d.properties.Description_Code_Banque === 'Velos'), onInsert);
}
function onInsert(){
    console.log('shit good')
}
export default IntersectionActivityModel
