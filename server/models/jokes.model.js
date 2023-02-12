const mongoose = require('mongoose')
//creating jokes schema including its validation, then export it.
const JokesSchema = new mongoose.Schema({
    setup: {
        type:String,
        minLength:[10, "Setup must be greater than 15 character."],
        maxLength: [50, "Jokes must be less than 50 character."]
    },
    punchLine:{
        type: String,
        minLength: [5, "PunchLine must be greater than 20 character."],
        maxLength: [100, "Puch line must be less than 100 character."]

    } 
},
{timestamps:true}
)
const Jokes_API = mongoose.model('joke', JokesSchema);
module.exports = Jokes_API;