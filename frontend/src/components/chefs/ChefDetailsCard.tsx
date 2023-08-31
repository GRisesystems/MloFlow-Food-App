import { Card } from "@mui/material"
import chef from './chef.jpeg'

const ChefDetailsCard = () => {
    return (
        <Card elevation={0}>
            <img src={chef} alt="Chef" style={{ width:'100%' }} />
        </Card>
    )
}

export default ChefDetailsCard