const resellerModel = require("../models/reseller")
const ErrorHandling = require("../servives/service")
const chartmodel = require("../models/charts")

exports.createResller = ErrorHandling(async(req,res)=>{
    const reseller = await resellerModel.create(req.body)
    if(reseller){
        res.status(200).json({data:reseller,message:"Data Saved"})
    }else{
        res.status(400).json({data:reseller,message:"error occur"})
    }
})
exports.insertchart = ErrorHandling(async(req,res)=>{
    const charts = await chartmodel.create(req.body)
    if(charts){
        res.status(200).json({data:reseller,message:"Data Saved"})
    }else{
        res.status(400).json({data:reseller,message:"error occur"})
    }
})
exports.getchart = ErrorHandling(async(req,res)=>{
    const data = await chartmodel.find()
    if(data){
        res.status(200).json({data:data,message:"Data fount"})
    }else{
        res.status(400).json({data:data,message:"error not found"})
    }
})