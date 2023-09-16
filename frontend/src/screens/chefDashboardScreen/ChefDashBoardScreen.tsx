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
  margin-top: 10px;
  margin-left: 15px;
`;

const AvailabilityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CustomTabs = styled(Tabs)`
  background-color: #fbb31d;
  width: 100%;
`;

const CustomTab = styled(Tab)`
  color: black;
  width: 33.3%;
  border: #fbb31d;

  &.Mui-selected {
    border-bottom: 2px solid black;
  }
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

  const onSelectRequest = (requestId: number) => {
    // Implement the functionality to handle the selection of a request
    // For example, you can set the selectedRequest state here.
  };

  function moveRequestToPending(requestId: number): void {
    throw new Error('Function not implemented.');
  }

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
      {selectedTab === 0 && (
        <HireRequestsTab
          onMoveRequest={moveRequestToPending}
          onSelectRequest={onSelectRequest}
        />
      )}
      {selectedTab === 1 && (
        <PendingRequestsTab
          acceptedRequests={[]}
          deniedRequests={[]}
          selectedRequest={null}
        />
      )}
      {selectedTab === 2 && <HistoryTab acceptedRequests={[]} deniedRequests={[]} />}
    </ChefDashboardContainer>
  );
};

export default ChefDashboard;
