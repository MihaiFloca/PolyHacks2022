import mongoose from 'mongoose';
import GeoJSON from 'mongoose-geojson-schema'
const Schema = mongoose.Schema;
import GenerateSchema from 'generate-schema';
// import {CardFeesPrograms} from '../generated/types/CardFeesPrograms';
import * as pisteCyclable from '../public/reseauCyclableSmoll.json';

export const ProprietePisteCyclable = new Schema({
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
});

export const GeometryGeoJSON = new Schema({
    type: String,
    coordinates: [[[Number, Number]]],
});
