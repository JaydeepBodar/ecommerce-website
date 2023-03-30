const products = require("../Model/Productsschema");
const getallproduct = async (req, res) => {
  setTimeout(async () => {
    try {
      const newproduct = await products.find();
      res.json(newproduct);
    } catch (err) {
      res.status(400).json({ message: "failed to fetch data" });
    }
  },800);
};
const getindividualproduct = async (req, res) => {
  setTimeout(async()=>{
    try {
      const findindividual = await products.findOne({ id: req.params.id });
      console.log(findindividual,'shsduhdusi');
      res.status(200).json(findindividual);
    } catch (err) {
      res.status(400).json({ message: "failed to fetch data" });
    }
  },400)
};
module.exports = { getallproduct, getindividualproduct };
