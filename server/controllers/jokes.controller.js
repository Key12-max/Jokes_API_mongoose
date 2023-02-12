const Jokes = require('../models/jokes.model')

//export all in a single object
module.exports = {
    //get all jokes

    allJokes:(request, response)=>{
        Jokes.find({})
        .then((AllJokes)=>{
            response.json(AllJokes)
        })
        .catch((err)=>{
            response.status(500).json({message: 'Something went wrong', error:err})
        })
    },
    //get a single joke using an id
    oneJoke:(request, response)=>{
        console.log(request.params)
        Jokes.findById({ _id: request.params.id},request.body)
        .then((singleJoke)=>{
            response.json(singleJoke)
        })
        .catch((err)=>{
            response.status(500).json({message: 'Something went wrong', error:err})
        })
    },
    //create a joke
    createJokes: (request, response)=>{
        Jokes.create(request.body)
        .then(createdJokes=>{
            response.json(createdJokes)
        })
        .catch((err)=>{
            response.status(500).json({message: 'Something went wrong', error:err})
        })
    },
    //update by id
    updateJoke:(request, response)=>{
        Jokes.findByIdAndUpdate({_id: request.params.id}, request.body)
        .then(updatedJokes =>{
            response.json(updatedJokes)
        })
        .catch((err)=>{
            response.status(500).json({message: 'Something went wrong', error:err})
        })
    },
    //delete using an id
    deleteJokes:(request, response)=>{
        Jokes.deleteOne({_id: request.params.id})
        .then(result=>{
            response.json(result)
        })
        .catch((err)=>{
            response.status(500).json({message: 'Something went wrong', error:err})
        })
    }

}