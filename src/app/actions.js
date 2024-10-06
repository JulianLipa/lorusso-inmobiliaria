import Product from "@/app/models/Product";
import dbConnect from '@/app/database/dbConnect'
import axios from "axios";

const getAllProductsDB = async () => {
  await dbConnect();
  try {
    const products = await Product.find();
    return { products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.log("Error: ", error.message);
    return { products: [], category: null };
  }
}

const getOneProductDB = async (id) => {
  await dbConnect();
  try{
    const product = await Product.findById(id)
    return {product: JSON.parse(JSON.stringify(product))};
  } catch (error){
    console.log(error);
    return null;
  }
}


const getAllProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/products');
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

export { getAllProducts, getAllProductsDB, getOneProductDB};