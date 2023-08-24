import  { SetStateAction, useState } from 'react';
import ListedProductsTab from './ListedProductsTab';
import AllSuppliesTab from './AllSuppliesTab';
import RequestedProductsTab from './RequestedProducts';
import GraphTab from './GraphTab';
import UploadProductTab from './UploadProductsTab';
import { useAuth } from '../../utils/AuthContext';
import VendorFirstLoginForm from '../../components/vendoScreenComponents/VendorFirstLoginForm';

const VendorDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { loading,isFirstTimeLogin,isAuthenticated} =  useAuth();
  console.log(loading)

  const handleTabChange = (newValue: SetStateAction<number>) => {
    setSelectedTab(newValue);
  };

console.log(isAuthenticated)
console.log(isFirstTimeLogin)
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'1rem'}}>
      {isFirstTimeLogin && <VendorFirstLoginForm is_first_time_login={isFirstTimeLogin}/>}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: selectedTab === 0 ? '#FFA000' : '#f0f0f0',
            color: selectedTab === 0 ? 'white' : 'black',
            border: 'none',
            borderRadius: '5px',
            margin: '0 10px',
            cursor: 'pointer',
          }}
          onClick={() => handleTabChange(0)}
        >
          Listed Products
        </button>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: selectedTab === 1 ? '#FFA000' : '#f0f0f0',
            color: selectedTab === 1 ? 'white' : 'black',
            border: 'none',
            borderRadius: '5px',
            margin: '0 10px',
            cursor: 'pointer',
          }}
          onClick={() => handleTabChange(1)}
        >
          All Supplies
        </button>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: selectedTab === 2 ? '#FFA000' : '#f0f0f0',
            color: selectedTab === 2 ? 'white' : 'black',
            border: 'none',
            borderRadius: '5px',
            margin: '0 10px',
            cursor: 'pointer',
          }}
          onClick={() => handleTabChange(2)}
        >
          Requested Products
        </button>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: selectedTab === 3 ? '#FFA000' : '#f0f0f0',
            color: selectedTab === 3 ? 'white' : 'black',
            border: 'none',
            borderRadius: '5px',
            margin: '0 10px',
            cursor: 'pointer',
          }}
          onClick={() => handleTabChange(3)}
        >
          Graph
        </button>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: selectedTab === 4 ? '#FFA000' : '#f0f0f0',
            color: selectedTab === 4 ? 'white' : 'black',
            border: 'none',
            borderRadius: '5px',
            margin: '0 10px',
            cursor: 'pointer',
          }}
          onClick={() => handleTabChange(4)}
        >
          Upload Product
        </button>
      </div>
      <div
        style={{
          width: '100%',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {selectedTab === 0 && <ListedProductsTab />}
        {selectedTab === 1 && <AllSuppliesTab />}
        {selectedTab === 2 && <RequestedProductsTab />}
        {selectedTab === 3 && <GraphTab />}
        {selectedTab === 4 && <UploadProductTab />}
      </div>
    </div>
  );
};

export default VendorDashboard;
