import app from "./app";

const mongoose = require('mongoose');
const port = 5000
main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.tbsccmb.mongodb.net/mongo-express?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("connect with mongodb ✅")
        app.listen(port, () => {
            console.log(`express server running on`, port)
        })
    } catch (error) {
        console.log(error)
    }
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}