// 1
const mongoose = require('mongoose');
// 2
// mongoose.connect( 'mongodb://127.0.0.1:27017/hero' )
mongoose.connect( 'mongodb+srv://system:system@cluster0.8dld4l3.mongodb.net/hero?retryWrites=true&w=majority' )
    .then(
        ()=>{
            console.log('connected to db !');
        }
    )
    .catch(
        ()=>{
            console.log('error in connection');
        }
    )

// 3
module.exports = mongoose;