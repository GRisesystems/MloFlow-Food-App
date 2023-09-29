import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CustomerTopCard from '../../components/adminComponents/customer/CustomerTopCard'
import CustomerTable from '../../components/adminComponents/customer/CustomerTable'
import customer_data from './testData/customer_data.json'

const AdminCustomerScreen = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={4} lg={3} sm={12} xs={12}>
          <CustomerTopCard amount={10} />
        </Grid>
      </Grid>
      <CustomerTable customer_data={customer_data} />
    </Box>
  )
}

export default AdminCustomerScreen