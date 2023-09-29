import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'


const CustomerTopCard = ({ amount }) => {
    return (
        <Card>
            <CardHeader
                title={
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                        Total customers
                    </Typography>
                }

            />
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {amount.toLocaleString()}
                </Typography>
            </CardContent>
        </Card >
    )
}

export default CustomerTopCard