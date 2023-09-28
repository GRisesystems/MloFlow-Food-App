import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const ItemCard = ({ name, total }) => {
    return (
        <Card>
            <CardHeader
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                        {name}
                    </Typography>
                }

            />
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>           
                <Typography gutterBottom variant="h5" component="div">
                    {total}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ItemCard