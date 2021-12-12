/**
 * this is the api part responsible 
 * for performing CRUD operations
 * **/
mongoose = require('mongoose') ;
const express = require('express') ;
const DocModel = require('../models/docModel');
const docsRoute = express.Router() ;

//show all documents
docsRoute.route('/').get((req,res)=>{
    DocModel.find((error,data)=>{
        if (error){
            console.log("an error occured while retrieving data !") ; 
        }
        else{
            res.json(data) ;
        }
    })
}) ;

//get one document by name
docsRoute.route('/:name').get((req,res,next)=>{
    DocModel.find({name: req.params.name},(error,data)=>{
        if (error){
            return next(error) ; 
        } else {
            
            res.json(data) ;
        }
    })
})

//POST ONE DOCUMENT
docsRoute.route('/post').post((req,res,next)=>{
    DocModel(req.body).save((err,x)=>{
        if (err){console.log(err);}
        else res.send(x);
    }) ;
})

//EDIT ONE DOCUMENT BY NAME
  docsRoute.route('/edit/:Doc').put((req,res,next)=>{
        DocModel.findOneAndUpdate(req.params.Doc,req.body,
            {new:true},
            (error,data)=>{
                if (error){
                    console.log(error); 
                    return next(error); 
                }else{
                    console.log(data)
                    res.json(data) ; 
                    console.log('data updated successfully');
                }
            })
  })
  
//DELETE ONE DOCUMENT BY NAME
docsRoute.delete('/delete/:Doc', (req ,res) => {
    DocModel.findOneAndRemove({Doc:req.params.Doc}, (err, doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in books Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});



module.exports = docsRoute ; 