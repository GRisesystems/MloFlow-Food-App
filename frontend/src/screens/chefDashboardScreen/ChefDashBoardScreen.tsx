import { useState } from 'react';
import styled from 'styled-components';
import HireRequestsTab from './HireRequestsTab';
import PendingRequestsTab from './PendingRequestsTab';
import HistoryTab from './History';
import Switch from '@mui/material/Switch';
import { useAuth } from '../../utils/AuthContext';
import ChefFirstLoginForm from '../../components/chefs/ChefFirstLoginForm';


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
  const [acceptedRequests, setAcceptedRequests] = useState<number[]>([]); // Maintain state here
  const [deniedRequests, setDeniedRequests] = useState<number[]>([]); // Maintain state here
  const [selectedRequest, setSelectedRequest] = useState<number | null>(null); // Specify the type as 'number | null'

  const { accessToken, updateProfileData,isProfileComplete } = useAuth();
  // console.log('is profile complete:',isProfileComplete)

  const handleAvailabilityChange = () => {
    setIsAvailable(!isAvailable);
  };
  const handleRequestSelect = (requestId: number) => {
    setSelectedRequest(requestId);
  };
  // Define your tab-specific components here
  const tabComponents = [
    <HireRequestsTab
      acceptedRequests={acceptedRequests}
      deniedRequests={deniedRequests}
      setAcceptedRequests={setAcceptedRequests}
      setDeniedRequests={setDeniedRequests}
      onSelectRequest={handleRequestSelect}
  selectedRequest={selectedRequest}
    />,
    <PendingRequestsTab
      acceptedRequests={acceptedRequests}
      deniedRequests={deniedRequests} selectedRequest={null}/>,
    <HistoryTab
      acceptedRequests={acceptedRequests}
      deniedRequests={deniedRequests}
    />,
  ];

  const handleTabChange = (tab: number) => {
    setSelectedTab(tab);
  };

  return (
    <ChefDashboardContainer>
      {/* <WelcomeMessage>Welcome Chef!</WelcomeMessage>
      {isProfileComplete ? <></>: <ChefFirstLoginForm/>} */}
      {isProfileComplete ? <></>: <ChefFirstLoginForm/>} 
      <AvailabilityContainer>
        <p>Welcome Chef! Your Availability:</p>
        <Switch checked={isAvailable} onChange={handleAvailabilityChange} />
      </AvailabilityContainer>
      <TabMenu>
        {tabComponents.map((tab, index) => (
          <TabButton
            key={index}
            isActive={selectedTab === index}
            onClick={() => handleTabChange(index)}
          >
            {index === 0 ? 'Hire Requests' : index === 1 ? 'Pending Requests' : 'History'}
          </TabButton>
        ))}
      </TabMenu>
      <TabContentContainer>
        {tabComponents[selectedTab]}
      </TabContentContainer>
    </ChefDashboardContainer>
  );
};

export default ChefDashboard;