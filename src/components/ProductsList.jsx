import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, readProducts } from "../redux/productsSlice";

const ProductsList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [newProductName, setNewProductName] = useState("");
  const [editedProduct, setEditedProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => {
        console.log(res);
        dispatch(readProducts(res.data));
      })
      .catch((err) => console.error(err));
  }, [dispatch]);

  const handleCreateProduct = () => {
    if (newProductName) {
      const newProduct = { id: Date.now(), name: newProductName };
      dispatch(createProduct(newProduct));

      axios
        .post("http://localhost:3001/products", newProduct)
        .then(() => {
          setNewProductName;
        })
        .catch((err) => console.error(err));
    }
  };
  const handleUpdateProduct = () => {};
  const handleDeleteProduct = () => {};

  return (
    <>
      <h2>CRUD de Productos</h2>
      <h3>Lista de Productos</h3>
      <ul>
        {products.data.map((product) => (
          <li key={product.id}>
            {editedProduct.id === product.id ? (
              <div>
                <input type="text" />
                <button>Actualizar</button>
              </div>
            ) : (
              <div>
                <span>{product.name}</span>
                <button>Editar</button>
                <button>Eliminar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <aside>
        <input
          type="text"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <button onClick={handleCreateProduct}>Agregar Producto</button>
      </aside>
    </>
  );
};

export default ProductsList;
