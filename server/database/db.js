import mongoose from "mongoose";

export const Connection = async (username , password) => {
    const URL = `mongodb://${username}:${password}@ac-g3bx0ml-shard-00-00.lg3hp8w.mongodb.net:27017,ac-g3bx0ml-shard-00-01.lg3hp8w.mongodb.net:27017,ac-g3bx0ml-shard-00-02.lg3hp8w.mongodb.net:27017/?ssl=true&replicaSet=atlas-x01y34-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log('Database connected successfully');
    } catch (error) {
        console.log("Error while connecting to the database", error.message);
    }
}

export default Connection;








