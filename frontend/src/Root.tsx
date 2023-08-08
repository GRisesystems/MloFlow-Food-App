import { Outlet } from 'react-router-dom';
import NavBar from './includes/NavBar';
import TopNav from './includes/TopNav';
import { FooterContainer } from './includes/Footer';

const Root = () => {
  return (
    <div style={{ position: 'relative' }}>
      <TopNav />
      <NavBar />
      <Outlet />
      <FooterContainer />
    </div>
  );
};

export default Root;
