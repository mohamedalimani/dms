const mongoose = require('mongoose') ; 

let documents = new mongoose.Schema({
    FullName:{
        type:String
    },
    Description:{
        type:String
    },
    Date:{
        type:Date
    },
    Doc:{
        type:String
    }
},{
    collection:'documents'
})

module.exports = mongoose.model('documents',documents) ;
