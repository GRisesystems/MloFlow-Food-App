import Box from '@mui/material/Box';
import VendorsList from '../vendorDashboardScreen/VendorsList';
const VendorAdminScreen = () => {
  const data = [
    {
      id: 1,
      name: 'Total vendors',
      amount: 200
    },
    {
      id: 2,
      name: 'Total revenue',
      amount: 2000000
    }
  ]
  return (
    <Box>
      <VendorsList />
    </Box>
  )
}

export default VendorAdminScreen