import { useState } from 'react';
import styled from 'styled-components';
// Import your ChefDashboard tab components here
import HireRequestsTab from './HireRequestsTab';
import PendingRequestsTab from './PendingRequestsTab';
import HistoryTab from './History';
import Switch from '@mui/material/Switch';

// Define your styled components here
const ChefDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
`;

// const WelcomeMessage = styled.h1`
//   font-size: 24px;
//   margin-bottom: 20px;
// `;

const TabMenu = styled.div`
  display: flex;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
`;

const TabButton = styled.button<{ isActive: boolean }>` // <-- Add backtick here
  flex: 1;
  padding: 20px;
  background-color: ${props => (props.isActive ? '#FFA000' : '#f0f0f0')};
  color: ${props => (props.isActive ? 'black' : 'black')};
  border: none;
  border-radius: 0;
  cursor: pointer;
`;

const TabContentContainer = styled.div`
  width: 100%;
`;
const AvailabilityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const ChefDashboard = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
 const [isAvailable, setIsAvailable] = useState<boolean>(false);

  const handleAvailabilityChange = () => {
    setIsAvailable(!isAvailable);
  };
  // Define your tab-specific components here
  const tabComponents = [
    <HireRequestsTab />,
    <PendingRequestsTab />,
    <HistoryTab />
  ];

  const handleTabChange = (tab: number) => {
    setSelectedTab(tab);
  };

  return (
    <ChefDashboardContainer>
      {/* <WelcomeMessage>Welcome Chef!</WelcomeMessage> */}
      <AvailabilityContainer>
        <p>Welcome Chef! Your Availability:</p>
        <Switch checked={isAvailable} onChange={handleAvailabilityChange} />
      </AvailabilityContainer>
      <TabMenu>
        <TabButton isActive={selectedTab === 0} onClick={() => handleTabChange(0)}>
          Hire Requests
        </TabButton>
        <TabButton isActive={selectedTab === 1} onClick={() => handleTabChange(1)}>
          Pending Requests
        </TabButton>
        <TabButton isActive={selectedTab === 2} onClick={() => handleTabChange(2)}>
          History
        </TabButton>
      </TabMenu>
      <TabContentContainer>
        {tabComponents[selectedTab]}
      </TabContentContainer>
    </ChefDashboardContainer>
  );
};

export default ChefDashboard;