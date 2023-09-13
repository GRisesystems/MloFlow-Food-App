import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import UpdateProductForm from '../../components/newproductupload/UpdateProduct';
import "./styles.css";
import { Button, Checkbox } from "@mui/material";

export default function VendorsList() {
    const [selectedRow, setSelectedRow] = React.useState(-1);
    const [vendors, setVendors] = useState([])
    const loadVendors = async () => {    

    const data = await axios.get( `http://localhost:8000/products/`)
    console.log(data.data)
    setVendors(data.data)
  }
useEffect(() =>{
  loadVendors()
},[])
const navigate = useNavigate();
   const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}/`)
    navigate('/products');
    }


  return (
    <div >
      <table onClick={() => { console.log(product.id) }}>
        <thead onClick={(e) => { console.log(product.id); e.stopPropagation() }}>
          <tr>
            <th>S/No:</th>
            <th>Passport Photo</th>
            <th>National ID</th>
            <th>Full Name</th>
            <th>Mobile</th>
            <th>A/C Number</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => {
            return (
              <tr >
                
                <td><ul><li></li></ul></td>
                <td><img src={vendor.} alt={vendor.name}  ></img></td>
                <td onClick={() => console.log(`Cell ${vendor.id}A was clicked!`)}>{vendor.id}</td>
                <td>{vendor.name}</td>
                <td>{vendor.price}</td>
                <td> </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
