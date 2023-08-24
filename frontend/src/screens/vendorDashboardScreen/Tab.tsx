import React from 'react';
import styled from '@emotion/styled';

interface TabProps {
  label: string;
  activeTab: string;
  tabName: string;
  onTabChange: (tab: string) => void;
}

const StyledTab = styled.div<{ active: boolean }>`

  cursor: pointer;
  color: ${({ active }) => (active ? '#FBB31D' : 'inherit')};
  border-radius: 0;
  border-bottom: ${({ active }) => (active ? '6px solid #FBB31D' : 'none')};
`;

const Tab: React.FC<TabProps> = ({ label, activeTab, tabName, onTabChange }) => {
  const handleClick = () => {
    onTabChange(tabName);
  };

  return (
    <StyledTab onClick={handleClick} active={activeTab === tabName}>
      {label}
    </StyledTab>
  );
};

export default Tab;
