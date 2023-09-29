import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import TopCard from '../../components/adminComponents/products/TopCard'
import ProductTable from '../../components/adminComponents/products/ProductTable'
import AddCategoryForm from '../../components/adminComponents/products/AddCategoryForm';
import product_data_json from './testData/product.json'
import AddProductForm from '../../components/adminComponents/products/AddProductForm';


const AdminProducts = () => {
    const [open, setOpen] = useState(false)
    const [openProductDialog, setOpenProductDialog] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleProductOpen = () => setOpenProductDialog(true)
    const handleProductClose = () => setOpenProductDialog(false)


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
                            onClick={handleOpen}
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
                            onClick={handleProductOpen}
                        >
                            Add product
                        </Button>

                    </Box>
                    {/* Add Category Modal */}
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        maxWidth='xs'
                        fullWidth
                        sx={{ borderRadius: 8 }}
                    >
                        <DialogTitle >
                            <Typography
                                variant="h6"
                                sx={{ textAlign: 'center', fontWeight: 'bold' }}
                            >
                                Create Category
                            </Typography>
                        </DialogTitle>
                        <AddCategoryForm onClose={handleClose} />
                    </Dialog>


                    {/* Add product modal */}
                    <Dialog
                        open={openProductDialog}
                        onClose={handleProductClose}
                        maxWidth='sm'
                        fullWidth
                        sx={{ borderRadius: 8 }}
                    >

                        <DialogTitle >
                            <Typography
                                variant="h6"
                                sx={{ textAlign: 'center', fontWeight: 'bold' }}
                            >
                                Add Product
                            </Typography>
                        </DialogTitle>
                        <AddProductForm onClose={handleProductClose}/>
                    </Dialog>
                </Grid>
            </Grid>
            <ProductTable product_data={product_data_json} />
        </Box>
    )
}

export default AdminProducts