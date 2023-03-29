const products=require('../Model/Productsschema')
const getallproduct=async(req,res)=>{
    try{
        const newproduct=await products.find();
        res.json(newproduct)   
    }catch(err){
        res.status(400).json({message:'failed to fetch data'})
    }

}
const getindividualproduct=async(req,res)=>{
    try{
        const findindividual=await products.findOne({id:req.params.id});
        console.log(findindividual)
        res.status(200).json(findindividual)
    }
    catch(err){
        res.status(400).json({message:'failed to fetch data'})
    }
}
module.exports={getallproduct,getindividualproduct}