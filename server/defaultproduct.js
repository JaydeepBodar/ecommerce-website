const productschema=require('./Model/Productsschema')
const product=require('./products')
const defaultdata=async()=>{
    try{
        await productschema.deleteMany({})
        const data=await productschema.insertMany(product)
        return data;
    }catch(err){
        
    }
}
module.exports=defaultdata;         