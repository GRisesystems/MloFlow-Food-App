import { Box, Button } from '@mui/material';
// import {useState} from 'react'
import { useSearchParams } from 'react-router-dom';

const ActivateAccountScreen = () => {
  // const[verified,setVerified] = useState(false)
  const [uuid] = useSearchParams()

  // const verify_account =()=>{

  // }
  return (
    <Box>
      <Button variant='outlined' onClick={()=>console.log(uuid)}>
        Verify Account
      </Button>
      </Box>
  )
}

export default ActivateAccountScreen