import axios from "axios";

export async function productsData () {
    const products = await axios.get("https://fakestoreapiserver.reactbd.org/api/products");
    return products
}