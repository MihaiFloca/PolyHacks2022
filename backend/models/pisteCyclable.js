import mongoose from 'mongoose';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("../public/reseauCyclablePiste.json");

export const PisteCyclableSchema = new mongoose.Schema({
    type: String,
    properties: {
      ID_TRC_GEO: String,
      TYPE_VOIE: Date,
      TYPE_VOIE2: Number,
      LONGUEUR: Number,
      NBR_VOIE: Number,
      SEPARATEUR: String,
      SAISONS4: String,
      PROTEGE_4S: String,
      Ville_MTL: String,
      NOM_ARR_VI: String,
      ID2020: Number
    },
    geometry: {    
      type: String,
      coordinates: [[[Number, Number]]],
    },
});

const PisteCyclableModel = mongoose.model('PisteCyclable', PisteCyclableSchema, 'PisteCyclable');

function firstLoad(){
  PisteCyclableModel.collection.insertMany(data, onInsert);
}
function onInsert(){
  console.log('shit good')
}
export default PisteCyclableModel