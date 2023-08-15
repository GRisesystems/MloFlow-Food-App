import  { useState } from 'react';
import Login from '../../components/signin/Login';
import SignUp from '../../components/signin/SignUp';

const SignInScreen = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const buttonStyle = {
    backgroundColor: showSignUp ? '#FFA000' : '#FFA000', "&:hover": {color: 'black', backgroundColor: '#FFA000'},
    color: 'black',
    
    fontSize: '20px',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const handleMouseEnter = (e:any) => {
    e.currentTarget.style.color = 'black';
    e.currentTarget.style.backgroundColor = '#FFA000';
  };

  const handleMouseLeave = (e:any) => {
    e.currentTarget.style.color = 'black';
    e.currentTarget.style.backgroundColor = showSignUp ? '#FFA000' : '#FFA000';
  };

  return (

    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, padding: '50px', backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ fontSize: '65px', marginBottom: '16px' }}>
          {showSignUp ? 'Already have an account?' : "Don't have an account yet?"}
        </p>
        <button
          onClick={toggleSignUp}
          style={{ ...buttonStyle, width: '100%', marginBottom: '20px' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {showSignUp ? 'Sign In' : 'Create Account'}
        </button>
      </div>
      <div style={{ flex: 1 }}>
        {showSignUp ? <SignUp /> : <Login />}
      </div>
    </div>
  );
};


export default SignInScreen;
