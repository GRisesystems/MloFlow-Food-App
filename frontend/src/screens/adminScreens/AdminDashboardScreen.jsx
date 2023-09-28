import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import FinancialAreaChart from '../../components/adminComponents/dashboard/FinancialAreaChart'
import TopProductSalesTable from '../../components/adminComponents/dashboard/TopProductSalesTable'
import ItemCard from '../../components/adminComponents/dashboard/ItemCard'


const AdminDashboardScreen = () => {
  const data = [
    { name: "Chefs", total: 25 },
    { name: "Vendors", total: 50 },
    { name: "Registered users", total: 1000 },
    { name: "Total income", total: 'KES 100,000' },
  ];
  return (
    <Box>
      <Grid container spacing={2}>
        {
          data.map((item) => (
            <Grid key={item.name} item sm={12} xs={12} md={3}>
              <ItemCard name={item.name} total={item.total} />
            </Grid>
          ))
        }
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item sm={12} xs={12} md={6}>
          <FinancialAreaChart />
        </Grid>
        <Grid item sm={12} xs={12} md={6}>
          <TopProductSalesTable />
        </Grid>
      </Grid>
    </Box>
  )
}

export default AdminDashboardScreen