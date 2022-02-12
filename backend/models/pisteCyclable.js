import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import GenerateSchema from 'generate-schema';
// import {CardFeesPrograms} from '../generated/types/CardFeesPrograms';
import * as pisteCyclable from '../public/reseauCyclableSmoll.json';
import {ProprietePisteCyclable, GeometryGeoJSON} from './librairyPisteCyclable'

const PisteCyclableSchema = new Schema({
    type: String,
    properties: ProprietePisteCyclable,
    geometry: GeometryGeoJSON,
});

const MtlPisteCyclableSchema = new Schema({
  ...GenerateSchema.mongoose(pisteCyclable),
  pisteCyclable: {
    type: String,
    name: Date,
    crs: {
      type: String,
      properties: {
        name: String
      }
    },
    features: [PisteCyclableSchema]
  },
});


