const mongoose = require('mongoose')

const MONGO_URI = "mongodb+srv://t1:1234567890@cluster0.q5pxa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// Connect to mongodb
exports.connect = () => {
    console.log(mongoose.connection.readyState)
    // connect to db
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
       // useUndifiedTopology: true,
       // useCreateIndex : true,
       // useFindAndModify : false
    })
    .then(() => {
        console.log("Success Connect to db")
    })
    .catch((err)=>{
        console.log(err)
        console.log("Error connect to db")
        process.exit(1);
    })

}