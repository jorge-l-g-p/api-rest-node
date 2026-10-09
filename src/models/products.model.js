import { db } from "./firebase.js";
// para traer los datos desde la base de datos de firebase
// de la collection que creamos

import { collection, getDocs, doc, getDoc } from "firebase/firestore";
const productsCollection = collection(db, "products");

export const getProductsModel = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error);
  }
  //return products;
};

export const getProductsByIdModel = async (id) => {
  //return products.find((item) => item.id === id);
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.error(error);
  }
};
