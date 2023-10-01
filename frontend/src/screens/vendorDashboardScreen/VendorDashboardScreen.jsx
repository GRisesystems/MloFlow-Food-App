import { useState } from 'react';
import styled from 'styled-components';
// import ListedProductsTab from './ListedProductsTabContent';
import ListedProductsTabContent from './ListedProductsTab';
import AllSuppliesTab from './SuppliesTabContent';
import RequestedProductsTab from './RequestedProductsTabContent';
import GraphTab from './GraphTabContent';
import AddProductsForm from '../../components/newproductupload/AddProducts';
import WishList from './WishList';
import { useAuth } from '../../utils/AuthContext';
// import VendorFirstLoginForm from '../../components/vendoScreenComponents/VendorFirstLoginForm';
// import axios from 'axios';
// import { BASE_URL } from '../../components/signin/constants';
import { Box, Typography } from '@mui/material';
import "./styles.css";

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
  font-size: 18px;
  font-weight: bold;
`;

const TabButton = styled.button` 
  flex: 1;
  padding: 20px;
  background-color: ${props => (props.isActive ? '#FBB31D' : '#f0f0f0')};
  color: ${props => (props.isActive ? 'black' : 'black')};
  border: none;
  border-radius: 0;
  cursor: pointer;
`; 

const TabContentContainer = styled.div`
  width: 100%;
`;

const VendorDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { first_name } = useAuth();
  // const { isProfileComplete } = useAuth();
  // const [categories, setCategories] = useState([])

  
  
 

  // useEffect(() => {
  //   // Fetch categories when the component mounts
  //   axios.get(`${BASE_URL}/api/v1/categories`) // Replace with your API endpoint
  //     .then(response => {
  //       setCategories(response.data.categories);

  //     })
  //     .catch(error => {
  //       console.error('Error fetching categories:', error);
  //     });
  // }, []);

  
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  // console.log(isAuthenticated)
  // console.log(isFirstTimeLogin)
 {/* {isProfileComplete ? <></> :  (
        <VendorFirstLoginForm
          is_profile_complete={isProfileComplete}
          product_categories={categories}
        />
      )} */}

   return(
     
  <VendorDashboardContainer>
    <Box className="vendor"  >
     <Typography variant='h3'>Welcome <span>{first_name }</span> </Typography>
     <AddProductsForm />
    </Box>
  <TabMenu>
    <TabButton isActive={selectedTab === 0} onClick={() => handleTabChange(0)}>
     All Supplies
    </TabButton>
    <TabButton isActive={selectedTab === 1} onClick={() => handleTabChange(1)}>
    Listed Products
    </TabButton>
    <TabButton isActive={selectedTab === 2} onClick={() => handleTabChange(2)}>
      Requested Products
    </TabButton>
    <TabButton isActive={selectedTab === 3} onClick={() => handleTabChange(3)}>
      Graph
    </TabButton>
    <TabButton isActive={selectedTab === 4} onClick={() => handleTabChange(4)}>
      Wish List
    </TabButton>
  </TabMenu>

  <TabContentContainer>
   
    {selectedTab === 0 && <AllSuppliesTab />}
    {selectedTab === 1 && <ListedProductsTabContent />}
    {selectedTab === 2 && <RequestedProductsTab />}
    {selectedTab === 3 && <GraphTab />}
    {selectedTab === 4 && <WishList />}

  </TabContentContainer>
</VendorDashboardContainer>
);
};

export default VendorDashboard;