const mongoose = require('mongoose');


const Hero = mongoose.model( 'Hero' , {

    name: String,
    power: Number,
    image: String,
    description:String,

} );

module.exports = Hero;