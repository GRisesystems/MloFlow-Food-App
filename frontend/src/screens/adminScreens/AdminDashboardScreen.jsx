import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TopProductSalesTable from '../../components/adminComponents/dashboard/TopProductSalesTable'
import ItemCard from '../../components/adminComponents/dashboard/ItemCard'
import RevenueInsightsLineGraph from '../../components/adminComponents/dashboard/RevenueInsightsLineGraph'
import revenue_insights_data from './testData/revenue_insights.json'



const AdminDashboardScreen = () => {
  const data = [
    { name: "Total chefs", total: 25 },
    { name: "Total vendors", total: 50 },
    { name: "Total customers", total: 1000 },
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
          <TopProductSalesTable />
        </Grid>
        <Grid item sm={12} xs={12} md={6}>
          <RevenueInsightsLineGraph revenue_insights_data={revenue_insights_data} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default AdminDashboardScreen