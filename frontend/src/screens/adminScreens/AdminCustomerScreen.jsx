import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CustomerTopCard from '../../components/adminComponents/customer/CustomerTopCard'
import CustomerTable from '../../components/adminComponents/customer/CustomerTable'

const AdminCustomerScreen = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={4} lg={3} sm={12} xs={12}>
          <CustomerTopCard amount={10} />
        </Grid>
      </Grid>
      <CustomerTable />
    </Box>
  )
}

export default AdminCustomerScreen