import React, { useState } from 'react';
import styled from 'styled-components';
import { Tab, Tabs, Paper, Switch } from '@mui/material';
import HireRequestsTab from './HireRequestsTab';
import PendingRequestsTab from './PendingRequestsTab';
import HistoryTab from './History';
import { useAuth } from '../../utils/AuthContext';

const ChefDashboardContainer = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
`;

const AvailabilityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CustomTabs = styled(Tabs)`
  background-color: #fbb31d; // Background color
  width: 100%; // Fill entire screen width
`;

const CustomTab = styled(Tab)`
  color: black; // Tab text color
`;

const ChefDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);
  useAuth();

  const handleAvailabilityChange = () => {
    setIsAvailable(!isAvailable);
  };

  const handleTabChange = (_event: any, newValue: React.SetStateAction<number>) => {
    setSelectedTab(newValue);
  };

  return (
    <ChefDashboardContainer>
      <AvailabilityContainer>
        <p>Welcome Chef! Your Availability:</p>
        <Switch checked={isAvailable} onChange={handleAvailabilityChange} />
      </AvailabilityContainer>
      <Paper square elevation={3}>
        <CustomTabs
          value={selectedTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleTabChange}
        >
          <CustomTab label="Hire Requests" />
          <CustomTab label="Pending Requests" />
          <CustomTab label="History" />
        </CustomTabs>
      </Paper>
      {selectedTab === 0 && <HireRequestsTab />}
      {selectedTab === 1 && <PendingRequestsTab acceptedRequests={[]} deniedRequests={[]} selectedRequest={null} />}
      {selectedTab === 2 && <History />}
    </ChefDashboardContainer>
  );
};

export default ChefDashboard;
