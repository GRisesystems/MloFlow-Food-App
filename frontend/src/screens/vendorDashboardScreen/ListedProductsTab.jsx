import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import UpdateProductForm from '../../components/newproductupload/UpdateProduct';
import "./styles.css";
import { Button } from "@mui/material";

export default function ListedProductsTabContent() {
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
const navigate = useNavigate();
   const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}/`)
    navigate('/products');
    }


  return (
    <div >
      <table >
        <thead>
          <tr>
            <th>Select:</th>
            <th>Product Image</th>
            <th>Serial No:</th>
            <th>Name</th>
            <th>Price (KES)</th>
            <th>Modify</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr className={"clickable-row ".concat(selectedRow === product.id ? "selected" : "")}>
                
                <td></td>
                <td><img src={product.imageOne} alt={product.name}  ></img></td>
                <td onClick={() => console.log(`Cell ${product.id}A was clicked!`)}>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td> <Button className="update" sx={{   visibility: selectedRow ? 'visible' : ''  }}>
                      <UpdateProductForm  />
                  </Button></td>
                <td> <Button variant="contained" className="delete"
                     onClick = {() => deleteProduct(product.id)} sx={{   visibility: selectedRow ? 'visible' : ''  }}>
                        DELETE
                  </Button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
