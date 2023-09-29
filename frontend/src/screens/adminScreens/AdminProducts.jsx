import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TopCard from '../../components/adminComponents/products/TopCard'
import ProductTable from '../../components/adminComponents/products/ProductTable'
import product_data_json from './testData/product.json'

const AdminProducts = () => {
    const product_data = [
        {
            id: 1,
            title: 'categories',
            amount: 3,
        },
        {
            id: 2,
            title: 'Products',
            amount: 400,
        },
    ]
    return (
        <Box>
            <Grid container spacing={2}>
                {
                    product_data.map((product) => (
                        <Grid key={product.id} item sm={12} md={3} xs={12}>
                            <TopCard title={product.title} amount={product.amount} />
                        </Grid>
                    ))
                }
                <Grid item sm={12} md={6} xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Button
                            variant='contained'
                            color='success'
                            sx={{
                                textTransform: 'none'
                            }}
                        >
                            Add Category
                        </Button>
                        <Button
                            variant='contained'
                            color='primary'
                            sx={{
                                textTransform: 'none',
                                ml: 1
                            }}
                        >
                            Add Product
                        </Button>

                    </Box>
                </Grid>
            </Grid>
            <ProductTable product_data={product_data_json} />
        </Box>
    )
}

export default AdminProducts