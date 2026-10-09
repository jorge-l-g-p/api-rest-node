import {
  getProductsModel,
  getProductsByIdModel,
} from "../models/products.model.js";

export const getAllProducts = async (req, res) => {
  const { category } = req.query;
  //console.log("categoria recibida:", category);
  const products = await getProductsModel();
  /* esta condicion filtra por categoria 
 ejemplo http://localhost:3000/products?category=hogar
 solo trae el objeto 5*/
  if (category) {
    const productsFiltered = products.filter((item) =>
      item.categories.includes(category),
    );
    return res.json(productsFiltered);
  }
  return res.json(products);
};

export const searchProducts = (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ Error: "El nombre es requerido" });
  }

  const products = getProductsModel();

  const productosFiltered = products.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase()),
  );

  if (productosFiltered.length === 0) {
    return res.status(404).json({ Error: "No se encontraron productos" });
  }
  res.json(productosFiltered);
};

export const getProductsById = async (req, res) => {
  const id = req.params.id;

  const product = await getProductsByIdModel(id);

  //si niego un producto que no existe en los productos me daverdadero
  if (!product) {
    return res.status(404).json({ Error: "no existe el producto" });
  }
  //res.status(200).json(id);
  //dentro  de la riquest hay un objeto que se llama params
  //res.json(req.params.);
  return res.json(product);
};
