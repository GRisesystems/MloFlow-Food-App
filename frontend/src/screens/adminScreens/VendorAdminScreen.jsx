import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TopCard from '../../components/adminComponents/vendors/TopCard'
import FinancialAreaChart from '../../components/adminComponents/dashboard/FinancialAreaChart'
import TopVendorsTable from '../../components/adminComponents/vendors/TopVendorsTable'
import vendor_sales from './testData/vendor_sales.json'

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
      <Grid container spacing={2}>
        {
          data.map((item) => (
            <Grid key={item.id} item sm={12} md={3} lg={3} xl={3} xs={12}>
              <TopCard title={item.name} amount={item.amount} />
            </Grid>
          ))
        }
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item sm={12} xs={12} md={6}>
          <FinancialAreaChart />
        </Grid>
        <Grid item sm={12} xs={12} md={6}>
          <TopVendorsTable vendor_sales={vendor_sales} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default VendorAdminScreen