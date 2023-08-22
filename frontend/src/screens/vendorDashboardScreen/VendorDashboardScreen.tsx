import  { SetStateAction, useState } from 'react';
import ListedProductsTab from './ListedProductsTab';
import AllSuppliesTab from './AllSuppliesTab';
import RequestedProductsTab from './RequestedProducts';
import GraphTab from './GraphTab';

const VendorDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (newValue: SetStateAction<number>) => {
    setSelectedTab(newValue);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: selectedTab === 0 ? '#007bff' : '#f0f0f0',
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
            backgroundColor: selectedTab === 1 ? '#007bff' : '#f0f0f0',
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
            backgroundColor: selectedTab === 2 ? '#007bff' : '#f0f0f0',
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
            backgroundColor: selectedTab === 3 ? '#007bff' : '#f0f0f0',
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
      </div>
    </div>
  );
};

export default VendorDashboard;
