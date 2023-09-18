import styled from '@emotion/styled';


const StyledTab = styled.div`

  cursor: pointer;
  color: ${({ active }) => (active ? '#FBB31D' : 'inherit')};
  border-radius: 0;
  border-bottom: ${({ active }) => (active ? '6px solid #FBB31D' : 'none')};
`;

const Tab = (label, activeTab, tabName, onTabChange ) => {
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
