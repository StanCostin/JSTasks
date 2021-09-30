const mogoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mogoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true
        });
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;