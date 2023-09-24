import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function SuppliesTabContent() {
    const [selectedRow, setSelectedRow] = useState(-1);
    const [products, setProducts] = useState([])
    const loadProducts = async () => {    

    const data = await axios.get( `http://localhost:8000/products/`)
    console.log(data.data)
    setProducts(data.data)
  }
useEffect(() =>{
  loadProducts()
},[])


  return (
    <div >
      <table >
        <thead>
          <tr>
            <th>Select:</th>
            <th>Product Image</th>
            {/* <th>Serial No:</th> */}
            <th>Name</th>
            <th>Price (KES)</th>
            <th>Supplier</th>
            <th>In Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr className={"clickable-row ".concat(selectedRow === product.id ? "selected" : "")} key={product.id}>
                <td>
  
                </td>
                <td><img src={product.imageOne} alt={product.name}  ></img></td>
                {/* <td >{product.id}</td> */}
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td> </td>
                <td>{product.stock} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
