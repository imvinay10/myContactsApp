const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();

router.route("/").get((req,res)=>{
res.status(200).json({message:"get all contacts"});
});
router.route("/:id").get((req,res)=>{
    res.status(200).json({message:`get contacts for ${req.params.id}`});
    });


router.route("/").post((req,res)=>{
    res.status(200).json({message:"create contacts"});
    });

    router.route("/:id").put((req,res)=>{
        res.status(200).json({message:`update contacts for ${req.params.id}`});
        });

        router.route("/:id").delete((req,res)=>{
            res.status(200).json({message:`delete contact for ${req.params.id}`});
            });
    
module.exports=router;