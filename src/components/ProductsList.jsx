import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readProducts } from "../redux/productsSlice";

const ProductsList = () =>{

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const [newProductName, setNewProductName] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3001/products").then((res) => {
            console.log(res);
            dispatch(readProducts(res.data))
        }).catch(err => console.error(er))
    }, [dispatch])

    const handleCreateProduct = () => {}
    const handleUpdateProduct = () => {}
    const handleDeleteProduct = () => {}

    return <>
        <h2>CRUD de Productos</h2>
        <h3>Lista de Productos</h3>
        <ul>
            {products.data.map((product) => (<li key={product.id}>{product.name}</li>))}
        </ul>
        <aside>
            <input type="text" value={newProductName} onChange={(e) => setNewProductName(e.target.value)}/>
            <button onClick={handleCreateProduct}>Agregar Producto</button>
        </aside>
    </>
}

export default ProductsList;