import mongoose from 'mongoose';

const server = 'mongo:27017'
const database = 'fomo'
const opt =  { useUnifiedTopology: true, useNewUrlParser: true }

class Database {
    constructor() {
        this.connect()
    }
    connect(){
        mongoose.connect(`mongodb://${server}/${database}`, opt)
            .then(() => {
                console.log('Connected to Database!')
            }).catch((err) => console.log(err));
    }
}

export default Database