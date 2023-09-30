import  { useEffect, useState } from "react";
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>County/State</th>
            <th>City</th>
            <th>Product Category</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Bank</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => {
            return (
              <tr  key={vendor.id} >
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>

            );
          })}
        </tbody>
      </table>
    </div>
  );
}
