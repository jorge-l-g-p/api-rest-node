//este modulo se crea para la ruta de los productos para tener todo organizado.
import { Router } from "express";

const router = Router();

import {
  getAllProducts,
  getProductsById,
  searchProducts,
} from "../controllers/products.controller.js";

router.get("/products", getAllProducts);

router.get("/products/search", searchProducts);

router.get("/products/:id", getProductsById);

export default router;
