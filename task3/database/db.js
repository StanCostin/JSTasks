const mongoose = require('mongoose');

const comDB = async () => {
    try {

        const com = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true});
        console.log(`MongoDB is connected at host: ${com.connection.host}`);

    } catch (error) {
        
        console.log(error);
        process.exit(1);

    }
}

module.exports = comDB;