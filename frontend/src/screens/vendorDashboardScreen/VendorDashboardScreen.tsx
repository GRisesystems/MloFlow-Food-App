import { SetStateAction, useEffect, useState } from 'react';
import ListedProductsTab from './ListedProductsTabContent';
import AllSuppliesTab from './SuppliesTabContent';
import RequestedProductsTab from './RequestedProductsTabContent';
import GraphTab from './GraphTabContent';
import UploadProductTab from './UploadProductsTab';
import { useAuth } from '../../utils/AuthContext';
import VendorFirstLoginForm from '../../components/vendoScreenComponents/VendorFirstLoginForm';
import axios from 'axios';
import { BASE_URL } from '../../components/signin/constants';

const VendorDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  
`;

const TabMenu = styled.div`
  display: flex;
  width: 100%;
  padding: 20px; /* Adjust the padding as needed */
  font-size: 18px;
  font-weight: bold;
  gap: 200px; /* Add space between each tab */
`;

const TabContentContainer = styled.div`
  width: 100%;
`;

const VendorDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { isProfileComplete } = useAuth();
  const [categories, setCategories] = useState([])

  
  console.log('is profile complete:',isProfileComplete)
 

  useEffect(() => {
    // Fetch categories when the component mounts
    axios.get(`${BASE_URL}/api/v1/categories`) // Replace with your API endpoint
      .then(response => {
        setCategories(response.data.categories);

      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };
  // console.log(isAuthenticated)
  // console.log(isFirstTimeLogin)


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>
      {isProfileComplete ? <></> :  (
        <VendorFirstLoginForm
          is_profile_complete={isProfileComplete}
          product_categories={categories}
        />
      )}

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
