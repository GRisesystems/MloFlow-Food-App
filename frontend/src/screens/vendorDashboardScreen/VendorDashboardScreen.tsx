// VendorDashboard.js
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Tab from './Tab';
import SuppliesTabContent from './SuppliesTabContent';
import ListedProductsTabContent from './ListedProductsTabContent';
import RequestedProductsTabContent from './RequestedProductsTabContent';
import GraphTabContent from './GraphTabContent';

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

const VendorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('supplies');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <VendorDashboardContainer>
      <TabMenu>
        <Tab
          label="All Supplies"
          activeTab={activeTab}
          tabName="supplies"
          onTabChange={handleTabChange}
        />
        <Tab
          label="Listed Products"
          activeTab={activeTab}
          tabName="listed-products"
          onTabChange={handleTabChange}
        />
        <Tab
          label="Requested Products"
          activeTab={activeTab}
          tabName="requested-products"
          onTabChange={handleTabChange}
        />
        <Tab
          label="Graph"
          activeTab={activeTab}
          tabName="graph"
          onTabChange={handleTabChange}
        />
      </TabMenu>
      <TabContentContainer>
        {activeTab === 'supplies' && <SuppliesTabContent />}
        {activeTab === 'listed-products' && <ListedProductsTabContent />}
        {activeTab === 'requested-products' && <RequestedProductsTabContent />}
        {activeTab === 'graph' && <GraphTabContent />}
      </TabContentContainer>
    </VendorDashboardContainer>
  );
};

export default VendorDashboard;
