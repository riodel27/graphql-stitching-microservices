const fetch = require('node-fetch');

const getProducts = async() => {
  const res = await fetch(process.env.PRODUCTS_URL)
  const json = res.json();
  return json;
}

const getProduct = async(product) => {
  const products = await getProducts()
  return products.find(p => p.id == product);
} 

const getReviews = async() => {
	const res = await fetch(process.env.REVIEW_URL)
	const json = res.json();
	console.log('response: ', json)
  return json;
}

module.exports = {
  getProducts,
  getReviews,
  getProduct
}