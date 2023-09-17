import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function VendorsList() {
    const [vendors, setVendors] = useState([])
    const loadVendors = async () => {    

    const data = await axios.get( `http://localhost:8000/products/`)
    console.log(data.data)
    setVendors(data.data)
  }
useEffect(() =>{
  loadVendors()
},[])

  return (
    <div >
      <table >
        <thead>
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
                <td><img src={vendor.image} alt={vendor.name}  ></img></td>
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
