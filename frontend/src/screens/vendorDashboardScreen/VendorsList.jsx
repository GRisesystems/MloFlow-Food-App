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
            <th>National ID</th>
            <th>Phone</th>
            <th>Email</th>
            <th>A/C Number</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => {
            return (
              <tr  key={vendor.id} >
                <ol>
                <li>
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
                </li>
              </ol>
              </tr>

            );
          })}
        </tbody>
      </table>
    </div>
  );
}
